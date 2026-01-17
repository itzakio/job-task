import GadgetCard from '@/components/cards/GadgetCard';
import React from 'react';

const getAllGadgets = async () =>{
    const res = await fetch("http://localhost:3000/api/gadgets",{
      cache:"force-cache"
    })
    return res.json();
}

const AllGadget = async() => {
    const gadgets = await getAllGadgets();
    return (
        <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8">All Gadgets ({gadgets.length})</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {gadgets.map((gadget) => (
          <GadgetCard key={gadget._id} gadget={gadget} />
        ))}
      </div>
    </div>
    );
};

export default AllGadget;