import InsumoRow from './InsumoRow';

const InsumosRow = ({ recipe, setRecipe, value, bd }) => {
	if (!recipe.length) return <p>No registra insumos</p>;

	const recipes = [...recipe];

	console.log(bd, value);
	if (!bd) value = 1;

	const filteredRecipes = recipes.map(recipe => {
		return {
			...recipe,
			cantidad: (recipe.cantidad * Number(value)).toFixed(3)
		};
	});

	return filteredRecipes.map(recipe => (
		<InsumoRow
			key={recipe.id}
			{...recipe}
			setRecipe={setRecipe}
			recipes={recipes}
			bd={bd}
		/>
	));
};

export default InsumosRow;
