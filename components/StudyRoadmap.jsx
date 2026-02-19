import { useEffect, useState } from "react";

export default function StudyRoadmap({
  activeSeason = 1,
  onChangeSeason,
  attendance = [],
}) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 460);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 460);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const allWeeks = [
    "/assets/html.svg",
    "/assets/css.svg",
    "/assets/css.svg",
    "/assets/js.svg",
    "/assets/js.svg",
    "/assets/js.svg",
    "/assets/tailwind.svg",
    "/assets/tailwind.svg",
    "/assets/react.svg",
    "/assets/react.svg",
    "/assets/react.svg",
    "/assets/react.svg",
  ];

  const startIndex = activeSeason === 1 ? 0 : 6;
  const endIndex = activeSeason === 1 ? 6 : 12;

  const weeks = allWeeks.slice(startIndex, endIndex);

  const containerPadding = isMobile ? 17 : 20;
  const circleSize = isMobile ? 42 : 50;
  const imageSize = isMobile ? 34 : 40;

  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "#ffffff",
        borderRadius: "12px",
        padding: `${containerPadding}px`,
        boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
        boxSizing: "border-box",
      }}
    >
      {/* HEADER */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          //   alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            columnGap: 6,
            marginBottom: 16,
          }}
        >
          <img
            src="/assets/study-roadmap-icon.svg"
            alt="challenger-icon"
            style={{ width: 24, height: 24 }}
          />
          <h3 className="card-title">Study Roadmap</h3>
        </div>

        <div>
          <span
            onClick={() => onChangeSeason && onChangeSeason(1)}
            style={{
              marginRight: "20px",
              cursor: "pointer",
              fontWeight: 500,
              fontSize: 14,
              color: activeSeason === 1 ? "#16a34a" : "#999",
            }}
          >
            Season 1
          </span>

          <span
            onClick={() => onChangeSeason && onChangeSeason(2)}
            style={{
              cursor: "pointer",
              fontWeight: 500,
              fontSize: 14,
              color: activeSeason === 2 ? "#16a34a" : "#999",
            }}
          >
            Season 2
          </span>
        </div>
      </div>

      {/* ROADMAP */}
      <div
        style={{
          position: "relative",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* LINE BACKGROUND */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: circleSize / 2,
            right: circleSize / 2,
            height: "2px",
            backgroundColor: "#ddd",
            transform: "translateY(-50%)",
            zIndex: 0,
          }}
        />

        {weeks.map((img, index) => {
          const realIndex = startIndex + index;

          const hasAttendance = realIndex < attendance.length;
          const isPresent = attendance[realIndex];

          let borderColor = "#e5e7eb"; // default abu
          let borderWidth = "1.5px";

          if (hasAttendance) {
            borderColor = isPresent ? "#22c55e" : "#ef4444";
            borderWidth = "2px";
          }

          return (
            <div
              key={index}
              style={{
                position: "relative",
                zIndex: 1,
              }}
            >
              <div
                style={{
                  width: `${circleSize}px`,
                  height: `${circleSize}px`,
                  borderRadius: "50%",
                  border: `${borderWidth} solid ${borderColor}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#ffffff",
                }}
              >
                <img
                  src={img}
                  alt={`Week ${realIndex + 1}`}
                  style={{
                    width: `${imageSize}px`,
                    height: `${imageSize}px`,
                    objectFit: "contain",
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
