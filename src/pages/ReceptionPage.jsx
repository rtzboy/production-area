import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import OrderForm from '../components/OrderForm';
import OrderRow from '../components/OrderRow';
import { getAllOrders } from '../lib/api/ordersActions';
import { OrderContext } from '../lib/contexts/OrderContext';

const ReceptionPage = () => {
	const [orders, setOrders] = useState([]);
	const [search, setSearch] = useState('');
	const [status, setStatus] = useState(0);
	const [refresh, setRefresh] = useState(false);

	useEffect(() => {
		ordersAll(setOrders);
	}, [refresh]);

	let ordersFiltered = filterByNumOrden(orders, search);
	ordersFiltered = filterByVerifiedOrders(ordersFiltered, status);

	return (
		<div className='h-full p-5 neumorph flex gap-5'>
			<div className='w-2/5 h-full overflow-y-auto p-4 act'>
				<div className='mb-3 font-bold text-base'>Recepcion de Productos</div>
				<OrderForm
					search={search}
					status={status}
					setSearch={setSearch}
					setStatus={setStatus}
					setRefresh={setRefresh}
					refresh={refresh}
				/>
				<OrderRow orders={ordersFiltered} />
			</div>
			<div className='w-3/5 h-full flex gap-5 flex-col'>
				<div className='h-3/4 w-full act overflow-y-auto'>
					<OrderContext.Provider value={{ orders, setOrders }}>
						<Outlet />
					</OrderContext.Provider>
				</div>
				<div className='h-1/4 w-full'></div>
			</div>
		</div>
	);
};

const ordersAll = async setOrders => {
	const { success, dataOrder } = await getAllOrders();
	if (success) {
		setOrders(dataOrder);
	} else {
		console.log('error');
	}
};

const filterByNumOrden = (orders, search) => {
	if (!search) return orders;
	return orders.filter(elm => elm.numorden.startsWith(search));
};

const filterByVerifiedOrders = (orders, status) => {
	const sortOrders = [...orders];
	switch (status) {
		case 1:
			return sortOrders.filter(order => order.estado);
		case 2:
			return sortOrders.filter(order => !order.estado);
		default:
			return sortOrders;
	}
};

export default ReceptionPage;
