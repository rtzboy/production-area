const OrderForm = ({ search, status, setSearch, setStatus }) => (
	<form className='mb-4 flex gap-3'>
		<input
			onChange={evt => {
				setSearch(evt.target.value);
			}}
			value={search}
			className='w-[50%] h-7 px-2 inpt italic'
			placeholder='numero de orden...'
			type='text'
		/>
		<select
			onChange={evt => {
				setStatus(evt.target.value);
			}}
			value={status}
			className='w-[30%] h-7 inpt'
		>
			<option value={0}>Default</option>
			<option value={1}>Verificado</option>
			<option value={2}>Pendiente</option>
		</select>
		<button
			onClick={evt => {
				evt.preventDefault();
			}}
			className='w-[20%] neumorph active:efftwo'
		>
			Refresh
		</button>
	</form>
);

export default OrderForm;
