import React, { useState } from 'react';
import background from '../../assets/images/loginbg.jpg';
import { useNavigate } from 'react-router-dom';

import {
  Circle,
  CircleSmallLeftCorner,
  CircleSmallupperCorner,
  EmailIcon,
  PasswordIcon,
} from '../../assets/svgIcons';
import Footer from '../../Components/Footer';

const Login = () => {
  const navigate = useNavigate();

  const [emailPlaceholder, setEmailPlaceholder] = useState('Email');
  const [passwordPlaceholder, setPasswordPlaceholder] = useState('Password');

  const handleEmailFocus = () => setEmailPlaceholder('');
  const handleEmailBlur = (e) => {
    if (e.target.value === '') {
      setEmailPlaceholder('Email');
    }
  };

  const handlePasswordFocus = () => setPasswordPlaceholder('');
  const handlePasswordBlur = (e) => {
    if (e.target.value === '') {
      setPasswordPlaceholder('Password');
    }
  };

  return (
    <>
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover md:bg-center w-screen h-screen overflow-hidden"
        style={{ backgroundImage: `url(${background})` }}
      >
        {/* First Overlay Image */}
        <div
          className="bg-gradient-to-r from-[#D9D9D900]  from-0% via-[#01ABEFE0] via-0% md:via-90% to-[#0F3D82DE] to-87% absolute inset-0
          w-screen h-screen object-center shadow"
        ></div>

        <div className="flex flex-col md:flex-row">
          <div>
            <div className="md:hidden ml-52 brightness-200 ">
              <CircleSmallupperCorner />
            </div>

            <div className="flex flex-col -mt-28 absolute px-12 w-full md:top-1/3 md:pt-12 md:left-1/2  md:w-1/3 md:mx-40">
              <h1 className="md:text-[68px] mb-6 md:mb-10 text-white text-[28px] font-semibold md:font-bold">
                LOGIN
              </h1>

              {/* Input Box 1 with icon */}
              <div className="relative mb-4">
                <input
                  className="border-2 border-white p-2 md:p-4 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-300 bg-clip-text placeholder-white text-white text-sm w-full transition duration-300"
                  type="text"
                  placeholder={emailPlaceholder}
                  onFocus={handleEmailFocus}
                  onBlur={handleEmailBlur}
                />
                <span className="absolute inset-y-0 right-0 flex items-center pr-3">
                  <EmailIcon />
                </span>
              </div>

              {/* Password input box */}
              <div className="relative mb-4 md:mt-4">
                <input
                  className="border-2 border-white p-2 md:p-4 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-300 bg-clip-text placeholder-white text-white text-sm w-full transition duration-300"
                  type="password"
                  placeholder={passwordPlaceholder}
                  onFocus={handlePasswordFocus}
                  onBlur={handlePasswordBlur}
                />
                <span className="absolute inset-y-0 right-0 flex items-center pr-3">
                  <PasswordIcon />
                </span>
              </div>

              {/* Remember me checkbox */}
              <div className="flex items-center mb-4">
                <input id="remember-me" type="checkbox" className="h-4 w-4" />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-white text-sm"
                >
                  Remember me
                </label>
              </div>

              {/* Login Button*/}
              <button
                className="bg-white mx-10 lg:mx-24 text-[#0f3d82] text-xl font-bold mt-8 py-2 md:p-4 active:scale-95 transition-transform transform duration-500 hover:scale-105"
                onClick={() => navigate('/home')}
              >
                LOGIN
              </button>
              <a className="text-white text-sm md:text-base p-2 hover:underline">
                Forgot Password?
              </a>
            </div>
          </div>
          <div>
            <div className="md:hidden -ml-12 bottom-0 brightness-200 fixed">
              <CircleSmallLeftCorner />
            </div>
            <div className="hidden md:block mt-[450px]">
              <Circle />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
