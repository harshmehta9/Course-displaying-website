import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';

function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState('');
    const [successMessage, setSuccessMessage] = useState("")
    const [failureMessage, setfailureMessage] = useState("")
    const [userEmail, setUserEmail] = useState(null);


    

    //Check if use if logged in
    useEffect(() => {
        const token = localStorage.getItem("token")
        axios.get("http://localhost:3000/admin/me", {headers: {authorization:"Bearer " + token}})
        .then((data)=>{
          setUserEmail(data.data.username);
        })
      },[])

    function handleEmail(e) {
        setEmail(e.target.value);
        // console.log(e.target.value);
    }

    function handlePassword(e){
        setPassword(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault();

        axios.post("http://localhost:3000/admin/login", {username: email, password: password })
        .then((data)=>{
            // console.log(data.data)
            const token = data.data.token;
            localStorage.setItem("token", token);

            setSuccessMessage("You are Logged In successfully")
            window.location = '/'
        })
        .catch((error) => {
            if (error.response) {
                // The request was made and the server responded with a status code that falls out of the range of 2xx
                if (error.response.status === 403) {
                    setfailureMessage(error.response.data.message); // Display the error message sent by the server
                } else {
                    setfailureMessage("An unexpected error occurred. Please try again.");
                }
            } else if (error.request) {
                // The request was made but no response was received
                setfailureMessage("No response from server. Please check your network.");
            } else {
                // Something happened in setting up the request that triggered an Error
                setfailureMessage("Error: " + error.message);
            }
        });
    }

    const handleKeyDown = (e) => {
        if(e.key === 'Enter'){
            handleSubmit(e);
        }
    }

    if(userEmail){
        return(<>
        </>)
    }else{

        return (
            <>
        <div style={{
            display: 'flex',
            width: "100%",
            justifyContent:"center",
            alignItems:'center',
            height:"100vh"
        }}>
        <div className="block max-w-md p-16 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700" style={{
            width: "100%"
        }}>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Log In</h5>
        <div>
            <label for="small-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
            <input  onKeyDown={handleKeyDown} onChange={handleEmail} type="text" id="small-input" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
        </div>
        <div>
            <label for="small-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
            <input  onKeyDown={handleKeyDown} onChange={handlePassword} type="password" id="small-input" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
        </div>
        <br></br>
        <button onClick={handleSubmit} type="button" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" >Sign Up</button>
        {successMessage && (
            <p className="mt-4 text-green-500">{successMessage}🥳</p>
        )}
        {failureMessage && (
            <p className="mt-4 text-red-500">{failureMessage}❗️</p>
        )}
        </div>
        </div>
            </>
          )
    }

  
}

export default SignIn