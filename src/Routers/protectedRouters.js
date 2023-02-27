import {Navigate} from 'react-router-dom';

const protectedRouters = [
    {
        path: "/",
        exact: true,
        component: <Navigate to="/dashboard" />,
    },
    { path: "*", component: <Navigate to="/dashboard" /> },
];
export {protectedRouters};
