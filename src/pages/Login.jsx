import { useNavigate } from 'react-router-dom';
import '../styles/Auth.css'

function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulate successful login
    localStorage.setItem('isLoggedIn', 'true');
    navigate('/home');
  };

  return (
    <div className="auth-page">
        <div className="trade-name">
            <h1>Anime<spam>Rate</spam></h1>
        </div>
        <p className="auth-subtitle">Welcome back — sign in to continue</p>

        <div className="auth-card">
            <form onSubmit={handleLogin}>
                <div className="input-group">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        name="username"
                        id="username"
                        placeholder="Enter your username"
                        defaultValue="admin"
                    />
                </div>

                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Enter your password"
                        defaultValue="password123"
                    />
                </div>

                <button type="submit" className="auth-submit">Login</button>

                <div className="auth-divider"><span>or</span></div>

                <button type="button" className="auth-social">
                    <img
                        src="https://img.icons8.com/color/48/google-logo.png"
                        alt="Google"
                    />
                    Continue with Google
                </button>

                <p className="auth-footer">
                    Don&apos;t have an account? <a href="/signup">Sign up</a>
                </p>
            </form>
        </div>
    </div>
  )
}

export default Login