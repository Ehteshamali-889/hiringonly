'use client';
import Header from "@/components/Header";
import JobCard from "@/components/JobCard";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="">
        <Header />
        <div className=" w-3/4 mx-auto mt-5 grid grid-cols-3 grid-rows-2 gap-4 max-[1000px]:grid-cols-2 max-[1000px]:grid-rows-2 max-[600px]:grid-cols-1 max-[600px]:grid-rows-1 ">
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
        </div>
      </div>


    </>
  );
}
