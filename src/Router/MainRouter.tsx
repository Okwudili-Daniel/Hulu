import React from "react"
import Layout from "../component/layouts/Layout"
import { createBrowserRouter } from "react-router-dom"
import HomeScreen from "../component/common/HomeScreen"

export const MainRouter = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                    index:true,
                    element: <HomeScreen/>
            }
        ]
    }
])
