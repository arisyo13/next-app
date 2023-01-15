import React, { FC } from 'react';
import Link from 'next/link';

interface NavLinkProps {
    name: string;
    path: string;
}

const NavLink: FC<NavLinkProps> = ({ name, path }): JSX.Element => {
  return (
    <Link
      href={path}
      className="text-dark-gray py-2 px-6 hover:bg-dark-gray hover:text-gray transition-all ease-linear duration-200 transform text-base font-bold"
    >
      {name}
    </Link>
  );
};

export default NavLink;
