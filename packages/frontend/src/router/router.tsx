import * as React from 'react';
import App from '~modules/app/app.module';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ROUTER_KEYS } from '~shared/keys';

const Router: React.FunctionComponent = () => {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path={ROUTER_KEYS.DASHBOARD} element={<App />} />
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default Router;
