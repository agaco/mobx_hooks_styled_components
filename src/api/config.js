import { apiKEY, apiURL } from './index';


const fetchData = async () => {
  const response = await fetch(`${apiURL}sources=bbc-news&apiKey=${apiKEY}`);

  return response;
};

export {
  fetchData,
};
