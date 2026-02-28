import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './FAQ.css';

const faqs = [
  {
    question: "Why should I pick CSRS to install my new roof?",
    answer: "The contractor involved with your roofing project is the most important factor of the job. ANYONE can sell you the materials but getting them installed in a professional and legal manner should be your highest priority. CSRS has been in business for over a quarter of a century and we have seen many roof-over companies come and go during that time. Can you afford to take chances with an unknown company, or worse yet, a “company” that has copied our system and then claims to be us? While many of these “companies” are now out of business, there are “replacement” companies taking over their customer list and subjecting former customers to unscrupulous repair or warranty offers. Call us immediately if you feel you’re being subjugated to “high pressure” sales tactics for “warranty” or other purposes. Remember, in the state of Florida, YOU, the homeowner, can be fined up to $10,000.00 for hiring an unlicensed contractor! Even if you, the homeowner, pull your own permit you must hire a licensed contractor to do the actual work. Should you have any questions about this please call your local county or city building department for information BEFORE you start any project. REMEMBER..........unlicensed contracting in the state of Florida is a felony."
  },
  {
    question: "What about the “competition?”",
    answer: "Since WE virtually pioneered using commercial grade insulated roof membranes for manufactured homes, there have been many attempts to “copy” our success. The hurricanes of 2004 showed how inferior installation techniques using subcontracted crews destroyed thousands of roofovers. Many of these “companies” are either out of business now or have simply changed their name and operate in disguise. If you are not doing business directly with the contractor of record, you are vulnerable to deceptive sales and installation tactics. Remember, a salesman in the state of Florida is NOT licensed and can say or do anything to get your money. With CSRS, you deal DIRECT with the owner of the company. He is the contractor, and license holder for the corporation. You can believe everything he says because HE is the owner, not a salesman. THIS is the difference between us and all the other “pretenders” in this business. We do not telemarket or in any way harass our customers as these companies ALL do. These companies are located in the Tampa area and points south. Before you consider giving these people your hard earned money, just call us and we will tell you all about their history, no questions asked."
  },
  {
    question: "What about getting my system installed immediately??",
    answer: "Naturally we are aware of the damage caused by any roof leak whether it’s large or small. The minute you see moisture in your ceiling area indicates that the insulation etc. above the leak in the roof cavity is completely soaked. The next thing that happens is mold and mildew damage that results in the complete removal of the ceiling and all things above it. We give leaking roofs TOP PRIORITY to all other jobs on our schedule. No other company will offer this quick service."
  },
  {
    question: "I know what a shingle roof is, what is an insulated \"single-ply\" membrane roof system?",
    answer: "Single-ply membrane roofs have been used in commercial construction for over 50 years. Unlike shingles or metal roofing, membrane roofs are a true \"water proofer\" instead of being \"water shedders.\" In other words membrane roofs are designed to be leak free even under standing water. Besides the commercial application of this product it makes an ideal roofing system for manufactured homes or conventional homes with flat or low-sloped roof designs. Many of the older homes in Florida have a gravel surface. An insulated membrane roof system is the ONLY way to permanently fix these older roofs and will last a lifetime."
  },
  {
    question: "OK, I'm convinced that CSRS not only knows roofing products but also the correct way to apply them. How do I arrange for CSRS to become my roofing contractor?",
    answer: "That's the easy part. Just give us a call at any of our 3 local numbers and we'll be glad to discuss your roofing project. We will make suggestions and set a time to come out and inspect your roof area. Should you decide to have us out to your home all that we ask is that you're ready to save some money. The owner of the company personally comes out to your home or business, we do not use any sales representatives or subcontractors ................ Give us a call today!"
  }
];

const FAQ: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section id="faq" className="faq-section">
      <div className="container">
        <h2 className="section-title">Frequently Asked Questions</h2>
        <p className="section-description">
          Important information for manufactured home owners. Please read these frequently asked questions to learn why CSRS is the right choice for your roofing needs.
        </p>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <h3 className="faq-question">
                <span className="question-prefix">Q.</span> {faq.question}
              </h3>
              <div className="faq-answer">
                <span className="answer-prefix">A.</span>
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="faq-footer">
          <Link to="/" className="btn btn-secondary">Back to Home</Link>
          <HashLink smooth to="/#contact" className="btn btn-primary">Request a Free Estimate</HashLink>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
