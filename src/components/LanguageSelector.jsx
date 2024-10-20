




// import React, { useEffect, useState } from 'react';
// import { useTranslation } from 'react-i18next'; // Import the useTranslation hook
// import english from '../assets/images/en_US.png';
// import arabic from '../assets/images/Flag_of_Saudi_Arabia.png';

// const LanguageSelector = () => {
//   const { i18n } = useTranslation(); // Destructure i18n from useTranslation hook
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State to manage dropdown visibility
//   const [selectedLanguage, setSelectedLanguage] = useState('en'); // Default language is English

//   // Function to detect user's language based on geolocation
//   const detectUserLanguage = async () => {
//     try {
//       const response = await fetch('https://ipinfo.io/json?token=4bb75c262b0ccb'); // Geolocation API
//       const data = await response.json();
//       const country = data.country;

//       let detectedLanguage = 'en'; // Default language is English
//       const arabicSpeakingCountries = ['KSA', 'UAE', 'IN', 'QA', 'BH', 'YEM', 'KW'];

//       if (arabicSpeakingCountries.includes(country)) {
//         detectedLanguage = 'ar'; // Switch to Arabic if the country is in the list
//       }

//       i18n.changeLanguage(detectedLanguage); // Change language using i18n
//       localStorage.setItem('language', detectedLanguage); // Save detected language in localStorage
//       setSelectedLanguage(detectedLanguage);
//     } catch (error) {
//       console.error("Error detecting user language:", error);
//     }
//   };

//   // Detect the user's language on component mount (or check if already stored)
//   useEffect(() => {
//     const savedLanguage = localStorage.getItem('language'); // Check for saved language in localStorage
//     if (savedLanguage) {
//       i18n.changeLanguage(savedLanguage); // Use saved language if found
//       setSelectedLanguage(savedLanguage);
//     } else {
//       detectUserLanguage(); // Otherwise, detect it from the user's location
//     }
//   }, [i18n]);

//   // Function to handle manual language change by the user
//   const handleLanguageChange = (lang) => {
//     localStorage.setItem('language', lang); // Save language preference in localStorage
//     i18n.changeLanguage(lang); // Change language using i18n
//     setSelectedLanguage(lang);
//     setIsDropdownOpen(false);
//   };

//   return (
//     <div>
//       <div className="dropdown dropdown-hover">
//         <div
//           tabIndex={0}
//           role="button"
//           className="flex justify-center items-center rounded-md gap-1 bg-base-200 hover:bg-primary hover:text-white px-2 py-1"
//           onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//         >
//           {selectedLanguage === 'en' ? (
//             <>
//               <img src={english} alt="English" className="w-5 h-[13px]" />
//               EN
//             </>
//           ) : (
//             <>
//               <img src={arabic} alt="Arabic" className="w-5 h-[13px]" />
//               SA
//             </>
//           )}
//         </div>
//         {isDropdownOpen && (
//           <ul className="dropdown-content menu bg-base-100 rounded-box z-20 w-20 p-2 shadow">
//             <li
//               onClick={() => handleLanguageChange('en')}
//               className="flex items-center p-2 hover:bg-primary hover:text-white rounded-lg cursor-pointer"
//             >
//               English
//             </li>
//             <li
//               onClick={() => handleLanguageChange('ar')}
//               className="flex items-center p-2 hover:bg-primary hover:text-white rounded-lg cursor-pointer"
//             >
//               Arabic
//             </li>
//           </ul>
//         )}
//       </div>
//     </div>
//   );
// };

// export default LanguageSelector;



import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next'; // Import the useTranslation hook
import english from '../assets/images/en_US.png';
import arabic from '../assets/images/Flag_of_Saudi_Arabia.png';

const LanguageSelector = () => {
  const { i18n } = useTranslation(); // Destructure i18n from useTranslation hook
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State to manage dropdown visibility
  const [selectedLanguage, setSelectedLanguage] = useState(localStorage.getItem('language') || 'en'); // Default language from localStorage or English

  // Function to detect user's language based on geolocation
  const detectUserLanguage = async () => {
    try {
      const response = await fetch('https://ipinfo.io/json?token=4bb75c262b0ccb'); // Geolocation API
      const data = await response.json();
      const country = data.country;

      let detectedLanguage = 'en'; // Default language is English
      const arabicSpeakingCountries = ['KSA', 'UAE', 'IN', 'QA', 'BH', 'YEM', 'KW'];

      if (arabicSpeakingCountries.includes(country)) {
        detectedLanguage = 'ar'; // Switch to Arabic if the country is in the list
      }

      if (detectedLanguage !== localStorage.getItem('language')) {
        i18n.changeLanguage(detectedLanguage); // Change language using i18n
        localStorage.setItem('language', detectedLanguage); // Save detected language in localStorage
        setSelectedLanguage(detectedLanguage); // Update the state
      }
    } catch (error) {
      console.error("Error detecting user language:", error);
    }
  };

  // Detect the user's language on component mount (or check if already stored)
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language'); // Check for saved language in localStorage
    if (savedLanguage ) {
      console.log('hi')
      i18n.changeLanguage(savedLanguage); // Use saved language if found
      setSelectedLanguage(savedLanguage); // Update the state with the saved language
    } else if (!savedLanguage) {
      detectUserLanguage(); // Otherwise, detect it from the user's location
    }
  }, [i18n, selectedLanguage]);

  // Function to handle manual language change by the user
  const handleLanguageChange = (lang) => {
    if (lang !== selectedLanguage) {
      localStorage.setItem('language', lang); // Save language preference in localStorage
      i18n.changeLanguage(lang); // Change language using i18n
      setSelectedLanguage(lang); // Update the state
      setIsDropdownOpen(false); // Close the dropdown
    }
  };

  return (
    <div>
      <div className="dropdown dropdown-hover">
        <div
          tabIndex={0}
          role="button"
          className="flex justify-center items-center rounded-md gap-1 bg-base-200 hover:bg-primary hover:text-white px-2 py-1"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          {selectedLanguage === 'en' ? (
            <>
              <img src={english} alt="English" className="w-5 h-[13px]" />
              EN
            </>
          ) : (
            <>
              <img src={arabic} alt="Arabic" className="w-5 h-[13px]" />
              SA
            </>
          )}
        </div>
        {isDropdownOpen && (
          <ul className="dropdown-content menu bg-base-100 rounded-box z-20 w-20 p-2 shadow">
            <li
              onClick={() => handleLanguageChange('en')}
              className="flex items-center p-2 hover:bg-primary hover:text-white rounded-lg cursor-pointer"
            >
              English
            </li>
            <li
              onClick={() => handleLanguageChange('ar')}
              className="flex items-center p-2 hover:bg-primary hover:text-white rounded-lg cursor-pointer"
            >
              Arabic
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default LanguageSelector;
