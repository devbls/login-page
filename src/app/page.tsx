import { FaLock, FaUser } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-slate-200">
      <form className="w-96 p-12 bg-white border rounded-lg">
        <b className="text-3xl">Login</b>
        <label className="flex flex-col text-xs mt-8 font-bold relative">
          Email*
          <input
            type="email"
            name="email"
            placeholder="Enter your e-mail"
            required
            className="h-9 font-normal border border-gray-300 focus-visible:border-blue-500 focus-visible:outline-none rounded-2xl px-3 mt-1 transition-colors"
          />
          <div className="absolute right-3 top-1/2 translate-y-1">
            <FaUser color="#9ca3af" />
          </div>
        </label>
        <label className="flex flex-col text-xs mt-4 font-bold relative">
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
        <p className="text-end font-bold text-blue-500 mt-2 text-xs cursor-pointer hover:opacity-85 active:opacity-80">
          Forgot password?
        </p>
        <button
          type="submit"
          className="h-9 w-full text-sm text-white font-semibold mt-8 bg-blue-500 hover:bg-blue-600 rounded-full transition-all duration-200 hover:shadow-lg"
        >
          Login
        </button>
        <button
          type="submit"
          className="h-9 w-full text-sm mt-4 font-semibold border border-gray-300 rounded-full transition-all duration-200 hover:shadow-md"
        >
          <div className="flex flex-row items-center justify-center">
            <FcGoogle size={18} className="inline-block mr-1" />
            Sign in with Google
          </div>
        </button>
      </form>
    </div>
  );
}
