import GadgetCard from "@/components/cards/GadgetCard";
import { connect } from "@/app/lib/dbConnect";
import Link from "next/link";

const getFeaturedGadgets = async () => {
  const collection = await connect("gadgets");

  // You can change this logic anytime
  const featured = await collection
    .find({ isDeleted: false, availability: "in-stock" })
    .sort({ createdAt: -1 })
    .limit(4)
    .toArray();

  return featured;
};

const FeaturedProducts = async () => {
  const gadgets = await getFeaturedGadgets();

  if (gadgets.length === 0) {
    return null; // don’t show section if empty
  }

  return (
    <section className="max-w-360 mx-auto px-4 py-12">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-3xl font-bold">Featured Products</h2>
          <p className="text-sm opacity-70 mt-1">
            Hand-picked gadgets just for you
          </p>
        </div>

        <Link href="/all-gadgets" className="btn btn-outline btn-sm">
          View All
        </Link>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {gadgets.map((gadget) => (
          <GadgetCard
            key={gadget._id.toString()}
            gadget={gadget}
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
