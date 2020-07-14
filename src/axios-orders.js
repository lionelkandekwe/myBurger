import axios from 'axios'
const instance=axios.create({
    baseURL:'https://react-myburger-fd264.firebaseio.com/'
})
export default instance
