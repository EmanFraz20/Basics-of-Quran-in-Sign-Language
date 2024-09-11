/*import React from 'react'

function Cards({item}) {
  return (
    <>
       <div className='my-3 mt-1 p-1'>
    <div className="card glass w-92">
  <figure>
    <img
      src={item.image} alt="car!" />
  </figure>
  <div className="card-body">
    <div className="card-actions justify-between">
    <div className="badge badge-outline px-5 py-4 rounded-btn border-[2px]">{item.name2}</div>
    <div className="badge badge-neutral px-5 py-3 rounded-btn border-[8px]">{item.name1}</div>
    </div>
  </div>
</div>
    </div>
    </>
  )
}

export default Cards

<div className="badge badge-outline px-5 py-4 rounded-btn border-[2px]">{item.name2}</div>
    <div className="badge badge-neutral px-5 py-3 rounded-btn border-[8px]">{item.name1}</div>


<div className="badge badge-primary badge-outline px-5 py-3 rounded-btn ">{item.name2}</div>
    <div className="badge badge-primary badge-outline px-5 py-3 rounded-btn border-[2px]">{item.name1}</div>*/

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