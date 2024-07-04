import Events from "../pages/Events"
import Login from "../pages/Login"

export interface IRoute {
    path: string,
    element: JSX.Element,
}

export enum RouteNames {
    LOGIN = "/login",
    EVENTS = "/"
}

export const publicRoutes: IRoute[] = [
    {
        path: RouteNames.LOGIN, 
        element: <Login />,
    }
]

export const privateRoutes: IRoute[] = [
    {path: 
        RouteNames.EVENTS, 
        element: <Events />,
    }
]