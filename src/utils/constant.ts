import { AiFillPlusCircle, AiFillProfile, AiFillSetting } from "react-icons/ai";
import {
  BiConversation,
  BiGlobe,
  BiMoney,
  BiMoneyWithdraw,
  BiSelection,
  BiShield,
} from "react-icons/bi";
import { BsPeople } from "react-icons/bs";

export const NavItems = [
  {
    label: "Features",
    link: "#features",
  },
  {
    label: "Redeem GiftCard",
    link: "/redeem",
  },
  {
    label: "How It Works",
    link: "/howitworks",
  },
  {
    label: "About",
    link: "#about",
  },
  {
    label: "Contact",
    link: "/contact",
  },
];

export const GiftCardItem = [
  {
    id: "slide1",
    title: "Normal GiftCard",
    desc: "Our normal gift-card design is aimed towards people that are looking for a fast-pace gift-card delivered to their inbox immediately thereby sacrificing no time for customizing and designing the gift-card for their loves. ",
    link: "#slide2",
  },
  {
    id: "slide2",
    title: "Customized GiftCard",
    desc: "Our customized gift-card is the best out there because it gives you the full ability for customization. You can add different color, even images of anything to your giftcard and it will be applied and sent to your mail with the design you applied or uploaded to your mail at a very cheap cost. ",
    link: "#slide1",
  },
];

export const Features = [
  {
    label: "24/7 Online",
    desc: "We are available to serve you 24 hours a day to process your order",
    icon: BiConversation,
  },
  {
    label: "Available Worldwide",
    desc: "Our gift-card is available and can be purchased all around the world  ",
    icon: BiGlobe,
  },
  {
    label: "Customizable",
    desc: "We can customizable your gift-card to match specific needs and design",
    icon: AiFillSetting,
  },
  {
    label: "Several Payment Method",
    desc: "We have a lot of payment method to complete your purchase easily",
    icon: BiMoney,
  },
  {
    label: "Smooth Payout",
    desc: "We can redeem your gift-card at blazing speeds with no issues.",
    icon: BiMoneyWithdraw,
  },
  {
    label: "Security",
    desc: "Our gift-cards are secured and can only be redeemed by you or with your authorization",
    icon: BiShield,
  },
];

export const howItWorks = [
  {
    title: "Create your account",
    icon: AiFillPlusCircle,
    iconBg: "#E6DEDD",
    desc: "Start by opening an account with us with your basic details and information then we will refirect you to the dashboard automatically",
  },
  {
    title: "Login into your account",
    icon: AiFillProfile,
    iconBg: "#E6DEDD",
    desc: "Once you open an account with us, you get logged in automatically into your account and you can begin creating your giftcards",
  },
  {
    title: "Choose your design or gift-card type",
    icon: BiSelection,
    iconBg: "#E6DEDD",
    desc: "Once you login into your account, select the type of giftcard you want to create and customize it",
  },
  {
    title: "Make Payment",
    icon: BiMoney,
    iconBg: "#E6DEDD",
    desc: "Once you are done with customizing your giftcard to your liking and then it is time to make the payment for the giftcard",
  },
  {
    title: "Enter the receiver's details",
    icon: BsPeople,
    iconBg: "#E6DEDD",
    desc: "Once you have made the payment and it is successful, then you will be redirected to a page to enter the details of the receiver or you can choose to send it to your email instead ",
  },
];
