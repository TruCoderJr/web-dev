import Buttons from "./Buttons";

function Home() {
  return (
    <div className="box-border h-full min-h-screen p-3 w-full bg-gradient-to-r from-indigo-200 via-purple-300 to-pink-300">
      <div className="p-5 bg-zinc-100 max-w-2xl h-1/2 m-auto rounded mt-40 shadow-xl">
        <h1 className="text-4xl font-bold text-gray-800 mb-4 text-center">
          Welcome to Task Manager
        </h1>
        <p className="text-lg text-gray-600 mb-6 text-center">
          Organize your tasks efficiently and boost your productivity
        </p>
        <div className="">
          <Buttons />
        </div>
      </div>
    </div>
  );
}

export default Home;
