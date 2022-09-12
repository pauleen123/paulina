import React from 'react'
// import Comment from '../Comment/Comment'
import {useEffect, useState} from "react";


const Fundi = () => {
  const [Fundi, setFundi] = useState([])

    useEffect(()=>{
        fetch("https://localhost/9292/contracts")
        .then(res=>res.json())
        .then((data) =>
        setFundi(data)   
        )
    },[])
    console.log(Fundi)

    const allComments = Fundi.map((fundi)=>{
      return( <Comment  key={fundi.id}
        name={fundi.name}
        location ={fundi.location}
        body = {fundi.ratings.map(review => {
            return review.body     
        })}
         user = {restaurant.reviews.map(review => {
            return review.user.name

         })}

        />)
    })
    return(
    <>
    <div className="allCommnets">
    {allComments}
    </div>
    </>
    )
  



  
}

export default Restuarants