import Image from "next/image";
import {
  FaRocket,
  FaShieldAlt,
  FaTags,
  FaHeadset,
} from "react-icons/fa";

const features = [
  {
    icon: <FaRocket className="text-3xl text-indigo-500" />,
    title: "Latest Technology",
    desc: "We bring you the newest and most innovative gadgets on the market.",
  },
  {
    icon: <FaTags className="text-3xl text-blue-500" />,
    title: "Best Prices",
    desc: "Premium-quality products at competitive and transparent prices.",
  },
  {
    icon: <FaShieldAlt className="text-3xl text-cyan-500" />,
    title: "Secure Shopping",
    desc: "Safe payments and reliable delivery you can trust.",
  },
  {
    icon: <FaHeadset className="text-3xl text-indigo-500" />,
    title: "24/7 Support",
    desc: "Our support team is always ready to help you.",
  },
];

const AboutPage = () => {
  return (
    <div className="w-full bg-base-100">

      {/* Hero */}
      <section className="bg-base-100 py-28">
        <div className="max-w-360 mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            About <span className="text-primary">TechShop</span>
          </h1>
          <p className="mt-6 text-lg opacity-80 max-w-3xl mx-auto">
            A modern destination for smart gadgets, electronics, and
            next-generation technology.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="bg-base-100 py-24">
        <div className="max-w-360 mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-primary">
              Who We Are
            </h2>
            <p className="opacity-80 leading-relaxed">
              TechShop is a technology-focused online store built for people who
              love innovation. We carefully select gadgets that improve daily
              life — from smartphones and laptops to smart accessories.
            </p>
            <p className="opacity-80 mt-4 leading-relaxed">
              Our goal is simple: make modern technology accessible, reliable,
              and enjoyable for everyone.
            </p>
          </div>

          <div className="relative w-full h-80 rounded-3xl overflow-hidden shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
              alt="TechShop team"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-base-100 py-24">
        <div className="max-w-360 mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 text-primary">
            Why Choose TechShop
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((item, index) => (
              <div
                key={index}
                className="bg-base-100 rounded-2xl p-6 shadow-md hover:shadow-xl transition border border-base-300"
              >
                <div className="mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="text-sm opacity-70">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="bg-base-100 py-24">
        <div className="max-w-360 mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-primary">
            Our Vision
          </h2>
          <p className="max-w-3xl mx-auto text-lg opacity-80">
            To become a trusted tech marketplace by combining innovation,
            high-quality products, and exceptional customer experience.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-base-100 py-20">
        <div className="max-w-360 mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-primary">
            Upgrade Your Tech Today
          </h2>
          <p className="mb-6 opacity-80">
            Discover smart gadgets and exclusive deals at TechShop.
          </p>
          <a
            href="/items"
            className="btn btn-primary rounded-xl"
          >
            Explore Products
          </a>
        </div>
      </section>

    </div>
  );
};

export default AboutPage;
