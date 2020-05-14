import axios from 'axios';

export default axios.create({
  baseURL: 'https://form.v2.support.garena.co.id/_/items/'
});