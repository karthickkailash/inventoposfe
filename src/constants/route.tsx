import React from 'react';
import Login from "../pages/auth/login";
import PosPage from "../pages/pos";
import { loginUrl, posUrl } from "./pageURL";

export const unAuthRoute = [
    {
        id:1,
        path:loginUrl,
        element:<Login/>
    }
]
export const authRoute = [
    {
        id:1,
        path:posUrl,
        element:<PosPage />
    }
]