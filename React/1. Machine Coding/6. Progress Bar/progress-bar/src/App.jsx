import './App.css'
import ProgressBar from "./components/ProgressBar.jsx";

function App() {
	const bars = [0,5,10,20,30,50,70,90,100]
  return (
    <>
		<h1>Progress Bar</h1>
		{bars.map((value) => <ProgressBar key={value} progress={value} />)}
    </>
  )
}

export default App
