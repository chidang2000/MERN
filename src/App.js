import './App.css';
import DefaultLayout from './layout/DefaultLayout';
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import routes from './routes';
import { Fragment } from 'react';
import { v4 as uuid } from 'uuid';

function App() {
    return (
        <Router>
            <div className='App'>
                <Routes>
                    {routes.map((route) => {
                        let Layout = DefaultLayout;
                        if (route.layout === null) {
                            Layout = Fragment;
                        }
                        if (route.layout) {
                            Layout = route.layout;
                        }
                        const Page = route.component;
                        return (
                            <Route
                                key={uuid()}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
