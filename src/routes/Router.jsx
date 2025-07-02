import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import Dashboard from "../pages/Dashboard/Dashboard";
import DissolvedOxygenDetails from "../pages/DissolvedOxygenDetails/DissolvedOxygenDetails";
import PotentialOfHydrogenDetails from "../pages/PotentialOfHydrogenDetails/PotentialOfHydrogenDetails";
import MainLayout from "../layout/MainLayout";
import SalinityDetails from "../pages/SalinityDetails/SalinityDetails";
import TemperatureDetails from "../pages/TemperatureDetails/TemperatureDetails";
import TotalDissolvedSolidDetails from "../pages/TotalDissolvedSolidDetails/TotalDissolvedSolidDetails";

const Router = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <MainLayout />,
            children: [
                {
                    path: "/",
                    element: <Dashboard />,
                },
                {
                    path: "/do-details",
                    element: <DissolvedOxygenDetails />,
                },
                {
                    path: "/ph-details",
                    element: <PotentialOfHydrogenDetails />,
                },
                {
                    path: "/sal-details",
                    element: <SalinityDetails />,
                },
                {
                    path: "/temp-details",
                    element: <TemperatureDetails />,
                },
                {
                    path: "/tds-details",
                    element: <TotalDissolvedSolidDetails />,
                },
            ]
        }
    ])

    return (
        <RouterProvider router={router} />
    )
}

export default Router
