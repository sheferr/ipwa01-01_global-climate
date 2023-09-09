import React from 'react';
import { createRoot } from 'react-dom/client';
import Main, { loader as rootLoader } from './Main';
import Error from './Error';

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

const rounter = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <Error />,
        loader: rootLoader,
        children: [
            {
                path: "/:langID",
                element: <Main />,
                loader: rootLoader,
            },
        ],
    },
]);

createRoot(document.getElementById('main')).render(<RouterProvider router={rounter} />);