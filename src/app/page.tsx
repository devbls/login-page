"use client";
import { useState } from "react";
import { FaArrowLeft, FaEnvelope, FaLock, FaUser } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

export default function Home() {
  const [register, setRegister] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-slate-200">
      {register ? (
        <form className="w-[28rem] p-12 bg-white border rounded-lg">
          <div className="flex items-center">
            <FaArrowLeft
              size={21}
              onClick={() => setRegister(false)}
              className="cursor-pointer"
            />
            <b className="pl-6 text-3xl select-none">Register</b>
          </div>
          <label className="flex flex-col text-xs font-semibold relative mt-8">
            Name*
            <input
              name="name"
              placeholder="Enter your name"
              required
              className="h-9 font-normal border border-gray-300 focus-visible:border-blue-500 focus-visible:outline-none rounded-2xl px-3 mt-1 transition-colors"
            />
            <div className="absolute right-3 top-1/2 translate-y-1">
              <FaUser color="#9ca3af" />
            </div>
          </label>
          <label className="flex flex-col text-xs font-semibold relative mt-4">
            Email*
            <input
              type="email"
              name="email"
              placeholder="Enter your e-mail"
              required
              className="h-9 font-normal border border-gray-300 focus-visible:border-blue-500 focus-visible:outline-none rounded-2xl px-3 mt-1 transition-colors"
            />
            <div className="absolute right-3 top-1/2 translate-y-1">
              <FaEnvelope color="#9ca3af" />
            </div>
          </label>
          <label className="flex flex-col text-xs mt-4 font-semibold relative">
            Password*
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              required
              className="h-9 font-normal border border-gray-300 focus-visible:border-blue-500 focus-visible:outline-none rounded-2xl px-3 mt-1 transition-colors"
            />
            <div className="absolute right-3 top-1/2 translate-y-1">
              <FaLock color="#9ca3af" />
            </div>
          </label>
          <label className="flex flex-col text-xs mt-4 font-semibold relative">
            Confirm password*
            <input
              type="password"
              name="confirm-password"
              placeholder="Confirm your password"
              required
              className="h-9 font-normal border border-gray-300 focus-visible:border-blue-500 focus-visible:outline-none rounded-2xl px-3 mt-1 transition-colors"
            />
            <div className="absolute right-3 top-1/2 translate-y-1">
              <FaLock color="#9ca3af" />
            </div>
          </label>
          <button
            type="submit"
            className="h-9 w-full text-sm text-white select-none font-semibold mt-8 bg-blue-500 hover:bg-blue-600 rounded-full transition-all duration-200 hover:shadow-lg"
          >
            Create account
          </button>
        </form>
      ) : (
        <form className="w-[28rem] p-12 bg-white border rounded-lg">
          <b className="text-3xl select-none">Login</b>
          <button
            type="button"
            className="h-9 w-full text-sm mt-8 font-semibold border border-gray-300 rounded-full transition-all duration-200 hover:shadow-md"
          >
            <div className="flex flex-row items-center justify-center">
              <FcGoogle size={18} className="inline-block mr-1" />
              Sign in with Google
            </div>
          </button>
          <div className="flex flex-row items-center justify-between my-4">
            <hr className="w-64" />
            <p className="w-full text-xs text-center text-gray-400 select-none mx-2">
              or Sign in with email
            </p>
            <hr className="w-64" />
          </div>
          <label className="flex flex-col text-xs font-semibold relative">
            Email*
            <input
              type="email"
              name="email"
              placeholder="Enter your e-mail"
              required
              className="h-9 font-normal border border-gray-300 focus-visible:border-blue-500 focus-visible:outline-none rounded-2xl px-3 mt-1 transition-colors"
            />
            <div className="absolute right-3 top-1/2 translate-y-1">
              <FaEnvelope color="#9ca3af" />
            </div>
          </label>
          <label className="flex flex-col text-xs mt-4 font-semibold relative">
            Password*
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              required
              className="h-9 font-normal border border-gray-300 focus-visible:border-blue-500 focus-visible:outline-none rounded-2xl px-3 mt-1 transition-colors"
            />
            <div className="absolute right-3 top-1/2 translate-y-1">
              <FaLock color="#9ca3af" />
            </div>
          </label>
          <div className="flex flex-row items-center justify-between mt-2">
            <div className="inline-flex items-center select-none">
              <label className="flex items-center cursor-pointer relative hover:shadow-md transition-all">
                <input
                  type="checkbox"
                  id="remember"
                  className="peer h-5 w-5 cursor-pointer appearance-none rounded border border-gray-300 checked:bg-blue-500 checked:border-blue-500"
                />
                <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3.5 w-3.5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-width="1"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </span>
              </label>
              <label
                className="cursor-pointer ml-2 text-xs font-semibold"
                htmlFor="remember"
              >
                Remember Me
              </label>
            </div>
            <p className="font-bold text-blue-500 text-xs cursor-pointer hover:opacity-85 active:opacity-80 select-none">
              Forgot password?
            </p>
          </div>
          <button
            type="submit"
            className="h-9 w-full text-sm text-white select-none font-semibold mt-8 bg-blue-500 hover:bg-blue-600 rounded-full transition-all duration-200 hover:shadow-lg"
          >
            Login
          </button>
          <p className="text-xs font-semibold text-center mt-2">
            Not registered?
            <a
              href="#"
              onClick={() => setRegister(true)}
              className="text-blue-500 hover:text-blue-600 transition-colors"
            >
              {" "}
              Create account
            </a>
          </p>
        </form>
      )}
    </div>
  );
}
