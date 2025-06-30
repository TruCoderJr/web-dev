// Context.jsx
// import { formatRFC3339 } from "date-fns";
// import React, { useEffect, useState } from "react";
import { createContext, useEffect, useState } from "react";
export const UserContext = createContext();
import axios from "axios";

function Context(props) {
  const [data, setData] = useState([]);
  const [restlist, setRestlist] = useState([]);

  const restaurants = [
    "Agra Restaurants",
    "Ahmedabad Restaurants",
    "Ajmer Restaurants",
    "Alappuzha Restaurants",
    "Allahabad Restaurants",
    "Amravati Restaurants",
    "Amritsar Restaurants",
    "Aurangabad Restaurants",
    "Bengaluru Restaurants",
    "Bhopal Restaurants",
    "Bhubaneswar Restaurants",
    "Chandigarh Restaurants",
    "Chennai Restaurants",
    "Coimbatore Restaurants",
    "Cuttack Restaurants",
    "Darjeeling Restaurants",
    "Dehradun Restaurants",
    "Delhi NCR Restaurants",
    "Dharamshala Restaurants",
    "Gangtok Restaurants",
    "Goa Restaurants",
    "Gorakhpur Restaurants",
    "Guntur Restaurants",
    "Guwahati Restaurants",
    "Gwalior Restaurants",
    "Haridwar Restaurants",
    "Hyderabad Restaurants",
    "Indore Restaurants",
    "Jabalpur Restaurants",
    "Jaipur Restaurants",
    "Jalandhar Restaurants",
    "Jammu Restaurants",
    "Jamnagar Restaurants",
    "Jamshedpur Restaurants",
    "Jhansi Restaurants",
    "Jodhpur Restaurants",
    "Junagadh Restaurants",
    "Kanpur Restaurants",
    "Khajuraho Restaurants",
    "Khamgaon Restaurants",
    "Kharagpur Restaurants",
    "Kochi Restaurants",
    "Kolhapur Restaurants",
    "Kolkata Restaurants",
    "Kota Restaurants",
    "Lucknow Restaurants",
    "Ludhiana Restaurants",
    "Madurai Restaurants",
    "Manali Restaurants",
    "Mangalore Restaurants",
    "Manipal Restaurants",
    "Meerut Restaurants",
    "Mumbai Restaurants",
    "Mussoorie Restaurants",
    "Mysore Restaurants",
    "Nagpur Restaurants",
    "Nainital Restaurants",
    "Nashik Restaurants",
    "Neemrana Restaurants",
    "Ooty Restaurants",
    "Palakkad Restaurants",
    "Patiala Restaurants",
    "Patna Restaurants",
    "Puducherry Restaurants",
    "Pune Restaurants",
    "Pushkar Restaurants",
    "Raipur Restaurants",
    "Rajkot Restaurants",
    "Ranchi Restaurants",
    "Rishikesh Restaurants",
    "Salem Restaurants",
    "Shimla Restaurants",
    "Siliguri Restaurants",
    "Srinagar Restaurants",
    "Surat Restaurants",
    "Thrissur Restaurants",
    "Tirupati Restaurants",
    "Trichy Restaurants",
    "Trivandrum Restaurants",
    "Udaipur Restaurants",
    "Vadodara Restaurants",
    "Varanasi Restaurants",
    "Vellore Restaurants",
    "Vijayawada Restaurants",
    "Visakhapatnam Restaurants",
  ];
  // let data = [];

  useEffect(() => {
  const fetchData = async () => {
    try {
      const url = "https://cors-anywhere.herokuapp.com/https://fakerestaurantapi.runasp.net/api/Restaurant";

      const response = await axios.get(url);
      const sortedData = response.data.sort((a, b) =>
        a.address.localeCompare(b.address)
      );
      setData(sortedData);
      console.log(sortedData);

    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  fetchData();
}, []);

  // let restlist = data.map((res) => res.address.split(",")[0]);
  // console.log(restlist);

  useEffect(() => {
    if (data.length > 0) {
      const getCity = (address) => address.split(",")[0].trim();

      const uniqueByCity = Array.from(
        new Map(data.map(item => [getCity(item.address), item])).values()
      );
      setRestlist(() => uniqueByCity.map((res) => res.address.split(",")[0].trim()));
    }
  }, [data]);

  return (
    <>
      <UserContext.Provider value={{ restaurants, restlist }}>
        {props.children}
      </UserContext.Provider>
    </>
  );
}

export default Context;
