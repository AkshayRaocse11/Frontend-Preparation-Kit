import './App.css';
import React,{lazy,Suspense,useState} from 'react';

const Home = lazy(() => import('./components/Home'));
const About = lazy(() => import('./components/About'));
const DashBoard = lazy(()=> import('./components/DashBoard'));



function App() {
	const [page, setPage] = useState('home');

	const renderPage = () => {
		switch (page) {
			case 'home': return <Home />;
			case 'about': return <About />;
			case 'dashboard': return <DashBoard />;
			default: return <Home />;
		}
	};

	return (
		<div>
			<nav>
				<button onClick={() => setPage('home')}>Home</button>
				<button onClick={() => setPage('about')}>About</button>
				<button onClick={() => setPage('dashboard')}>Dashboard</button>
			</nav>
			
			<Suspense fallback={<div className="spinner">"...loading"</div>}>
				{renderPage()}
			</Suspense>
			
		</div>
	);
}

export default App;
