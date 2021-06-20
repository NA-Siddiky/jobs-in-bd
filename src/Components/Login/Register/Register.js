import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../firebase.config';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app();
}

const Register = () => {
    const [showPackages, setShowPackage] = useState(false)
    const [role, setRole] = useState(null)
    const [packages, setPackages] = useState(null)

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        const newUserInfo = { ...data }
        newUserInfo.role = role
        newUserInfo.package = packages

        if(role !== null ){
            
            if(role === 'employee' && packages !== null){
                console.log(newUserInfo)
                handleRegister(data.email,data.password)
            }else if(role === 'jobsSeeker'){
                console.log(newUserInfo);
                handleRegister(data.email,data.password)
            }else{
                alert('Please select a package')
            }

        }else{
            alert('please select your role')
        }
    };

    const handleChange = (e) => {
        console.log(e.target.name, e.target.value);
        if (e.target.value === 'employee') {
            setShowPackage(true)
            setRole('employee')
        } else if (e.target.value === 'jobsSeeker') {
            setShowPackage(false)
            setRole('jobsSeeker')
            setPackages('null')
        }
    }

    const handlePackageChange = (e) => {
        console.log(e.target.name, e.target.value);
        if (e.target.value !== 'null') {
            setPackages(e.target.value)
        }
    }


    const handleRegister = (email,password) => {
        console.log(email, password);
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            var user = userCredential.user;
            console.log(user);
          })
          .catch((error) => {
            var errorMessage = error.message;
            console.log(errorMessage);
          });
    }

    return (
        <div className="w-100 d-flex justify-content-center ">
            <div className="w-50 text-center">
                <form onSubmit={handleSubmit(onSubmit)}>

                    <input className="form-control" type="text" placeholder="Enter Your Name" {...register("name", { required: true })} />
                    {errors.name && <span>This field is required</span>}

                    <br />

                    <input className="form-control" type="text" placeholder="Enter Your Email" {...register("email", { required: true })} />
                    {errors.email && <span>This field is required</span>}

                    <br />

                    <input className="form-control" type="text" placeholder="Enter a Password" {...register("password", { required: true })} />
                    {errors.password && <span>This field is required</span>}

                    <br />

                    <select className="form-control" onChange={handleChange} name='role' >
                        <option value="null"> ---Select your role---</option>
                        <option value="employee">Employee</option>
                        <option value="jobsSeeker">JobsSeeker</option>
                    </select>

                    <br />

                    {
                        showPackages &&
                        <select className="form-control mb-2" onChange={handlePackageChange} name='package' >
                            <option value="null"> ---Select your package--- </option>
                            <option value="package1">package1</option>
                            <option value="package2">package2</option>
                            <option value="package3">package3</option>
                        </select>
                    }

                    <input className='btn btn-dark' type="submit" />
                </form>
            </div>
        </div>
    );
};

export default Register;