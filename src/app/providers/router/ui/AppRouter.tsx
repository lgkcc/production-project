import React, {
    memo, Suspense, useCallback,
} from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppRoutesProps, routeConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'shared/ui/PageLoader/PageLoader';
import { RequireAuth } from 'app/providers/router/ui/RequireAuth';

const AppRouter = () => {
    const renderWithWrapper = useCallback((route: AppRoutesProps) => {
        const { path, element, authOnly } = route;
        const routeElement = (
            <Suspense fallback={<PageLoader />}>
                <div className="page-wrapper">
                    {element}
                </div>
            </Suspense>
        );
        return (
            <Route
                key={path}
                path={path}
                element={authOnly ? <RequireAuth>{routeElement}</RequireAuth> : routeElement}
            />
        );
    }, []);
    return (
        <Routes>
            {Object.values(routeConfig).map(renderWithWrapper)}
        </Routes>
    );
};

export default memo(AppRouter);
