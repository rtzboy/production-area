import { useState } from 'react';
import { Outlet } from 'react-router-dom';
// import ArrowRight from '../components/icons/arrow-right';
import DoubleArrowLeft from '../components/icons/double-arrow-left';
import DoubleArrowRight from '../components/icons/double-arrow-right';
import Links from '../components/Links';

const LayoutPage = () => {
	const [status, setStatus] = useState(false);

	return (
		<main className='w-full h-screen bg-ho flex gap-3 p-3'>
			<nav
				className={`${
					status
						? 'w-[5%] transition-all duration-700 opacity-10'
						: 'w-[20%] transition-all duration-700'
				} h-full relative neumorph p-6`}
			>
				<div className='text-center font-bold'>Produccion</div>
				<button
					onClick={evt => setStatus(!status)}
					className='absolute left-1 top-1 p-1 rounded-md transition-all duration-500 hover:bg-slate-400 cursor-pointer'
				>
					{status ? (
						<DoubleArrowRight className='h-5 text-stone-700' />
					) : (
						<DoubleArrowLeft className='h-5 text-stone-700' />
					)}
				</button>
				<div className='font-bold mt-5'>Recetas</div>
				<Links to='recipes' nombre='Registro Recetas' />
				<div className='font-bold mt-5'>Recepcion</div>
				<ul>
					<Links to='reception' nombre='Recepcion Producto' />
					<Links to='a' nombre='Verificacion Producto' />
					<Links to='b' nombre='Conversion Producto' />
					<Links to='c' nombre='Envio Orden Insumos' />
				</ul>
				<div className='font-bold mt-5'>Fabricacion</div>
				<ul>
					<Links to='d' nombre='Mezcla' />
					<Links to='e' nombre='Homogenizacion' />
					<Links to='f' nombre='Pasteurizacion' />
				</ul>
			</nav>
			<section
				className={`${
					status
						? 'w-[95%] transition-all duration-700'
						: 'w-[80%] transition-all duration-700'
				}`}
			>
				<Outlet className='transition-all duration-700' />
			</section>
		</main>
	);
};

export default LayoutPage;
