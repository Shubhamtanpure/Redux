import React from 'react'
import { NavLink } from 'react-router-dom'
import Cart from './Cart/Cart'


export default function Header() {
    return (
        <>
            <nav className="bg-gray-800">
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="relative flex h-16 items-center justify-between">
                        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        </div>
                        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                            <div className="flex flex-shrink-0 items-center">
                                <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company" />
                            </div>
                            <div className="hidden sm:ml-6 sm:block">
                                <div className="flex space-x-4 cursor-pointer">

                                    <li className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" style={{ listStyle: 'none' }} aria-current="page">Dashboard</li>
                                    <NavLink >
                                        <li className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-3 text-sm font-medium" style={{ listStyle: 'none' }}>Home</li>
                                    </NavLink>
                                    <NavLink to='/about'>
                                        <li className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-3 text-sm font-medium" style={{ listStyle: 'none' }}>AboutUS</li>
                                    </NavLink>
                                    <NavLink to='/contact'>
                                        <li className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-3 text-sm font-medium" style={{ listStyle: 'none' }}>ContactUS</li>
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                            <button type="button" className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                <span className="absolute -inset-1.5"></span>
                                <span className="sr-only">View notifications</span>
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                                </svg>
                            </button>
                            <div className="relative ml-3">
                                <div>
                                    <NavLink to='/cart'>
                                        <button type="button" className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button hover:bg-white-700" aria-expanded="false" aria-haspopup="true">
                                            <span className="absolute -inset-1.5"></span>
                                            <span className="sr-only">Open user menu</span>
                                            <img class="h-8 w-8 rounded-full" src="	https://cdn-icons-png.flaticon.com/512/6493/6493310.png" alt="" />
                                        </button>
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="sm:hidden" id="mobile-menu">
                    <div className="space-y-1 px-2 pb-3 pt-2">

                        <li href="#" className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium" style={{ listStyle: 'none' }} aria-current="page">Dashboard</li>
                        <li href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium" style={{ listStyle: 'none' }}>Home</li>
                        <li href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium" style={{ listStyle: 'none' }}>AboutUS</li>
                        <li href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium" style={{ listStyle: 'none' }}>ContactUS</li>
                    </div>
                </div>
            </nav>
        </>
    )
}
