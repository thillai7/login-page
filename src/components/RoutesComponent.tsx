/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable array-callback-return */
import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { ROUTES } from '../constant/AllRoutesConstant';
import LoadingComponent from '../shared/LoadingComponent';

import NotFound from './NotFound';

const Element: React.FC<{ children: JSX.Element }> = ({ children }) => (
    <React.Suspense fallback={<LoadingComponent loading />}>
        {children}
    </React.Suspense>
);

const RoutesComponent: React.FC = () => (
    <div>
        <Routes>
            {ROUTES.map((specificRoute, index) => (
                specificRoute.path && specificRoute.component ? (
                    <Route key={index} path={specificRoute.path} element={<Element>{specificRoute.component}</Element>} />
                ) : null
            ))}
            <Route path='*' element={<NotFound />} />
        </Routes>
    </div>
);

export default RoutesComponent;
