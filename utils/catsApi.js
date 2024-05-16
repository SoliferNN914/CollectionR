import axios from 'axios'

const catsApi = axios.create({
    baseURL: 'https://api.thecatapi.com/v1/images/search?limit=10'
})

export const getCats = () => {
    return catsApi.get().then((res) => {
      return res.data;
    });
}