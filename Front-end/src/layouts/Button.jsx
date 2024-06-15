import React from 'react'

const Button = (props) => {
  return (
    <div>
        <button className= "px-6 py-2 border-white text-white bg-purple-500 hover:bg-purple-600 transition-all rounded-sm">
            {props.title}
        </button>
      
    </div>
  )
}

export default Button
