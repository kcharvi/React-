import React from "react";

export const Footer = () => {
  let myStyle = {
    position: "absolute",
    width: "100%",
  };
  return (
    <footer className="bg-dark text-light py-3" style={myStyle}>
      <p className="text-center">Copyright &copy; MyTodos.com</p>
    </footer>
  );
};
