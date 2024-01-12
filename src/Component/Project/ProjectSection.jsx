import React from "react";
import { Link } from "react-router-dom";

function ProjectSection({ title }) {
  return (
    <div className="py-24 mt-3 bg-[#fafafa] rounded flex items-center justify-center">
      <div>
        <Link to="/design" className="text-sm text-center ">
        <h2 className="text-3xl text-blue font-medium mb-1 text-center">
          {title}
        </h2>
        </Link>
      </div>
    </div>
  );
}

export default ProjectSection;