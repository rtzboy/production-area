const SelectCombo = ({
	products,
	productById,
	setProduct,
	recipeProduct,
	setRecipe
}) => {
	if (!products.length) {
		return (
			<select disabled className='inpt pl-1 w-full h-7'>
				<option value=''>sin datos que mostrar</option>
			</select>
		);
	}

	return (
		<select
			onChange={evt => {
				productById(setProduct, evt.target.value);
				recipeProduct(setRecipe, evt.target.value);
			}}
			className='inpt pl-1 w-full h-7'
		>
			{products.map(product => (
				<option key={product.id} value={product.id}>
					{product.nombre}
				</option>
			))}
		</select>
	);
};

export default SelectCombo;
