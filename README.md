https://studioghibli.jp/


# studioghibli


yarn install

yarn start


# Image upload to CMS

- Currently there is a content management system hosted at http://173.249.12.47:8080;

- Before you start you will need to have an account there (talk to 0xAlice) and an API key which can be found at http://173.249.12.47:8080/restadmin/index

- Create a `.env` file and add `REACT_APP_COCKPIT_API_KEY=<your key>`

- Make sure that your images are in a flat folder and then get its relative (UNIX) path

- Run the script with  node ./bin/post-images.js /path/to/images

- NodeJS will start uploading images in chucks of 20 and they should start appearing at http://173.249.12.47:8080/assetsmanager

# pentacle-ui


contributors please use standard html5 vanilla markup


pentacle ui library currently being set up

https://ui.pentacle.ai

don't create any custom or inline css

thanks for your patience while we get this organised
