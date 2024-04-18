"use client";
import { Card, CardHeader, CardBody, Divider, Button } from "@nextui-org/react";
import cardImage from "@/public/images/contact-image.png";
import Image from "next/image";
import { FiHeart, FiMapPin } from "react-icons/fi";
import { GoMilestone } from "react-icons/go";
import Link from "next/link";

const CarCard = ({ car }) => {
	return (
		<Card className="py-4">
			<CardBody className="overflow-visible py-2">
				<Image
					alt="Card background"
					className="object-cover h-[300px] rounded-xl"
					src={cardImage}
					width={0}
					height={0}
					sizes="100vw"
				/>
			</CardBody>
			<CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
				<div className="flex justify-between w-full">
					<div>
						<p className="text-tiny uppercase font-bold">
							{car.model.bodytype}
						</p>
						<small className="text-default-500 mb-3">
							{car.model.date_model} / {car.model.date_model}
						</small>
					</div>
					<Button isIconOnly variant="light" color="danger">
						<FiHeart size={15} />
					</Button>
				</div>

				<div className="flex justify-between mt-2 w-full">
					<div>
						<h4 className="font-bold text-medium sm:text-large">
							{car.model.manufacturer} {car.model.name}
						</h4>
						<small className="text-default-500 flex items-center gap-2 mb-2">
							<FiMapPin /> {car.location.city} -{" "}
							{car.location.state}
						</small>
					</div>
					<div>
						<h4 className="font-bold text-medium sm:text-large">
							R$ {car.price.value.toLocaleString()}
						</h4>
						<small className="text-default-500 flex items-center gap-2 mb-2">
							<GoMilestone /> {car.mileage.toLocaleString()} km
						</small>
					</div>
				</div>
				<Divider className="mt-2 mb-4" />
				<Button
					href={`/cars/${car.id}`}
					as={Link}
					color="danger"
					variant="solid"
					fullWidth
				>
					Ver Mais
				</Button>
			</CardHeader>
		</Card>
	);
};

export default CarCard;
