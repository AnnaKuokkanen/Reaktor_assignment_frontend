import axios from 'axios';

const baseUrlProducts = 'http://localhost:3001/api/products/';
const baseUrlAvailability = 'http://localhost:3001/api/availability/';

export const getByCategory = async (category) => {
  const url = baseUrlProducts.concat(category);

  console.log('Url is ', url);

  const response = await axios.get(url);
  console.log('Response is ', response.data);
  return response.data;
}

export const getByManufacturer = async (manufacturer) => {
  const url = baseUrlAvailability + manufacturer;

  console.log('Url is ', url);

  const response = await axios.get(url);
  return response.data;
}