import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {publicRouters} from './publicRouters';
import {protectedRouters} from './protectedRouters';
import NonAuthLayout from '../Layouts/NonAuthLayout';
import {AuthProtected} from './authProtected';

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

                <Route>
                    {protectedRouters.map((route, idx) => (
                        <Route
                            path={route.path}
                            element={
                                <AuthProtected>
                                    {route.component}
                                </AuthProtected>
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
