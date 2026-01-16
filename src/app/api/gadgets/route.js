import { connect } from "@/app/lib/dbConnect";

const gadgetsCollection = connect("gadgets");

export const GET = async (request) => {
  const result = await gadgetsCollection.find().toArray();
  return Response.json(result);
};

export const POST = async (request) => {
  const gadget = await request.json();
  if (!gadget) {
    return Response.json({
      status: 400,
      message: "Please provide a gadget information!",
    });
  }
  const newGadget = { ...gadget, date: new Date().toISOString() };
  const result = await gadgetsCollection.insertOne(newGadget);
  return Response.json(result);
};
