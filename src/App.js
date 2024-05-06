import React from "react";
import Navbar from  "./components/Navbar";
import Cards from "./components/Cards"
import Filter from "./components/Filter"

import { useState,useEffect } from "react";

import {toast} from "react-toastify";
const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json")

const App = () => { 
  const [jobdetails, setjobdetails] = useState([]);
  const [page, setPage] = useState(1);
  

  async function fetchData() {
    try{

      const body = JSON.stringify({
        "limit": 30,
        "offset": 0
        });
        const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body
        };

        




      let response = await fetch('https://api.weekday.technology/adhoc/getSampleJdJSON?page=${page}', requestOptions)
    
      let output = await response.json().then(result=>result).catch((error)=>error);
      console.log("hello",output)
      
      setjobdetails(prevJobs => [...prevJobs, ...output.jdList]);
    }
    catch(error) {
        toast.error("Network me koi dikkat hai");
    }
    
  }

  useEffect(() => {
    fetchData();
  }, [page])

  const handelInfiniteScroll = async () => {
    // console.log("scrollHeight" + document.documentElement.scrollHeight);
    // console.log("innerHeight" + window.innerHeight);
    // console.log("scrollTop" + document.documentElement.scrollTop);
    try {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight
      ) {
        
        setPage((prev) => prev + 1);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handelInfiniteScroll);
    return () => window.removeEventListener("scroll", handelInfiniteScroll);
  }, []);

  const setfilterData = (data) => {
   console.log("Dataaa",data)
   setjobdetails(data)
    
  };
  

  return (
    <div className="min-h-screen flex flex-col bg-bgDark2">
      <div>
        <Navbar/>
      </div>
      <div className="bg-bgDark2">
        <div>
          <Filter 
          jobdetails={jobdetails}
          setfilterData={setfilterData}
          fetchData={fetchData}
        
          />
        </div>
        <div className="w-11/12 max-w-[1200px] 
        mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
        {
             (<Cards jobdetails={jobdetails} />)
          }
        </div>
      </div>


    </div>
  );
};

export default App;
