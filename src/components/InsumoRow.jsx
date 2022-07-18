import { NavLink } from 'react-router-dom';
import DeleteIcon from '../components/icons/delete';
import EditIcon from '../components/icons/edit';
import { deleteInsumoProduct } from '../lib/api/recipeActions';
import ArrowSmRight from './icons/arrow-sm-right';

const InsumoRow = ({
	id,
	cantidad,
	insumo,
	unidad,
	setRecipe,
	recipes,
	bd
}) => {
	return (
		<div className='h-8 neumorph flex items-center mb-2 group'>
			<ArrowSmRight className='h-3' />
			<div className='w-1/2 px-2'>{insumo}</div>
			<div className='w-3/12 text-center px-2'>{cantidad}</div>
			<div className='w-3/12 text-center px-2 flex'>
				{bd ? (
					<div className='w-full'>{unidad}</div>
				) : (
					<>
						<div className='w-1/2'>{unidad}</div>
						<div className='w-1/2 flex items-center justify-evenly transition-all duration-500 opacity-0 group-hover:opacity-100 '>
							<NavLink
								to={'insumoi/' + id}
								className='neumorph p-[2px] active:efftwo'
							>
								<EditIcon className='h-5 hover:text-green-600' />
							</NavLink>
							<button
								onClick={evt => {
									postDeleted(setRecipe, recipes, id);
									// deletData(id);
								}}
								className='neumorph p-[2px] active:efftwo'
							>
								<DeleteIcon className='h-5 hover:text-red-600' />
							</button>
						</div>
					</>
				)}
			</div>
		</div>
	);
};

const postDeleted = (setRecipe, recipes, id) => {
	console.log(recipes);
	const recipeFilter = recipes.filter(elm => elm.id !== id);
	console.log(recipeFilter);
	setRecipe(recipeFilter);
};

const deletData = async id => {
	const { success, estatus } = await deleteInsumoProduct(id);
	if (success && estatus) {
		console.log(success, estatus);
		console.log('insumo Actualizado');
	} else {
		console.log(success, estatus);
	}
};
export default InsumoRow;
