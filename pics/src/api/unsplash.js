import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 7f558adb729902a609fb6c7e1447a62a9ad9ade8b7c9e58b73a3c52769f33149'
      }
});