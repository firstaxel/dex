import clsx from "clsx";
import Link from "next/link";
import { FC } from "react";
import { IconType } from "react-icons";

type MobileItemProps = {
  href: string;
  icon: IconType;
  label: string;
  active?: boolean;
  onClick?: () => void;
};

const MobileItem: FC<MobileItemProps> = ({
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
       rounded-xl
       transition
       duration-150

        `,
          active && "bg-red-500 text-neutral-100 "
        )}
      >
        <Icon
          className={clsx(`h-8 w-8 shrink-0 `, active && "text-neutral-100 ")}
        />
        <span className={`sr-only`}>{label}</span>
      </Link>
    </li>
  );
};

export default MobileItem;
