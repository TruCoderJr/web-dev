import React, { use, useState } from "react";

// function Card() {
//   let products = [
//     {
//       img: "https://images.unsplash.com/photo-1461141346587-763ab02bced9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8",
//       name: "Smart Watch",
//       desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
//       inStock: true
//     },
//     {
//       img: "https://images.unsplash.com/photo-1557418776-16baa07f1368?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIyfHx8ZW58MHx8fHx8",
//       name: "Shoe",
//       desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
//       inStock: false
//     },
//     {
//       img: "https://images.unsplash.com/photo-1598662972299-5408ddb8a3dc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       name: "Facewash",
//       desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
//       inStock: true
//     },
//   ];

//   return (
//     <div className="w-full h-screen flex items-center justify-center gap-10 bg-zinc-200">
//       {products.map((obj, index) => (
//         <div
//           key={index}
//           className="w-52 bg-zinc-100 rounded-md overflow-hidden"
//         >
//           <div className="w-full h-32 bg-zinc-300">
//             <img className="w-full h-full object-cover" src={obj.img} alt="" />
//           </div>
//           <div className="w-full px-3 py-4">
//             <h2 className="font-semibold">{obj.name}</h2>
//             <p className="text-xs mt-5">{obj.desc}</p>
//               <button className={`px-4 py-1 ${obj.inStock? "bg-blue-600": "bg-red-600"} text-xs rounded text-zinc-100 mt-3`}>
//                 { obj.inStock ? "In stock": "Out stock"}
//               </button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// function Card() {
//   const data = [
//     {name:"Believer",
//       img:"https://images.unsplash.com/photo-1530419248307-be80b9468e77?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmVsaWV2ZXIlMjBzb25nfGVufDB8fDB8fHww"
//     },
//     {name:"Unstoppable",
//       img:"https://i.ytimg.com/vi/cxjvTXo9WWM/maxresdefault.jpg"
//     }
//   ];

//   const downloading = () => alert("Downloaded Sucessfully");

//   return (
//     <>
//       <div className="w-full h-screen bg-zinc-200 flex flex-col gap-10 justify-center items-center">
//         {data.map((obj) =>(
//           <div className="w-60 px-3 py-2 bg-zinc-100 rounded-md">
//           <h3 className="font-semibold text-xl">{obj.name}</h3>
//           <div className="w-full h-32 bg-zinc-300">
//             <img className="w-full h-full object-cover rounded-md" src={obj.img}
//               alt={obj.name}
//             />
//           </div>
//           {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est aut distinctio repellat explicabo numquam et!</p> */}
//           <button onClick={downloading} className="px-2 py-1 bg-blue-600 text-xs font-semibold text-zinc-100 rounded mt-3">
//             Download 
//           </button>
//         </div>
//         ))}
//       </div>
//     </>
//   );
// }


// Section 5

function Card() {
  const [count, setCount] = useState(0);
  return(
    <>
    <div>
      <h1>{count}</h1>
      <button onClick={() => {setCount(count+1)}} className="px-2 py-1 bg-blue-600 text-xs font-semibold text-zinc-100 rounded mt-3">
            Download 
      </button>
    </div>
    </>
  );
}
export default Card;
