import { GiftCardItem } from "@/utils/constant";

const CarouselContainer = () => {
  return (
    <div className="carousel w-full h-[550px]">
      {GiftCardItem.map((item) => (
        <div
          key={item.id}
          id={item.id}
          className="carousel-item relative w-full flex flex-col items-center text-center space-y-4"
        >
          <div className="w-[320px] h-[200px] md:w-[400px] md:h-[280] bg-black rounded-xl" />
          <div>
            <h3 className="text-xl font-semibold capitalize pb-2">
              {item.title}
            </h3>
            <p className="w-2/3 md:w-4/6 text-sm mx-auto  md:text-base">
              {item.desc}
            </p>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-1 right-1 top-1/2">
            <a href={item.link} className="btn btn-circle">
              ❮
            </a>
            <a href={item.link} className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CarouselContainer;
