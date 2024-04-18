const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null;

// Fetch All Cars
const fetchCars = async () => {
	try {
		if (!apiDomain) {
			return null;
		}

		const res = await fetch(`${apiDomain}/cars`);

		if (!res.ok) throw new Error("Failed to fetch data");

		return res.json();
	} catch (error) {
		console.log(error);
		return [];
	}
};

// Fetch Single Car
const fetchCar = async (id) => {
	try {
		if (!apiDomain) {
			return null;
		}

		const response = await fetch(`${apiDomain}/cars/${id}`);

		if (!response.ok) {
			throw new Error("Failed to fetch data");
		}

		return response.json();
	} catch (error) {
		console.error("Erro:", error);
		return null;
	}
};

export { fetchCars, fetchCar };
