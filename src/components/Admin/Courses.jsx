import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

function Courses() {
    const navigate = useNavigate();
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem("token");
        axios.get("http://localhost:3000/admin/courses/", {headers: {authorization:"Bearer " + token}})
        .then((data)=> {
            setCourses(data.data.allCourses);
        })
    },[])

    function handleEdit(courseId) {
        navigate(`/courses/${courseId}`);
    }
  return (
    <>
    <div className="bg-black-900 py-16">
        <h2 className="text-3xl font-bold text-white mt-12 mb-12 text-center">Your Courses 📹</h2>
      <div className="container mx-auto px-4 ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Array.isArray(courses) && courses.length > 0 ? (
            courses.map((course) => (
            <div key={course} className="dark:bg-gray-800 dark:hover:bg-gray-700 rounded-lg shadow-lg p-8 ">
              <div className="relative overflow-hidden">
                <img
                  className="object-cover w-full h-full"
                  src={course.imgUrl}
                  alt="Product"
                />
              </div>
              <h3 className="text-xl font-bold text-white-900 mt-4 text-white">{course.title}</h3>
              <p className="text-gray-500 text-sm mt-2">
                {course.description}
              </p>
              <div className="flex items-center justify-between mt-4">
                <span className="text-white font-bold text-lg">₹{course.price}</span>
                <button className="bg-gray-900 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800" onClick={()=>{handleEdit(course._id)}}>
                  Edit
                </button>
              </div>
            </div>
          ))
          ) : (
            <p className='text-red-500 text-center '> No Courses Avaiable Try again </p>
          )}
        </div>
      </div>
    </div>
  </>
  )
}

export default Courses