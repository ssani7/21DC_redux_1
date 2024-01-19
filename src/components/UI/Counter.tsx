import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { decrement, increment, incrementByValue } from '../../redux/features/counter/counterSlice';
import { RootState } from '../../redux/features/store';

const Counter = () => {
	const { count } = useSelector((state: RootState) => state.counter);
	const dispatch = useDispatch();

	return (
		<div className="flex flex-col items-center justify-center mt-10">
			<p className="text-2xl font-semibold">Current Value ={count} </p>
			<div className="mt-4 flex items-center justify-center gap-6">
				<button className="bg-slate-600 text-white p-4 rounded-xl" onClick={() => dispatch(increment())}>
					Increment
				</button>
				<button className="bg-slate-600 text-white p-4 rounded-xl" onClick={() => dispatch(decrement())}>
					Decrement
				</button>
				<button className="bg-slate-600 text-white p-4 rounded-xl" onClick={() => dispatch(incrementByValue(10))}>
					Increment By Value
				</button>
			</div>
			<div className="flex items-center gap-10 mt-10 underline">
				<Link to={'/home'}>Go to home</Link>
				<Link to={'/login'}>Go to login</Link>
			</div>
		</div>
	);
};

export default Counter;
