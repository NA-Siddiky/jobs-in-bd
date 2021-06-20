import React from 'react';
import { useForm } from "react-hook-form";

const Register = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className="w-100 d-flex justify-content-center">
            <div className="w-50">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("firstName")} />
                    <select {...register("gender")}>
                        <option value="female">female</option>
                        <option value="male">male</option>
                        <option value="other">other</option>
                    </select>
                    <input type="submit" />
                </form>
            </div>
        </div>
    );
};

export default Register;