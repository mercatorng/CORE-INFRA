import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className=" grid place-items-center text-lg">
      <p className=" mb-8">The page you are looking for does not exist.</p>
      <Link to="/">Go Home</Link>
    </div>
  );
};
