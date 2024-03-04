import Link from 'next/link'
import React from 'react'

const JobCard = ({ job }) => {
    const { _id, jobTitle, companyName, salaryDescription, jobDescription, tags, createdAt } = job;
    console.log('createdAt',createdAt);
    let tagsarr = tags.split(",");
    console.log("tagsarr", tagsarr);
    const date = new Date(createdAt).toLocaleDateString();
    console.log('date',date);
    // var CompanyName = "Company Name";
    // var JobPost = "Job Post";
    // var SalaryDescription = "Salary Description";
    // var JobDescription = "Job Description";
    // var Tags = "Tags";
    // var Date = "Date";
    return (
        <div className='h-auto border-2 border-solid border-[#7A66FF] p-6 rounded-xl shadow-lg flex justify-between flex-col mt-5'>
            <div className='flex justify-between mb-3'>
                <div>
                    <h3 className='mb-2'>{companyName}</h3>
                    <h1 className='text-[1.5rem] font-bold mb-2'>
                    {jobTitle.length > 20 ? 
                        <span>
                        {jobTitle.slice(0, 20)} <br /> {jobTitle.slice(20)}
                        </span>
                        : jobTitle}
                    </h1>

                    <p className='mb-2 text-[#7A66FF]'>{salaryDescription}</p>
                    <p  dangerouslySetInnerHTML={{ __html: jobDescription }}></p>
                </div>
                <div>
                    <h1 className='text-[1rem] text-[#7A66FF] font-bold'>Hiring Only</h1>
                </div>
            </div>

            <div>
                <div className='flex flex-row justify-between'>
                    <div>
                        <div className='flex flex-row gap-5'>
                            {tagsarr.map(
                                (tag, index) => (
                                    <p key={index} className='bg-[#7A66FF] w-auto text-white rounded-md text-center p-2'>
                                        {tag}
                                    </p>
                                )
                            )}
                        </div>



                        <p className='mt-3 mb-3'>{date}</p>
                    </div>
                    {/* <div className='self-center'>
                        <p>0 views</p>
                    </div> */}
                </div>
                <div>
                    <Link href={`/singlejob/${_id}`}>
                        <button className='bg-[#7A66FF] text-white w-full h-[50px] rounded-md'>Apply Now</button>
                    </Link>

                </div>

            </div>

        </div>
    )
}

export default JobCard