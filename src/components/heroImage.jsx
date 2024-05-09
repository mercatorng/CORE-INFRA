export const HeroImage = ({ heroImg, altText }) => {
  return (
    <div className=" my-12 h-[30vh]  lg:h-[300px]">
      <img
        src={heroImg}
        alt={altText}
        className="w-full h-full object-contain  "
      />
    </div>
  );
};
