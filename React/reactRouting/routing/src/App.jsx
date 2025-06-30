
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>

        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
        <button className='px-2 py-1 bg-red-600 text-xs font-semibold text-zinc-100 rounded mt-3 m-2'> Click me!!</button>

      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}


export default App

// function App() {

//   const {register, handleSubmit} = useForm();

//   return(
//     <div className="p-4">
//         <form action="" onSubmit={(handleSubmit(data => console.log(data)
//         ))}>
//           <input {...register("name")} className="border-2" type="text" placeholder="name" />

//           <input {...register("email")} className="border-2 m-3" type="email" placeholder="email" />
//           <input type="submit" />
//         </form>
//     </div>
//   );
// }

// export default App;
