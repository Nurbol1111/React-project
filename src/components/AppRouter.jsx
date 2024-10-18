import React from 'react';
import { Route, Routes } from 'react-router-dom'; // React Router v6
import { Router } from '../routes/router';

const AppRouter = () => {
  return (
    <Routes>
        {Router.map(route =>
                    <Route path={route.path} element={route.element} key={route.path} exact={route.exact}/>
                )}
    </Routes>
  );
};

export default AppRouter;