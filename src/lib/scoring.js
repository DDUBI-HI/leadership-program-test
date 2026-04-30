export function scoreAnswers(answers) {
  const scores = {
    self: 0,
    influence: 0,
    work: 0,
    change: 0,
    people: 0,
    future: 0,
  };

  const learningScores = {};
  let role = "middle";
  let industry = "mixed";
  let duration = "1일 과정";

  Object.values(answers).forEach((answer) => {
    if (!answer) return;

    if (answer.role) {
      role = answer.role;
    }

    if (answer.industry) {
      industry = answer.industry;
    }

    if (answer.duration) {
      duration = answer.duration;
    }

    const tags = answer.tags || [];

    tags.forEach((tag) => {
      if (scores[tag] !== undefined) {
        scores[tag] += 1;
      } else {
        learningScores[tag] = (learningScores[tag] || 0) + 1;
      }
    });
  });

  const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]);

  const topTag = sorted[0][0];
  const secondTag = sorted[1][0];

  const learning =
    Object.entries(learningScores).sort((a, b) => b[1] - a[1])?.[0]?.[0] ||
    "workshop";

  return {
    topTag,
    secondTag,
    role,
    industry,
    learning,
    duration,
    scores,
  };
}