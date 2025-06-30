import React, { useState } from "react";
import { useParams } from "react-router-dom";

function Features() {
  const [show, setShow] = useState();
  const { id } = useParams();
  console.log(id);

  return (
    <div className="box-border mt-16 p-3 w-full bg-gradient-to-r from-indigo-200 via-purple-300 to-pink-300">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui dolorem corrupti maiores corporis in nesciunt vitae ab veritatis excepturi voluptate facere incidunt ratione rerum neque quis, vero officia, aut minima, minus velit. Similique, hic. Non autem velit dolore doloremque perferendis atque enim aperiam fuga officia, nostrum debitis tenetur soluta quis.</p>
    </div>
  );
}

export default Features;
