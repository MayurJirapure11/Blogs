import React from 'react'
import { Logo, Container, LogoutBtn } from '../index'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Header() {
    const authStatus = useSelector((state) => state.auth.status)
    const navigate = useNavigate()

    const navItems = [
        {
            name: 'Home',
            slug: "/",
            active: true,
            icon: "house"  // Adding an icon for Home
        }, 
        {
            name: "Login",
            slug: "/login",
            active: !authStatus,
        },
        {
            name: "Signup",
            slug: "/signup",
            active: !authStatus,
        },
        {
            name: "All Posts",
            slug: "/all-posts",
            active: authStatus,
        }, 
        {
            name: "Add Post",
            slug: "/add-post",
            active: authStatus,
            icon:"add"
        },
    ]

    return (
        <header className="py-3 shadow bg-gray-100 border-2 border-gray-300">
            <Container>
                <nav className="flex items-center">
                    <div className="mr-6">
                        <Link to="/">
                            <Logo width="130px" />
                        </Link>
                    </div>
                    <ul className="flex ml-auto space-x-2">
                        {navItems.map((item) =>
                            item.active ? (
                                <li key={item.name}>
                                    <button
                                        onClick={() => navigate(item.slug)}
                                        className="inline-flex items-center gap-1 px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
                                    >
                                        {item.icon && (
                                            <span className="material-symbols-outlined text-gray-600">
                                                {item.icon}
                                            </span>
                                        )}
                                        {item.name}
                                    </button>
                                </li>
                            ) : null
                        )}
                        {authStatus && (
                            <li>
                                <LogoutBtn />
                            </li>
                        )}
                    </ul>
                </nav>
            </Container>
        </header>
    )
}

export default Header