import { lazy } from "react";
const INITIAL_MS = 800;
export const MainPageChunk = lazy(()=>new Promise((resolve)=>{
    //@ts-ignore
    ///убрать
    setTimeout(()=>resolve(import('./MainPage')),INITIAL_MS)
}))
