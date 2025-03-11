import './App.css'
import { Outlet } from 'react-router';
import Footer from './components/layout/footer';
import NavbarTop from './components/layout/navbar-top';

export default function App() {
  return (
    <div className="antialiased d-flex flex-column min-vh-100">
      <header>
        <NavbarTop />
      </header>

      <main className="container pt-3">
        <Outlet />
      </main>

      <Footer className="mt-auto" />
    </div>
  );
}
