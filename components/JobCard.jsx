import React from 'react'

const JobCard = () => {
    return (
        <div className='h-[400px] border-2 border-solid border-[#7A66FF] p-6 rounded-xl shadow-lg flex justify-between flex-col mt-5'>
            <div className='flex justify-between'>
                <div>
                    <h3 className='mb-2'>Company Name</h3>
                    <h1 className='text-[1.5rem] font-bold mb-2'>Job Post</h1>
                    <p className='mb-2 text-[#7A66FF]'>Salary Description</p>
                    <p>Job Description</p>
                </div>
                <div>
                    <h1 className='text-[1rem] text-[#7A66FF] font-bold'>Hiring Only</h1>
                </div>
            </div>

            <div>
                <div className='flex flex-row justify-between'>
                    <div>
                        <p className='bg-[#7A66FF] w-[60px] text-white rounded-md text-center max-h-[50px]'>Tags</p>
                        <p className='mt-3 mb-3'>Date</p>
                    </div>
                    <div className='self-center'>
                        <p>0 views</p>
                    </div>
                </div>
                <div>
                    <button className='bg-[#7A66FF] text-white w-full h-[50px] rounded-md'>Apply Now</button>
                </div>

            </div>

        </div>
    )
}

export default JobCard