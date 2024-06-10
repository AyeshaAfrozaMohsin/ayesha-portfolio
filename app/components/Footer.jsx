// components/Footer.js

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import DownloadButton from "./DownloadButton";

export default function Footer() {
  return (
    <footer className="text-center dark:bg-slate-900 bg-stone-300 text-stone-800 dark:text-white p-4 shadow-lg md:hidden">
      <div className="mt-8">
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-2 ">
          <li className="flex justify-center items-center py-2">
            <FontAwesomeIcon
              icon={faMapMarkerAlt}
              className="text-red-600 mr-2 w-5 dark:text-pink-600"
            />
            <p>Farmgate, Dhaka-1215</p>
          </li>
          <li className="flex justify-center items-center py-2">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="text-sky-700 mr-2 w-5 dark:text-sky-500"
            />
            <p>ayeshaafroza@iut-dhaka.edu</p>
          </li>
          <li className="flex justify-center items-center py-2">
            <FontAwesomeIcon
              icon={faLinkedin}
              className="text-blue-700 mr-2 w-5 dark:text-blue-400"
            />
            <p>/ayesha-afroza-mohsin</p>
          </li>
          <li className="flex justify-center items-center py-2">
            <FontAwesomeIcon
              icon={faGithub}
              className="text-gray-900 mr-2 w-5 dark:text-gray-100"
            />
            <p>/AyeshaMohsin</p>
          </li>
        </ul>
      </div>
      <div className="my-2">
        <DownloadButton />
      </div>
      <p className="text-sm mt-4">
        &copy; {new Date().getFullYear()} Ayesha Afroza Mohsin
      </p>
    </footer>
  );
}
