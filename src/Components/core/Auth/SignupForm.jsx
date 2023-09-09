import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSignupData } from "../../../slices/authSlice";
import { setProgress } from "../../../slices/loadingBarSlice";

function SignupForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const { fullName, email, password, confirmPassword } = formData;

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Passwords Do Not Match");
      return;
    }

    const signupData = {
      fullName,
      email,
      password,
    };

    // Setting signup data to state
    // To be used after OTP verification
    dispatch(setSignupData(signupData));

    // Send OTP to user for verification
    // Replace this with your API call
    // dispatch(sendOtp(email, navigate));

    // Reset form fields
    setFormData({
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });

    // Set progress (Replace with your logic)
    dispatch(setProgress(60));

    // You can navigate to the next step here (e.g., OTP verification)
    // navigate("/verify-otp");
  };

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-center mb-6">Create an Account</h2>
      <form onSubmit={handleOnSubmit} className="space-y-4">
        <div>
          <label htmlFor="fullName" className="text-gray-600">
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={fullName}
            onChange={handleOnChange}
            placeholder="Enter your full name"
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:ring-yellow-300"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="text-gray-600">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleOnChange}
            placeholder="Enter your email address"
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:ring-yellow-300"
            required
          />
        </div>
        <div className="relative">
          <label htmlFor="password" className="text-gray-600">
            Password
          </label>
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
            value={password}
            onChange={handleOnChange}
            placeholder="Enter your password"
            className="w-full p-2 pr-10 border rounded-lg focus:outline-none focus:ring focus:ring-yellow-300"
            required
          />
          <span
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute top-2 right-3 cursor-pointer"
          >
            {showPassword ? (
              <AiOutlineEyeInvisible fontSize={20} />
            ) : (
              <AiOutlineEye fontSize={20} />
            )}
          </span>
        </div>
        <div className="relative">
          <label htmlFor="confirmPassword" className="text-gray-600">
            Confirm Password
          </label>
          <input
            type={showConfirmPassword ? "text" : "password"}
            id="confirmPassword"
            name="confirmPassword"
            value={confirmPassword}
            onChange={handleOnChange}
            placeholder="Confirm your password"
            className="w-full p-2 pr-10 border rounded-lg focus:outline-none focus:ring focus:ring-yellow-300"
            required
          />
          <span
            onClick={() => setShowConfirmPassword((prev) => !prev)}
            className="absolute top-2 right-3 cursor-pointer"
          >
            {showConfirmPassword ? (
              <AiOutlineEyeInvisible fontSize={20} />
            ) : (
              <AiOutlineEye fontSize={20} />
            )}
          </span>
        </div>
        <button
          type="submit"
          className="w-full p-2 bg-blue-400 text-white rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300"
        >
          Create Account
        </button>
      </form>
    </div>
  );
}

export default SignupForm;
