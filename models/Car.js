import { model, models, Schema } from "mongoose";

const CarSchema = new Schema(
	{
		brand: {
			name: {
				type: String,
				unique: [true, "Brand already exists"],
				required: [true, "Car brand is required"],
			},
			logoImage: {
				type: String,
				required: [true, "Logo image is required"],
			},
		},
		model: {
			name: {
				type: String,
				required: [true, "Model name is required"],
			},
			bodytype: {
				type: String,
				required: [true, "Model bodytype is required"],
			},
			transmission: {
				type: String,
				required: [true, "Model transmission is required"],
			},
			date_model: {
				type: String,
				required: [true, "Model date is required"],
			},
		},
		version: {
			type: String,
		},
		fuel: {
			type: String,
		},
		doors: {
			type: Number,
		},
		description: {
			type: String,
		},
		mileage: {
			type: Number,
		},
		color: {
			type: String,
		},
		location: {
			city: {
				type: String,
			},
			state: {
				type: String,
			},
		},
		seller_info: {
			name: {
				type: String,
			},
			email: {
				type: String,
			},
			phone: {
				type: String,
			},
		},
		price: {
			value: {
				type: Number,
			},
			isNegotiable: {
				type: Boolean,
			},
		},
		items: [
			{
				type: String,
			},
		],
		images: [
			{
				type: String,
			},
		],
	},
	{ timestamps: true }
);

const Car = models.Car || model("Car", CarSchema);

export default Car;
