import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LayoutPage from './pages/LayoutPage';
import ReceptionPage from './pages/ReceptionPage';
import RecipesPage from './pages/RecipesPage';

const App = () => (
	<BrowserRouter>
		<Routes>
			<Route path='/' element={<LayoutPage />}>
				<Route index element={<HomePage />} />
				<Route path='recipes' element={<RecipesPage />} />
				<Route path='reception' element={<ReceptionPage />} />
			</Route>
		</Routes>
	</BrowserRouter>
);
export default App;
