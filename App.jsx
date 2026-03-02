import "./App.css";
import { useState } from "react";

import ChallengerCard from "./components/ChallengerCard";
import StudyRoadmap from "./components/StudyRoadmap";
import StatsCards from "./components/StatsCards";
import Badges from "./components/Badges";
import Leaderboard from "./components/Leaderboard";
import FooterDW from "./components/FooterDW";
import { participants } from "./data/participants";
import { meetweek1 } from "./data/meet-week1";
import { scoreEngine } from "./utils/scoreEngine";

export default function App() {
  const [season, setSeason] = useState(1);

  // 🔥 pilih ID aktif disini
  const activeId = window.location.hash.replace("#", "");

  const user = scoreEngine(activeId, participants, [
    meetweek1,
  ]);

  if (!user) return <h2>User not found</h2>;

  return (
    <div className="main-container">
      <div className="svg-container">
        <img src="/assets/bg-logo.svg" alt="Logo" />
      </div>

      <div className="main-content">
        <div className="content-container">
          <ChallengerCard
            fotoProfile={user.avatarUrl}
            username={user.name}
            id={user.id}
            dwPoint={user.totalDwPoint}
          />

          <StudyRoadmap
            activeSeason={season}
            onChangeSeason={setSeason}
            attendance={user.attendance}
          />

          <StatsCards
            streaks={user.streak}
            dwPoint={user.totalDwPoint}
            poin={user.totalDwPoint}
          />

          <Badges
            attendance={user.attendance}
            dailyContribution={user.dailyContribution}
            dwPoint={user.totalDwPoint}
          />
          <Leaderboard participants={participants} meetings={[meetweek1]} />

          <FooterDW />
        </div>
      </div>
    </div>
  );
}
