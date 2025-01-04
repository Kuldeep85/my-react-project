import React, { useEffect, useState  } from "react";
import { useLoaderData } from "react-router-dom";

export default function Github() {
  const data = useLoaderData()
  //   const [data, setData] = useState([])
  // useEffect(() => {
  //   fetch('https://api.github.com/users/hiteshchoudhary')
  //   .then(response => response.json())
  //   .then(data => {
  //       console.log(data);
  //       setData(data)
  //   })
  // }, [])
    return (
      <div className="bg-gray-500 text-white text-3xl p-4 text-center m-4">Github followers: {data.followers} 
      <img src={data.avatar_url} alt='Git picture' width={300}></img>
      </div>
    );
}

 export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/hiteshchoudhary')
  return response.json()
 }