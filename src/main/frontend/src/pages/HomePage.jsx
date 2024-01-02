import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <div className="text-yellow-400 text-9xl font-bold italic m-auto w-full flex flex-col items-center text-center">
      <h1>WELCOM TO MINION</h1>
      <div className="flex gap-5">
        <Link to="/signin">
          <button className="btn px-10 hover:bg-yellow-300 hover:border-yellow-300">
            Signin
          </button>
        </Link>
        <Link to="/signup">
          <button className="btn px-10 hover:bg-yellow-300 hover:border-yellow-300">
            Signup
          </button>
        </Link>
      </div>
    </div>
  );
};
