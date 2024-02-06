import React, { useRef, useState } from 'react';
import ReCAPTCHA from "react-google-recaptcha";

const MyForm = () => {
  const recaptchaRef = useRef(null);
  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);

  const handleCaptchaChange = (value) => {
    setIsCaptchaVerified(true);
  };

  const handleSubmit = () => {
    if (isCaptchaVerified) {
      console.log("Form submitted successfully!");
    } else {
      console.log("Captcha not verified. Please complete the captcha.");
    }
  };

  return (
    <div>
      <form>
        <ReCAPTCHA
          sitekey="6Ldgc2kpAAAAAAP8egjKitqUxfXLoQy8WE23zFzU"
          onChange={handleCaptchaChange}
          ref={recaptchaRef}
        />

        <button type="button" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default MyForm;
