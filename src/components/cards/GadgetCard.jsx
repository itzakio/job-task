import Image from "next/image";
import Link from "next/link";
import { RiShoppingCartLine } from "react-icons/ri";

export default function GadgetCard({ gadget }) {
  const { image, name, category, price, availability, stockQuantity } = gadget;

  const isLowStock = stockQuantity <= 5 && availability === "in-stock";

  return (
    <div className="group rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm hover:shadow-lg transition-all duration-300">
      {/* Image */}
      <div className="relative h-54 w-full overflow-hidden rounded-t-xl bg-gray-100">
        <Link href={`/all-gadgets/${gadget._id}`}>
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </Link>

        {/* Availability Badge */}
        <span
          className={`absolute top-3 left-3 text-xs px-2 py-1 rounded-full font-medium
          ${
            availability === "in-stock"
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {availability === "in-stock" ? "In Stock" : "Out of Stock"}
        </span>
      </div>

      {/* Content */}
      <div className="p-4 space-y-2">
        {/* Category */}
        <span className="text-xs text-gray-500 dark:text-gray-400">
          {category}
        </span>

        {/* Name */}
        <h3 className="font-semibold text-gray-900 dark:text-white leading-snug">
          {name.length > 45 ? name.slice(0, 45) + "..." : name}
        </h3>

        {/* Price */}
        <p className="text-lg font-bold text-primary">৳{price}</p>

        {/* Low stock warning */}
        {isLowStock && (
          <p className="text-sm text-orange-600 font-medium">
            ⚠️ Only {stockQuantity} left!
          </p>
        )}

       <div className="flex items-center gap-2">
         {/* Button */}
        <Link
          href={`/all-gadgets/${gadget._id}`}
          className="btn btn-primary flex-1"
        >
          Shop Now
        </Link>
        <button className="btn btn-square btn-outline"><RiShoppingCartLine/></button>
       </div>
      </div>
    </div>
  );
}
