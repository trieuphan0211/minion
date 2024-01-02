import { useSearchParams } from "react-router-dom";
import { IoCall } from "react-icons/io5";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { RiMailSendLine } from "react-icons/ri";
import { GoPerson } from "react-icons/go";
import { FaTransgenderAlt } from "react-icons/fa";
import { LiaBirthdayCakeSolid } from "react-icons/lia";
import { IoMdAddCircleOutline } from "react-icons/io";
import { MdWork } from "react-icons/md";

export const General = () => {
  // Begin: Get and Set Parameters
  let [searchParams, setSearchParams] = useSearchParams();
  const allParams = Object.fromEntries(searchParams.entries());
  // End: Get and Set Parameters

  return (
    <div className="shadow-md bg-white rounded-xl p-2 flex">
      <div className="w-1/4">
        <h1 className="pl-6 text-xl font-bold">Giới thiệu</h1>
        <ul className="menu rounded-box">
          <li className="text-md font-semibold text-gray-500 my-1 ">
            <a
              onClick={() =>
                setSearchParams({ ...allParams, about: "general", tab: "info" })
              }
              className={
                (searchParams.get("tab") == "info" &&
                  (!searchParams.get("about") ||
                    searchParams.get("about") == "general")) ||
                (!searchParams.get("about") && !searchParams.get("tab"))
                  ? `active`
                  : null
              }
            >
              Tổng quan
            </a>
          </li>
          <li className="text-md font-semibold text-gray-500 my-1">
            <a
              onClick={() =>
                setSearchParams({
                  ...allParams,
                  about: "work_and_education",
                  tab: "info",
                })
              }
              className={
                searchParams.get("about") == "work_and_education"
                  ? `active`
                  : null
              }
            >
              Công việc và học vấn
            </a>
          </li>
        </ul>
      </div>
      <div className="border-gray-200 border-l-2 mx-3"></div>
      {((searchParams.get("tab") == "info" &&
        (!searchParams.get("about") ||
          searchParams.get("about") == "general")) ||
        (!searchParams.get("about") && !searchParams.get("tab"))) && (
        <div className="w-3/4">
          <ul>
            <li>
              <h2 className="h-5 font-bold mb-4">Thông tin liên hệ</h2>
              <button className="flex py-2 items-center gap-2 text-lg text-sky-500 hover:underline">
                <IoMdAddCircleOutline className="text-3xl" />
                <span> Thêm thông tin liên hệ</span>
              </button>
              <div className="flex items-center gap-5  mb-6">
                <IoCall className="text-3xl text-gray-500" />
                <div className="w-full">
                  <h3 className="">0372106260</h3>
                  <p className="text-gray-600 text-sm">Di động</p>
                </div>
                <div>
                  <button className="btn rounded-full p-0 w-9 min-h-9 h-9">
                    <MdOutlineModeEditOutline className="text-2xl " />
                  </button>
                </div>
              </div>
              <div className="flex items-center gap-5  mb-6">
                <RiMailSendLine className="text-3xl text-gray-500" />
                <div className="w-full">
                  <h3 className="">trieuphan0211@gmail.com</h3>
                  <p className="text-gray-600 text-sm">Email</p>
                </div>
                <div>
                  <button className="btn rounded-full p-0 w-9 min-h-9 h-9">
                    <MdOutlineModeEditOutline className="text-2xl " />
                  </button>
                </div>
              </div>
            </li>

            <li>
              <h2 className="h-5 font-bold mb-4">Thông tin cơ bản</h2>
              <button className="flex py-2 items-center gap-2 text-lg text-sky-500 hover:underline">
                <IoMdAddCircleOutline className="text-3xl" />
                <span> Thêm thông tin cơ bản</span>
              </button>
              <div className="flex items-center gap-5  mb-6">
                <GoPerson className="text-3xl text-gray-500" />
                <div className="w-full">
                  <h3 className="">Phan Ngọc Triệu</h3>
                  <p className="text-gray-600 text-sm">Họ và tên</p>
                </div>
                <div>
                  <button className="btn rounded-full p-0 w-9 min-h-9 h-9">
                    <MdOutlineModeEditOutline className="text-2xl " />
                  </button>
                </div>
              </div>
              <div className="flex items-center gap-5  mb-6">
                <FaTransgenderAlt className="text-3xl text-gray-500" />
                <div className="w-full">
                  <h3 className="">Nam</h3>
                  <p className="text-gray-600 text-sm">Giới tính</p>
                </div>
                <div>
                  <button className="btn rounded-full p-0 w-9 min-h-9 h-9">
                    <MdOutlineModeEditOutline className="text-2xl " />
                  </button>
                </div>
              </div>
              <div className="flex items-center gap-5  mb-6">
                <LiaBirthdayCakeSolid className="text-3xl text-gray-500" />
                <div className="w-full">
                  <h3 className="">02/11/2002</h3>
                  <p className="text-gray-600 text-sm">Ngày sinh</p>
                </div>
                <div>
                  <button className="btn rounded-full p-0 w-9 min-h-9 h-9">
                    <MdOutlineModeEditOutline className="text-2xl " />
                  </button>
                </div>
              </div>
            </li>
          </ul>
        </div>
      )}

      {((searchParams.get("about") == "work_and_education" &&
        searchParams.get("tab") == "info") ||
        (!searchParams.get("about") == "work_and_education" &&
          !searchParams.get("tab"))) && (
        <div className="w-full">
          <ul>
            <li>
              <h2 className="h-5 font-bold mb-4">Công việc</h2>
              <button className="flex py-2 items-center gap-2 text-lg text-sky-500 hover:underline">
                <IoMdAddCircleOutline className="text-3xl" />
                <span> Thêm công việc</span>
              </button>
              <div className="flex items-center gap-5  mb-6">
                <MdWork className="text-3xl text-gray-500" />
                <div className="w-full">
                  <h3 className="">Web developer tại Mobile-id</h3>
                  <p className="text-gray-600 text-sm">Thành phố Hồ Chí Minh</p>
                  <p className="text-gray-600 text-sm">No Mô tả</p>
                </div>
                <div>
                  <button className="btn rounded-full p-0 w-9 min-h-9 h-9">
                    <MdOutlineModeEditOutline className="text-2xl " />
                  </button>
                </div>
              </div>
            </li>
            <li>
              <h2 className="h-5 font-bold mb-4">Đại học</h2>
              <button className="flex py-2 items-center gap-2 text-lg text-sky-500 hover:underline">
                <IoMdAddCircleOutline className="text-3xl" />
                <span> Thêm trường cao đẳng/ đại học</span>
              </button>
              <div className="flex items-center gap-5  mb-6">
                <MdWork className="text-3xl text-gray-500" />
                <div className="w-full">
                  <h3 className="">
                    Học Công nghệ thông tin tại Trường đại học Văn Lang
                  </h3>
                  <p className="text-gray-600 text-sm">Thành phố Hồ Chí Minh</p>
                  <p className="text-gray-600 text-sm">
                    28 tháng 9, 2020 - Hiện tại
                  </p>
                </div>
                <div>
                  <button className="btn rounded-full p-0 w-9 min-h-9 h-9">
                    <MdOutlineModeEditOutline className="text-2xl " />
                  </button>
                </div>
              </div>
            </li>
            <li>
              <h2 className="h-5 font-bold mb-4">Trường trung học</h2>
              <button className="flex py-2 items-center gap-2 text-lg text-sky-500 hover:underline">
                <IoMdAddCircleOutline className="text-3xl" />
                <span> Thêm trường trung học</span>
              </button>
              <div className="flex items-center gap-5  mb-6">
                <MdWork className="text-3xl text-gray-500" />
                <div className="w-full">
                  <h3 className="">Đã học tại Trường THPT Số 1 Đức Phổ</h3>
                  <p className="text-gray-600 text-sm">Tốt nghiệp năm 2020</p>
                </div>
                <div>
                  <button className="btn rounded-full p-0 w-9 min-h-9 h-9">
                    <MdOutlineModeEditOutline className="text-2xl " />
                  </button>
                </div>
              </div>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};
