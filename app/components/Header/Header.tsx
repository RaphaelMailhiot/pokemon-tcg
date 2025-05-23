import React from 'react';
import Link from 'next/link';
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";

const Header = () => (
    <nav className="navbar bg-base-100 px-4 py-2 shadow-md">
        <div className="navbar-start">
            <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </label>
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/users">Users</Link></li>
                    <li><Link href="/sets">Sets</Link></li>
                    <li><Link href="/dashboard">Dashboard</Link></li>
                </ul>
            </div>
            <Link href="/" className="btn btn-ghost normal-case text-xl">Pokemon TCG</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/users">Users</Link></li>
                <li><Link href="/sets">Sets</Link></li>
                <li><Link href="/dashboard">Dashboard</Link></li>
            </ul>
        </div>
        <div className="navbar-end">
            <button className="btn btn-primary">
                <LogoutLink>Logout</LogoutLink>
            </button>
        </div>
    </nav>
);

export default Header;
