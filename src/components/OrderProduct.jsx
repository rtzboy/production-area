import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Calculator from '../components/icons/calculator';
import { searchInsumoByProductName } from '../lib/api/conversionOrder';
import { getOrderById } from '../lib/api/ordersActions';
import { pedidosByOrder } from '../lib/api/pedidosActions';
import { searchIceCreamProduct } from '../lib/api/searchIceCream';

const OrderProduct = () => {
	const [orders, setOrders] = useState([]);
	const [product, setProduct] = useState([]);
	const [insumos, setInsumos] = useState([]);
	const [infoOrder, setInfoOrder] = useState({ cantidad: 1, order: '' });
	const { conversionId } = useParams();

	useEffect(() => {
		productsByOrderId(conversionId, setOrders);
		orderNameById(conversionId, infoOrder, setInfoOrder);
	}, [conversionId]);

	useEffect(() => {
		if (product.length > 0) {
			const key = product[0].id;
			console.log(key);
			testInsumo(key, setInsumos);
		}
	}, [product]);
	console.log('conversionId', conversionId);

	return (
		<>
			<div className='h-[50%] overflow-y-auto'>
				<div className='mb-3 font-bold text-base'>Productos{conversionId}</div>
				{orders.map(order => (
					<div
						key={order.id}
						className='flex w-[90%] mx-auto h-9 neumorph mb-4'
					>
						<div className='w-[45%] flex items-center px-3 py-2'>
							{order.nombre}
						</div>
						<div className='w-[25%] flex items-center justify-center px-3 py-2'>{`${order.cantidad} ${order.unidad}`}</div>
						<div className='w-[30%] flex items-center justify-evenly px-3 py-2'>
							<button
								onClick={() => {
									productbyPedidoName(order.nombre, setProduct);
									setInfoOrder({ ...infoOrder, cantidad: order.cantidad });
								}}
								className='flex items-center neumorph text-xs px-3 py-1 hover:bg-green-300 active:act group'
							>
								Calcular
								<Calculator className='h-5 group-hover:animate-shake' />
							</button>
						</div>
					</div>
				))}
			</div>
			<div className='h-[5%]'>
				<div>
					<button
						onClick={() => {
							alert('listo!');
						}}
						className='neumorph px-3 active:act text-sm'
					>
						Preparar Envio
					</button>
				</div>
			</div>
			<div className='h-[45%] overflow-y-auto pt-3'>
				{insumos &&
					insumos.map(insumo => (
						<div
							key={insumo.id}
							className='w-[90%] flex items-center neumorph mb-4 p-1 mx-auto'
						>
							<div className='w-[60%]'>{insumo.insumo}</div>
							<div className='w-[20%] text-center'>
								{console.log(infoOrder.cantidad)}
								{(Number(insumo.cantidad) * infoOrder.cantidad).toFixed(2)}
							</div>
							<div className='w-[20%] text-center'>{insumo.unidad}</div>
						</div>
					))}
			</div>
		</>
	);
};

const productsByOrderId = async (id, setOrders) => {
	const { success, datos } = await pedidosByOrder(id);
	if (success) {
		setOrders(datos);
	} else {
		console.log('no se puedo traer los datos');
	}
};

const productbyPedidoName = async (name, setProduct) => {
	const { success, datos } = await searchInsumoByProductName(name);
	if (success) {
		setProduct(datos);
		console.log(' - listo');
	}
};

const testInsumo = async (id, setInsumos) => {
	console.log(' - ', id);
	const { success, datos } = await searchIceCreamProduct(id);
	if (success) {
		setInsumos(datos);
		console.log(' - listoConLosInsumos');
	}
};

const orderNameById = async (id, infoOrder, setInfoOrder) => {
	console.log(id);
	const { success, dataOrder } = await getOrderById(id);
	console.log(success, dataOrder);
	if (success) {
		setInfoOrder({ ...infoOrder, order: dataOrder.numorden });
		console.log(' - listoConLosInsumos');
	}
};

export default OrderProduct;
