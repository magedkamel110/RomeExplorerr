"use client"
import React from "react";
import Legal from "../../components/Legal";
const Cookies = () => {
  const sections = [
    {
      title: "Cookies and other web technologies",
      content: `We collection personal data via cookies and similar technologies. “Cookies” are pieces of information that are stored by your web browser on your computer’s hard disk, for record-keeping purposes. Changes to Our Privacy Policy We know that our business will continue to evolve, and, as such, from time to time this Privacy Policy may be reviewed and revised.Rome Explorers reserves the right to change this Privacy Policy by posting the changes on its website. You can determine when this Privacy Policy was last updated by reviewing the LAST UPDATED legend stated on this Privacy Policy and any revisions will take effect upon posting. We will notify our members of material changes to this Privacy Policy by either sending a notice to the email address you provided to us or by placing a notice on our website. We encourage you to check this Privacy Policy from time to time to review the most current version.`,
    },
    {
      title: "Collection of your personal data",
      content: `In the course of our business, we collect and process personal data in different ways. We may collect personal data you give us directly but we also collect data by logging how you interact with our services, for example by using cookies on this website. We may also receive personal data from third parties.The personal data we collect about you may include, but is not limited to: your name, email address, postal address, phone number, billing information, survey responses, reservation details and other information you may provide about yourself to our site, your IP address and web browser software.You can choose not to provide personal data to us, but in general some personal data about you is required in order for you to receive relevant offerings from Rome Explorers and its partners, and to enjoy benefits of being a registered member.`,
    },
    {
      title: "How we use your personal data",
      content: `We use the personal data that we collect about you only for specific purposes. This includes, but is not limited to offer our services to you, to manage your registration and account, including your access to and use of our website and to publish your reviews, ratings and photos, communicate with you about your account or use of our site and services, to respond to, or follow up on, your comments and questions, and otherwise provide customer service, notify you about changes to our terms or privacy policy, ask you to leave a review or take a survey, operate and improve our site and services, personalize your experience on our site, measure interest in and improve our site and services, notify you about promotions and special offers, to let you partake in a prize draw, competition or complete a survey, protect, investigate and deter against fraudulent, unauthorized or illegal activity, administer and protect our business and to resolve disputes or troubleshoot problems. We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:`,
    },
    {
      title: "Disabling Analytics",
      content: `If you'd like to disable our analytics, which is completely anonymous, clear your browser's cache for this website and disable analytics via the Accept button dropdown menu in our Cookies and Consent banner.`,
    },
  ];
  return (
    <>
      <div style={{ height: "70px" }}></div>
      <Legal title="Cookies" sections={sections} />
    </>
  );
};

export default Cookies;
