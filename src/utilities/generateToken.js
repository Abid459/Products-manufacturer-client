import axios from 'axios';

const generateToken = async (userEmail) => {
        const { data } = await axios.post('http://localhost:5000/login', { email: userEmail });
        localStorage.setItem('accessToken', data);
        return data;
};

export default generateToken;