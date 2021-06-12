require('dotenv').config();
var FormData = require('form-data');
const {
  existsSync
} = require('fs');
const {
  readdir,
  readFile
} = require('fs/promises');
const { join } = require('path');
const { from, forkJoin } = require('rxjs');
const { map, switchMap, concatMap } = require('rxjs/operators');
const {v4} = require('uuid');
const fetch = require("node-fetch");

// eslint-disable-next-line no-extend-native
Object.defineProperty(Array.prototype, 'chunk_inefficient', {
  value: function(chunkSize) {
    var array = this;
    return [].concat.apply([],
      array.map(function(elem, i) {
        return i % chunkSize ? [] : [array.slice(i, i + chunkSize)];
      })
    );
  }
});


let amt;
let progress = 0;
const token = process.env.COCKPIT_API_KEY;

if (!token) {
  console.error('Please add your token to .env file from http://173.249.12.47:8080/restadmin/index');
  process.exit(1);
}
const folderId= '60c4db7be789842acc20e201'; // Ghibli gifs!

const [,,sourceUrl] = process.argv;


if (!existsSync(sourceUrl)) {
  console.error(`
Error!
  
Could not find folder ${sourceUrl}`);
  process.exit(1);
}

console.log(`
--------------------------------------------
--------------- Welcome --------------------
--------------------------------------------


API key: ${token}
Folder ID: ${folderId}


Beginning loading of images.
`)



const getFileFuffers = () => from(readdir(sourceUrl)).pipe(
  map(files => files.filter(f => f.endsWith('.gif'))),
  map((files) => files.map((file) => readFile(join(sourceUrl, file)))),
  switchMap((files) => forkJoin(files)),
);


const getUploadFn = (buffers) => {
  var formdata = new FormData();

  buffers.forEach(buffer => formdata.append('files[]', buffer, `${v4()}.gif`))
  formdata.append("meta[folder]", folderId)

  var requestOptions = {
    method: 'POST',
    body: formdata,
    redirect: 'follow'
  };

  return from(
    fetch(`http://173.249.12.47:8080/api/cockpit/addAssets?token=${token}`, requestOptions)
      .then(response => response.text())
      .then(result => {
        progress += buffers.length;
        console.log(`${progress}/${amt} uploaded!`)
      })
      .catch(error => console.log('error', error))
  )
}



getFileFuffers().pipe(
  switchMap((buffers) => {
    const chunked = buffers.chunk_inefficient(20);
    amt = buffers.length;

    console.log(`
--------------------------------------------
----------- Upload starting ----------------
--------------------------------------------


Beginning upload of ${amt} images.
    
    
    `);


    return from(chunked).pipe(
      concatMap((chunk) => getUploadFn(chunk))
    )
  })
).subscribe()