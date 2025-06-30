import React, { useState } from "react";
// function Counter() {
//   const [count, setCount] = useState(0);

//   function increment() {
//     setCount(prevCount => prevCount + 1); // Previous state ka use
//   }

//   return (
//     <div className="ml-3 mt-3">
//       <h1>Count: {count}</h1>
//       <button onClick={()=> setCount( prev => prev+1)} className="px-2 py-1 bg-blue-600 text-xs font-semibold text-zinc-100 rounded mt-3">
//         Increment
//     </button>
//     </div>
//   );
// }

// 🔥 Mastering useState() Hook - part 1

// function Counter() {
//     const [val, setVal] = useState({name: "Tufail", married: false })

//     return(
//         <>
//         <div className="mt-3 ml-3">
//             <h1>Name: {val.name}</h1>
//             <h2>Married: {val.married.toString()}</h2>
//             <button onClick={()=> setVal({...val, married: !val.married }) }
//             className={`px-2 py-1 ${val.married? "bg-blue-600": "bg-red-600"}
//             text-xs font-semibold text-zinc-100 rounded mt-3`}>
//                 Change Status
//             </button>
//         </div>
//         </>

//     );
// }

// part -2
// function Counter() {
//     const [val,  setVal] = useState({name: "tufail", age: 24})
//      return(
//         <div className="p-5">
//             <h1>User Info:</h1>
//             <h2>Name: {val.name}</h2>
//             <h2>Age: {val.age}</h2>
//             <button onClick={()=>{
//                 setVal({...val, gender: "male"});
//                 console.log(val)
//             }
//             } className="px-2 py-1 bg-blue-600 text-xs font-semibold text-zinc-100 rounded mt-3">
//              Add Gender
//             </button>
//         </div>
//      );
// }

// part-3 14:57
// function Counter() {
//     const [val, setVal] = useState([1,2,3,4,5,6]);
//     return(
//         <div className="p-5">
//             {val.map(item => <h1>{item}</h1>)}
//             <button onClick={()=> setVal(() =>{
//                 return val.filter((ele,index) => index != val.length-1)
//             }) }
//             className='px-2 py-1 bg-red-600 text-xs font-semibold text-zinc-100 rounded mt-3'>
//                      Delete
//             </button>
//             <h1></h1>
//         </div>
//     );
// }

// part -4 24:39
// function Counter() {
//     const [val, setVal] = useState([1,2,3,4,5,6]);
//     return(
//         <div className="p-5">
//             {val.map(item => <h1>{item}</h1>)}
//             <button onClick={()=>{
//                 setVal( ()=> val.filter( ele => ele % 2 != 0))
//             }}
//             className='px-2 py-1 bg-red-600 text-xs font-semibold text-zinc-100 rounded mt-3'>
//                      Delete
//             </button>
//             <h1></h1>
//         </div>
//     );
// }

// 🎯 useState() with Arrays Addition 29:43
// function Counter() {
//     const [val, setVal] = useState([1,2,3,4,5,6]);
//     return(
//         <div className="p-5">
//             {val.map(item => <h1>{item}</h1>)}
//             <button onClick={()=>{
//                 setVal([...val, val[val.length-1]+1 ])
//             }}
//             className='px-2 py-1 bg-red-600 text-xs font-semibold text-zinc-100 rounded mt-3'>
//                      Add next no
//             </button>
//             <h1></h1>
//         </div>
//     );
// }
// 🎯 useState() with Arrays Addition 2 31:53
function Counter() {
  const [val, setVal] = useState([{name: "rahul",age: 24}, {name: "aman",age: 20},{name: "Piyush",age: 27}]);
  return (
    <div className="p-5">
      {val.map((item) => (
        <>
          <h1>{item.name}</h1>
          <h2>{item.age}</h2>
        </>
      ))}
      <button
        onClick={() => {
          setVal(() =>
            val.map((ele) =>
              ele.name === "aman" ? { name: "aman", age: ele.age + 1 } : ele
            )
          );
        }}
        className="px-2 py-1 bg-red-600 text-xs font-semibold text-zinc-100 rounded mt-3"
      >
        Inc Aman Age
      </button>
    </div>
  );
}
export default Counter;


