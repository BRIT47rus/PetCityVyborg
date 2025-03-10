
import { Header } from 'widgets'
import './index.scss'
import { AppRouter } from './providers/ui/AppRouter'
import { Suspense } from 'react'

export const App = ()=>{


    return (
        <div className="App">
            <Header/>
            <Suspense fallback='loading'>
            <AppRouter/>

            </Suspense>
            
        </div>
    )
} 