import {run} from '../../utils/httpClient';

export const getCateogies = async () => {
  const request = {
    method: 'GET',
    url: '/categories',
  };
  const response = await run(request);
  return response;
};
