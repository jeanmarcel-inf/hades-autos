import { Button } from "@nextui-org/react";
import Image from "next/image";
import heroImage from "@/public/images/hero-image.png";
import React from "react";
import {
	SiAudi,
	SiFerrari,
	SiBugatti,
	SiLamborghini,
	SiMercedes,
} from "react-icons/si";

import { FiLogIn } from "react-icons/fi";

const Hero = () => {
	return (
		<section id="hero" className="padding-container ">
			<div className="flex flex-col items-center lg:flex-row lg:justify-around md:gap-10 gap-20">
				<div className="flex flex-col">
					<h1 className="sm:text-[54px] max-w-[520px] tracking-wider text-5xl font-medium playfair-display">
						Lorem{" "}
						<span className="text-red-500">ipsum dolor sit</span>{" "}
						amet
					</h1>
					<p className="text-medium text-foreground max-w-[500px] py-6">
						Horem ipsum dolor sit amet, consectetur adipiscing elit.
						Nunc vulputate libero et velit interdum, ac aliquet.
					</p>
					<div className="flex gap-6 mt-5 ">
						<Button color="danger" className="md:w-36 w-full">
							Produtos
						</Button>
						<Button
							className="md:w-36 w-full"
							color="danger"
							variant="ghost"
							startContent={<FiLogIn />}
						>
							Login
						</Button>
					</div>
				</div>
				<div>
					<Image src={heroImage} width={0} height={0} sizes="100vw" />
				</div>
			</div>
			<div className=" mt-10 w-full p-5">
				<ul className="flex justify-evenly flex-wrap gap-5 ">
					<li>
						<SiAudi color="gray" size={50} />
					</li>
					<li>
						<SiBugatti color="gray" size={50} />
					</li>
					<li>
						<SiFerrari color="gray" size={50} />
					</li>
					<li>
						<SiLamborghini color="gray" size={50} />
					</li>
					<li>
						<SiMercedes color="gray" size={50} />
					</li>
				</ul>
			</div>
		</section>
	);
};

export default Hero;
