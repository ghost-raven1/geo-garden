import Strapi from 'strapi-sdk-javascript/build/main';

const apiUrl = process.env.API_URL || 'https://geo-garden-backend.herokuapp.com';
const strapi = new Strapi(apiUrl);

export default strapi;
export { apiUrl };
