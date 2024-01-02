import { IoMdAdd } from "react-icons/io";
import { MdModeEdit } from "react-icons/md";
export const Avatar = () => {
  return (
    <div className=" w-[1120px] mx-auto flex justify-between items-center">
      <div className="grid grid-cols-3 gap-5">
        <div className="avatar col-span-1 h-auto relative bottom-10">
          <div className="w-40  rounded-full border-white border-4">
            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
        <div className="col-span-2 h-auto flex flex-col justify-center">
          <h1 className="text-3xl font-bold">Phan Ngọc Triệu </h1>
          <p className="text-gray-500">1,3K bạn bè • 330 đang theo dõi</p>
        </div>
      </div>
      <div className="flex gap-4">
        <button className="btn btn-warning text-white">
          <IoMdAdd className="text-xl" />
          Thêm vào tin
        </button>
        <button className="btn">
          <MdModeEdit className="text-xl" />
          Chỉnh sửa trang cá nhân
        </button>
      </div>
    </div>
  );
};
