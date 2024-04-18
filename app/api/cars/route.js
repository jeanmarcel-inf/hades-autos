import connectDb from "@/config/database";
import Car from "@/models/Car";

export const GET = async (request) => {
	try {
		await connectDb();

		const cars = await Car.find({});
		console.log(cars);

		if (cars.length === 0) {
			return new Response("Não há nenhum carro listado", { status: 404 });
		}

		return new Response(JSON.stringify(cars), {
			status: 200,
		});
	} catch (error) {
		console.log(error);
		return new Response("Something went wrong", { status: 500 });
	}
};
