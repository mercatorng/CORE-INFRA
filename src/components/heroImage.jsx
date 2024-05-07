export const HeroImage = ({ heroImg, altText }) => {
  return (
    <div className=" my-12 h-[500px] ">
      <img src={heroImg} alt={altText} className="w-full h-full object-cover" />
    </div>
  );
};
