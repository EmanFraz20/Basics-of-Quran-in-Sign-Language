import React from 'react'

function Cards({item}) {
  return (
    <>
    <div className='mt-2 my-3 p-1'>
<div className="card bg-base-100 w-92 shadow-xl gradient-border ">
  <figure className='flex justify-center items-center bg-slate-50'>
    <img className='object-contain h-48 w-96 '
      src={item.image}
      alt="Hand Sign" />
  </figure>
  <div className="card-body">
    <div className=" card-actions justify-center">
    <div className="badge px-5 py-4 border-[0px] text-2xl text-center p-4 font-bold bg-clip-text ">{item.name}</div>
    </div>
  </div>
</div>
</div>
</>
 )
}

export default Cards;