export const GOOGLE_FORM_URL =
  "https://naver.me/xONmMeLY";

const CHARACTER_BASE = `${import.meta.env.BASE_URL}characters/`;

export const characterAssets = {
  self: `${CHARACTER_BASE}self-growth.png`,
  influence: `${CHARACTER_BASE}practical-influence.png`,
  work: `${CHARACTER_BASE}performance-leader.png`,
  change: `${CHARACTER_BASE}change-leader.png`,
  people: `${CHARACTER_BASE}people-centered.png`,
  future: `${CHARACTER_BASE}future-transition.png`,
};

export const learningMap = {
  short: "1~2시간 특강형",
  workshop: "4~16시간 워크숍형",
  action: "사례분석 + 액션플랜형",
  diagnosis: "진단 + 피드백형",
  coaching: "1:1 코칭/컨설팅형",
  journey: "온·오프라인 혼합 학습여정형",
};
