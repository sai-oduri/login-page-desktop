import React from 'react'

const Empty = ({ typee }) => {
    return (
        <div>
            <label className='font-light text-sm' htmlFor={typee}>{typee}</label><br />
            <input className='font-light text-sm w-[200px] md:w-[325px] p-2 mt-1 mb-2 border border-slate rounded-sm outline-none' type="text" id={typee} />
        </div>
    )
}

export default Empty