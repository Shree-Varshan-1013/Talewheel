import React from 'react'

const GradientBtn = ({title}) => {
  return (
    <button className={`inline-block bg-gradient-to-r from-thBlue to-thYellow py-2 px-6 text-black rounded-lg duration-150 hover:scale-110`}>{title}</button>
  )
}

export default GradientBtn