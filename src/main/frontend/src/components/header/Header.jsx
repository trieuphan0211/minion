import logo from "../../assets/img/logo.png";
import avatar from "../../assets/img/profile/avatar.png";
export const Header = () => {
  return (
    <div className="signup_header z-10 fixed flex items-center justify-between  h-16 p-3 bg-white shadow-lg top-0 right-0 left-0">
      <img
        className="signup_header-logo h-full text-white "
        src={logo}
        alt=""
      />
      <div>
        <div className="avatar">
          <div className="h-10 rounded-full">
            <img src={avatar} />
          </div>
        </div>
      </div>
    </div>
  );
};
