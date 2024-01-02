import { Link } from "react-router-dom";
import logo from "../assets/img/logo.png";
import { useCookies } from "react-cookie";
import env from "../services/envConfig";
import { login } from "../services/UserApi";
import { useForm } from "react-hook-form";
export const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [cookies, setCookies] = useCookies(["token"]);
  const onSubmit = (data) => {
    try {
      login(cookies, setCookies, data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="signin grid grid-cols-1 p-8 text-sm">
      <div className="flex flex-col items-center w-80 m-auto">
        <img src={logo} className="w-12" alt="" />
        <h1 className="text-2xl py-4">Sign in to Minion</h1>
        <form
          className="signin_form w-full grid grid-cols-2 my-3 p-3 border-2 rounded-xl bg-slate-200"
          onSubmit={handleSubmit(onSubmit)}
        >
          <label className="col-span-2 mb-2" htmlFor="email">
            Username or email address
          </label>
          <input
            id="email"
            className="col-span-2 mt-1 px-3 py-2 border-2  border-slate-300  rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            {...register("email", {
              required: "Please enter username or email",
            })}
            placeholder="Email"
          />
          <p className="col-span-2 mx-2 text-red-400  mb-4 text-[12px]">
            {errors?.email?.message}
          </p>
          <label className="mb-2" htmlFor="Password">
            Password
          </label>
          <Link
            className="mb-2 text-end text-blue-600 hover:text-blue-700"
            to=""
          >
            Forgot password?
          </Link>
          <input
            className="col-span-2 mt-1 px-3 py-2 border-2  border-slate-300  rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            id="password"
            type="password"
            {...register("password", { required: "Please enter password" })}
            placeholder="Password"
          />
          <p className="col-span-2 mx-2 text-red-400  mb-4 text-[12px]">
            {errors?.password?.message}
          </p>
          <button
            className="btn btn-sm btn-warning text-white mt-5 col-span-2 h-10 disabled:bg-orange-300 disabled:text-white "
            disabled={false}
          >
            Sign In
          </button>
        </form>
        <nav className="w-full grid gap-2 my-3 p-3 border-2 rounded-xl bg-slate-200">
          <Link
            to=""
            className="text-center font-semibold text-blue-600 hover:underline hover:text-blue-700"
          >
            Sign in with a passkey
          </Link>
          <p className="text-center">
            New to GitHub?{"  "}
            <Link
              to={env.link.signup}
              className=" text-blue-600 hover:underline hover:text-blue-700"
            >
              Create an account
            </Link>
          </p>
        </nav>
      </div>
    </div>
  );
};
