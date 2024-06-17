import { Icon } from "./icon";

export const Feature = ({title = '',icon = '',desc = ''}) => {
  return (
    <>
      <div className="feature flex flex-row space-x-[15px]">
        <div className="feature-head flex space-x-4 ">
          <div className="icon w-[40px]">
            <Icon src={icon} alt="bright" />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="title font-bold text-[40px] sm:text-[20px]">{title}</div>
          <p className="desc  sm:w-[15rem]">
          {desc}
          </p>
        </div>
      </div>
    </>
  );
};
