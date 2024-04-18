import connectDb from "@/config/database";
import Car from "@/models/Car";

export const GET = async (request, { params }) => {
	const { id } = params;

	try {
		await connectDb();

		const car = await Car.findById(id);
		console.log(car);

		return new Response(JSON.stringify(car), {
			status: 200,
		});
	} catch (error) {
		console.log(error);
		return new Response("Something went wrong", { status: 500 });
	}
};
