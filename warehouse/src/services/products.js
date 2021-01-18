import axios from 'axios'

const baseUrlProducts = '/api/products/'
const baseUrlAvailability = '/api/availability/'


export const getByCategory = async (category) => {
  const url = baseUrlProducts.concat(category)

  console.log('Url is ', url)

  const response = await axios.get(url)
  return response.data
}

export const getByManufacturer = async (manufacturer) => {
  const url = baseUrlAvailability + manufacturer

  console.log('Url is ', url)

  const response = await axios.get(url)
  return response.data
}