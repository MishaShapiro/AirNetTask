import { Routes, Route, Navigate } from 'react-router-dom';
import { privateRoutes, publicRoutes } from '../router';

const AppRouter = () => {
    const login = false
    return (
        login ? 
        <Routes>
            {privateRoutes.map((route) => 
                <Route path={route.path} element={route.element} key={route.path}/>
            )}
            <Route path='*' element={<Navigate to="/" replace />}/>
        </Routes>
        :
        <Routes>
            {publicRoutes.map(route => 
                <Route path={route.path} element={route.element} key={route.path}/>
            )}
            <Route path='*' element={<Navigate to="/login" replace />}/>
        </Routes>
    );
};

export default AppRouter;