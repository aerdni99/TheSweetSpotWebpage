/*
    app/privacy-policy/page.js

    Page for displaying the band's privacy policy
*/ 

export default function PrivacyPolicy() {
    return (
        <div>
            <a href="/">
                <img
                    src='/logo.png'
                    alt='Logo'
                    width={150}
                    height={150}
                    draggable="false"
                    className="select-none drop-shadow-[16px_16px_40px_rgba(0,0,0,0.9)] pl-10"
                    />
            </a>
            <h1 className="text-center text-5xl neonText pb-10 text-bold">Privacy Policy</h1>
            <div className="mx-[20vw] max-sm:mx-10 border-r-2 border-l-2 border-pink-200">
                <div className="mx-5">
                    <p className="neonText text-xl">
                    The Sweet Spot Privacy Policy for Email and Text Communications <br />
                    Effective Date: March 2025 <br />
                    </p><br />
                    <p className="neonText">
                    The Sweet Spot is committed to protecting your personal information and ensuring compliance with applicable privacy laws, including the General Data Protection Regulation (GDPR) in Europe and the relevant privacy laws in the United States, such as the California Consumer Privacy Act (CCPA). This Privacy Policy outlines how we collect, use, store, and protect your information when you engage with us via email and text messaging.
                    </p><br />
                    <h1 className="neonText text-3xl"> 1. Information We Collect </h1>
                    <p className="neonText"> We may collect the following types of information:
                    Contact Information: Your name, email address, phone number, and any other details you provide when subscribing to our mailing list or SMS notifications.
                    Interaction Data: Information about how you interact with our emails or text messages, such as open rates and click-through rates.
                    Device Information: Information about the device you use to access our communications, including IP address and browser details. </p><br />            

                    <h1 className="neonText text-3xl"> 2. How We Use Your Information </h1>
                    <p className="neonText"> We use the information collected for the following purposes:
                    To send you updates about The Sweet Spot’s music, tours, merchandise, and other relevant news.
                    To notify you about promotions, events, and offers.
                    To improve our email and SMS content and delivery based on your preferences and interactions.
                    We will only send you communications if you have given explicit consent (opt-in) to receive them. </p><br />

                    <h1 className="neonText text-3xl"> 3. Legal Basis for Processing </h1>
                    <p className="neonText"> Under GDPR, we process your personal information based on the following legal bases:
                    Consent: When you sign up for our mailing list or SMS notifications, you explicitly consent to receive communications from us.
                    Legitimate Interests: We may process your data to provide relevant updates and enhance your experience, provided it does not override your privacy rights.
                    In the United States, we comply with applicable laws regarding your rights to opt out of marketing communications at any time. </p><br />                 

                    <h1 className="neonText text-3xl"> 4. Data Sharing and Third Parties </h1>
                    <p className="neonText"> We do not sell or rent your personal information. However, we may share your data with trusted third parties to facilitate our email and SMS services, such as:
                    Email marketing platforms.
                    SMS delivery providers.
                    Analytics services.
                    All third-party service providers are bound by strict data protection agreements to ensure the safety and confidentiality of your data. </p><br />

                    <h1 className="neonText text-3xl"> 5. Your Rights </h1>
                    <p className="neonText"> Under GDPR (for EU residents):
                    Access: You have the right to request access to your personal data.
                    Rectification: You can request corrections to any inaccurate or incomplete data.
                    Erasure: You can request that we delete your data (“right to be forgotten”).
                    Data Portability: You can request a copy of your data in a machine-readable format.
                    Objection: You can object to certain processing activities, including direct marketing.
                    Withdrawal of Consent: You can withdraw your consent for receiving communications at any time.
                    Under US laws (e.g., CCPA):
                    Access: You can request details about the personal data we have collected about you.
                    Deletion: You can request the deletion of your personal information.
                    Opt-Out: You can opt out of the sale of your personal information (although we do not sell data).
                    To exercise these rights, contact us at [Insert Contact Email or Link]. </p><br />

                    <h1 className="neonText text-3xl"> 6. Data Retention </h1>
                    <p className="neonText"> We retain your personal data only as long as necessary for the purposes stated in this policy or as required by law. If you unsubscribe from our communications, your data will be deleted or anonymized. </p><br />

                    <h1 className="neonText text-3xl"> 7. Security </h1>
                    <p className="neonText"> We implement industry-standard security measures to protect your data from unauthorized access, loss, or misuse. This includes encryption, firewalls, and secure data storage. </p><br />

                    <h1 className="neonText text-3xl"> 8. Cookies and Tracking Technologies </h1>
                    <p className="neonText"> Our emails and SMS communications may include tracking technologies, such as pixels or links, to measure engagement. You can opt out of tracking by contacting us or adjusting your browser settings. </p><br />

                    <h1 className="neonText text-3xl"> 9. Children’s Privacy </h1>
                    <p className="neonText"> Our services are not directed at individuals under 13 years of age in the US or 16 years of age in the EU. We do not knowingly collect personal data from children. </p><br />

                    <h1 className="neonText text-3xl"> 10. Changes to This Policy </h1>
                    <p className="neonText"> We may update this policy to reflect changes in our practices or legal requirements. The updated policy will be posted on our website with the effective date. </p><br />

                    <h1 className="neonText text-3xl"> 11. Contact Us </h1>
                    <p className="neonText"> For questions, concerns, or to exercise your rights, please contact our management at:</p><br />
                    <p className="neonText"> 
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <a href="mailto:thesweetspotmgmt@gmail.com">thesweetspotmgmt@gmail.com</a>
                    </p><br />

                    <br />
                    <br />

                    <p className="neonText"> By engaging with our email or text services, you acknowledge that you have read and understood this Privacy Policy. Thank you for supporting The Sweet Spot! </p><br />
                </div>
            </div>
        </div>
    );
}