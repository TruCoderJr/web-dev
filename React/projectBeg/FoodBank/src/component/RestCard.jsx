import { FaAngleRight } from "react-icons/fa";
import {Link} from 'react-router-dom'

function RestCard({ data }) {
  return (
    <Link to={`/${data}`}
      className="w-full sm:w-1/2 md:w-1/4 flex bg-white-100 m-2 border-2 justify-between text-xl p-5 rounded-md shadow-md hover:shadow-lg transition-shadow duration-300"
      // role="button"
      // tabIndex={0}
      // aria-label={`Card for ${data}`}
    >
      <p>{data} Restaurants</p>
      <FaAngleRight className="font-light text-xs mt-2.5" />
    </Link>
  );
}

export default RestCard;
