export default function StatsCards({ streaks = 0, dwPoint = 0 }) {
  const getRank = (dwPoint) => {
    if (dwPoint <= 60) return "Explorer I";
    if (dwPoint <= 120) return "Explorer II";
    if (dwPoint <= 180) return "Explorer III";
    if (dwPoint <= 240) return "Learner I";
    if (dwPoint <= 300) return "Learner II";
    if (dwPoint <= 360) return "Learner III";
    if (dwPoint <= 420) return "Practitioner I";
    if (dwPoint <= 480) return "Practitioner II";
    if (dwPoint <= 540) return "Practitioner III";
    return "Achiever";
  };

  const rank = getRank(dwPoint);

  // Ambil kata pertama saja (Explorer, Learner, Practitioner, Archiever)
  const baseRank = rank.split(" ")[0].toLowerCase();

  const rankImage = `/assets/rank-${baseRank}.svg`;

  const cardStyle = {
    flex: 1,
    minWidth: "100px",
    backgroundColor: "#f3f4f6",
    borderRadius: "12px",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    boxShadow: "0 6px 16px rgba(0,0,0,0.08)",
  };

  const iconStyle = {
    width: "75px",
    height: "40px",
    objectFit: "contain",
    marginBottom: "6px",
  };

  const titleStyle = {
    fontSize: "14px",
    color: "#666",
  };

  const valueStyle = {
    fontSize: "24px",
    fontWeight: "600",
    margin: 0,
    color: "#000000",
  };

  const rankValueStyle = {
    fontSize: "18px",
    fontWeight: "600",
    margin: 0,
    color: "#000000",

    lineHeight: "1.2",
  };

  // =============================
  // CONDITIONAL EFFECTS
  // =============================

  const streakStyle =
    streaks > 3
      ? {
          border: "1.2px solid #ff6b00",
          boxShadow: "0 0 12px rgba(255, 90, 0, 0.6)",
        }
      : {};

  const rankCardStyle =
    baseRank === "achiever"
      ? {
          border: "1.6px solid #a100ff",
          boxShadow: "0 0 14px rgba(160, 0, 255, 0.6)",
        }
      : {};

  const dwPointStyle =
    dwPoint > 333
      ? {
          border: "1.8px solid #16a34a",
          boxShadow: "0 0 12px rgba(22, 163, 74, 0.6)",
        }
      : {};

  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        width: "100%",
      }}
    >
      {/* STREAKS */}
      <div style={{ ...cardStyle, ...streakStyle }}>
        <img src="/assets/streak.svg" alt="streak" style={iconStyle} />
        <div style={titleStyle}>Streaks</div>
        <h2 style={valueStyle}>{streaks}</h2>
      </div>

      {/* RANK */}
      <div style={{ ...cardStyle, ...rankCardStyle }}>
        <img src={rankImage} alt={rank} style={iconStyle} />
        <div style={titleStyle}>Rank</div>
        <h2 style={rankValueStyle}>{rank}</h2>
      </div>

      {/* DW dwPoint */}

      <div style={{ ...cardStyle, ...dwPointStyle }}>
        <img src="/assets/dw-point.svg" alt="dw-point" style={iconStyle} />
        <div style={titleStyle}>DW Point</div>
        <h2 style={valueStyle}>{dwPoint}</h2>
      </div>
    </div>
  );
}
