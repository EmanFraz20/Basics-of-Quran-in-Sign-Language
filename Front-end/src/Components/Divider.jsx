import React from "react";

// This is a functional React component called Divider
function Divider() {
  return (
    <>
      {/* The main container div for the wave divider */}
      <div className="wave-divider">
        {/* SVG element representing the wave shape */}
        <svg
          data-name="Layer 1" // Optional attribute for naming the SVG layer
          xmlns="http://www.w3.org/2000/svg" // XML namespace for SVG elements
          viewBox="0 0 1200 120" // Defines the viewbox dimensions of the SVG
          preserveAspectRatio="none" // Ensures the aspect ratio is not preserved, allowing for stretching
        >
          <path
            // Defines the path of the wave shape using SVG path syntax
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill" // CSS class for styling the path
          ></path>
        </svg>
      </div>
    </>
  );
}

export default Divider;
