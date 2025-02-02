"use client"
import React from "react";
import Legal from "../../components/Legal";
const CancecllationPolicy = () => {
  const sections = [
    {
      title: "Rome Explorers Website Terms, Conditions and Notices",
      content:
        "When you book a reservation for a Product through the Website, Rome Explorers collects your payment information and processes your payment as described below under “Payment Processing”. Rome Explorers accepts the following credit cards: Mastercard, Visa, American Express, Discover. There is no charge or service fee for processing credit or debit card payments. Full payment by credit or debit card is required to make a reservation. Payment will be listed as PayPal * Travel Agent Rome Explorers on the credit or debit card statement.No refunds are available once a tour or service has commenced, or in respect of any package, accommodation, meals or any other services utilized.If you wish to cancel a reservation made via the Website, Our cancellation policy contained in the applicable product listing will apply to, and govern the terms of, your cancellation and any refunds. When canceling a booking, you will be notified via email or telephone of the total refund amount you will receive.The standard cancellation policy for our Tours is:" +
        " \n \t 1. a 100% refund for cancellations made at least 24 hours in advance of the start date of the experience." +
        " \n \t 2. Cancellations made within 24 hours of the start date of the experience will receive no refund." +
        " \n \t The value of the transaction may be subject to taxes, duties, foreign transaction, currency exchange or other fees. Your bank or credit or debit card company may convert the payment into the local currency and charge fees, resulting in differences between the amount displayed on Rome Explorers’s websites, and the final amount charged to your bank account or credit or debit card statement. Please contact your bank or card company if you have any questions concerning any applicable conversion or fees.",
    }
  ];
  return (
    <>
      <div style={{ height: "70px" }}></div>
      <Legal title="Cancecllation Policy" sections={sections} />
    </>
  );
};

export default CancecllationPolicy;
