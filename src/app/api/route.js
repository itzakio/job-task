export const gadgets = [
    {
        id: 1,
        device: "Mobile"
    },
    {
        id: 2,
        device: "Headphone"
    }
]

export const GET = async(request) =>{
    return Response.json({
        status: 200,
        message: "Api Created"
    })
}