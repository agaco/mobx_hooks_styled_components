import { apiKEY, apiURL } from './index';


const fetchData = async () => {
  const response = await fetch(
    `${apiURL}top-headlines?sources=bbc-news`,
    {
      headers: { 'X-Api-Key': apiKEY },
    },
  );

  return response;
};

const getSources = async () => {
  const response = await fetch(
    `${apiURL}sources`,
    {
      headers: { 'X-Api-Key': apiKEY },
    },
  );

  return response;
};


export {
  fetchData,
  getSources,
};
