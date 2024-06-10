// components/Sidebar.js

import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import DownloadButton from "./DownloadButton";

const Sidebar = () => {
  return (
    <div className="w-1/4 overflow-y-auto dark:bg-slate-900 bg-stone-300 text-stone-800 dark:text-white hidden md:flex md:flex-col justify-between p-4 shadow-lg">
      <div>
        <div className="flex items-center justify-center p-1">
          <Image
            src="/profile_picture.jpeg"
            alt="Profile Picture"
            className="rounded-full"
            width={200}
            height={200}
          />
        </div>
        <nav className="mt-8">
          <ul className="space-y-2 px-2">
            <li className="flex justify-content py-2">
              <FontAwesomeIcon
                icon={faMapMarkerAlt}
                className="text-red-600 mr-2 w-5 dark:text-pink-600"
              />
              <p>Farmgate, Dhaka-1215</p>
            </li>
            <li className="flex justify-content py-2">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="text-sky-700 mr-2 w-5 dark:text-sky-500"
              />
              <p>ayeshaafroza@iut-dhaka.edu</p>
            </li>
            <li className="flex justify-content py-2">
              <FontAwesomeIcon
                icon={faLinkedin}
                className="text-blue-700 mr-2 w-5 dark:text-blue-400"
              />
              <p>/ayesha-afroza-mohsin</p>
            </li>
            <li className="flex justify-content py-2">
              <FontAwesomeIcon
                icon={faGithub}
                className="text-gray-900 mr-2 w-5 dark:text-gray-100"
              />
              <p>/AyeshaMohsin</p>
            </li>
            <li className="flex justify-center">
              <DownloadButton />
            </li>
          </ul>
        </nav>
      </div>
      <footer className="text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Ayesha Afroza Mohsin
        </p>
      </footer>
    </div>
  );
};

export default Sidebar;
