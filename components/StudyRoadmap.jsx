import { useEffect, useState } from "react";

export default function StudyRoadmap({ attendance = [] }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 460);
  const [currentSlide, setCurrentSlide] = useState(0);

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
    "/assets/react.svg",
    "/assets/react.svg",
    "/assets/nodejs.svg",
    "/assets/blockchain.svg",
    "/assets/blockchain.svg",
    "/assets/blockchain.svg",
  ];

  const itemsPerSlide = 6;
  const totalSlides = Math.ceil(allWeeks.length / itemsPerSlide);

  const containerPadding = isMobile ? 17 : 20;
  const circleSize = isMobile ? 42 : 50;
  const imageSize = isMobile ? 34 : 40;

  const handlePrev = () => {
    if (currentSlide > 0) setCurrentSlide(currentSlide - 1);
  };

  const handleNext = () => {
    if (currentSlide < totalSlides - 1) setCurrentSlide(currentSlide + 1);
  };

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
          alignItems: "center",
          marginBottom: 16,
          width: "100%",
        }}
      >
        <button
          onClick={handlePrev}
          style={{
            cursor: "pointer",
            backgroundColor: "#ffffff",
            border: "none",
            borderRadius: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 32,
            height: 32,
            padding: 0,
            boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
          }}
        >
          <img
            src="/assets/arrow.svg"
            alt="challenger-icon"
            style={{ width: 24, height: 24, rotate: "180deg" }}
          />
        </button>
        <div
          style={{
            display: "flex",
            columnGap: 6,
            alignItems: "center",
          }}
        >
          <img
            src="/assets/study-roadmap-icon.svg"
            alt="challenger-icon"
            style={{ width: 24, height: 24 }}
          />
          <h3 className="card-title">Study Roadmap</h3>
        </div>
        <button
          onClick={handleNext}
          style={{
            cursor: "pointer",
            backgroundColor: "#ffffff",
            border: "none",
            borderRadius: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 32,
            height: 32,
            padding: 0,
            boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
          }}
        >
          <img
            src="/assets/arrow.svg"
            alt="challenger-icon"
            style={{ width: 24, height: 24 }}
          />
        </button>
      </div>

      {/* ROADMAP CONTAINER */}
      <div
        style={{
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            display: "flex",
            width: `${100 * totalSlides}%`,
            transform: `translateX(-${(100 / totalSlides) * currentSlide}%)`,
            transition: "transform 0.3s ease",
          }}
        >
          {Array.from({ length: totalSlides }, (_, slideIndex) => {
            const start = slideIndex * itemsPerSlide;
            const end = Math.min(start + itemsPerSlide, allWeeks.length);
            const weeksInSlide = allWeeks.slice(start, end);

            return (
              <div
                key={slideIndex}
                style={{
                  width: `${100 / totalSlides}%`,
                  position: "relative",
                  display: "flex",
                  justifyContent:
                    weeksInSlide.length === 1 ? "center" : "space-between",
                  alignItems: "center",
                }}
              >
                {/* LINE BACKGROUND */}
                {weeksInSlide.length > 1 && (
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
                )}

                {weeksInSlide.map((img, index) => {
                  const realIndex = start + index;

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
            );
          })}
        </div>
      </div>
    </div>
  );
}
