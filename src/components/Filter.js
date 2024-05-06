import React, { useState, useEffect } from 'react';

const Filter = (props) => {

  let jobdetails=props.jobdetails
  
  
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [filters, setFilters] = useState({
    minExperience: '',
    companyName: '',
    location: '',
    remote: '',
  
    role: '',
    salary: ''
  });


  // const handleFilterChange = (e) => {
  //   const { name, value } = e.target;
  //   setFilters(prevFilters => ({
  //     ...prevFilters,
  //     [name]: value
  //   }));
  // };

  
  const handleFilterChange = (inputValue) => {
    const { name, value } = inputValue;
    
    if(value.length==0)
    {
      console.log("i am calling",props)
      props.fetchData();

    }
    else{
      props.fetchData()
      if(name=="role")
    {
    const filteredData = jobdetails.filter(item => item.jobRole ==value);
    console.log("VALUE",value)
    console.log("filterdata",props,filteredData);
    props.setfilterData(filteredData)


    }
    else if(name=="companyName")
    {
      const filteredData = jobdetails.filter(item => item.companyName ==value);
      console.log("filterdat",props,filteredData);
      props.setfilterData(filteredData)
      
    }
    else if(name=="location")
    {
      const filteredData = jobdetails.filter(item => item.location ==value);
      console.log("filterdat",props,filteredData);
      props.setfilterData(filteredData)
      
    }
    else if(name=="salary")
    {
      const filteredData = jobdetails.filter(item => item.maxJdSalary ==value);
      console.log("filterdat",props,filteredData);
      props.setfilterData(filteredData)
      
    }
    else if(name=="minExperience")
    {
      const filteredData = jobdetails.filter(item => item.minExp ==value);
      console.log("filterdat",props,filteredData);
      props.setfilterData(filteredData)
      
    }
    
    

    

    }
    
    
  };
  

  

  return (
    <div className='mt-10 flex items-center justify-center'>
     
      <div className='flex flex-row gap-5'>
      
      
        <input 
          type="text" 
          name="role" 
          placeholder="Filter by role" 
          // value={filters.role} 
          onChange={(e)=>{handleFilterChange(e.target)}} 
    
          className="shadow bg-gray-300 text-black  appearance-none border rounded-full w-full py-2 px-3 font-medium leading-tight focus:outline-none focus:shadow-outline
          "
        
    
        />
        <input
          type="number" 
          name="minExperience" 
          placeholder="Min Experience" 
          // value={filters.minExperience} 
          onChange={(e)=>{handleFilterChange(e.target)}} 
          
          className="shadow bg-gray-300 text-black  appearance-none border rounded-full w-full py-2 px-3 font-medium leading-tight focus:outline-none focus:shadow-outline
          "
        />
        <input 
          type="text" 
          name="companyName" 
          placeholder="Filter by company name" 
          // value={filters.companyName} 
          onChange={(e)=>{handleFilterChange(e.target)}}
        
          className="shadow bg-gray-300 text-black  appearance-none border rounded-full w-full py-2 px-3 font-medium leading-tight focus:outline-none focus:shadow-outline
          "
        />
        <input 
          type="text" 
          name="location" 
          placeholder="Filter by location" 
          
          onChange={(e)=>{handleFilterChange(e.target)}} 
          
          className="shadow bg-gray-300 text-black  appearance-none border rounded-full w-full py-2 px-3 font-medium leading-tight focus:outline-none focus:shadow-outline
          "
        />
        <input 
          type="text" 
          name="remote" 
          placeholder="Remote/On-site" 
          
          onChange={(e)=>{handleFilterChange(e.target)}}
      
          className="shadow bg-gray-300 text-black  appearance-none border rounded-full w-full py-2 px-3 font-medium leading-tight focus:outline-none focus:shadow-outline
          "
        />
        
        <input 
          type="number" 
          name="salary" 
          placeholder="salary" 
        
          onChange={(e)=>{handleFilterChange(e.target)}}
          
          className="shadow bg-gray-300 text-black  appearance-none border rounded-full w-full py-2 px-3 font-medium leading-tight focus:outline-none focus:shadow-outline
          "
        />
      </div>
      <div className="job-list">
        {filteredJobs.map(job => (
          <div key={job.id} className="job-card">
            <h2>{job.title}</h2>
            <p>{job.company}</p>
            <p>{job.location}</p>
            <p>{job.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filter;
