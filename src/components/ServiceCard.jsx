import React from 'react'

const ServiceCard = ({data}) => {
  return (
    <div>
      <h1>{data.title}</h1>
      <h3>{data.discription}</h3>


    </div>
  )
}

export default ServiceCard
