import axios from 'axios';
    const saveUser = async(name,email)=>{
        await axios.put('http://localhost:5000/users', {name:name,email: email})
    }
export default saveUser;