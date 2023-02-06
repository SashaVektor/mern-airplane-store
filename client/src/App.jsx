import React from 'react';
import Home from './pages/Home/Home'
import { Route, Routes } from 'react-router-dom';
import { paths } from './paths';
import PlanePage from './pages/PlanePage';
import CreatePlanePage from './pages/CreatePlanePage';
import OrderPage from './pages/OrderPage/OrderPage';
import NotFound from './pages/NotFound/NotFound';

const App = () => {
    return (
        <Routes>
            <Route path={paths.home} element={<Home />}/>
            <Route path={`${paths.plane}/:id`} element={<PlanePage />}/>
            <Route path={paths.order} element={<OrderPage />}/>
            <Route path={paths.createPlane} element={<CreatePlanePage />}/>
            <Route path="*" element={<NotFound />}/>
        </Routes>
    )
}

export default App
