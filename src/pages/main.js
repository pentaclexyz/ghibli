import React, { useCallback, useEffect, useState } from 'react';
import Layout from '../components/layout';
import useIntersectionObserver from '@react-hook/intersection-observer';
import { BottomScrollListener } from 'react-bottom-scroll-listener';

const pageSize = 15;

const baseUrl = 'https://b0910e2e8a31.ngrok.io';
const Img = ({ path, thumb }) => {
  const [ref, setRef] = useState();
  const { isIntersecting } = useIntersectionObserver(ref);
  return (
    <img
      key={path}
      ref={setRef}
      src={isIntersecting ? path : thumb}
      alt="Studio Ghibli Animation"
      loading="lazy"
    />
  );
};

export const Main = () => {
  const [currentImages, setCurrentImages] = useState([]);
  const [remainingImages, setRemainingImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const token = '7ae367e5d5044051ba2536f96e3a85';

  const mapAssets = ({ path, _id }) => ({ path, _id });

  const fetchThumb = useCallback(
    ({ params, path }) =>
      fetch(`${baseUrl}/api/cockpit/image?${params.toString()}`)
        .then((res) => res.text())
        .then((res) => ({
          path: `${baseUrl}/storage/uploads${path}`,
          thumb: res,
        })),
    []
  );

  const loadBatch = useCallback(
    (assets) => {
      return Promise.all(
        assets.map(mapAssets).map(async ({ path, _id }) => {
          const params = new URLSearchParams();
          params.append('token', token);
          params.append('src', _id);
          params.append('w', '200');
          params.append('m', 'bestFit');

          return await fetchThumb({ path, params });
        })
      );
    },
    [fetchThumb]
  );

  const fetchAssets = useCallback(
    () =>
      fetch(`${baseUrl}/api/cockpit/assets?token=${token}`, {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          filter: { folder: '60c4db7be789842acc20e201' },
        }),
      }).then((assets) => assets.json()),
    []
  );

  useEffect(() => {
    fetchAssets()
      .then(async ({ assets }) => {
        setLoading(true);
        const initalAssets = assets.slice(0, 50);
        const remainingAssets = assets.slice(50);
        setRemainingImages(remainingAssets);

        const batch = await loadBatch(initalAssets);
        setCurrentImages(batch);
        setLoading(false);
      })
      .catch((e) => alert(e));
  }, [loadBatch, fetchAssets]);

  const bottomScrollCallback = useCallback(async () => {
    const gonnaLoad = remainingImages.slice(0, pageSize);
    const remaining = remainingImages.slice(pageSize);
    if (remaining.length && !loading) {
      setLoading(true);
      const loaded = await loadBatch(gonnaLoad);
      const result = [];
      const map = new Map();
      for (const item of [...currentImages, ...loaded]) {
          if(!map.has(item.path)){
              map.set(item.path, true);
              result.push(item);
          }
      }
      setCurrentImages(result);
      setRemainingImages(remaining);
      setLoading(false);
    }
  },[loadBatch, currentImages, remainingImages, setLoading, loading]);

  return (
    <Layout>
      <BottomScrollListener offset={1500} onBottom={bottomScrollCallback}>
        <section style={{marginBottom: '5rem'}}>
          {currentImages.map(({ path, thumb }) => (
            <Img path={path} thumb={thumb} key={path} />
          ))}
        </section>
        {loading && <span>Loading...</span>}
      </BottomScrollListener>
    </Layout>
  );
};
