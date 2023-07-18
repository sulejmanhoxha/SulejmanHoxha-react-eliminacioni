import { DataProvider } from "./context/DataContext.jsx";

function App() {
	return (
		<>
			<DataProvider>
				<p>Hello World</p>
			</DataProvider>
		</>
	);
}

export default App;
