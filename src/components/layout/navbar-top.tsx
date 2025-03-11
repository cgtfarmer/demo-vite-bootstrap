'use client'

// import Link from 'next/link';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, matchPath, useLocation } from 'react-router';
// import { usePathname } from 'next/navigation';
// import EnvironmentAccessor from '../../accessor/environment-accessor';
// import CognitoConfigFactory from '../../factory/cognito-config-factory';
// import DependencyGraph from '../../config/dependency-graph';
// import CognitoConfiguration from '../../config/cognito-configuration/cognito-configuration';
// import { useEffect } from 'react';

interface NavbarLink {
  name: string;

  path: string;
};

// TODO: DRY up
// const environmentAccessor = new EnvironmentAccessor();
// const cognitoConfigFactory = new CognitoConfigFactory(environmentAccessor);
// const cognitoConfiguration = cognitoConfigFactory.create();
const navbarLinks: NavbarLink[] = [
  { name: 'Home', path: '/' },
  { name: 'Users', path: '/users' }
];

// function matchesCurrentPath(path: string) {
//   const pathname = usePathname();

//   return [path, `${path}/`].includes(pathname);
// };

export default function Component() {
  const { pathname } = useLocation();

  const navLinks = navbarLinks.map((link) => {
    const match = matchPath(link.path, pathname);

    return (
      <Nav.Link as={Link} to={link.path} active={Boolean(match)} key={link.path}>
        {link.name}
      </Nav.Link>
    );
  });

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="px-3">
      <Navbar.Brand as={Link} to="/">Brand</Navbar.Brand>

      <Navbar.Toggle aria-controls="navbar-top" />

      <Navbar.Collapse id="navbar-top">
        <Nav className="me-auto">
          {navLinks}
        </Nav>

        <Nav>
          <Nav.Link as={Link} to={'/login'}>
            Sign In
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
