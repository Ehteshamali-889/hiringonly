// import { useRouter } from 'next/router';
// import React from 'react'

// const Page = () => {
//   // const router = useRouter();
//   // const { id, CompanyName, JobPost, SalaryDescription, JobDescription, Tags, Date, ViewJob } = router.query;
//   return (
//     <div>
//     <h1>Hi</h1>
//       {/* <h1>{JobPost}</h1> */}
//       {/* <p>{CompanyName}</p> */}
//     </div>
//   )
// }

// export default Page
// export default function Page() {
//   return <div>My Post</div>
// }

"use client";
import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'


const Page = ({ params }) => {
  console.log('params', params);
  const [singlejob, setSingleJob] = useState([]);
  const [tags, setTags] = useState([]);
  const [skills, setSkills] = useState([]);
  const [jobType, setJobType] = useState([]);
  let tagsarr = [];
  let skillarr = [];
  let jobTypearr = [];
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3010/api/jobs/' + params.id);
        console.log("response", response);
        setSingleJob(response.data);
        tagsarr = response.data.tags;
        setTags(tagsarr.split(","));
        skillarr = response.data.skills;
        setSkills(skillarr.split(","));
        jobTypearr = response.data.jobType;
        setJobType(jobTypearr.split(","));

      } catch (error) {
        console.error('Error fetching jobs:', error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className='w-3/4 mx-auto pt-5'>
      <h1 className='text-[2rem] text-[#7A66FF] font-bold mb-5'><Link href="/">Hiring Only</Link></h1>
      {singlejob ?
        <>
          <div className='flex flex-row justify-between border-b-2 border-solid border-[#898989] pb-5 pt-5'>
            <div>

              <h1 className='text-[1.5rem] font-bold mb-2'>{singlejob.jobTitle}</h1>
              <h3 className='mb-2 text-[#7A66FF] font-bold'>{singlejob.companyName}</h3>
              <h3 className='mb-2 text-[#6c6c6c] font-bold'>{singlejob.location}</h3>
            </div>
            <div>
              <button>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
                </svg>
              </button>


            </div>
          </div>

          <div className='pt-5 border-b-2 border-solid border-[#898989] pb-5'>
            <h1 className='mb-2 text-gray font-bold text-[24px]'>Job Details</h1>

            <div className='mb-4 mt-4'>
              <h3 className='mb-2 text-[#7A66FF] font-bold'>Salary</h3>
              <h3 className='mb-2 text-[#6c6c6c] font-bold'>{singlejob.salaryDescription ? singlejob.salaryDescription : "Not Available"}</h3>
            </div>

            <div>
              <h3 className='mb-2 text-[#7A66FF] font-bold'>Job Type</h3>
              <div className='flex flex-row gap-5'>
                {console.log("jobType", jobType)}
                {jobType.map(
                  (tag, index) => (
                    <p key={index} className='bg-[#7A66FF] w-auto text-white rounded-md text-center p-2'>
                      {tag}
                    </p>
                  )
                )}
              </div>
              {/* <h3 className='mb-2 text-[#6c6c6c] font-bold'>job type value</h3> */}
            </div>

          </div>

          <div className='pt-5 border-b-2 border-solid border-[#898989] pb-5'>
            <h1 className='mb-2 text-gray font-bold text-[24px]'>Experience</h1>
            <h3 className='mb-2 text-[#6c6c6c] font-bold'>{singlejob.experience}</h3>
          </div>

          <div className='pt-5 border-b-2 border-solid border-[#898989] pb-5'>
            <h1 className='mb-2 text-gray font-bold text-[24px]'>Skills</h1>
            <div className='flex flex-row gap-5'>
              {/* <p className='bg-transparent border-[#7A66FF] border-2 text-[#7A66FF] w-auto rounded-md text-center p-2'>
            HTML
          </p>
          <p className='bg-transparent border-[#7A66FF] border-2 text-[#7A66FF] w-auto rounded-md text-center p-2'>
            CSS
          </p> */}
              {skills.map(
                (tag, index) => (
                  <p key={index} className='bg-[#7A66FF] w-auto text-white rounded-md text-center p-2'>
                    {tag}
                  </p>
                )
              )}
            </div>
          </div>

          <div className='pt-5 pb-5'>
            <h1 className='mb-2 text-gray font-bold text-[24px]'>Full Job Description</h1>
            <h3 className='mb-2  font-bold text-justify' dangerouslySetInnerHTML={{ __html: singlejob.fullDescription }} />
          </div>

          <div className='mt-5'>
            <h1 className='mb-2 text-gray font-bold text-[24px]'>Apply Here</h1>
            <h3>{singlejob.applyLink}</h3>
          </div>

          <div className='pt-5 pb-5'>
            <h1 className='mb-2 text-gray font-bold text-[24px]'>Tags</h1>
            <div className='flex flex-row gap-5 mt-4'>
              {/* <p className='bg-transparent border-[#7A66FF] border-2 text-[#7A66FF] w-auto rounded-md text-center p-2'>
            Fullstack
          </p>
          <p className='bg-transparent border-[#7A66FF] border-2 text-[#7A66FF] w-auto rounded-md text-center p-2'>
            Developer
          </p> */}
              {tags.map(
                (tag, index) => (
                  <p key={index} className='bg-[#7A66FF] w-auto text-white rounded-md text-center p-2'>
                    {tag}
                  </p>
                )
              )}
            </div>
          </div>
        </>
        : <>

          <h1>Job Not Found</h1>
        </>
      }


    </div>
  )
}

export default Page