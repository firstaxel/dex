import FeaturesSection from "@/components/features";
import Link from "next/link";
import GiftcardSection from "../giftcard/page";
import HowItWorksSection from "./howitworks/page";

const HomePage = () => {
  return (
    <main className="h-full w-5/6 mx-auto">
      <section className="h-screen space-y-5 flex flex-col items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="capitalize text-5xl md:text-6xl font-extrabold">
            spread love to <br /> your loved ones.
          </h1>
          <p className="text-sm md:text-base">
            You can decide today to put a smile on your loved ones <br /> by
            sending a giftcard to them, making their day special.
          </p>
        </div>
        <div>
          <Link
            href={"/auth"}
            className="btn bg-red-500 outline-none hover:bg-red-600 border-none"
          >
            Get Started
          </Link>
        </div>
      </section>

      <FeaturesSection />
      <GiftcardSection />
      <HowItWorksSection />
    </main>
  );
};

export default HomePage;
