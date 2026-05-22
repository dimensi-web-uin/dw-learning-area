import "./challengerCard.css";

export default function ChallengerCard({ fotoProfile, username, id, dwPoint }) {
  const getRank = (point) => {
    if (point <= 180) return "Explorer";
    if (point <= 360) return "Learner";
    if (point <= 540) return "Practitioner";
    return "Achiever";
  };

  const rank = getRank(dwPoint);

  // Ambil base rank saja untuk image
  const baseRank = rank.split(" ")[0].toLowerCase();
  const rankImage = `/assets/rank-${baseRank}.svg`;

  return (
    <div className={`challenger-card rank-${baseRank}`}>
      <div>
        <div
          style={{
            display: "flex",
            columnGap: 6,
            marginBottom: 10,
          }}
        >
          <img
            src="/assets/challenger-icon.svg"
            alt="challenger-icon"
            style={{ width: 24, height: 24 }}
          />
          <h3 className="card-title">Challenger</h3>
        </div>

        <div className="left-section">
          <img src={fotoProfile} alt="Profile" className="profile-image" />

          <div className="user-info">
            <span className="username">{username}</span>
            <span className="user-id">{id}</span>
          </div>
        </div>
      </div>

      <div style={{ display: "flex", alignItems: "center" }}>
        <img src={rankImage} alt="Rank" className="rank" />
      </div>
    </div>
  );
}
