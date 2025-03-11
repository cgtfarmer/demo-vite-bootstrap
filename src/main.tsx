import 'bootstrap/dist/css/bootstrap.css';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from "react-router";
import App from './App.tsx'
import Home from './pages/home/Home.tsx';
import Other from './pages/other/Other.tsx';
import NotFound from './pages/not-found/NotFound.tsx';
import Users from './pages/users/Users.tsx';
import User from './pages/users/User.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />

          <Route path="other" element={<Other />} />

          <Route path="users">
            <Route index element={<Users />} />

            <Route path=":userId">
              <Route index element={<User />} />
            </Route>
          </Route>

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
