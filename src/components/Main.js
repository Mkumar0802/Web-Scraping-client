import axios from "axios";
import React, { useEffect, useState } from "react";

const Main = () => {
  const [card, setCard] = useState([]);
  console.log(card);

  const getData = async () => {
    try {
      let { data: response } = await axios.get(
        `https://webscrap-kmk.herokuapp.com/products`
      );
      setCard(response);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="w-screen h-screen ">
      <h2 className=" bg-slate-400  p-5    flex justify-start md:flex md:justify-around items-center text-2xl font-serif font-family:Cambria shadow-xl">Electronics</h2>

      <div className=" pr-10 py-20 mx-10 justify-center  grid-flow-row md:grid grid-cols-4 gap-10  ">
        {card.map((val) => {
          return (
            <div className="p-8 mr-2  m-5 rounded-lg shadow-xl bg-slate-200 max-w-sm  sm:rounded-lg " key={val._id}>
              <img
                className="w-30 h-30"
                alt="Electroincs"
                src={val.image}
              ></img>
              <div className="p-2">
                <p className="text-base md:text-lg hover:text-sky-500 ">{val.title}</p>
                <p className="b text-green-600">
                  <span className="font-semibold"> Rating:</span> <ion-icon name="star-half-outline"></ion-icon> {val.rating}
                </p>
                <p className="text-lg">
                  {" "}
                  <span className="font-semibold">  Offer Price:</span> {val.offerprice}
                </p>
                <p className="price">
                  {" "}
                  <span className="font-semibold">Price:</span>
                  {val.price}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Main;