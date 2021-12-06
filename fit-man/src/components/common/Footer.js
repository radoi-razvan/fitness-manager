import React from "react";

export const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <p>
            &copy; {new Date().getFullYear()} - <span>FitMan</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};