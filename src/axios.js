import axios from 'axios';

const BASEURL = 'http://localhost:3001/api';

export const axiosHandler = (method, endPoint, data) => {
  axios({
    method,
    url: `${BASEURL}${endPoint}`,
    data
  }).then(/* res => console.log(res.data) */);
};
