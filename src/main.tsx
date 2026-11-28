import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {Dashboard} from './Dashboard.tsx'
import { BrowserRouter} from 'react-router'

async function defreRender()
{
    const {worker} = await import("./mocks/browser.ts");
    return worker.start();
}

defreRender().then(() => 
{
    createRoot(document.getElementById('root')!).render(
        <StrictMode>
            <BrowserRouter>
                <Dashboard/>
            </BrowserRouter>
        </StrictMode>,
    )
});
