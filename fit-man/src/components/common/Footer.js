import React from "react";

export const Footer = () => {
  return (
    <footer className="footer">
      <div>
        &copy; {new Date().getFullYear()} - <span>FitMan</span>
      </div>
    </footer>
  );
};
