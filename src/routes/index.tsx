import { createBrowserRouter } from 'react-router-dom';
import Home from '../page/Home';
import Login from '../page/Login';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
	},
	{
		path: '/home',
		element: <Home />,
	},
	{
		path: '/login',
		element: <Login />,
	},
	{
		path: '*',
		element: <h1>Not found</h1>,
	},
]);

export default router;
