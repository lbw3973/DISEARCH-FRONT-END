import "./App.css";
import ReactQueryProvider from "./components/Common/ReactQueryProvider";
import Router from "./routes/Router";
function App() {
  return (
    <ReactQueryProvider>
      <Router />
    </ReactQueryProvider>
  );
}

export default App;
