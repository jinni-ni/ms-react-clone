import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedin } from "react-icons/fa";

const Social = () => {
  return (
    <div className="flex items-center py-5 px-8 xl:px-20">
      <div className="mr-5">
        <h4>Follow Microsoft</h4>
      </div>
      <div className="flex ">
        <FaFacebookF className="mr-2 text-3xl text-blue-800" />
        <FaTwitter className="mr-2 text-3xl text-blue-700" />
        <FaLinkedin className="mr-2 text-3xl text-blue-600" />
      </div>
    </div>
  );
};

export default Social;
