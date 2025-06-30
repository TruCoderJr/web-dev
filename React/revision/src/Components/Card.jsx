import React from "react";

function Card() {

  let products = [
    {
      img: "https://images.unsplash.com/photo-1461141346587-763ab02bced9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8",
      name: "Smart Watch",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      inStock: true
    },
    {
      img: "https://images.unsplash.com/photo-1557418776-16baa07f1368?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIyfHx8ZW58MHx8fHx8",
      name: "Shoe",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      inStock: false
    },
    {
      img: "https://images.unsplash.com/photo-1598662972299-5408ddb8a3dc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Facewash",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      inStock: true
    },
  ];

    return(
        <div className='w-full h-screen flex items-center justify-center gap-10 bg-zinc-200'>
            {products.map((ele, idx)=> (<div key={idx} className="w-52 bg-zinc-100 rounded-md overflow-hidden">
                <div className="w-52 h-32 bg-zinc-300">
                    <img className="w-full h-full object-cover" src={ele.img} alt="" />
                </div>

                <div className='w-full px-3 py-4'>
                    <h2 className='font-semibold'>{ele.name}</h2> 
                    <p className='text-xs mt-3'>{ele.desc}</p>
                    <button className={`px-4 py-1 ${ele.inStock? "bg-blue-600":"bg-red-600"}  text-xs rounded text-zinc-100 mt-3`}>{ele.inStock?`In Stock`:`Out Stock`}</button>
                </div>
            </div>))}
        </div>
    )
}

export default Card;