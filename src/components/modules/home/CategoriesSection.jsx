import Link from "next/link";

const categories = [
  {
    name: "Monitors",
    slug: "monitor",
    icon: "🖥️",
  },
  {
    name: "Laptops",
    slug: "laptop",
    icon: "💻",
  },
  {
    name: "Gaming Gear",
    slug: "gaming",
    icon: "🎮",
  },
  {
    name: "Accessories",
    slug: "accessories",
    icon: "⌨️",
  },
  {
    name: "Mobile Devices",
    slug: "mobile",
    icon: "📱",
  },
  {
    name: "Networking",
    slug: "networking",
    icon: "📡",
  },
];

const CategoriesSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      {/* Section Header */}
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold">Shop by Category</h2>
        <p className="opacity-70 mt-2">
          Find gadgets by your favorite category
        </p>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {categories.map((category) => (
          <Link
            key={category.slug}
            href={`/#`}
            className="group"
          >
            <div className="card bg-base-200 hover:bg-base-300 transition-all duration-300 shadow-md hover:shadow-xl rounded-2xl">
              <div className="card-body items-center text-center">
                {/* Placeholder Icon */}
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                  {category.icon}
                </div>

                <h3 className="font-semibold text-sm">
                  {category.name}
                </h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoriesSection;
