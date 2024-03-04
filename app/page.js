'use client';
import Header from "@/components/Header";
import JobCard from "@/components/JobCard";
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from 'axios';

export default function Home() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3010/api/jobs/');
        console.log("response", response);
        setJobs(response.data);
      } catch (error) {
        console.error('Error fetching jobs:', error);
      }
    };

    fetchData();

    // // Cleanup function in case component unmounts before the request completes
    // return () => {
    //   // Cleanup code if necessary
    // };
  }, []);
  return (
    <>
      <div className="">
        <Header />
        <div className=" w-3/4 mx-auto mt-5 grid grid-cols-3 grid-rows-2 gap-4 max-[1000px]:grid-cols-2 max-[1000px]:grid-rows-2 max-[600px]:grid-cols-1 max-[600px]:grid-rows-1 ">
          
          {jobs.length>0 && jobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
          {
            jobs.length===0 && <h1>No Jobs Found</h1>
          }
          {/* <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard /> */}
        </div>
      </div>


    </>
  );
}
