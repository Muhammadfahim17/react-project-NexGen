import React from 'react'
import { Link, Outlet } from 'react-router'

const Layout = () => {
  return (
    <div>

    <header>
        <div className='w-[90%] m-auto flex items-center justify-around p-[15px]'>
            <details>
                <summary>Home</summary>
                <ul>
                    <Link to={'/'}>
                    <li>Yoqub 1</li>
                    </Link>
                    <Link to={'yoqub2'}>
                    <li>Yoqub 2</li>
                    </Link>
                </ul>
            </details>
            <details>
                <summary>Service</summary>
                <ul>
                    <Link to={'azam1'}>
                    <li>Azam 1</li>
                    </Link>
                    <Link to={'azam2'}>
                    <li>Azam 2</li>
                    </Link>
                </ul>
            </details>
            <details>
                <summary>Contact</summary>
                <ul>
                    <Link to={'ahliddin1'}>
                    <li>Ahliddin 1</li>
                    </Link>
                    <Link to={'ahliddin2'}>
                    <li>Ahliddin 2</li>
                    </Link>
                </ul>
            </details>
            <details>
                <summary>Catalog</summary>
                <ul>
                    <Link to={'fahim1'}>
                    <li>Fahim 1</li>
                    </Link>
                    <Link to={'fahim2'}>
                    <li>Fahim 2</li>
                    </Link>
                </ul>
            </details>
        </div>
    </header>
    <main>
        <Outlet/>
    </main>
    <footer></footer>

    </div>
  )
}

export default Layout