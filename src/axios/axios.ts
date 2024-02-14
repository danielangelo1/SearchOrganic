import axios from 'axios';

axios.defaults.headers.post['Content-Type'] =
  'application/x-www-form-urlencoded';

export const login = axios.create({
  baseURL:
    'http://vemser-dbc.dbccompany.com.br:39000/deyvidlucas-dev/deploy_searchorganic',
});
