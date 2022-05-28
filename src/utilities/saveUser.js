import axios from 'axios';
    const saveUser = async(name,email)=>{
        await axios.put('https://limitless-earth-93689.herokuapp.com/users', {name:name,email: email})
    }
export default saveUser;