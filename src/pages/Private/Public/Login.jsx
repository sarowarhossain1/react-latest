import { useState } from "react";

const Login = () => {
  const [showPass, setShowPass] = useState(false);

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-50 px-5">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-8">

        <div className="flex justify-center mb-4">
          <img src="/logo.png" alt="Logo" className="h-20" />
        </div>

        <hr className="border-pink-500 mb-6" />

        <h2 className="text-center text-2xl font-semibold mb-1">Sign In</h2>
        <p className="text-center text-gray-600 mb-6">
          Enter your mobile number and password.
        </p>

        <form >
          <label className="font-medium">
            Mobile<span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            placeholder="Please Enter Mobile"
            className="w-full border rounded-md p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-pink-500"
          />

          <label className="font-medium">
            Password<span className="text-red-600">*</span>
          </label>
          <div className="relative">
            <input
              type={showPass ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Your Password"
              className="w-full border rounded-md p-3 pr-10 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />

            <span
              onClick={() => setShowPass(!showPass)}
              className="absolute right-3 top-3 text-gray-600 cursor-pointer"
            >
              {showPass ? "🙈" : "👁"}
            </span>
          </div>

          <button
            type="submit"
            // disabled={isLoading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-md mt-6"
          >
            {isLoading ? "Logging In..." : "Log In"}
          </button>
        </form>

        <p className="text-center mt-6 text-gray-700">
          Don’t have an Account?
          <a href="/signup" className="text-blue-600 font-semibold hover:underline">
            {" "}Sign Up
          </a>
        </p>

        <p className="text-center text-gray-500 text-sm mt-6">
          2018 - 2025 © Hisab Nikash - Shunnoit.com
        </p>
      </div>
    </div>
  );
};

export default Login;
