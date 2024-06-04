//REACT
import ReactDOM from "react-dom/client";
//APPLICATION
import App from "./App";
//ERROR-BOUNDARY
import ErrorBoundary from "./ErrorBoundary";


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(<ErrorBoundary> <App /> </ErrorBoundary>);