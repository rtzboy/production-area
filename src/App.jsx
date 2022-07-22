import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Order from './components/Order';
import OrderProduct from './components/OrderProduct';
import ConversionPage from './pages/ConversionPage';
import HomePage from './pages/HomePage';
import LayoutPage from './pages/LayoutPage';
import MixedPage from './pages/MixedPage';
import ReceptionPage from './pages/ReceptionPage';
import RecipesPage from './pages/RecipesPage';
import SendRecipePage from './pages/SendRecipePage';

const App = () => (
	<BrowserRouter>
		<Routes>
			<Route path='/' element={<LayoutPage />}>
				<Route index element={<HomePage />} />
				<Route path='recipes' element={<RecipesPage />} />
				<Route path='reception' element={<ReceptionPage />}>
					<Route path=':receptionId' element={<Order />} />
				</Route>
				<Route path='conversion' element={<ConversionPage />}>
					<Route path=':conversionId' element={<OrderProduct />} />
				</Route>
				<Route path='send' element={<SendRecipePage />} />
				<Route path='mixed' element={<MixedPage />} />
			</Route>
		</Routes>
	</BrowserRouter>
);
export default App;
