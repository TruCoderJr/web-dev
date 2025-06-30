import React from 'react'

function Button({data}) {
  return (
        <button className="inline-flex text-white bg-indigo-500 border-0 py-1 px-4 focus:outline-none hover:bg-indigo-600 rounded">{data}</button>
  )
}

export default Button