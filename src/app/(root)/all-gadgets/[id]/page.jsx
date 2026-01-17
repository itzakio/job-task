import { connect } from "@/app/lib/dbConnect";
import { notFound } from "next/navigation";
import { ObjectId } from "mongodb";
import Image from "next/image";
import { ShoppingCart, Zap } from "lucide-react";

const GadgetDetails = async ({ params }) => {
  const { id } = await params;

  // ✅ Validate MongoDB ID
  if (!ObjectId.isValid(id)) {
    notFound();
  }

  // ✅ Fetch data (let errors throw)
  const collection = await connect("gadgets");
  const gadget = await collection.findOne({ _id: new ObjectId(id) });

  // ✅ Handle not found
  if (!gadget) {
    notFound();
  }

  const {
    name,
    image,
    price,
    category,
    availability,
    stockQuantity,
    description,
  } = gadget;

  return (
    <div className="max-w-360 mx-auto px-4 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Image */}
        <div className="card bg-base-200 shadow-xl">
          <figure>
            <Image
              src={image}
              alt={name}
              width={500}
              height={500}
              className="rounded-xl "
            />
          </figure>
        </div>

        {/* Info */}
        <div className="space-y-6">
          <span className="badge badge-outline">{category}</span>
          <h1 className="text-3xl md:text-4xl font-bold">{name}</h1>

          <p className="text-3xl font-semibold text-primary">৳ {price}</p>

          <div className="flex items-center gap-4">
            <span
              className={`badge ${
                availability === "in-stock"
                  ? "badge-success"
                  : "badge-error"
              }`}
            >
              {availability}
            </span>
            <span className="text-sm opacity-70">
              {stockQuantity} items available
            </span>
          </div>

          <div className="flex gap-4 pt-4">
            <button className="btn btn-outline btn-primary flex-1">
              <ShoppingCart size={18} />
              Add to Cart
            </button>
            <button className="btn btn-primary flex-1">
              <Zap size={18} />
              Shop Now
            </button>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h4 className="text-2xl font-bold mb-4">Description</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default GadgetDetails;
