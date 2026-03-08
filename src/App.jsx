import { Suspense } from "react";
import Header from "./components/Header.jsx/Header";
import OrderContainers from "./components/OrderContainers";
import Loading from "./components/Loading";
import { ToastContainer } from "react-toastify";

const loadOrder = () => fetch("/orders.json").then((res) => res.json());
function App() {
  const orderPromise = loadOrder();

  return (
    <>
      <div>
        <Header />
        <Suspense fallback={<Loading />}>
          <OrderContainers orderPromise={orderPromise} />
        </Suspense>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
}

export default App;
