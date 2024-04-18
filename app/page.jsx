import { Button, Input, Textarea } from "@nextui-org/react";
import { FiAtSign, FiMail, FiPhone, FiUser } from "react-icons/fi";
import heroImage from "@/public/images/hero-image.png";
import Image from "next/image";
import CardImage from "@/public/images/CardImage.png";
import toyota from "@/public/images/Toyota.png";
import StatsItem from "@/components/StatsItem";
import contactImage from "@/public/images/contact-image.png";
import Hero from "@/components/Hero";

export default function Home() {
	return (
		<main>
			<Hero />
			{/* <section id="brands">
				<div className="bg-gray-200 my-10 h-40">
					<div className="flex justify-center items-center">
						<Image src={toyota} width={100} height={100} />
					</div>
				</div>
			</section> */}
			<section className="my-10 h-[600px] bg-black/[3%]">
				<div className="sm:p-10 py-16 mx-5 md:mx-20 space-y-8">
					<h2 className="text-2xl sm:text-start text-center font-bold">
						Categorias
					</h2>

					{/* Make into component later */}
					<div>
						<Image
							src={CardImage}
							height={0}
							width={0}
							sizes="100vw"
							className="h-[400px] w-full rounded-xl"
						/>
						<p className="font-medium my-5 text-xl text-center">
							Sedans
						</p>
					</div>
				</div>
			</section>
			<section id="about" className="my-20 sm:p-10 py-16 mx-5 md:mx-20">
				<div className="md:grid md:grid-cols-2 gap-10   w-full ">
					<Image
						className=" md:max-w-[700px] rounded-xl h-72 md:h-[500px] w-full"
						src={contactImage}
						sizes="100vw"
						height={0}
						width={0}
					/>

					<div className="mt-10">
						<h2 className="text-lg">Sobre Nós</h2>
						<h2 className="playfair-display tracking-wide font-bold text-4xl lg:text-5xl ">
							Lorem Ipsum
						</h2>
						<p className="my-5 mt-8 md:max-w-[500px]">
							Worem ipsum dolor sit amet, consectetur adipiscing
							elit. Nunc vulputate libero et velit interdum, ac
							aliquet odio mattis. Class aptent taciti sociosqu ad
							litora torquent per conubia nostra, per inceptos
							himenaeos.
						</p>
						<div className="grid grid-cols-3 gap-5">
							<StatsItem
								title={"15+"}
								itemText={"Marcas disponíveis para venda."}
							/>
							<StatsItem
								title={"5+"}
								itemText={"Anos de experiência no mercado."}
							/>
							<StatsItem
								title={"2000+"}
								itemText={
									"Clientes satisfeitos com esta plataforma."
								}
							/>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
