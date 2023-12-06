import React from 'react';

import { CustomRoute } from '../interfaces/CommonSharedType';

const LoginScreen = React.lazy(() => import('../screens/LoginPageScreen'));

export const ROUTES: CustomRoute[] = [
    {
        path: '/login',
        component: <LoginScreen />,
    },
];
