import { Icon } from "./icon";

export const Feature = ({title = '',icon = '',desc = ''}) => {
  return (
    <>
      <div className="feature flex flex-row space-x-[15px]">
        <div className="feature-head flex space-x-4 justify-center">
          <div className="icon">
            <Icon src={icon} alt="bright" />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="title font-bold text-[20px]">{title}</div>
          <p className="desc w-[15rem]">
          {desc}
          </p>
        </div>
      </div>
    </>
  );
};
