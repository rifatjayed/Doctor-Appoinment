import React from "react";

import { useForm } from "react-hook-form";

const Login = () => {
  // const {
  //   register,
  //   handleSubmit,
  //   watch,
  //   formState: { errors },
  // } = useForm();

  // const onSubmit = (data) => console.log(data);

  // console.log(watch("example"));
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Login Data:", data);
  };
  return (
    // <div>
    //   <form onSubmit={handleSubmit(onSubmit)}>
    //     {/* register your input into the hook by invoking the "register" function */}
    //     <input defaultValue="test" {...register("example")} />

    //     {/* include validation with required or other standard HTML validation rules */}
    //     <input {...register("exampleRequired", { required: true })} />
    //     {/* errors will return when field validation fails  */}
    //     {errors.exampleRequired && <span>This field is required</span>}

    //     <input type="submit" />
    //   </form>
    // </div>

    <div className="flex justify-center items-center h-screen bg-[rgb(248_248_250)]">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
          Login to Sasthya Daktar
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Email Field */}
          <div className="mb-4">
            <label className="block text-gray-600">Email</label>
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg mt-1"
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          {/* Password Field */}
          <div className="mb-4">
            <label className="block text-gray-600">Password</label>
            <input
              type="password"
              {...register("password", { required: "Password is required" })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg mt-1"
              placeholder="Enter your password"
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition"
          >
            Login
          </button>
          <p
            className="text-[rgb(77_90_104_/_0.8)] mt-6 text-center text-sm font-medium 
"
          >
            Don’t have an account?{" "}
            <span className="text-blue-600">Register</span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
