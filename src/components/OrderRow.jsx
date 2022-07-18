import Pending from '../components/icons/pending';
import Verified from '../components/icons/verified';

const OrderRow = ({ orders }) => {
	console.log(orders);

	return orders.map(order => (
		<div
			key={order.id}
			className='w-full h-20 flex flex-col px-4 rounded-xl border mb-3 border-blue-200'
		>
			<div className='h-10 flex items-center'>N° Orden: {order.numorden}</div>
			<div className='h-10 italic flex items-center justify-between text-xs'>
				<div className='text-sm'>Fecha: {order.fecha}</div>
				<div className='flex'>
					status:
					{order.estado ? (
						<Verified className='h-4 ml-2 vrf text-green-400' />
					) : (
						<Pending className='h-4 ml-2 pndg text-orange-400' />
					)}
					{order.estado ? (
						<span className='vrf px-1 text-green-600'>Verificado</span>
					) : (
						<span className='pndg px-1 text-orange-400'>Pendiente</span>
					)}
				</div>
			</div>
		</div>
	));
};

export default OrderRow;
