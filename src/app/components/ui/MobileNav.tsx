

import React from "react";
import Link from "next/link";

interface MobileNavProps {
  onClose: () => void;
}

const MobileNav: React.FC<MobileNavProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div className="bg-white p-4 rounded-lg">
        <ul className="space-y-4">
          <li>
            <Link href="/home">
              <a
                className="text-blue-500 hover:text-blue-700"
                onClick={onClose}
              >
                Home
              </a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a
                className="text-blue-500 hover:text-blue-700"
                onClick={onClose}
              >
                About
              </a>
            </Link>
          </li>
          <li>
            <Link href="/services">
              <a
                className="text-blue-500 hover:text-blue-700"
                onClick={onClose}
              >
                Services
              </a>
            </Link>
          </li>
          {/* Add more navigation links as needed */}
        </ul>
        <button
          onClick={onClose}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default MobileNav;
