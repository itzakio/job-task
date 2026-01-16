import { ObjectId } from "mongodb";
import { connect } from "@/app/lib/dbConnect";

const gadgetsCollection = connect("gadgets");

export const GET = async (request, { params }) => {
  const { id } = await params;

  if (id.length !== 24) {
    return Response.json({
      status: 400,
      message: "Gadget id is not a valid ID",
    });
  }
  const query = { _id: new ObjectId(id) };
  const result = (await gadgetsCollection.findOne(query)) || {};

  return Response.json(result);
};

export const DELETE = async (request, { params }) => {
  const { id } = await params;

  if (id.length !== 24) {
    return Response.json({
      status: 400,
      message: "Gadget id is not a valid ID",
    });
  }
  const query = { _id: new ObjectId(id) };
  const result = await gadgetsCollection.deleteOne(query);

  return Response.json(result);
};

export const PATCH = async (request, { params }) => {
  const { id } = await params;
  const gadget = await request.json();

  if (id.length !== 24) {
    return Response.json({
      status: 400,
      message: "Gadget id is not a valid ID",
    });
  }

  if (!gadget) {
    return Response.json({
      status: 400,
      message: "Please provide a gadget information!",
    });
  }

  const updatedDoc = {
    $set: { ...gadget },
  };
  const query = { _id: new ObjectId(id) };
  const result = await gadgetsCollection.updateOne(query, updatedDoc);

  return Response.json(result);
};
