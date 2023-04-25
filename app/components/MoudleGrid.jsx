import React from 'react'

function MoudleGrid(props) {
    return (
        <div className='relative py-20 text-center justify-center'>
            <div className=' px-5 py-5 border items-center rounded-md text-black shadow-md w-200 hover:bg-blue-300 shadow-blue-700
            hover:text-slate-950 '>
                <img src={props.img} alt="" />
                <h1 className='font-bold text-2xl text-left '>{props.name}</h1>
                <p>{props.topic}</p>
            </div>
        </div>
    )
}

export default MoudleGrid
