import React, { useEffect, useState } from 'react';
import Layout from '../components/layout';
import useIntersectionObserver from '@react-hook/intersection-observer';
require('dotenv').config();

const baseUrl = 'https://b0910e2e8a31.ngrok.io';
const Img = ({ path, thumb }) => {
  const [ref, setRef] = useState();
  const { isIntersecting } = useIntersectionObserver(ref);
  return (
    <>
      <img
        key={path}
        ref={setRef}
        src={isIntersecting ? path : thumb}
        alt="Studio Ghibli Animation"
        loading="lazy"
      />
    </>
  );
};

export const Main = () => {
  const [images, setImages] = useState([]);
  const token = process.env.REACT_APP_COCKPIT_API_KEY;

  useEffect(() => {
    fetch(
      `${baseUrl}/api/cockpit/assets?token=${token}`,
      {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          filter: { folder: '60c4db7be789842acc20e201' },
        }),
      }
    )
      .then((assets) => assets.json())
      .then(async (assets) => {
        const img = await Promise.all(
          assets.assets
            .map(({ path, _id }) => ({ path, _id }))
            .map(async ({ path, _id }) => {
              const params = new URLSearchParams();
              params.append('token', token);
              params.append('src', _id);
              params.append('w', '200');
              params.append('m', 'bestFit');

              return await fetch(
                `${baseUrl}/api/cockpit/image?${params.toString()}`
              )
                .then((res) => res.text())
                .then((res) => ({
                  path: `${baseUrl}/storage/uploads${path}`,
                  thumb: res,
                }));
            })
        );

        setImages(img);
      });
  }, [token]);

  return (
    <Layout>
      <section>
        {images.map(({ path, thumb }) => (
          <Img path={path} thumb={thumb} />
        ))}
      </section>
    </Layout>
  );
};
