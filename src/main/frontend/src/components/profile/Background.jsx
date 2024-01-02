import background from "../../assets/img/profile/background.png";
import { IoIosCamera } from "react-icons/io";

export const Background = () => {
  return (
    <div className="max-h-[35vw] min-h-40 relative flex overflow-hidden rounded-b-xl">
      <img className="h-full" src={background} alt="" />
      <div className="absolute bottom-5 right-5">
        <button className="btn bg-[rgba(55,65,78,0.5)] text-white text-base border-none hover:bg-gray-600">
          <IoIosCamera className="text-2xl" />
          Chỉnh sửa ảnh bìa
        </button>
      </div>
    </div>
  );
};
