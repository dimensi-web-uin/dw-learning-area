import { scoreEngine } from "../utils/scoreEngine";

export default function Leaderboard({ participants = [], meetings = [] }) {
  // Hitung semua score user
  const rankedUsers = participants
    .map((p) => scoreEngine(p.id, participants, meetings))
    .filter(Boolean)
    .sort((a, b) => b.totalDwPoint - a.totalDwPoint)
    .slice(0, 5);

  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "#f3f4f6",
        borderRadius: "12px",
        padding: "20px",
        boxShadow: "0 6px 16px rgba(0,0,0,0.08)",
      }}
    >
      {/* HEADER */}
      <div
        style={{
          display: "flex",
          columnGap: 8,
          marginBottom: 10,
        }}
      >
        <img
          src="/assets/leaderboard.svg"
          alt="badge"
          style={{ width: 24, height: 24 }}
        />
        <h3 className="card-title">Leaderboard Top 5 Overall</h3>
      </div>

      {/* LIST */}
      {rankedUsers.map((user, index) => (
        <div
          key={user.id}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "20px",
            color: "black",
          }}
        >
          {/* LEFT */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
            }}
          >
            <div style={{ fontSize: "20px", width: "20px" }}>{index + 1}</div>

            <img
              src={user.avatarUrl}
              alt={user.name}
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />

            <div style={{ fontSize: "16px", fontWeight: 500 }}>{user.name}</div>
          </div>

          {/* RIGHT */}
          <div style={{ fontSize: "18px", fontWeight: 600 }}>
            {user.totalDwPoint}
          </div>
        </div>
      ))}
    </div>
  );
}
