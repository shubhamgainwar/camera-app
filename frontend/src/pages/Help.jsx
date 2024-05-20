import { Carousel } from "flowbite-react";

const Help = () => {
  return (
    <>
      <div className="h-4/5 sm:h-64 xl:h-80 2xl:h-96 p-1 gap-16 ml-16 m-16 bg-black">
        <Carousel slideInterval={1000} pauseOnHover>
          <img src="/camImage.jpg" alt="..." className="h-96" />
          <img src="/mulcamfet.jpg" alt="..." className="h-96" />
          <img src="camappfet.jpg" alt="..." className="h-96" />
          <img src="fitnessImage.jpg" alt="..." className="h-96" />
          <img src="meetImage.jpg" alt="..." className="h-96" />
        </Carousel>
      </div>
    </>
  );
};

export default Help;
