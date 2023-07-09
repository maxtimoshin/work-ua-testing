import { TabNavItemProps } from "../../types/tabs";
import Filters from "../filters/Filters";

const TabNavItem = ({
  id,
  title,
  currentTab,
  tabHandler,
  modal,
  modalContent,
}: TabNavItemProps) => {
  return (
    <li
      className={`py-[10px] flex px-[30px] font-[400] cursor-pointer ${
        currentTab === id ? "bg-[#FFF] cursor-default" : "bg-[#E9EBED]"
      }`}
      onClick={() => tabHandler(id)}
    >
      {title}
      {modal ? <Filters {...modalContent} currentTab={currentTab} /> : null}
    </li>
  );
};

export default TabNavItem;
