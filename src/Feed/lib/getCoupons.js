import {run} from '../../utils/httpClient';

export const getCoupons = async () => {
  const request = {
    method: 'GET',
    url: '/coupons',
  };
  const response = await run(request);
  return response;
};
