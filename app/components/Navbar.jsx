import Link from "next/link";
import { BsInstagram, BsGithub } from "react-icons/bs";
export default function Navbar() {
  return (
    <nav className="mt-1 w-full bg-gray-500 text-white rounded-full border border-black">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <img className="h-14 w-15" src="./logo.png" alt="Logo" />
          <span className="font-semibold text-xl tracking-tight ml-2 mr-6">
            Medhive
          </span>
          <Link
            href="Map"
            className="text-gray-300 px-6 py-1 rounded-full border border-white hover:text-white hover:border-t-4 mr-4"
          >
            Map
          </Link>
          <Link
            href="Statistics"
            className="text-gray-300 px-6 py-1 rounded-full border border-white hover:text-white hover:border-t-4 mr-4"
          >
            Statistics
          </Link>
          <Link
            href="Profile"
            className="text-gray-300 px-6 py-1 rounded-full border border-white hover:text-white hover:border-t-4"
          >
            Profile
          </Link>
        </div>
        <div className="flex items-center mx-">
          <Link
            href="About"
            className="text-gray-300 px-3 py-3 rounded-full border border-white hover:text-white hover:border-t-4 mr-1"
          >
            <BsInstagram />
          </Link>
          <Link
            href="About"
            className="text-gray-300 px-3 py-3 rounded-full border border-white hover:text-white hover:border-t-4 mr-4"
          >
            <BsGithub />
          </Link>
          <Link
            href="About"
            className="text-white bg-gray-600 px-10 py-2 rounded-full border border-white hover:text-white hover:border-t-4 mr-2"
          >
            About Us
          </Link>
        </div>
      </div>
    </nav>
  );
}
