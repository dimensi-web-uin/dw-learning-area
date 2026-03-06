export function scoreEngine(userId, participants, meetings) {
  const baseUser = participants.find((p) => p.id === userId);
  if (!baseUser) return null;

  let totalDwPoint = 0;
  let streak = 0;

  const attendance = [];
  const dailyContribution = [];

  meetings.forEach((meeting) => {
    const data = meeting.find((m) => m.id === userId);

    if (!data) {
      attendance.push(false);
      streak = 0;
      return;
    }

    const attended = data.quizCorrect >= 0;
    attendance.push(attended);

    if (attended) streak += 1;
    else streak = 0;

    const attendancePoint = attended ? 15 + Math.min(streak - 1, 7) : 0;

    const quizPoint = Math.max(data.quizCorrect, 0);
    const feedbackPoint = data.feedback ? 5 : 0;
    const activityPoint = Math.min(data.activityCount, 2) * 7;

    totalDwPoint += quizPoint + attendancePoint + feedbackPoint + activityPoint;

    dailyContribution.push(data.activityCount);
  });

  return {
    ...baseUser,
    totalDwPoint,
    streak,
    attendance,
    dailyContribution,
  };
}
