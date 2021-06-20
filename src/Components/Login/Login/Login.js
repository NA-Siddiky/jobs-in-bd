import React from 'react';
import { useForm } from "react-hook-form";

const Login = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>

                <input className="form-control" type="text" {...register("email", { required: true })} />
                {errors.email && <span>This field is required</span>}

                <input className="form-control" type="text" {...register("password", { required: true })} />
                {errors.password && <span>This field is required</span>}

                <input type="submit" />
            </form>
        </div>
    );
};

export default Login;