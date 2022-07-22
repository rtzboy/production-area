import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Pending from '../components/icons/pending';
import Verified from '../components/icons/verified';
import { pedidosByOrder } from '../lib/api/pedidosActions';
import { OrderContext } from '../lib/contexts/OrderContext';

const Order = () => {
	// let navigate = useNavigate();
	const { receptionId } = useParams();
	const [pedidos, setPedidos] = useState([]);
	const { orders, setOrders } = useContext(OrderContext);

	console.log(orders);

	useEffect(() => {
		pedidosByOrders(receptionId, setPedidos);
	}, [receptionId]);

	return (
		<div className='p-5'>
			<div className='mb-3 font-bold text-base'>Pedidos</div>
			{pedidos.map(pedido => (
				<div key={pedido.id} className='mb-3 neu2 py-2 px-3 text-base'>
					<div className='flex items-center'>
						<span className=''>Nombre: {pedido.nombre}</span>
					</div>
					<div className='flex items-center justify-between'>
						<span className=''>{`Cantidad: ${pedido.cantidad} ${pedido.unidad}`}</span>
						<div className='flex'>
							<button
								onClick={evt => {
									changeStatusTrue(setPedidos, pedidos, pedido.id);
									if (checkStatus(pedidos) === 0) {
										changeStatusOrder(receptionId, orders, setOrders);
									}
								}}
								className='neumorph px-3 mx-3 text-xs hover:animate-pulse hover:bg-green-300'
							>
								correct?
							</button>
							<span className='text-sm flex'>
								Status:
								{pedido.estado ? (
									<Verified className='h-4 ml-2 vrf text-green-400' />
								) : (
									<Pending className='h-4 ml-2 pndg text-orange-400' />
								)}
								{pedido.estado ? (
									<span className='vrf px-1 text-green-600'>Verificado</span>
								) : (
									<span className='pndg px-1 text-orange-400'>Pendiente</span>
								)}
							</span>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

const pedidosByOrders = async (id, setPedidos) => {
	const { success, datos } = await pedidosByOrder(id);
	if (success) {
		setPedidos(datos);
		console.log('datos traidos correctamente');
	} else {
		console.log('no se pudo traer la data');
	}
};

const changeStatusTrue = (setPedidos, pedidos, id) => {
	const abc = [...pedidos];
	const abcxyz = abc.map(elm => {
		if (elm.id === id) {
			return { ...elm, estado: true };
		}
		return elm;
	});
	setPedidos(abcxyz);
};

const checkStatus = pedidos => {
	let count = -1;
	pedidos.map(pedido => {
		if (!pedido.estado) {
			count = count + 1;
		}
		return '';
	});
	return count;
};

const changeStatusOrder = (id, orders, setOrders) => {
	const newOrders = [...orders];
	const filterOrders = newOrders.map(order => {
		if (order.id === Number(id)) {
			return { ...order, estado: !order.estado };
		}
		return order;
	});
	console.log(filterOrders);
	setOrders(filterOrders);
};

export default Order;
