import { BiCircle } from "react-icons/bi";

const Features = ({ features }) => {
  return (
    <div>
      {features &&
        features.map((feature, idx) => (
          <div className="flex-align-center gap-x-2 mt-3" key={idx}>
            <BiCircle className="text-xs text-primary flex-shrink-0" />
            <p className="text-sm">{feature}</p>
          </div>
        ))}
    </div>
  );
};

export default Features;
