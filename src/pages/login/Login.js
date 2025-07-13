import { useState } from "react"
import MyNavbar from "../../components/myNavbar/MyNavbar"
import { useNavigate } from "react-router-dom"
import Swal from "sweetalert2"
import './Login.css'
function Login(){
     let [username ,setusername]=useState()
     let [password, setpassword]=useState()
      let navigate=useNavigate()
     const sendHandler=()=>{
     if(username == 'admin' && password == '12345' ){
      document.cookie = "username=admin; expires=Thu, 01 Jan 2027 00:00:00 UTC; path=/;";
      navigate('/panel')
    }else{
      Swal.fire({
        title: 'Error!',
        text: 'یوزرنیم یا پسورد اشتباه است',
        icon: 'error',
        confirmButtonText: 'بستن'
      })
    }
  }
    return(

    <>
    <MyNavbar/>
    <div className="parent">
        <div className="form">
    <input placeholder="username" type="text" onChange={(e)=>setusername(e.target.value)}/>
    <input placeholder="password" type="password" onChange={(e)=>setpassword(e.target.value)}/>
    <button type="button" onClick={sendHandler} >click</button>
    </div>
    </div>
    </>
    )
}
export default Login