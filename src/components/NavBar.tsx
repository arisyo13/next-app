import React, { FC } from 'react';
import Link from 'next/link';
import NavLink from './NavLink';

const NavBar: FC = (): JSX.Element => {
  return (
    <nav className="container mx-auto top-0 z-10 left-0 right-0 absolute ">
      <div className="flex flex-row justify-between align-middle mt-12 px-8 lg:px-0">
        <Link href="/" className="text-mid-gray text-2xl font-bold">S.BK</Link>
        {/* <Link href="about"><a className="text-dark-gray text-base font-bold">About</a></Link> */}
        <NavLink name="About" path="about" />
      </div>
    </nav>
  );
};

export default NavBar;
