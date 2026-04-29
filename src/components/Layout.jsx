import { useState, useEffect } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import Menu from '../components/Menu';

import '../styles/Layout.css';

function Layout() {
    const [user, setUser] = useState(localStorage.getItem('isLoggedIn') === 'true');
    const [toggleUserOptions, setToggleUserOptions] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    // Re-check user state when location changes (e.g., coming from login page)
    useEffect(() => {
        setUser(localStorage.getItem('isLoggedIn') === 'true');
    }, [location]);

    const menuItems = [
        {
            label: 'My Profile',
            icon: <svg viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>,
            href: '/profile',
        },
        {
            label: 'My Reviews',
            icon: <svg viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>,
            href: '/reviews',
        },
        {
            label: 'My Anime',
            icon: <svg viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>,
            href: '/anime',
        },
        {
            label: 'Logout',
            icon: <svg viewBox="0 0 24 24"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>,
            onClick: () => { 
                localStorage.removeItem('isLoggedIn');
                setUser(false); 
                setToggleUserOptions(false); 
                navigate('/home'); // Optional: redirect to home on logout
            },
            danger: true,
            divider: 'top',
        },
    ];

    return (
        <div className="app-layout">
            {/* ── Persistent Header ── */}
            <header className="page-head">
                <a href="/home" className="brand">
                    <h1>Anime<spam>Rate</spam></h1>
                </a>

                <nav className="main-nav">
                    <ul>
                        <li><a href="/home" className="nav-link">Home</a></li>
                        <li><a href="/about" className="nav-link">About Us</a></li>
                    </ul>
                </nav>

                <div className="account-buttons">
                    {user ? (
                        <div className="avatar-wrapper">
                            <button
                                className="user-avatar"
                                onClick={() => setToggleUserOptions(!toggleUserOptions)}
                            >
                                A
                            </button>
                            {toggleUserOptions && <Menu items={menuItems} />}
                        </div>
                    ) : (
                        <div className="login-options">
                            <a href="/login" className="btn-login">Login</a>
                            <a href="/signup" className="btn-signup">Sign up</a>
                        </div>
                    )}
                </div>
            </header>

            {/* ── Page content swaps here ── */}
            <main className="page-content">
                <Outlet />
            </main>
        </div>
    );
}

export default Layout;
