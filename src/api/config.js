import { apiKEY, apiURL } from './index';


const getDataByHeadline = async (source) => {
  const response = await fetch(
    `${apiURL}top-headlines?sources=${source}`,
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
  getDataByHeadline,
  getSources,
};
