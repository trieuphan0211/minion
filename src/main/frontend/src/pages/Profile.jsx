import { useSearchParams } from "react-router-dom";
import { Avatar, Background, General } from "../components/profile";
import { CV } from "../components/profile/CV";

export const Profile = () => {
  // Begin: Get and Set Parameters
  let [searchParams, setSearchParams] = useSearchParams();
  const allParams = Object.fromEntries(searchParams.entries());
  // End: Get and Set Parameters
  return (
    <div className=" mx-auto max-w-[1250px] font-sans">
      <div className="pt-16  border-b border-gray-300">
        <Background />
        <Avatar />
      </div>
      <div className="">
        <div role="tablist" className="tabs">
          <input
            type="radio"
            name="my_tabs"
            role="tab"
            onClick={() => setSearchParams({ tab: "info" })}
            className="tab text-lg font-bold h-14 checked:text-yellow-400 checked:border-yellow-400 checked:border-b-2"
            aria-label="Giới thiệu"
            checked={allParams.tab == "info" || !allParams.tab}
          />
          <div
            role="tabpanel"
            className="tab-content p-10 col-span-4 shadow-inner bg-gray-50 rounded-lg"
          >
            <General />
          </div>

          <input
            type="radio"
            name="my_tabs"
            role="tab"
            onClick={() => setSearchParams({ tab: "images" })}
            className="tab text-lg font-bold h-14 checked:text-yellow-400 checked:border-yellow-400 checked:border-b-2"
            aria-label="Hình ảnh"
            checked={allParams.tab == "images"}
          />
          <div
            role="tabpanel"
            className="tab-content p-10 col-span-4 shadow-inner bg-gray-50 rounded-lg"
          >
            Hình ảnh
          </div>

          <input
            type="radio"
            name="my_tabs"
            role="tab"
            onClick={() => setSearchParams({ tab: "video" })}
            className="tab text-lg font-bold h-14 checked:text-yellow-400 checked:border-yellow-400 checked:border-b-2"
            aria-label="Video"
            checked={allParams.tab == "video"}
          />
          <div
            role="tabpanel"
            className="tab-content p-10 col-span-4 shadow-inner bg-gray-50 rounded-lg"
          >
            Video
          </div>
          <input
            type="radio"
            name="my_tabs"
            role="tab"
            onClick={() => setSearchParams({ tab: "cv" })}
            className="tab text-lg font-bold h-14 checked:text-yellow-400 checked:border-yellow-400 checked:border-b-2"
            aria-label="CV"
            checked={allParams.tab == "cv"}
          />
          <div
            role="tabpanel"
            className="tab-content col-span-4 shadow-inner bg-gray-50 rounded-lg"
          >
            <CV />
          </div>
        </div>
      </div>
    </div>
  );
};
