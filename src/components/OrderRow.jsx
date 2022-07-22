import { NavLink } from 'react-router-dom';
import Pending from '../components/icons/pending';
import See from '../components/icons/see';
import Verified from '../components/icons/verified';

const OrderRow = ({ orders }) => {
	return orders.map(order => (
		<div
			key={order.id}
			className='w-full h-16 flex flex-col px-4 rounded-xl mb-3 neu2'
		>
			<div className='h-8 flex items-center justify-between'>
				<span> N° Orden: {order.numorden}</span>
				<span>
					<NavLink
						to={`/reception/${order.id}`}
						className={({ isActive }) => {
							return isActive
								? 'flex gap-x-1 items-center px-2 rounded-md bg-blue-300 animate-pulse'
								: 'flex gap-x-1 items-center px-2 rounded-md hover:bg-blue-300';
						}}
					>
						<span className='text-sm'>Ver</span>
						<See className='h-4' />
					</NavLink>
				</span>
			</div>
			<div className='h-8 italic flex items-center justify-between text-xs'>
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

// const QueryNavLink = ({ to, ...props }) => {
// 	const location = useLocation();
// 	return <NavLink to={to + location.search} {...props} />;
// };

export default OrderRow;
