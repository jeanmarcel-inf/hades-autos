import { Button, Input, Textarea } from "@nextui-org/react";
import React from "react";
import { FiMail, FiPhone, FiUser } from "react-icons/fi";

const ContactForm = () => {
	return (
		<form>
			<div className=" space-y-3 sm:max-w-[650px]">
				<Input
					type="email"
					className="bg-white"
					variant="bordered"
					placeholder="E-mail"
					startContent={<FiMail />}
				/>
				<Input
					type="text"
					className="bg-white"
					variant="bordered"
					placeholder="Nome"
					startContent={<FiUser />}
				/>
				<Input
					type="phone"
					className="bg-white"
					variant="bordered"
					placeholder="Celular"
					startContent={<FiPhone />}
				/>
				<Textarea
					variant="bordered"
					className="bg-white"
					placeholder="Insira uma mensagem"
				/>
				<Button
					color="danger"
					variant="shadow"
					radius="sm"
					fullWidth={true}
					className="h-14"
				>
					Enviar Mensagem
				</Button>
			</div>
		</form>
	);
};

export default ContactForm;
