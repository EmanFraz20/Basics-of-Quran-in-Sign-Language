import React from 'react'

const Button = (props) => {
  return (
    <div>
        <button className= "px-6 py-2 border-white text-white bg-[#156b9a9c] hover:bg-blue-400 transition-all rounded-sm">
            {props.title}
        </button>
      
    </div>
  )
}

export default Button
