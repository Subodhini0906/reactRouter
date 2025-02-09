// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {
    const data=useLoaderData()
 /*   const [data,setData]=useState([]);
    useEffect(()=>{
        fetch('https://api.github.com/users/Subodhini0906')
        .then(response=>response.json)
        .then(data=>{
            console.log(data);
            setData(data)
        })

    },[])*/
  return (
    <div className='text-center m-4 bg-slate-700 text-white p-6 text-3xl'>Github followers: {data.followers}
    <img src={data.avatar_url} alt=''></img>
    </div>
  )
}

export default Github

// eslint-disable-next-line react-refresh/only-export-components
export const githubInfo=async()=>{
    const response=await fetch('https://api.github.com/users/Subodhini0906')
    return response.json()
}