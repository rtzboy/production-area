import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Add from '../components/icons/add';
import DeleteIcon from '../components/icons/delete';
import EditIcon from '../components/icons/edit';
import InsumosRow from '../components/InsumosRow';
import SelectCombo from '../components/SelectCombo';
import { deleteProduct } from '../lib/api/productActions';
import {
	searchIceCream,
	searchIceCreamProduct,
	searchProductById
} from '../lib/api/searchIceCream';

const RecipesPage = () => {
	const { products, recipe, setProducts, setRecipe } = useData();
	const [product, setProduct] = useState([]);

	useEffect(() => {
		allProducts(setProducts);
	}, []);

	return (
		<div className='h-full p-5 neumorph'>
			<div className='h-[10%] text-xl font-bold flex items-center gap-2'>
				Mantenimiento de Insumos
				<p className='text-sm text-gray-500'>Equivalencias</p>
			</div>
			<div className='flex h-[90%] w-full'>
				<div className='w-3/5 px-5'>
					<div className='flex h-7 gap-5'>
						<div className='neumorph h-7 w-1/4 flex items-center px-3'>
							Producto
						</div>
						<div className='w-[55%] flex gap-2 justify-between'>
							<div className='w-[75%]'>
								<SelectCombo
									products={products}
									productById={productById}
									setProduct={setProduct}
									recipeProduct={recipeProduct}
									setRecipe={setRecipe}
								/>
							</div>
							<div className='w-[25%] flex items-center justify-center inpt bg-white'>
								{product.categoria}
							</div>
						</div>
						<div className='w-[20%] flex justify-between'>
							<NavLink
								to={'insert'}
								className='neumorph px-1 flex justify-evenly items-center active:efftwo'
							>
								<Add className='h-5 scnd hover:text-green-600' />
							</NavLink>
							<NavLink
								to={'update/' + product.id}
								className='neumorph px-1 flex justify-evenly items-center active:efftwo'
							>
								<EditIcon className='h-5 scnd hover:text-orange-600' />
							</NavLink>
							<button
								onClick={() => {
									// postDeleted(setProductos, productos, info.id);
									// productDelete(product.id);
								}}
								className='neumorph px-1 flex justify-evenly items-center active:efftwo'
							>
								<DeleteIcon className='h-5 scnd hover:text-red-600' />
							</button>
						</div>
					</div>
					<div className='flex my-4 h-8 neumorph px-2'>
						<div className='font-bold p-1 w-1/2'>Insumo</div>
						<div className='font-bold p-1 text-center w-3/12'>Equivalencia</div>
						<div className='font-bold p-1 text-center w-[15%]'>Unidad</div>
						<div className='font-bold p-1 text-center w-[10%]'></div>
					</div>
					<div className='h-[420px] overflow-y-auto'>
						<InsumosRow recipe={recipe} setRecipe={setRecipe} bd={false} />
					</div>
					<div className=''>
						<button>add insumos</button>
						<label>unidad</label>
						<input type='checkbox' name='' id='' />
					</div>
				</div>
				{/* aqui que vaya la info de borrar añadir actualizar o cualquier cosa */}
				<div className='w-2/5 bg-blue-300'>ga</div>
			</div>
		</div>
	);
};

const allProducts = async setProducts => {
	try {
		const { success, datos } = await searchIceCream();
		if (success) {
			setProducts(datos);
		} else {
			console.log(datos);
			setProducts(datos);
		}
	} catch (error) {
		console.log('error');
	}
};

const productById = async (setProduct, id) => {
	try {
		const { success, datos } = await searchProductById(id);
		if (success) {
			setProduct(datos);
		} else {
			console.log(datos);
		}
	} catch (error) {
		console.log('error');
	}
};

const recipeProduct = async (setRecipe, id) => {
	try {
		const { success, datos } = await searchIceCreamProduct(id);
		if (success) {
			setRecipe(datos);
		} else {
			console.log(datos);
		}
	} catch (error) {
		console.log('error');
	}
};

const productDelete = async id => {
	const { success, estatus } = await deleteProduct(id);
	if (success && estatus) {
		console.log('product eliminado');
	} else {
		console.log('no se elimino');
	}
};

const postDeleted = (setProductos, productos, id) => {
	console.log(productos);
	const productFilter = productos.filter(elm => elm.id !== id);
	console.log(productFilter);
	setProductos(productFilter);
};

const getFirstValueArray = products => {
	if (products.length > 0) {
		const copy = [...products][0];
		const id = copy.id;
		return id;
	}
};

const useData = () => {
	const [data, setData] = useState({
		products: [],
		recipe: []
	});

	const setProducts = products => setData({ ...data, products });
	const setRecipe = recipe => setData({ ...data, recipe });

	return { ...data, setProducts, setRecipe };
};

export default RecipesPage;
