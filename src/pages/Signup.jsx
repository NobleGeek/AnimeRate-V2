import '../styles/Auth.css'

function Signup() {
  return (
    <div className="auth-page">
        <div className="trade-name">
            <h1>Anime<spam>Rate</spam></h1>
        </div>
        <p className="auth-subtitle">Create your account — it&apos;s free</p>

        <div className="auth-card">
            <form>
                <div className="input-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Enter your full name"
                    />
                </div>

                <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="you@example.com"
                    />
                </div>

                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Create a password"
                    />
                </div>

                <button type="submit" className="auth-submit">Create Account</button>

                <p className="auth-footer">
                    Already have an account? <a href="/login">Login</a>
                </p>
            </form>
        </div>
    </div>
  )
}

export default Signup