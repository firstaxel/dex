import clsx from "clsx";
import Link from "next/link";
import { FC } from "react";
import { IconType } from "react-icons";

type DesktopItemProps = {
  href: string;
  icon: IconType;
  label: string;
  active?: boolean;
  onClick?: () => void;
};

const DesktopItem: FC<DesktopItemProps> = ({
  href,
  icon: Icon,
  label,
  active,
  onClick,
}) => {
  const handleClick = () => {
    if (onClick) {
      return onClick();
    }
  };

  return (
    <li onClick={handleClick}>
      <Link
        href={href}
        className={clsx(
          `
        flex
        group
        gap-x-3
        p-3
        text-sm
        leading-6
        font-semibold
        text-gray-500
        hover:text-red-500
        hover:bg-gray-200
        rounded-xl
        transition
        duration-150
        `,
          active && "bg-red-500 text-neutral-100"
        )}
      >
        <Icon className="h-6 w-6 shrink-0" />
        <span>{label}</span>
      </Link>
    </li>
  );
};

export default DesktopItem;
