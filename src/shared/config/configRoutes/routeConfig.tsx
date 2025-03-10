import { MainPage, MapPage, NotFoundPage, OtherPage } from "pages/ui"
import { RouteProps } from "react-router-dom"
export enum AppRoutesEnum {
    MAIN = 'main',
    MAP = 'map',
    OTHER = 'other',
    NOT_FOUND_PAGE = 'not_found_page'
}

export const RoutePath: Record<AppRoutesEnum, string> = {
    [AppRoutesEnum.MAIN]: '/',
    [AppRoutesEnum.MAP]: '/map',
    [AppRoutesEnum.OTHER]: '/other',
    [AppRoutesEnum.NOT_FOUND_PAGE]: '*'
}


export const routeConfig: Record<AppRoutesEnum, RouteProps> = {
    [AppRoutesEnum.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />
    },
    [AppRoutesEnum.MAP]: {
        path: RoutePath.map,
        element:<MapPage/> 
    },
    [AppRoutesEnum.OTHER]: {
        path: RoutePath.other,
        element:<OtherPage/> 
    },
    [AppRoutesEnum.NOT_FOUND_PAGE]: {
        path: RoutePath.not_found_page,
        element:<NotFoundPage/> 
    },
}


// https://github.com/BRIT47rus/fullProject/blob/main/src/shared/config/routeConfig/routeConfig.tsx