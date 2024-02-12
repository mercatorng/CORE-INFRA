export const HeroImage = ({ heroImg, altText }) => {
  return (
    <div className=" my-12">
      <img src={heroImg} alt={altText} />
    </div>
  );
};
