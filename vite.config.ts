import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import {msw} from "msw/vite"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react() , msw()],
})
