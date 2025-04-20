import { useState } from "react";




// ai props gula akhane use kortase
const Country = ({myCountry,handleCartAdd}) => {
  
  const [visited,setVisited]=useState([])
 

  const handleShowMsg =()=>{
    
    handleCartAdd(myCountry)
    setVisited(!visited)
    
    
  }

  


  return (
    <div>
      <div className=" max-w-[1200px] h-full md:mx-auto mx-10 border-1 border-amber-300 p-4 mt-4 pb-8 hover:scale-110 transition-all duration-150 ease-in-out shadow-xl drop-shadow-xl bg-amber-100">
        <h1 className=" mb-2 font-bold uppercase">Name : {myCountry.name.common}</h1>
        <div className=" h-[150px] w-[250px]">
          <img className=" h-full w-full" src={myCountry.flags.png} alt="flags" />
          
        </div>
        <h2 className=" bg-white w-1/2 text-center font-semibold p-1.5 mt-1.5 rounded-4xl ">AREA :{myCountry.area}</h2>
        {/* <button
          onClick={handleShowMsg  }
          className=" mt-6 bg-amber-400 px-3 py-2 rounded hover:bg-amber-600 font-semibold"
        >
          {visited ? "Visited" : "Go to Visit"}
        </button> */}

        {/* Here myCountry ar modhe sob   */}
        <button onClick={handleShowMsg} className=" mt-6 bg-amber-400 px-3 py-2 rounded hover:bg-amber-600 font-semibold"> { visited ? "Go to Visit" : "Visited !"}</button>
        
        {visited ? <p className="font-semibold"></p> : <p className="font-semibold">Thank You For Visit Our Country!</p>}
      </div>


    </div>
  );
};

export default Country;
