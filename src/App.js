
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Order from './components/Order/Order';
import { productsAndCartLoader } from './components/ProductsAndCartLoader/ProductsAndCartLoader';
import Shop from './components/Shop/Shop';
import Main from './Layout/Main';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Shop></Shop>,
          loader: () => fetch('products.json')
        },
        {
          path: '/order',
          element: <Order></Order>,
          loader: productsAndCartLoader,
        }
      ]
    }
  ])

  return (
    <div>

      <RouterProvider router={router}></RouterProvider>

    </div>
  );
}


export default App;
