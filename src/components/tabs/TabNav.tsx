import TabNavItem from "./TabNavItem";
import { tabs } from "../../mock-data/tabs";

const TabNav = ({
  tabHandler,
  currentTab,
}: {
  tabHandler: (value: number) => void;
  currentTab: number;
}) => {
  return (
    <ul className="flex">
      {tabs?.map((tab) => (
        <TabNavItem
          key={tab.id}
          {...tab}
          currentTab={currentTab}
          tabHandler={tabHandler}
        />
      ))}
    </ul>
  );
};

export default TabNav;
