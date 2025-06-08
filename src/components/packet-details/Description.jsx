const Description = ({ description, extraDescription }) => {
  return (
    <div>
      <p>{description}</p>
      {extraDescription && <p className="mt-3">{extraDescription}</p>}
    </div>
  );
};

export default Description;
