import { lazy } from "react";
const INITIAL_MS = 800;
export const MapPageChunk = lazy(()=>new Promise((resolve)=>{
    //@ts-ignore
    ///убрать
    setTimeout(()=>resolve(import('./MapPage')),INITIAL_MS)
}))
