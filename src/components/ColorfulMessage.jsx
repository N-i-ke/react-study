export const ColorfulMessage = (props) => {
  const { color, children } = props;
  const contentStyle = {
    color: color,
    fontSize: "18px",
  };

  return (
    <div>
      <p style={contentStyle}>{props.message}</p>
      <p style={contentStyle}>{children}</p>
    </div>
  );
};
