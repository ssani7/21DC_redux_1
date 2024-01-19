import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { incrementByValue } from './redux/features/counter/counterSlice';
import { RootState } from './redux/features/store';
import router from './routes';

function App() {
	const { count } = useSelector((state: RootState) => state.counter);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(incrementByValue(9));
	}, []);

	return (
		<>
			<p>{count}</p>
			<RouterProvider router={router} />
		</>
	);
}

export default App;
