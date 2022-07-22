const MixedPage = () => (
	<div className='h-full p-5 neumorph grid gap-5 grid-cols-3 grid-rows-3'>
		<div className=' row-span-2 act p-4 text-base font-bold'>
			Control Calidad
		</div>
		<div className='act p-4'>
			<div className='text-base font-bold mb-3'>Elaboracion De La Mezcla</div>
			<div>
				<span className='neumorph px-3 mr-4'>Referencia:</span>
				<span className='inpt px-3 bg-white'>001</span>
				<br></br>
				<span className='neumorph px-3 mr-4'>estado:</span>
				<span>procesando...</span>
				<br />
				<span className='neumorph px-3 mr-4'>t. restante: </span>
				<span>2h12min</span>
			</div>
		</div>
		<div className='act p-4 text-base font-bold'>Homogenizacion</div>
		<div className='act p-4 text-base font-bold'>Intercambio Calor</div>
		<div className='act p-4 text-base font-bold'>Pasteurizacion</div>
		<div className='act p-4 text-base font-bold'>Refrigerante</div>
		<div className='act p-4 text-base font-bold'>Reposo/Almacenamiento</div>
		<div className='act p-4 text-base font-bold'>Congelacion/Envalado</div>
	</div>
);

export default MixedPage;
