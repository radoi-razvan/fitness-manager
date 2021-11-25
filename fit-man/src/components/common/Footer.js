import React from "react";

export const Footer = () => {
  return (
    <footer className="footer myfooter">
      <div>
        &copy; {new Date().getFullYear()} - <span>FitMan</span>
      </div>
    </footer>
  );
};
