import React from 'react'
import Card from './Card';


const Cards = (props) => {
    let jobdetails = props.jobdetails;
    console.log("helloo",jobdetails)

    
    
    
    
    

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-4 mt-10">
      {
        jobdetails.map( (jobdetail) => (
            <Card key={jobdetail.id} 
            jobdetail = {jobdetail} 
           
            />
        ))
      }
    </div>
  )
}

export default Cards
