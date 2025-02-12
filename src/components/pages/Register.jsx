import React from "react";
import { useForm } from "react-hook-form";

const Register = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    reset();
    console.log("Register Data:", data);
  };
  return (
    <div>
      <div className="flex justify-center items-center h-screen ">
        <div className="bg-white p-8 rounded-lg shadow-lg w-96">
          <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
            Register
          </h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Full Name Field */}
            <div className="mb-4">
              <label className="block text-gray-600">Full Name</label>
              <input
                type="text"
                {...register("fullName", { required: "Full name is required" })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg mt-1"
                placeholder="Enter your full name"
              />
              {errors.fullName && (
                <p className="text-red-500 text-sm">
                  {errors.fullName.message}
                </p>
              )}
            </div>

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
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Must be at least 6 characters",
                  },
                })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg mt-1"
                placeholder="Enter your password"
              />
              {errors.password && (
                <p className="text-red-500 text-sm">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
