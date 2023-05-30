import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { AiOutlineProfile, AiOutlineTransaction } from "react-icons/ai";
import { BiSupport } from "react-icons/bi";
import { BsCardList } from "react-icons/bs";
import { HiArrowLeftOnRectangle, HiHome, HiPlus } from "react-icons/hi2";
import useGiftcard from "@/hooks/useGiftcard";
import { signOut } from "next-auth/react";
import { toast } from "react-hot-toast";

const useRoutes = () => {
  const pathname = usePathname();
  const { giftcardId } = useGiftcard();

  const handleLogout = () => {
    signOut({ redirect: false })
      .then(() => {
        toast.success("Logged out successfully");
      })
      .catch((error) => {
        toast.error("There was a problem logging you out");
      });
  };

  const routes = useMemo(
    () => [
      {
        label: "Dashboard",
        href: "/dashboard",
        icon: HiHome,
        active: pathname === "/dashboard",
      },
      {
        label: "Create",
        href: "/dashboard/create",
        icon: HiPlus,
        active: pathname === "/dashboard/create" || !!giftcardId,
      },
      {
        label: "My Giftcards",
        href: "/dashboard/giftcards",
        icon: BsCardList,
        active: pathname === "/dashboard/giftcards",
      },
      {
        label: "Transactions",
        href: "/dashboard/transactions",
        icon: AiOutlineTransaction,
        active: pathname === "/dashboard/transactions",
      },
      {
        label: "My Account",
        href: "/dashboard/account",
        icon: AiOutlineProfile,
        active: pathname === "/dashboard/setting",
      },
      {
        label: "Help and Support",
        href: "/dashboard/help",
        icon: BiSupport,
        active: pathname === "/dashboard/help",
      },
      {
        label: "Logout",
        href: "#",
        icon: HiArrowLeftOnRectangle,
        onClick: () => handleLogout(),
      },
    ],
    [pathname, giftcardId]
  );

  return routes;
};

export default useRoutes;
