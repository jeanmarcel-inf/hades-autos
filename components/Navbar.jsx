"use client";
import {
	Navbar,
	NavbarBrand,
	NavbarMenuToggle,
	NavbarMenuItem,
	NavbarMenu,
	NavbarContent,
	NavbarItem,
	Link,
	Button,
} from "@nextui-org/react";
import { useState } from "react";

const NavigationBar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const menuItems = [
		"Página Inicial",
		"Comprar",
		"Vender",
		<Button as={Link} color="default" href="#" variant="flat">
			Cadastro
		</Button>,
		<Button as={Link} color="danger" href="#" variant="flat">
			Login
		</Button>,
	];

	return (
		<Navbar
			shouldHideOnScroll
			isBordered
			isMenuOpen={isMenuOpen}
			onMenuOpenChange={setIsMenuOpen}
		>
			{/* Navbar Menu Button */}
			<NavbarContent className="sm:hidden" justify="start">
				<NavbarMenuToggle
					aria-label={isMenuOpen ? "Close menu" : "Open menu"}
				/>
			</NavbarContent>

			{/* Mobile Navbar */}
			<NavbarContent className="sm:hidden pr-3" justify="center">
				<NavbarBrand>
					<p className="font-bold text-inherit">
						<span className="text-red-500">H</span>ades
					</p>
				</NavbarBrand>
			</NavbarContent>

			{/* Full-size Navbar */}
			<NavbarContent className="hidden sm:flex gap-10 " justify="end">
				<NavbarBrand>
					<Link
						href="/"
						isBlock
						className="font-bold text-2xl playfair-display tracking-wide text-inherit"
					>
						<span className="text-red-500">H</span>ades
					</Link>
				</NavbarBrand>
				<NavbarItem>
					<Link
						isBlock
						className="w-full text-bold text-foreground"
						href="/"
						size="lg"
					>
						Página Inical
					</Link>
				</NavbarItem>
				<NavbarItem>
					<Link
						isBlock
						className="w-full text-bold text-foreground"
						href="/cars"
						size="lg"
					>
						Comprar
					</Link>
				</NavbarItem>
				<NavbarItem>
					<Link
						isBlock
						className="w-full text-bold text-foreground"
						href="/cars/add"
						size="lg"
					>
						Vender
					</Link>
				</NavbarItem>

				{/* Login and Sign Up buttons */}
				<NavbarContent justify="end">
					<NavbarItem className="lg:flex">
						<Button
							as={Link}
							color="default"
							href="#"
							variant="flat"
						>
							Cadastro
						</Button>
					</NavbarItem>
					<NavbarItem>
						<Button
							as={Link}
							color="danger"
							href="#"
							variant="flat"
						>
							Login
						</Button>
					</NavbarItem>
				</NavbarContent>
			</NavbarContent>

			<NavbarContent className="sm:hidden" justify="end">
				<NavbarItem>
					<Button as={Link} color="danger" href="#" variant="flat">
						Login
					</Button>
				</NavbarItem>
			</NavbarContent>

			<NavbarMenu>
				<Link className="w-full" href="/" size="lg">
					Página Inical
				</Link>
				<Link className="w-full" href="/cars" size="lg">
					Comprar
				</Link>
				<Link className="w-full" href="/cars/add" size="lg">
					Vender
				</Link>
			</NavbarMenu>
		</Navbar>
	);
};

export default NavigationBar;
