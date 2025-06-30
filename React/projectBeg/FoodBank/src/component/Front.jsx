import React from "react";
import Nav from "./Nav";

function Front() {
  return (
    <div className="h-[570px] bg-[url('https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png')] bg-center bg-no-repeat bg-cover">
      <Nav />
      <div className="flex flex-col justify-center items-center mt-28 text-white text-center">
        <h1 className="font-mono text-6xl font-extrabold">FoodBank</h1>
        <h2 className="mt-5 font-semibold font-sans text-4xl">
          Find the best restaurants, cafés
          <br />
          and bars in India
        </h2>
      </div>
    </div>
  );
}

export default Front;
