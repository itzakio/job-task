import GadgetCard from "@/components/cards/GadgetCard";
import { connect } from "@/app/lib/dbConnect";

const getAllGadgets = async () => {
  const collection = await connect("gadgets");

  // optional: filter deleted items
  const gadgets = await collection
    .find({ isDeleted: false })
    .sort({ createdAt: -1 })
    .toArray();

  return gadgets;
};

const AllGadget = async () => {
  const gadgets = await getAllGadgets();

  return (
    <div className="max-w-360 mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8">
        All Gadgets ({gadgets.length})
      </h1>

      {gadgets.length === 0 ? (
        <p className="text-center opacity-70">No gadgets found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {gadgets.map((gadget) => (
            <GadgetCard key={gadget._id.toString()} gadget={gadget} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AllGadget;
