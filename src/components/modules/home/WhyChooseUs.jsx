const features = [
  {
    title: "100% Genuine Products",
    description:
      "We only sell authentic and quality-checked tech products.",
    icon: "✅",
  },
  {
    title: "Official Brand Warranty",
    description:
      "All products come with official manufacturer warranty.",
    icon: "🛡️",
  },
  {
    title: "Fast & Reliable Delivery",
    description:
      "Quick delivery across Bangladesh with safe packaging.",
    icon: "🚚",
  },
  {
    title: "Secure Payment",
    description:
      "Your payments are protected with secure payment methods.",
    icon: "🔒",
  },
  {
    title: "Customer Support",
    description:
      "Friendly support team ready to help you anytime.",
    icon: "💬",
  },
  {
    title: "Easy Returns",
    description:
      "Hassle-free return policy for a smooth shopping experience.",
    icon: "🔁",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="max-w-360 mx-auto px-4 py-14">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">Why Choose Us</h2>
        <p className="opacity-70 mt-2">
          We make tech shopping easy, safe, and reliable
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((item, index) => (
          <div
            key={index}
            className="card bg-base-200 shadow-md hover:shadow-xl transition-all duration-300 rounded-2xl"
          >
            <div className="card-body text-center">
              {/* Icon */}
              <div className="text-4xl mb-4">
                {item.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold mb-2">
                {item.title}
              </h3>
              <p className="text-sm opacity-70">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
