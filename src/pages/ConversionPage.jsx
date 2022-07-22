import { useEffect, useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import See from '../components/icons/see';
import { getAllVerifiedOrders } from '../lib/api/ordersActions';

const ConversionPage = () => {
	const [orders, setOrders] = useState([]);

	useEffect(() => {
		allVerifiedOrders(setOrders);
	}, []);

	return (
		<div className='h-full p-5 neumorph flex gap-5'>
			<div className='w-1/4 h-full act p-5'>
				<div className='mb-3 font-bold text-base'>Ordenes Verificadas</div>
				<div>
					{orders.map(order => (
						<div
							key={order.id}
							className='flex justify-between act neu2 py-1 px-3 mb-3'
						>
							Orden: {order.numorden}
							<NavLink
								to={`/conversion/${order.id}`}
								className={({ isActive }) => {
									return isActive
										? 'flex gap-x-1 items-center px-2 rounded-md bg-blue-300 animate-pulse'
										: 'flex gap-x-1 items-center px-2 rounded-md hover:bg-blue-300';
								}}
							>
								<span className='text-sm'>Ver</span>
								<See className='h-4' />
							</NavLink>
						</div>
					))}
				</div>
			</div>
			<div className='w-3/4 h-full flex flex-col gap-5'>
				<div className='act w-full h-full p-5'>
					<Outlet />
				</div>
			</div>
		</div>
	);
};

const allVerifiedOrders = async setOrders => {
	const { success, dataOrder } = await getAllVerifiedOrders();
	if (success) {
		setOrders(dataOrder);
	} else {
		console.log('error');
	}
};

export default ConversionPage;
