import React, { useEffect, useState } from "react";
import Country from "./Country";
import { toast, ToastContainer } from "react-toastify";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  // 1st country gula Print Korce

  const [cart, setCart] = useState([]);

  const handleCartAdd = (myCountry) => {
    const newCart = [...cart, myCountry];
    setCart(newCart);
    toast("Done");

    // akhane amra function ta onno compoment a use korbo ajonno props hisebe bebohar korb
  };

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  return (
    <div>
      <div className="max-w-[1200px] md:mx-auto mx-10 ">
        <h1 className=" text-2xl text-center font-bold pt-10">
          You can Visit Here
        </h1>
        <h2 className=" mt-8 text-xl font-semibold">
          Total Country : {countries.length}
        </h2>
        <h2 className="text-xl font-semibold">Visited count : {cart.length}</h2>

        <div className="flex flex-wrap list-none gap-1.5 bg-amber-400 m-2 rounded-2xl  font-semibold">
          {cart.map((list) => (
            <div>
              <li className="m-2">{list.name.common}</li>
              <div className=" h-full w-full p-2 flex justify-center ">
                <img
                  className=" h-[20px] w-[40px]"
                  src={list.flags.png}
                  alt=""
                />
              </div>
            </div>
          ))}
        </div>
        <ToastContainer />
      </div>

      <div className=" flex justify-center items-center flex-wrap gap-3  ">
        {countries.map((myCountry) => (
          <Country
            myCountry={myCountry}
            // akhan a amra Props hisebe bebohar korce function ta
            handleCartAdd={handleCartAdd}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
