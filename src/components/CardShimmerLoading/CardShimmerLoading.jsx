import React from 'react'
import './CardShimmerLoading.css'
const CardShimmerLoading = () => {
  return (
    <div className="CardWrapper ">
    <div className="ImageWrapper skeleton-loader ">
    </div>
    <div className="InfoWrapper ">
      <div className="skeleton-title skeleton-loader "></div>
      <div className="skeleton-price skeleton-loader "></div>
    </div>
  </div>
  )
}

export default CardShimmerLoading