import React from 'react';
import { useForm } from "react-hook-form";

const AddJobs = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {

        const jobData = { ...data }
        jobData.status = 'pending'

        console.log(jobData)

        fetch('http://localhost:5000/addJob', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(jobData),
        }).then(response => response.json())
            .then((data) => {
                console.log(data);
            })
    };

    return (
        <div className='w-100 d-flex justify-content-center text-center'>
            <div className='w-50'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input className='form-control' placeholder='Enter Job Title' {...register("jobTitle", { required: true })} />
                    {errors.jobTitle && <span>This field is required</span>}

                    <br />

                    <textarea className='form-control' placeholder='Enter Job Description' {...register("jobDescription", { required: true })} />
                    {errors.jobDescription && <span>This field is required</span>}

                    <br />

                    <input className='btn btn-dark' type="submit" value="Add JOb" />
                </form>
            </div>
        </div>
    );
};

export default AddJobs;