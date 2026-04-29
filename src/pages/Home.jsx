import '../styles/Home.css';

function Home() {
    return (
        <section className="hero">
            <div className="hero-glow" />
            <div className="hero-content">
                <h2 className="hero-title">
                    Discover, Rate &amp; Review<br/>
                    Your Favorite <spam>Anime</spam>
                </h2>
                <p className="hero-subtitle">
                    Join a community of anime lovers. Share your honest ratings, write reviews, and explore top-rated series across every genre.
                </p>
                <div className="hero-actions">
                    <a href="/signup" className="btn btn-primary">Get Started</a>
                    <a href="/anime" className="btn btn-secondary">Browse Anime</a>
                </div>
            </div>
        </section>
    )
}

export default Home