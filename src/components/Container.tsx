import React from "react";

type ContainerProps = {
  styles: React.CSSProperties;
};
const Container = ({ styles }: ContainerProps) => {
  return <div style={styles}>Implementing styles with typescript</div>;
};

export default Container;
