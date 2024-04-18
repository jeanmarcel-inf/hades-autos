import CarCard from "@/components/CarCard";
import { fetchCars } from "@/utils/request";

const PropertiesPage = async () => {
	const cars = await fetchCars();

	return (
		<section className="px-4 py-6">
			<div className="container-xl lg:container m-auto px-4 py-6">
				{cars.length === 0 ? (
					<p className=" text-5xl text-center">
						Não há nenhum carro listado
					</p>
				) : (
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
						{cars.map((car) => (
							<CarCard key={car._id} car={car} />
						))}
					</div>
				)}
			</div>
		</section>
	);
};

export default PropertiesPage;
