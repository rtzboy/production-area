import { useEffect, useState } from 'react';
// import Pending from '../components/icons/pending';
// import Verified from '../components/icons/verified';
import OrderForm from '../components/OrderForm';
import OrderRow from '../components/OrderRow';
import { getAllOrders } from '../lib/api/ordersActions';

const ReceptionPage = () => {
	const [orders, setOrders] = useState([]);
	const [search, setSearch] = useState('');
	const [status, setStatus] = useState(0);

	useEffect(() => {
		ordersAll(setOrders);
	}, []);

	return (
		<div className='h-full p-5 neumorph flex gap-5'>
			<div className='w-2/5 h-full overflow-y-auto p-4 act'>
				<div className='mb-3 font-bold text-base'>Recepcion de Productos</div>
				<OrderForm
					search={search}
					status={status}
					setSearch={setSearch}
					setStatus={setStatus}
				/>
				<OrderRow orders={orders} />
			</div>
			<div className='w-3/5 h-full flex gap-5 flex-col'>
				<div className='h-3/4 w-full act'>uno</div>
				<div className='h-1/4 w-full act'>dos</div>
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

export default ReceptionPage;
