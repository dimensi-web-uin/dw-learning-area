export default function Badges({
  attendance = [],
  dailyContribution = [],
  dwPoint = 0,
}) {
  const getRank = (point) => {
    if (point <= 69) return "Explorer I";
    if (point <= 139) return "Explorer II";
    if (point <= 199) return "Explorer III";
    if (point <= 266) return "Learner I";
    if (point <= 333) return "Learner II";
    if (point <= 399) return "Learner III";
    if (point <= 466) return "Practitioner I";
    if (point <= 533) return "Practitioner II";
    if (point <= 599) return "Practitioner III";
    return "Archiever";
  };

  const rank = getRank(dwPoint);

  const totalAttendance = attendance.filter(Boolean).length;

  const webStarter = totalAttendance >= 3;

  let streak = 0;
  let maxStreak = 0;
  attendance.forEach((a) => {
    if (a) {
      streak++;
      maxStreak = Math.max(maxStreak, streak);
    } else {
      streak = 0;
    }
  });
  const consistency = maxStreak >= 5;

  const totalContribution = dailyContribution
    .map((c) => (c > 0 ? 1 : 0))
    .reduce((a, b) => a + b, 0);

  const activeLearner = totalContribution >= 5;

  const season1Full =
    attendance.slice(0, 6).length === 6 &&
    attendance.slice(0, 6).every(Boolean);

  const season2Full =
    attendance.slice(6, 12).length === 6 &&
    attendance.slice(6, 12).every(Boolean);

  const perfectAttendance = season1Full || season2Full;

  const achieverRank = rank === "Archiever";
  const highPerformer = dwPoint >= 400;

  const badgeStyle = (active, type) => {
    const base = {
      flex: 1,
      padding: "8px 10px",
      borderRadius: "8px",
      fontSize: "12px",
      fontWeight: 600,
      textAlign: "center",
      whiteSpace: "nowrap",
      transition: "all 0.3s ease",
    };

    if (!active) {
      return {
        ...base,
        backgroundColor: "#e5e7eb",
        color: "#666",
        border: "1.5px solid transparent",
        opacity: 0.7,
      };
    }

    const themes = {
      starter: {
        background: "linear-gradient(135deg, #bbf7d0, #86efac)",
        color: "#065f46",
        border: "1.5px solid #22c55e",
        boxShadow: "0 0 8px rgba(34,197,94,0.4)",
      },
      consistency: {
        background: "linear-gradient(135deg, #bfdbfe, #93c5fd)",
        color: "#1e3a8a",
        border: "1.5px solid #3b82f6",
        boxShadow: "0 0 8px rgba(59,130,246,0.4)",
      },
      perfect: {
        background: "linear-gradient(135deg, #fef3c7, #fde68a)",
        color: "#92400e",
        border: "1.5px solid #f59e0b",
        boxShadow: "0 0 10px rgba(245,158,11,0.45)",
      },
      learner: {
        background: "linear-gradient(135deg, #ddd6fe, #c4b5fd)",
        color: "#5b21b6",
        border: "1.5px solid #8b5cf6",
        boxShadow: "0 0 8px rgba(139,92,246,0.4)",
      },
      achiever: {
        background: "linear-gradient(135deg, #f5d0fe, #e879f9)",
        color: "#86198f",
        border: "1.5px solid #d946ef",
        boxShadow: "0 0 12px rgba(217,70,239,0.5)",
      },
      performer: {
        background: "linear-gradient(135deg, #fecaca, #fca5a5)",
        color: "#7f1d1d",
        border: "1.5px solid #ef4444",
        boxShadow: "0 0 10px rgba(239,68,68,0.45)",
      },
    };

    return {
      ...base,
      ...themes[type],
    };
  };

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
      <div
        style={{
          display: "flex",
          columnGap: 8,
          marginBottom: 10,
        }}
      >
        <img
          src="/assets/badge.svg"
          alt="badge"
          style={{ width: 24, height: 24 }}
        />
        <h3 className="card-title">Badges</h3>
      </div>

      {/* ROW 1 */}
      <div
        style={{
          display: "flex",
          gap: "4px",
          marginBottom: "4px",
        }}
      >
        <div style={badgeStyle(webStarter, "starter")}>Web Starter</div>
        <div style={badgeStyle(consistency, "consistency")}>Consistency</div>
        <div style={badgeStyle(perfectAttendance, "perfect")}>
          Perfect Attendance
        </div>
      </div>

      {/* ROW 2 */}
      <div
        style={{
          display: "flex",
          gap: "4px",
        }}
      >
        <div style={badgeStyle(activeLearner, "learner")}>Active Learner</div>
        <div style={badgeStyle(achieverRank, "achiever")}>Achiever</div>
        <div style={badgeStyle(highPerformer, "performer")}>High Performer</div>
      </div>
    </div>
  );
}
