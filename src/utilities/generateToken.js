import axios from 'axios';

const generateToken = async (userEmail) => {
        const { data } = await axios.post('https://limitless-earth-93689.herokuapp.com/login', { email: userEmail });
        localStorage.setItem('accessToken', data);
        return data;
};

export default generateToken;