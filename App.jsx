import "./App.css";

const userName = "gibran";
const userId = "fufufafa";

const ROADMAP_DATA = [
  { nama : "HTML", logo : "/logo_html.png", status : "done" },
  { nama : "CSS", logo : "/logo_css.png", status : "active" },
  { nama : "CSS", logo : "/logo_css.png", status : "done" },
  { nama : "JS", logo : "/logo_js.png", status : "locked" },
  { nama : "JS", logo : "/logo_js.png", status : "locked" },
  { nama : "JS", logo : "/logo_js.png", status : "locked" },
];

const streak = 0;
const point = 0;
const rank = "Practitioner I";

const Badges = [
  { title : "Web Starter" },
  { title : "Consistency" },
  { title : "Perfect Attendance" },
  { title : "Active Learner" },
  { title : "Archiever" },
  { title : "High Performer" },
];

const Leaderboard = [
  { rank : 1, nama : "prabowo", skor : 1 },
  { rank : 2, nama : "jokowi", skor : 0 },
  { rank : 3, nama : "gibran", skor : 2.3 },
  { rank : 4, nama : "bahlil", skor : 2.7 },
  { rank : 5, nama : "trump", skor : -1 },
];

function Roadmap() {
  return (
    <div className="card">
      <div className="roadmap-top">
        <h3>📘 Study RoadMap</h3>
        <div className="season">
          <span className="active">Season 1</span>
          <span>Season 2</span>
        </div>
      </div>

      <div className="roadmap-track">
        {ROADMAP_DATA.map((item, i) => (
          <div key={i} className="roadmap-item">
            <div className={`roadmap-circle ${item.status}`}>
              <img src={item.logo} alt={item.nama} className="roadmap-icon" />
            </div>
            <p>{item.nama}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="app-container">

      <div className="card">
        <div className="profile-body">
          <img src="/profil.jpg" alt="profile" className="profile-photo" />

          <div className="profile-info">
            <h2>gibrann</h2>
            <p>@{userId}</p>
          </div>

          <div className="rank-circle">
            <img src="/logo_practitioner.png" alt="rank" className="rank-logo" />
          </div>
        </div>
      </div>

      <Roadmap />

      <div className="stats-row">
        <div className="stat-card">
          <div className="stat-icon">
            <img src="/logo_streaks.png" alt="streak" />
          </div>
          <div className="stat-text">
            <p>Streaks</p>
            <h2>{streak}</h2>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">
            <img src="/logo_practitioner.png" alt="rank" />
          </div>
          <div className="stat-text">
            <p>Rank</p>
            <h2>{rank}</h2>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">
            <img src="/logo_dw.png" alt="point" />
          </div>
          <div className="stat-text">
            <p>DW Point</p>
            <h2>{point}</h2>
          </div>
        </div>
      </div>

      <div className="card">
        <h3>Badges</h3>
        <div className="badges-grid">
          {Badges.map((b, i) => (
            <div key={i} className={`badge-pill ${i === 0 ? "active" : ""}`}>
              {b.title}
            </div>
          ))}
        </div>
      </div>

      <div className="card">
        <h3>🏆 Leaderboard Top 5</h3>
        {Leaderboard.map((u) => (
          <div key={u.rank} className="leader-item">
            <div className="leader-rank">{u.rank}</div>
            <img src="/profile.jpg" alt="user" className="leader-photo" />
            <div className="leader-name">{u.nama}</div>
            <div className="leader-score">{u.skor}</div>
          </div>
        ))}
      </div>

      <footer className="app-footer">
        Dimensi Web Learning Arena
      </footer>

    </div>
  );
}

export default App;
