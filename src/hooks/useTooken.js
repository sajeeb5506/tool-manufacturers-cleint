import { useEffect, useState } from "react"

const useTooken = user =>{
    const [token,setToken] = useState('');
    useEffect(()=>{
console.log('use tookeb', user);
const email = user?.user?.email;
const currentUser = {email:email};

if(email){
fetch(`https://salty-tor-68806.herokuapp.com/user/${email}`,{
    method: 'PUT',
    headers :{
       'content-type':'application/json'
    },
    body:JSON.stringify(currentUser)
})
.then(res=>res.json())
.then(data=>{
    console.log('data inside use token',data);
    const accessToken = data.token;
    localStorage.setItem('accessToken',accessToken);
    setToken(accessToken);

})
}

    },[user]);
    return[token];

}
export default useTooken;