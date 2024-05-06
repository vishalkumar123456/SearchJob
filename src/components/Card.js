import React from 'react'
import { TiTick } from "react-icons/ti";
import { useState } from 'react';
import { toast } from 'react-toastify';



const Card = (props) => {

    let jobdetail = props.jobdetail;
    console.log("ho",jobdetail);


    const[readmore,setReadmore] = useState(false);
    
    const jobDetailsFrom = readmore ? jobdetail.jobDetailsFromCompany :`${jobdetail.jobDetailsFromCompany.substring(0,200)}....`;
    function readmoreHandler() {
        setReadmore(!readmore);
    }
    const clickHandler = () => {
       toast.success("Apply Successfully")
      };
    

  return (
    <div className='w-[350px] bg-white bg-opacity-80 rounded-md overflow-hidden flex flex-col mx-auto px-5 py-5'>


        <div className='border rounded-md border-black  w-[120px] mt-6 text-center text-[15px] font-medium'>
            <div>
               
                <p>Posted 10 days</p>
            </div>
        </div>

        <div className='flex flex-row  mt-5 space-x-3'>
            <div>
                <img src={jobdetail.logoUrl} width={40}/>

            </div>

            <div>
                <p className='text-black text-opacity-70'>   {jobdetail.companyName}</p>

                <h3 className='text-[20px] font-bold'>  {jobdetail.jobRole}</h3>


            </div>
        </div>


       


       
       <div className='text-[15px] font-medium ml-[50px]'>
        {jobdetail.location}
       </div>

       <div className='flex flex-row'>
        <div className='text-black text-[15px] opacity-70 font-bold'>
        Estimated Salary:

        </div>

        <div  className='text-black text-[15px] opacity-70 font-bold ml-1'>
        {jobdetail.minExp}-{jobdetail.maxExp} LPA

        </div>
        <div className='flex items-center ml-2'>
        <span><TiTick className='bg-green-500'/></span>

        </div>
        

           


        

       </div>


       <h1 className="mt-2 font-medium text-black text-[20px]">About Company</h1>

       <h2 className="text-black text-[15px] font-bold">About us</h2>

       <div className="text-black text-[15px] font-medium">
        {jobDetailsFrom}

        <span className="read-more cursor-pointer text-blue-500 font-medium" onClick={readmoreHandler}>
                        {readmore ? `Show Less`: `View Job`}
                    </span>
       </div>

       


       <button className='border rounded-full  bg-blue-300 font-bold text-black mt-2'
       onClick={clickHandler}> Ease Apply</button>
    </div>
  )
}

export default Card
