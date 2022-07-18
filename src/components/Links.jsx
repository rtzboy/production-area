import { NavLink } from 'react-router-dom';
import ArrowRight from '../components/icons/arrow-right';

const Links = ({ to, nombre }) => (
	<NavLink
		to={to}
		className={({ isActive }) => {
			return isActive
				? 'flex justify-between items-center h-9 my-3 px-5 py-1 txt-clr act'
				: 'flex justify-between items-center hover:act h-9 my-3 px-5 py-1 txt-clr';
		}}
	>
		{nombre}
		<ArrowRight className='h-5' />
	</NavLink>
);

export default Links;
