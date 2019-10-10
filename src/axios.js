import axios from 'axios';

const BASEURL = 'http://165.22.85.125:3001/api';

export const axiosHandler = (method, endPoint, data) => {
  axios({
    method,
    url: `${BASEURL}${endPoint}`,
    data
  }).then(/* res => console.log(res.data) */);
};
