const faqs = [
  {
    question: "Are all products original?",
    answer:
      "Yes. We sell 100% genuine and authentic products with proper quality checks.",
  },
  {
    question: "Do products come with warranty?",
    answer:
      "Most products come with official brand warranty. Warranty details are mentioned on the product page.",
  },
  {
    question: "How long does delivery take?",
    answer:
      "Delivery usually takes 2–5 working days depending on your location.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept cash on delivery, mobile banking, and secure online payments.",
  },
  {
    question: "Can I return or replace a product?",
    answer:
      "Yes. We offer easy returns and replacements based on our return policy.",
  },
  {
    question: "How can I contact customer support?",
    answer:
      "You can contact us via our Contact page or email us for quick assistance.",
  },
];

const FAQSection = () => {
  return (
    <section className="max-w-4xl mx-auto px-4 py-14">
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
        <p className="opacity-70 mt-2">
          Find answers to common questions about shopping with us
        </p>
      </div>

      {/* FAQ Items */}
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="collapse collapse-arrow bg-base-200 rounded-xl"
          >
            <input type="checkbox" />
            <div className="collapse-title text-lg font-medium">
              {faq.question}
            </div>
            <div className="collapse-content">
              <p className="opacity-80">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
