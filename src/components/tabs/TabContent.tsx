import Feed from "../feed/Feed";

const TabContent = ({
  currentTab,
  newCommentAdded,
}: {
  currentTab: number;
  newCommentAdded: boolean;
}) => {
  const renderTabContent = () => {
    switch (currentTab) {
      case 1:
        return <div></div>;
      case 2:
        return <Feed newCommentAdded={newCommentAdded} />;
      case 3:
        return <div></div>;
      default:
        return null;
    }
  };
  return (
    <div className="w-full bg-[#fff] min-h-[636px] max-h-[636px]  overflow-y-auto border-t border-l border-r border-[#e9ebed]">
      {renderTabContent()}
    </div>
  );
};

export default TabContent;
