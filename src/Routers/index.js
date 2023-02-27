import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {publicRouters} from './publicRouters';
import NonAuthLayout from '../Layouts/NonAuthLayout';

const Index = () => {
    return (
        <React.Fragment>
            <Routes>
                <Route>
                    {publicRouters.map((route, idx) => (
                            <Route
                                path={route.path}
                                element={
                                    <NonAuthLayout>
                                        {route.component}
                                    </NonAuthLayout>
                                }
                                key={idx}
                                exect={true}
                            />
                        ))}
                </Route>
            </Routes>
        </React.Fragment>
    );
};
export default Index;
