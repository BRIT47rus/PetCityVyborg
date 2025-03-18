import { lazy } from "react";
const INITIAL_MS = 800;
export const OtherPageChunk = lazy(()=>new Promise((resolve)=>{
    //@ts-ignore
    ///убрать
    setTimeout(()=>resolve(import('./OtherPage')),INITIAL_MS)
}))
