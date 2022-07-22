const searchInsumoByProductName = async name => {
	try {
		const response = await fetch(
			`http://localhost:8080/api/products?nombre=${name}`
		);
		if (response.ok) {
			const datos = await response.json();
			console.log(datos);
			return { success: true, datos };
		} else {
			console.log('not found API');
			return { success: false, datos: false };
		}
	} catch (err) {
		console.log(err);
		return { success: false, datos: [] };
	}
};

export { searchInsumoByProductName };
