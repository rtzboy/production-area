const getAllOrders = async () => {
	try {
		const response = await fetch('http://localhost:8080/api/orders');
		if (response.ok) {
			const dataOrder = await response.json();
			console.log(dataOrder);
			return { success: true, dataOrder };
		} else {
			console.log('not found API');
			return { success: false, dataOrder: false };
		}
	} catch (err) {
		console.log(err);
		return { success: false, dataOrder: [] };
	}
};

export { getAllOrders };
