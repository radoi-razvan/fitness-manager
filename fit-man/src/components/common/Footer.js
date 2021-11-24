import React from "react";

export const Footer = () => {
  return (
    <footer class="footer">
      <div>
        &copy; {new Date().getFullYear()} - <span>FitMan</span>
      </div>
    </footer>
  );
};
