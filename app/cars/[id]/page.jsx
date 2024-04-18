"use client";
import ContactForm from "@/components/ContactForm";
import { fetchCar } from "@/utils/request";
import {
	BreadcrumbItem,
	Breadcrumbs,
	Button,
	Chip,
	Divider,
	Link,
} from "@nextui-org/react";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import {
	FiCheck,
	FiCheckCircle,
	FiChevronLeft,
	FiHeart,
	FiShare,
	FiX,
} from "react-icons/fi";

const images = ["1", "2", "3", "4"];

const CarPage = () => {
	const { id } = useParams();

	const [car, setCar] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchCarData = async () => {
			if (!id) return;

			try {
				const car = await fetchCar(id);
				setCar(car);
			} catch (error) {
				console.error("Error fetching car: ", error);
			} finally {
				setLoading(false);
			}
		};

		if (car === null) {
			fetchCarData();
		}
	}, [id, car]);

	if (!car && !loading) {
		return (
			<h1 className="text-center text-2xl font-bold mt-10">
				Car Not Found
			</h1>
		);
	}

	return (
		<>
			{car && (
				<section className="m-auto padding-container">
					<Button
						as={Link}
						href="/cars"
						isBlock
						color="danger"
						variant="flat"
						isIconOnly
					>
						<FiChevronLeft />
					</Button>
					<div className="my-3 mb-6 sm:flex-row gap-4 flex flex-col sm:justify-between sm:items-center">
						<div>
							<h2 className="font-bold playfair-display text-5xl ">
								{car.brand.name}{" "}
								<span className="text-red-500">
									{car.model.name}
								</span>
							</h2>
							<div className="flex gap-5 mt-3 items-center">
								<h3 className="text-3xl">
									R$ {car.price.value.toLocaleString("pt-BR")}
								</h3>
								{car.price.isNegotiable ? (
									<Chip
										startContent={<FiCheck size={18} />}
										variant="flat"
										color="success"
									>
										Valor negociável
									</Chip>
								) : (
									<Chip
										startContent={<FiX size={18} />}
										variant="flat"
										color="danger"
									>
										Valor não negociável
									</Chip>
								)}
							</div>
							<Breadcrumbs className="mt-2">
								<BreadcrumbItem href="/cars">
									Carros
								</BreadcrumbItem>
								<BreadcrumbItem href="/">Usados</BreadcrumbItem>
								<BreadcrumbItem href="/">
									Fabricante
								</BreadcrumbItem>
							</Breadcrumbs>
						</div>
						<div className="flex gap-3">
							<Button isIconOnly radius="full" variant="flat">
								<FiHeart size={20} />
							</Button>
							<Button isIconOnly radius="full" variant="flat">
								<FiShare size={20} />
							</Button>
						</div>
					</div>

					{/* Handle image later */}
					<div className="grid md:grid-cols-4 md:h-[600px] gap-3">
						<div className="bg-black md:col-span-3 h-[300px] md:h-auto rounded-md">
							a
						</div>
						<div className="grid grid-cols-3 h-[120px] md:h-auto md:grid-cols-1 min gap-2 ">
							<div className="bg-black rounded-md">a</div>
							<div className="bg-black rounded-md">a</div>
							<div className="bg-black rounded-md">a</div>
						</div>
					</div>

					<div className="mt-10 flex lg:flex-row flex-col gap-5 justify-between">
						<div className="bg-gray-100 shadow-xl rounded-lg h-fit p-5 w-full">
							<ul className="grid lg:grid-cols-3 xl:grid-cols-3 grid-cols-2  justify-between gap-5">
								<li className="col-span-1">
									<p className="text-foreground-500">Ano</p>
									<h4 className="font-bold">
										{car.model.date_model}
									</h4>
								</li>
								<li>
									<p className="text-foreground-500">
										Quilometragem
									</p>
									<h4 className="font-bold">
										{car.mileage.toLocaleString("pt")} km
									</h4>
								</li>
								<li>
									<p className="text-foreground-500">
										Câmbio
									</p>
									<h4 className="font-bold">
										{car.model.transmission}
									</h4>
								</li>
								<li>
									<p className="text-foreground-500">
										Carroceria
									</p>
									<h4 className="font-bold">
										{car.model.bodytype}
									</h4>
								</li>
								<li>
									<p className="text-foreground-500">
										Combustível
									</p>
									<h4 className="font-bold">{car.fuel}</h4>
								</li>
								<li>
									<p className="text-foreground-500">Cor</p>
									<h4 className="font-bold">{car.color}</h4>
								</li>
							</ul>
							<Divider className="my-5" />
							<div>
								<p className="text-xl text-foreground-500">
									Description
								</p>
								<h4 className="mt-2 leading-5">
									{car.description}
								</h4>
							</div>
							<div className="my-5 mt-10 ">
								<h4 className="text-foreground-500 text-xl">
									Itens de veículo
								</h4>
								<ul className="grid lg:grid-cols-3 xl:grid-cols-4 grid-cols-2 mt-5 justify-between gap-5">
									{car.items.map((item, index) => (
										<li
											className="flex items-center gap-2"
											key={index}
										>
											<FiCheckCircle color="green"></FiCheckCircle>
											<h4 className="font-bold">
												{item}
											</h4>
										</li>
									))}
								</ul>
							</div>
						</div>

						{/* Alterar pelo componente Card */}
						<div className=" shadow-xl bg-gray-100 rounded-lg p-5 w-full max-w-[600px] ">
							<div className=" mb-5">
								<h2 className="font-bold text-2xl">
									Entre em contato com o vendedor!
								</h2>
							</div>
							<ContactForm />
						</div>
					</div>
				</section>
			)}
		</>
	);
};

export default CarPage;
