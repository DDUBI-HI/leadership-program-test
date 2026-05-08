import { programCatalog, getProgramByTitle } from "../data/programCatalog";
import { industryMeta } from "../data/industryMeta";

function hasMatch(list, value) {
  return list.includes("all") || list.includes(value);
}

function scoreProgram(program, result, industryBoostTitles) {
  let score = 0;

  if (program.type === result.topTag) score += 100;
  if (hasMatch(program.roles, result.role)) score += 45;
  if (hasMatch(program.industries, result.industry)) score += 30;
  if (industryBoostTitles.includes(program.title)) score += 35;

  if (program.roles.includes("all")) score += 5;
  if (program.industries.includes("all")) score += 5;

  return score;
}

export function getRecommendedPrograms(result, limit = 4) {
  const industryInfo = industryMeta[result.industry] || industryMeta.mixed;
  const industryBoostTitles =
    industryInfo.programsByType?.[result.topTag] || [];

  const scored = programCatalog
    .map((program) => ({
      ...program,
      recommendationScore: scoreProgram(
        program,
        result,
        industryBoostTitles
      ),
    }))
    .filter((program) => program.recommendationScore > 0)
    .sort((a, b) => b.recommendationScore - a.recommendationScore);

  const boostPrograms = industryBoostTitles
    .map((title) => getProgramByTitle(title))
    .filter(Boolean);

  const merged = [...boostPrograms, ...scored];

  const unique = [];
  const seen = new Set();

  merged.forEach((program) => {
    if (!program || seen.has(program.title)) return;
    seen.add(program.title);
    unique.push(program);
  });

  return unique.slice(0, limit);
}