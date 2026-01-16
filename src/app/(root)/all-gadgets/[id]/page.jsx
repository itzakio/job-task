'use client'
import { useParams } from 'next/navigation';
import React from 'react';

const GadgetDetails = () => {
    const {id} = useParams();
    return (
        <div>
            Gadget id: {id}
        </div>
    );
};

export default GadgetDetails;