import axios from 'axios';

export default axios.create({
    baseURL: 'https://react-quiz-6a4c5.firebaseio.com/'
})