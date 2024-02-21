import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import '../Sass/contact.scss';

const YOUR_SERVICE_ID = 'service_mfwqzcm';
const YOUR_TEMPLATE_ID = 'template_9yzcipj';
const YOUR_PUBLIC_KEY = 'XtGAHsKcwbXIdlTNK';
const YOUR_SITE_KEY = '6Ldgc2kpAAAAAAP8egjKitqUxfXLoQy8WE23zFzU';

export const ContactUs = () => {
    const form = useRef();
    const [message, setMessage] = useState('');
    const [showRecaptcha, setShowRecaptcha] = useState(false);

    const sendEmail = async (e) => {
        e.preventDefault();

        if (!showRecaptcha) {
            setShowRecaptcha(true);
            return;
        }

        const token = await window.grecaptcha.execute(YOUR_SITE_KEY, { action: 'submit' });

        emailjs.sendForm(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, form.current, YOUR_PUBLIC_KEY, { 'g-recaptcha-response': token })
            .then((result) => {
                console.log(result.text);
                setMessage('Votre message a été envoyé avec succès!');
            }, (error) => {
                console.log(error.text);
                setMessage('Une erreur s\'est produite. Veuillez réessayer.');
            });
    };

    return (
        <div className='contact'>
            <h2>Me Contacter</h2>
            <div className='form_container'>
                <form className="contact_form" ref={form} onSubmit={sendEmail}>
                    <label className='contact_form_label' htmlFor="user_name">Nom</label>
                    <input className='contact_form_input' type="text" id="user_name" name="user_name" required />

                    <label className='contact_form_label' htmlFor="user_email">Email</label>
                    <input className='contact_form_input' type="email" id="user_email" name="user_email" required />

                    <label className='contact_form_label' htmlFor="user_message">Message</label>
                    <textarea className='contact_form_textarea' id="user_message" name="user_message" required></textarea>

                    {showRecaptcha && (
                        <div className="g-recaptcha" data-sitekey={YOUR_SITE_KEY}></div>
                    )}

                    <button className='contact_form_btn' type="submit">Send Email</button>
                    {message && <p className="success-message">{message}</p>}
                </form>
            </div>
        </div>
    );
};
