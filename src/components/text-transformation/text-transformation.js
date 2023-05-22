import "./text-transformations.css";

const Slogan = ({ text, color,}) => {
  return (
    <p className="slogan" style={{ color: color }}>
      {UpperCase(text)}
    </p>
  );
};

const UpperCase = (text) => {
  return <>
            {text.toUpperCase()}
        </>;
};

export default Slogan;
