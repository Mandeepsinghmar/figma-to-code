import "./Frame26Property1Default.css";

export const Frame26Property1Default = ({
  property1 = "default",
  className,
  ...props
}) => {
  const variantsClassName = "property-1-" + property1;

  return (
    <div
      className={
        "frame-26-property-1-default " + className + " " + variantsClassName
      }
    >
      <div className="book-a-demo">Book a Demo </div>
      {/* <img className="frame" src="frame0.svg" /> */}
    </div>
  );
};
