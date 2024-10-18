const translateText = async (text, targetLang) => {
    try {
      const response = await fetch('https://libretranslate.com/translate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          q: text,
          source: 'en', // Change this to your source language
          target: targetLang,
          format: 'text',
        }),
      });
      const data = await response.json();
      console.log(data,'data')
      return data.translatedText;
    } catch (error) {
      console.error('Translation error:', error);
      return text; // Return original text in case of error
    }
  };
  
  export default translateText;
  