import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useAsyncError } from 'react-router-dom';

function AddCourse() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(0);
    const [imgUrl, setImgUrl] = useState("");
    const [successMessage, setSuccessMessage] = useState("")
    const [failureMessage, setFailureMessage] = useState("")
    const [userEmail, setUserEmail] = useState("")
    const [adminId, setAdminId] = useState("")

    useEffect(()=> {
        setTimeout(() => {
            setSuccessMessage("")
        }, 3000);
    }, [successMessage])

    useEffect(() => {
        const token = localStorage.getItem("token")
        axios.get("http://localhost:3000/admin/me", {headers: {authorization:"Bearer " + token}})
        .then((data)=>{
         setUserEmail(data.data.username);
         setAdminId(data.data.adminId);
    })
    },[])

    function handleTitle(e) {
        setTitle(e.target.value)
    }
    
    function handleDescription(e) {
        setDescription(e.target.value)
    }

    function handlePrice(e){
        setPrice(e.target.value)
    }

    function handleImgUrl(e){
        setImgUrl(e.target.value)
    }
    
   async function handleAddCourse(e){
    e.preventDefault();

        const course = {
            title: title,
            description: description,
            price: price,
            imgUrl: imgUrl,
            published: true
        }

        const token = localStorage.getItem("token")
        await axios.post("http://localhost:3000/admin/courses", {
            title: title,
            description: description,
            price: price,
            imgUrl: imgUrl,
            published: true,
            createdBy: adminId
        }
        
        , {headers: {authorization: "Bearer "+ token}})
        .then((data) =>{
            setSuccessMessage("Course created Successfully ✅");
        }).catch((err) => {
            setFailureMessage("Something has failed, Try Again");
        })

    }

    if(userEmail){
        return (
            <>
                <section className="body-font relative bg-black-900 text-gray-400">
                <div className="container mx-auto px-5 py-24">
                  <div className="mx-auto md:w-2/3 lg:w-1/2 flex flex-col justify-center gap-4">
                    <h1 className="title-font mb-4 text-2xl font-medium text-white sm:text-3xl">Add Your Course</h1>
                    <div className="-m-2 flex flex-col gap-y-4">
                      {/* Form */}
                      <div className="flex flex-col md:flex-row gap-4">
                        <div className="w-full md:w-1/2 p-2">
                          <div className="relative">
                            <input
                              onChange={handleTitle} 
                              type="text"
                              id="title"
                              name="title"
                              className="peer w-full rounded border border-gray-700 bg-gray-800 bg-opacity-40 py-1 px-3 text-base leading-8 text-gray-100 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900"
                              placeholder="Title"
                            />
                            <label
                              htmlFor="title"
                              className="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-indigo-500 transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:bg-gray-900 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-indigo-500"
                            >
                              Title
                            </label>
                          </div>
                        </div>
        
                        <div className="w-full md:w-1/2 p-2">
                          <div className="relative">
                            <input
                              onChange={handleDescription} 
                              type="text"
                              id="description"
                              name="description"
                              className="peer w-full rounded border border-gray-700 bg-gray-800 bg-opacity-40 py-1 px-3 text-base leading-8 text-gray-100 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900"
                              placeholder="Description"
                            />
                            <label
                              htmlFor="description"
                              className="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-indigo-500 transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:bg-gray-900 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-indigo-500"
                            >
                              Description
                            </label>
                          </div>
                        </div>
                      </div>
        
                      <div className="flex flex-col md:flex-row gap-4">
                        <div className="w-full md:w-1/2 p-2">
                          <div className="relative">
                            <input
                              onChange={handlePrice}
                              type="text"
                              id="price"
                              name="price"
                              className="peer w-full rounded border border-gray-700 bg-gray-800 bg-opacity-40 py-1 px-3 text-base leading-8 text-gray-100 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900"
                              placeholder="Price"
                            />
                            <label
                              htmlFor="price"
                              className="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-indigo-500 transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:bg-gray-900 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-indigo-500"
                            >
                              Price
                            </label>
                          </div>
                        </div>
        
                        <div className="w-full md:w-1/2 p-2">
                          <div className="relative">
                            <input
                              onChange={handleImgUrl}
                              type="text"
                              id="imgUrl"
                              name="imgUrl"
                              className="peer w-full rounded border border-gray-700 bg-gray-800 bg-opacity-40 py-1 px-3 text-base leading-8 text-gray-100 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900"
                              placeholder="Image URL"
                            />
                            <label
                              htmlFor="imgUrl"
                              className="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-indigo-500 transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:bg-gray-900 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-indigo-500"
                            >
                              Image URL
                            </label>
                          </div>
                        </div>
                      </div>
        
                      <div className="w-full p-2">
                        <button  onClick={handleAddCourse} className="mx-auto flex rounded border-0 bg-indigo-500 py-2 px-8 text-lg text-white hover:bg-indigo-600 focus:outline-none">
                          Add Course
                        </button>
                        
                    {successMessage && (
                        <p className="mt-4 text-green-500">{successMessage}</p>
                    )}
                    {failureMessage && (
                        <p className='mt-4 text-red-500'></p>
                    )}
        
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </>
          )
    }else{
        return (
            <>
                <h1 className='mt-17 text-white-500'>You have to login first</h1>
                <h1 className='mt-17 text-white-500'>You have to login first</h1>
                <h1 className='mt-17 text-white-500'>You have to login first</h1>
                <h1 className='mt-70 text-green-500'>You have to login first</h1>
            </>
        )
    }

  
}

export default AddCourse