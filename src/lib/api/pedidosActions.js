const pedidosByOrder = async id => {
	try {
		const response = await fetch(
			`http://localhost:8080/api/orders/${id}/pedidos`
		);
		if (response.ok) {
			const datos = await response.json();
			return { success: true, datos };
		} else {
			console.log('not found API');
			return { success: false, datos: false };
		}
	} catch (err) {
		console.log(err);
	}
};

export { pedidosByOrder };
