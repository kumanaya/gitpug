import React from "react";

interface ContainerProps {
  children: JSX.Element;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="bg-custombg min-h-screen flex items-center justify-center">
      {children}
    </div>
  );
};

export default Container;
