import DesktopSidebar from "./DesktopSidebar";
import MobileSidebar from "./MobileSidebar";

type Props = {};

const Sidebar = (props: Props) => {
  return (
    <div className="h-full flex items-center justify-center bg-gray-200">
      <DesktopSidebar />
      <MobileSidebar />
    </div>
  );
};

export default Sidebar;
