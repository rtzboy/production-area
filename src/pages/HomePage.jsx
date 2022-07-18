const HomePage = () => (
	<div className='h-full p-5 neumorph bg-neu'>
		<div className='text-xl font-bold'>Area de Produccion</div>
		<div className='text-lg my-5'>
			En esta fase se transforman las materias primas para elaborar el producto
			final y se realizan los montajes de piezas y las actividades necesarias
			para fabricar el producto deseado.
		</div>
		<div className='h-96 flex items-center justify-center'>
			<img
				className='w-[500px] flt'
				src='../../public/themedos.png'
				alt='prodc'
			/>
		</div>
	</div>
);
export default HomePage;
