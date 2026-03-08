import { Suspense } from "react";
import Header from "./components/Header.jsx/Header";
import OrderContainers from "./components/OrderContainers";
import Loading from "./components/Loading";

const loadOrder = () => fetch("/orders.json").then((res) => res.json());
function App() {
  const orderPromise = loadOrder();
  
  return (
    <>
      <div>
        <Header />
        <Suspense fallback={<Loading/>}>
          <OrderContainers orderPromise={orderPromise} />
        </Suspense>
      </div>
    </>
  );
}

export default App;
