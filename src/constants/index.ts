import axios from 'axios';

const userData = [
  {
    name: 'Jan',
    'Active User': 4000,
  },
  {
    name: 'Feb',
    'Active User': 3000,
  },
  {
    name: 'Mar',
    'Active User': 5000,
  },
  {
    name: 'Apr',
    'Active User': 4000,
  },
  {
    name: 'May',
    'Active User': 3000,
  },
  {
    name: 'Jun',
    'Active User': 2000,
  },
  {
    name: 'Jul',
    'Active User': 4000,
  },
  {
    name: 'Agu',
    'Active User': 3000,
  },
  {
    name: 'Sep',
    'Active User': 4000,
  },
  {
    name: 'Oct',
    'Active User': 1000,
  },
  {
    name: 'Nov',
    'Active User': 4000,
  },
  {
    name: 'Dec',
    'Active User': 3000,
  },
];

const persistRoot = localStorage.getItem('persist:root');
let tokenString: string;
const userString = JSON.parse(persistRoot as string);
const user = JSON.parse(userString);
tokenString = user.accessToken;
const userRequest = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: { token: `Bearer ${tokenString}` },
});

export { userData, userRequest };
