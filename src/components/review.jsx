import React from 'react'
import '../style/review.css';

function Review(props){
  return(
    <div className='container_review-img'>
      <img className='img_review' src={require(`../img/img_${props.imagen}.jpg`)} alt={`Foto ${props.nombre}`}/>
      <div className='container_review_text'>
        <p className='tittle_review'>{props.nombre} en {props.pais}</p>
        <p className='job_review'>{props.trabajo} en {props.empresa}</p>
        <p className='review_review'>{props.review}</p>
      </div>
    </div>
  );
}

export default Review;

