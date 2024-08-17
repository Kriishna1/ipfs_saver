import { RouterProvider } from "react-router-dom";
import { routes } from "./routes/routes";
import Web3Giver from "./contexts/Web3Giver";


function App() {
  return (
    <>
    <Web3Giver>
        <RouterProvider router={routes}></RouterProvider>
    </Web3Giver>
     
    </>
  );
}

export default App;
