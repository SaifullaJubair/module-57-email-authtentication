import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
// import Register from './Components/Register';
import RegisterReactBootstrap from './Components/RegisterReactBootstrap';
import SignIn from './Components/SignIn/SignIn';
import Main from './layout/Main';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main>0</Main>,
    children: [
      {
        path: '/',
        element: <RegisterReactBootstrap></RegisterReactBootstrap>
      },
      {
        path: '/register',
        element: <RegisterReactBootstrap></RegisterReactBootstrap>
      },
      {
        path: '/signin',
        element: <SignIn></SignIn>
      },
    ]
  }
])
function App() {

  return (
    <div className="">
      <RouterProvider router={router} ></RouterProvider>
    </div>
  );
}

export default App;
