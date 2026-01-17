import { connect } from "@/app/lib/dbConnect";
import { ShoppingCart, Zap } from "lucide-react";
import { ObjectId } from "mongodb";
import React from "react";
import Image from "next/image";

const page = async ({ params }) => {
  const { id } = await params;
  try {
    const collection = await connect("gadgets");
    const gadget = await collection.findOne({ _id: new ObjectId(id) });

    if (!gadget) {
      return (
        <div className="min-h-screen flex items-center justify-center text-gray-600 dark:text-gray-300">
          Gadget not found!
        </div>
      );
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
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Image Section */}
          <div className="card bg-base-200 shadow-xl">
            <figure className=" object-cover">
              <Image
                src={image}
                alt={name}
                width={500}
                height={500}
                className="rounded-xl"
              />
            </figure>
          </div>

          {/* Info Section */}
          <div className="space-y-6">
            <div>
              <span className="badge badge-outline mb-2">{category}</span>
              <h1 className="text-3xl md:text-4xl font-bold leading-tight">
                {name}
              </h1>
            </div>

            {/* Price */}
            <p className="text-3xl font-semibold text-primary">৳ {price}</p>

            {/* Stock & Availability */}
            <div className="flex items-center gap-4">
              <span
                className={`badge ${
                  availability === "in-stock" ? "badge-success" : "badge-error"
                }`}
              >
                {availability}
              </span>
              <span className="text-sm opacity-70">
                {stockQuantity} items available
              </span>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="btn btn-outline btn-primary flex-1">
                <ShoppingCart size={18} />
                Add to Cart
              </button>

              <button className="btn btn-primary flex-1">
                <Zap size={18} />
                Shop Now
              </button>
            </div>

            {/* Extra Info */}
            <div className="divider"></div>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="bg-base-200 p-4 rounded-xl">
                <p className="font-medium">Free Delivery</p>
                <p className="opacity-70">Inside Bangladesh</p>
              </div>
              <div className="bg-base-200 p-4 rounded-xl">
                <p className="font-medium">Warranty</p>
                <p className="opacity-70">Official Brand Warranty</p>
              </div>
            </div>
          </div>
          {/* Description */}
        </div>
        <div className="mt-8">
          <h4 className="text-2xl font-bold mb-4">Description:</h4>
          <p className="text-base leading-relaxed opacity-90">{description}</p>
        </div>
      </div>
    );
  } catch (err) {
    console.error(err);
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500">
        Error fetching product!
      </div>
    );
  }
};

export default page;
