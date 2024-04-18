import InputGroup from "@/components/InputGroup";
import { LuFuel, LuMilestone } from "react-icons/lu";
import { MdOutlineDoorSliding } from "react-icons/md";
import {
	Button,
	Card,
	CardBody,
	CardHeader,
	Checkbox,
	CheckboxGroup,
	Input,
	Select,
} from "@nextui-org/react";
import React from "react";
import { FiDollarSign, FiMail, FiPhone, FiUser } from "react-icons/fi";

const CarAddPage = () => {
	return (
		<section className="padding-container">
			<Card className="max-w-2xl m-auto p-3">
				<CardHeader className="flex-col items-start gap-2">
					<h2 className="playfair-display font-bold text-3xl tracking-wide">
						Venda seu <span className="text-red-500">carro</span>
					</h2>
					<small>
						Após o preenchimento do formulário seu veículo será
						exibido na página de carros!
					</small>
				</CardHeader>

				<CardBody className="w-full flex flex-row flex-wrap gap-4">
					<h4>Especificações do Carro</h4>
					<Input
						type="text"
						variant="bordered"
						label="Marca"
						size="sm"
						isRequired
					/>
					<Input
						type="text"
						variant={"bordered"}
						label="Modelo"
						isRequired
					/>
					<Input
						type="text"
						variant={"bordered"}
						label="Versão"
						isRequired
					/>
					<InputGroup>
						<Input
							type="text"
							variant={"bordered"}
							label="Carroceria"
							isRequired
						/>
						<Select label="Câmbio" variant="bordered" isRequired />
					</InputGroup>
					<InputGroup>
						<Input
							type="number"
							variant={"bordered"}
							label="Ano do modelo"
							isRequired
						/>
						<Select label="Cor" variant="bordered" isRequired />
					</InputGroup>
					<h4 className=" mt-3">Informações do veículo</h4>
					<div className="bg-slate-100 rounded-lg w-full p-3">
						<InputGroup>
							<Input
								type="number"
								label="Quilometragem"
								placeholder="0,00"
								variant="bordered"
								size="lg"
								className="bg-white rounded-xl"
								labelPlacement="outside"
								startContent={<LuMilestone color="gray" />}
								endContent={
									<div className="pointer-events-none flex items-center">
										<span className="text-default-400 text-small">
											Km
										</span>
									</div>
								}
							/>
							<Input
								type="number"
								label="Portas"
								placeholder="4"
								variant="bordered"
								size="lg"
								className="bg-white rounded-xl"
								labelPlacement="outside"
								startContent={
									<MdOutlineDoorSliding color="gray" />
								}
							/>
							<Input
								type="text"
								label="Combustível"
								placeholder="Gasolina"
								variant="bordered"
								size="lg"
								className="bg-white rounded-xl"
								labelPlacement="outside"
								startContent={<LuFuel color="gray" />}
							/>
						</InputGroup>
						<div className="flex w-full my-8 mb-14">
							<CheckboxGroup
								label="Selecione itens do veículo"
								orientation="horizontal"
								color="secondary"
								defaultValue={["buenos-aires", "san-francisco"]}
							>
								<Checkbox value="buenos-aires">
									Buenos Aires
								</Checkbox>
								<Checkbox value="sydney">Sydney</Checkbox>
								<Checkbox value="san-francisco">
									San Francisco
								</Checkbox>
								<Checkbox value="london">London</Checkbox>
								<Checkbox value="tokyo">Tokyo</Checkbox>
							</CheckboxGroup>
						</div>
						<Input
							type="number"
							label="Preço"
							placeholder="0.00"
							size="lg"
							variant="bordered"
							labelPlacement="outside"
							className="bg-white rounded-xl"
							startContent={
								<div className="pointer-events-none flex items-center">
									<span className="text-default-400 text-small">
										R$
									</span>
								</div>
							}
						/>
					</div>

					<div className="w-full flex my-3">
						<InputGroup>
							{/* Utilizar API dos correios para preencher automaticamente os campos */}
							<Input
								type="text"
								label="CEP"
								variant="bordered"
								className="bg-white rounded-xl"
							/>
							<Input
								type="text"
								label="Cidade"
								variant="bordered"
								className="bg-white rounded-xl"
							/>
							<Input
								type="number"
								label="Estado"
								variant="bordered"
								className="bg-white rounded-xl"
							/>
						</InputGroup>
					</div>

					{/* Use ContactForm component later */}
					<div className="flex gap-4 flex-col w-full">
						<h3>Informações do vendedor</h3>
						<Input
							type="text"
							label="Nome"
							variant="bordered"
							startContent={<FiUser color="gray" />}
						/>
						<Input
							type="email"
							label="Email"
							variant="bordered"
							startContent={<FiMail color="gray" />}
						/>
						<Input
							type="phone"
							label="Celular"
							variant="bordered"
							startContent={<FiPhone color="gray" />}
						/>
					</div>
					<Button
						className="mt-5"
						fullWidth
						color="danger"
						variant="shadow"
						size="lg"
					>
						Anunciar
					</Button>
				</CardBody>
			</Card>
		</section>
	);
};

export default CarAddPage;
