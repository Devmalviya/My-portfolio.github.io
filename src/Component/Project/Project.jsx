import React from "react";
import { Link } from "react-router-dom";

function ProjectSection() {
  return (
    <div>
      <Link to="/design" className="text-sm text-center cursor-pointer ">
        <div className="py-24 mt-3 bg-[#fafafa] rounded flex items-center justify-center">
          <div>
            <h2 className="text-3xl text-blue font-medium mb-1 text-center">
              Designs Project's
            </h2>
          </div>
        </div>
      </Link>
      <Link to="/web-development" className="text-sm text-center cursor-pointer ">
        <div className="py-24 mt-3 bg-[#fafafa] rounded flex items-center justify-center">
          <div>
            <h2 className="text-3xl text-blue font-medium mb-1 text-center  ">
              Web Development project's
            </h2>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ProjectSection;
