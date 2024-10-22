import axios from 'axios';

import { baseURL } from '../utils/baseURL';

const axiosInstance = axios.create({ baseURL });

export default axiosInstance;
