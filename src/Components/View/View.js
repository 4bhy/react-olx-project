import React, {useEffect, useState, useContext}from 'react';
import { FirebaseContext } from '../../store/Context';
import { PostContext } from '../../store/PostContext';
import './View.css';
function View() {
  const [userDetails, setuserDetails]= useState()
  const {postDetails}= useContext(PostContext)
  const {firebase}= useContext(FirebaseContext)
//   useEffect(()=>{
//     console.log(userId, "11");
//     const {userId}= postDetails
// firebase.firestore().collection('users').where('id', '==', userId).get().then((res)=>{
//   res.forEach(doc=>{
//     console.log('data',doc.data);
//     setuserDetails(doc.data())
//   })
// }).catch(error=>{
//   console.log(error.message);
// })
// }, [])
  return (
     <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src="../../../Images/R15V3.jpg"
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; 250000 </p>
          <span>YAMAHA R15V3</span>
          <p>Two Wheeler</p>
          <span>Tue May 04 2021</span>
        </div>
    {userDetails &&    <div className="contactDetails">
          <p>Seller details</p>
          <p>No name</p>
          <p>1234567890</p>
        </div>}
      </div>
    </div>
  );
}
export default View;
