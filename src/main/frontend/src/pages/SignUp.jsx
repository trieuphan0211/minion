import { Link } from "react-router-dom";
import logo from "../assets/img/logo_white.png";
import { FaArrowRight } from "react-icons/fa6";
import Typewriter from "typewriter-effect";
import env from "../services/envConfig";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { LuMoveRight } from "react-icons/lu";
export const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [showElement, setShowElement] = useState({
    showForm: false,
    email: false,
  });
  const registerUser = (data) => {
    console.log("data: ", data);
    console.log("errors: ", errors);
    // console.log(watch(["email", "password"])); // watch input value by passing the name of it
  };
  return (
    <div className="signup bg-[#040d21] h-screen">
      <div className="signup_header z-10 relative flex items-center justify-between  h-16 py-3 mx-24 bg-transparent">
        <img
          className="signup_header-logo h-full text-white "
          src={logo}
          alt=""
        />
        <p className=" text-slate-400 text-md flex gap-3">
          Already have an account?
          <Link
            to={env.link.signin}
            className=" group text-white flex items-center gap-1 hover:underline "
          >
            Sign in{" "}
            <FaArrowRight className="text-[12px] group-hover:translate-x-1 group-hover:underline transition-all" />
          </Link>
        </p>
      </div>
      <div className="signup_background z-0">
        <div className="signup_background-start"></div>
        <div className="signup_background-start"></div>
        <div className="signup_background-start"></div>
        <div className="signup_background-start"></div>
        <div className="signup_background-start"></div>
        <div className="signup_background-start"></div>
      </div>
      <div className="z-10 relative flex justify-center pt-20">
        <form
          className="signup_form w-[600px] m-6 p-6 rounded-lg text-gray-500 bg-gray-800 text-base font-medium border-gray-700 border-[1px]"
          onSubmit={handleSubmit(registerUser)}
        >
          <h1 className="sr-only">
            {"Welcome to Minion! Let's begin the adventure"}
          </h1>
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("Welcome to Minion!<br/> Let's begin the adventure")
                .changeDelay(1)
                .callFunction(() => {
                  setShowElement({ ...showElement, showForm: true });
                })
                .start();
            }}
          />
          <div
            id="register"
            className={`${
              showElement.showForm ? "" : "hidden"
            } mt-6 flex flex-col register`}
          >
            <div>
              <label
                htmlFor="register_username"
                className="text-yellow-400 font-medium"
              >
                Enter your username*
              </label>
              <div className="mt-3 flex items-center gap-3">
                <LuMoveRight className="text-sky-500" />
                <input
                  id="register_username"
                  type="text"
                  className="w-full px-4 py-2 rounded-lg text-gray-500 bg-gray-800 border-gray-800 text-base font-medium  hover:border-gray-700 focus-visible:outline-none border-[1px]"
                  {...register("username", { required: "true" })}
                />
                {/* <div className="border-gray-500 border-[1px] rounded-md px-4 py-2">
                  Continue
                </div> */}
              </div>
            </div>
            <div>
              <label
                htmlFor="register_email"
                className="text-yellow-400 font-medium"
              >
                Enter your email*
              </label>
              <div className="mt-3 flex items-center gap-3">
                <LuMoveRight className="text-sky-500" />
                <input
                  id="register_email"
                  className="w-full px-4 py-2 rounded-lg text-gray-500 bg-gray-800 border-gray-800 text-base font-medium  hover:border-gray-700 focus-visible:border-gray-700 focus-visible:outline-none border-[1px]"
                  {...register("email", { required: "true", minLength: 15 })}
                />
                {/* <div className="border-gray-500 border-[1px] rounded-md px-4 py-2">
                  Continue
                </div> */}
              </div>
            </div>
            <div>
              <label
                htmlFor="register_passwd"
                className="text-yellow-400 font-medium"
              >
                Create a password*
              </label>
              <div className="mt-3 flex items-center gap-3">
                <LuMoveRight className="text-sky-500" />
                <input
                  id="register_passwd"
                  type="password"
                  className="w-full px-4 py-2 rounded-lg text-gray-500 bg-gray-800 border-gray-800 text-base font-medium  hover:border-gray-700 focus-visible:outline-none border-[1px]"
                  {...register("password", { required: "true" })}
                />
                {/* <div className="border-gray-500 border-[1px] rounded-md px-4 py-2">
                  Continue
                </div> */}
              </div>
            </div>
            <div>
              <label
                htmlFor="register_comfirmpasswd"
                className="text-yellow-400 font-medium"
              >
                Create a comfirm password*
              </label>
              <div className="mt-3 flex items-center gap-3">
                <LuMoveRight className="text-sky-500" />
                <input
                  id="register_comfirmpasswd"
                  type="password"
                  className="w-full px-4 py-2 rounded-lg text-gray-500 bg-gray-800 border-gray-800 text-base font-medium  hover:border-gray-700 focus-visible:outline-none border-[1px]"
                  {...register("comfirmpassword", { required: "true" })}
                />
                {/* <div className="border-gray-500 border-[1px] rounded-md px-4 py-2">
                  Continue
                </div> */}
              </div>
            </div>
            <button className="btn mt-5 bg-gray-800 border-gray-500 hover:bg-gray-700 text-gray-500 uppercase text-xl tracking-widest">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
