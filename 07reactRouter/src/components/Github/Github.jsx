import React, { useState } from "react";
import { useEffect } from "react";
import { useLoaderData } from "react-router";

const Github = () => {
    const data = useLoaderData();
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetch("https://api.github.com/users/Bhisvesh")
//       .then((res) => res.json())
//       .then((info) => {
//         console.log(info);
//         setData(info);
//       });
//   }, []);

  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl ">
      Github followers: {data.followers}
      <img src={data.avatar_url} alt="Profile Picture" width="300" />
      <h3>Name: {data.name}</h3>
      <p>Followers: {data.followers}</p>
      <p>Following: {data.following}</p>
      <p>Bio: {data.bio}</p>
    </div>
  );
};

export default Github;
