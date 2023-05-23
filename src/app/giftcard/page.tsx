import CarouselContainer from "@/components/giftcard/CarouselContainer";

const GiftcardSection = () => {
  return (
    <section className="h-screen py-[80px] flex flex-col items-center justify-center space-y-4">
      <div className="text-center">
        <h2 className="font-semibold text-md uppercase">Our Giftcards</h2>
        <p className="text-4xl font-bold">Our Available Designs</p>
      </div>

      <CarouselContainer />
    </section>
  );
};

export default GiftcardSection;
