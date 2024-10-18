


import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next'; // Import the useTranslation hook
import english from '../assets/images/en_US.png'
import arabic from '../assets/images/Flag_of_Saudi_Arabia.png'

const LanguageSelector = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const { i18n } = useTranslation(); // Destructure i18n from useTranslation hook

  // Function to detect user's language based on geolocation
  const detectUserLanguage = async () => {
    try {
      const response = await fetch('https://ipinfo.io/json?token=4bb75c262b0ccb'); // Geolocation API
      const data = await response.json();
      const country = data.country; // Get the user's country

      console.log('geolocation', data); // For debugging purposes
      console.log('geolocation country', data.country); // For debugging purposes

      // Default language is English
      let detectedLanguage = 'en';

      // If the user's country is in the Arabic-speaking regions (by country name), set detectedLanguage to 'ar'
      const arabicSpeakingCountries = ['KSA', 'UAE','IN','QA','BH','YEM','KW'];

      if (arabicSpeakingCountries.includes(country)) {
        detectedLanguage = 'ar'; // Arabic for selected countries
      }

      i18n.changeLanguage(detectedLanguage); // Change language using i18n
      localStorage.setItem('language', detectedLanguage); // Save detected language in localStorage
    } catch (error) {
      console.error("Error detecting user language:", error);
    }
  };

  // Detect the user's language on component mount (or check if already stored)
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language'); // Check for saved language in localStorage
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage); // Use saved language if found
    } else {
      detectUserLanguage(); // Otherwise, detect it from the user's location
    }
  }, [i18n]);

  // Function to handle manual language change by the user
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang); // Change language using i18n
    localStorage.setItem('language', lang); // Save language preference in localStorage
  };
  const [selectedLanguage, setSelectedLanguage] = useState('en'); // Default language is English
  
  const handleLanguageChange = (lang) => {
    setSelectedLanguage(lang);
    changeLanguage(lang); // Call your language change function
  //  let languageList= document.getElementById('language-list')
  //  languageList.close()
   setIsDropdownOpen(false)
  };


  return (
    <div>
      

    <ul className="menu p-0 lg:menu-horizontal bg-base-200 rounded-box ">
  <li>
    <details open={isDropdownOpen} onToggle={() => setIsDropdownOpen(!isDropdownOpen)} >
      <summary className='hover:!bg-primary hover:!text-white' >
      {selectedLanguage === 'en' ? (
          <>
            <img src={english} alt="English" className="w-5 h-[13px] " />
            EN
          </>
        ) : (
          <>
            <img src={arabic} alt="Arabic" className="w-5 h-[13px] " />
            SA
          </>
        )}
      </summary>
      <ul className='z-10 ' id='language-list'>
      <li
            onClick={() => handleLanguageChange('en')}
            className="flex items-center p-2 hover:bg-primary hover:text-white rounded-lg cursor-pointer"
          >
            {/* <img src={english} alt="English" className="w-5 h-5 mr-1" /> */}
            English
          </li>
          <li
            onClick={() => handleLanguageChange('ar')}
            className="flex items-center p-2 hover:bg-primary hover:text-white rounded-lg cursor-pointer"
          >
            {/* <img src={english} alt="Arabic" className="w-5 h-5 mr-1" /> */}
            Arabic
          </li>
        
      </ul>
    </details>
  </li>
</ul>





      
    </div>
  );
};

export default LanguageSelector;



