import React from 'react';
import { Outlet } from 'react-router-dom';

const Main = () => {
   return (
      <div>
         <nav>
            {/* <Link to='/signin'>SignIn</Link>
            <Link to='/register'>Register</Link> */}
         </nav>
         <Outlet></Outlet>
      </div>
   );
};

export default Main;