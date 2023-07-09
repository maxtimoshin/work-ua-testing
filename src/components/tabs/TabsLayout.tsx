import TabNav from "./TabNav";
import TabContent from "./TabContent";
import { useState } from "react";
import CommentsForm from "../comments/CommentsForm";

const TabsLayout = () => {
  const [currentTab, setCurrentTab] = useState<number>(2);

  const [newCommentAdded, setNewCommentAdded] = useState<boolean>(false);

  const tabHandler = (tab: number) => {
    setCurrentTab(tab);
  };

  return (
    <div className="max-w-[733px] w-full flex flex-col">
      <TabNav tabHandler={tabHandler} currentTab={currentTab} />
      <TabContent currentTab={currentTab} newCommentAdded={newCommentAdded} />
      {currentTab === 2 ? (
        <CommentsForm setNewCommentAdded={setNewCommentAdded} />
      ) : null}
    </div>
  );
};

export default TabsLayout;
