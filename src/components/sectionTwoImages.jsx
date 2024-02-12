export const SectionTwoImages = ({ img1, img2, altText, altText2 }) => {
  return (
    <article>
      <div className=" flex justify-between gap-4">
        <div>
          <img src={img1} alt={altText} />
        </div>
        {img2 && (
          <div>
            <img src={img2} alt={altText2} />
          </div>
        )}
      </div>
    </article>
  );
};
