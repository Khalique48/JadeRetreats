import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faMapPin,
  faPhoneAlt,
  faComment,
} from "@fortawesome/free-solid-svg-icons";

const VisitSection = () => {
  return (
    <div className="w-screen overflow-hidden">
      <section className="bg-black py-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Left Column */}
            <div className="p-4">
              <h2 className="text-3xl font-semibold mb-4 text-borderColor">
                Want to visit?
              </h2>
              <ul className="space-y-4">
                <li className="flex text-borderColor items-center space-x-2">
                  <FontAwesomeIcon icon={faMapPin} style={{ height: 20 }} />
                  <span className="text-white">
                    76, phase II, Royal Enclave, Srirampura, Bengaluru - 64
                  </span>
                </li>
                <li className="flex text-borderColor items-center space-x-2">
                  <FontAwesomeIcon icon={faPhoneAlt} style={{ height: 20 }} />
                  <span className="text-white">+91 7760161666</span>
                </li>
                <li className="flex text-borderColor items-center space-x-2">
                  <FontAwesomeIcon icon={faComment} style={{ height: 20 }} />
                  <span className="text-white">Info@jadehospitainment.com</span>
                </li>
              </ul>
            </div>
            {/* Right Column */}
            <div className="p-4">
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  className="w-full h-full"
                  src="https://maps.google.com/maps?q=76%2C%20phase%20II%2C%20Royal%20Enclave%2C%20Srirampura%2C%20Bengaluru&amp;t=m&amp;z=10&amp;output=embed&amp;iwloc=near"
                  title="76, phase II, Royal Enclave, Srirampura, Bengaluru"
                  aria-label="76, phase II, Royal Enclave, Srirampura, Bengaluru"
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-black py-8 justifu-between">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4">
              <p className="text-white text-base">
                This website is not part of the Facebook website or Facebook Inc
                and Google. Additionally, this site is not endorsed by Facebook
                and Google in any way.
              </p>
            </div>
            <div className="p-4 flex justify-end sm:justify-start">
              <div className="grid grid-cols-3 gap-4">
                <a
                  href="https://www.facebook.com/jadehospitainment/"
                  target="_blank"
                  className="text-white flex items-center space-x-2"
                >
                  <span className="sr-only">Facebook</span>
                  <img src="/facebook.png" alt="Facebook" className="h-8 w-8" />
                </a>
                <a
                  href="https://www.instagram.com/jadehospitainment/"
                  target="_blank"
                  className="text-white flex items-center space-x-2"
                >
                  <span className="sr-only">Instagram</span>
                  <img
                    src="/instagram.jpeg"
                    alt="Instagram"
                    className="h-8 w-8"
                  />
                </a>
                <a
                  href="https://www.youtube.com/channel/UCi4ojPdsZzYm-Mslhe_tE4Q"
                  target="_blank"
                  className="text-white flex items-center space-x-2"
                >
                  <span className="sr-only">Youtube</span>
                  <img src="/youtube.png" alt="Youtube" className="h-8 w-8" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VisitSection;
