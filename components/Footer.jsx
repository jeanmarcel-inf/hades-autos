const Footer = () => {
	const currentYear = new Date().getFullYear();
	return (
		<footer className="w-full bg-gray-100 py-8">
			<p className="text-center text-slate-600">
				Copyright @ {currentYear} | Todos os direitos reservados Hades
			</p>
		</footer>
	);
};

export default Footer;
