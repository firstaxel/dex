"use client";
import useRoutes from "@/hooks/useRoutes";
import MobileItem from "./MobileItem";

const MobileSidebar = ({}) => {
  const routes = useRoutes();
  return (
    <div
      className="
    lg:hidden 
        fixed 
        inset-y-0
        left-0
        w-[12%]
        z-40
        px-2
        pt-5
        overflow-y-hidden
        bg-white
        border-r-[1px]
        pb-4
        flex
        flex-col
        justify-between
    "
    >
      <nav
        className="flex flex-col items-center
      space-y-1
      "
      >
        <ul role="list">
          {routes.map((item) => (
            <MobileItem
              key={item.label}
              href={item.href}
              label={item.label}
              icon={item.icon}
              active={item.active}
              onClick={item.onClick}
            />
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default MobileSidebar;
