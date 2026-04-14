"use client"
import React from "react";
import Legal from "../../components/Legal";

const PrivacyPolicy = () => {
  const sections = [
    {
      title: "Privacy Policy and Disclosures",
      content: `Rome Explorers believes in protecting your privacy. Please review our current Privacy Policy, which also governs your use of this Website, to understand our practices.In certain circumstances we may disclose information about you to third parties if we determine, in our sole discretion, such disclosure is necessary (a) to protect Rome Explorers ’s systems, assets, employees, members and customers; (b) to ensure the integrity and operation of our business and systems; or (c) to comply with legitimate and enforceable governmental requests, subpoenas or court orders. We may choose to comply with or disregard such requests or orders in our sole discretion. Rome Explorers ’s right to disclose information, including but not limited to user profile information (i.e. name, email address, etc.), IP addressing and traffic information, usage history, and posted content, shall take precedence over any conflicting terms in Rome Explorers Privacy Policy.`,
    },
    {
      title: "Collection of your personal data",
      content: `In the course of our business, we collect and process personal data in different ways. We may collect personal data you give us directly but we also collect data by logging how you interact with our services, for example by using cookies on this website. We may also receive personal data from third parties.The personal data we collect about you may include, but is not limited to: your name, email address, postal address, phone number, billing information, survey responses, reservation details and other information you may provide about yourself to our site, your IP address and web browser software.You can choose not to provide personal data to us, but in general some personal data about you is required in order for you to receive relevant offerings from Rome Explorers and its partners, and to enjoy benefits of being a registered member.`,
    },
    {
      title: "How we use your personal data",
      content: `We use the personal data that we collect about you only for specific purposes. This includes, but is not limited to offer our services to you, to manage your registration and account, including your access to and use of our website and to publish your reviews, ratings and photos, communicate with you about your account or use of our site and services, to respond to, or follow up on, your comments and questions, and otherwise provide customer service, notify you about changes to our terms or privacy policy, ask you to leave a review or take a survey, operate and improve our site and services, personalize your experience on our site, measure interest in and improve our site and services, notify you about promotions and special offers, to let you partake in a prize draw, competition or complete a survey, protect, investigate and deter against fraudulent, unauthorized or illegal activity, administer and protect our business and to resolve disputes or troubleshoot problems. We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances`,
    },
    {
      title: "With whom we share your personal data",
      content: `We may store the contributions and submissions you make to Rome Explorers, including but not limited to your reviews, photos, public profile and ratings (your “Content”), publicly display your Content on our websites and Applications and those of our affiliate partners and distributors, display it to other users, share it with our affiliate partners and distributors, and use it for promotional purposes. Note that if you include personal data in your Content, it can be used and viewed by others. We are not responsible for the information you choose to include in your Content.Rome Explorers may share your personal data with other parties, including other group companies and third parties, such as service providers who work on behalf of us. If we sell or divest our business or any part of it, and your personal data relates to such sold or divested part of our business, or if we merge with another business, we will share your personal data with the new owner of the business or our merger partner, respectively. If we are legally obliged to do so, we will share personal data to protect our customers, the site, as well as our company and our rights and property.`,
    },
  ];
  return (
    <>
      <div style={{ height: "70px" }}></div>
      <Legal title= "Privacy Policy" sections={sections} />
    </>
  );
};

export default PrivacyPolicy;
