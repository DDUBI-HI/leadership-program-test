export const questions = [
  {
    id: "role",
    title: "현재 나의 역할과 가장 가까운 것은?",
    subtitle: "현재 역할에 따라 추천 과정의 대상자와 난이도가 달라집니다.",
    options: [
      {
        label: "신입사원 또는 1~3년 차 주니어",
        tags: ["self"],
        role: "junior",
      },
      {
        label: "주임/대리급 실무 리더",
        tags: ["influence"],
        role: "associate",
      },
      {
        label: "과장/차장급 중간 리더",
        tags: ["influence", "work"],
        role: "middle",
      },
      {
        label: "팀장/파트장/보직 리더",
        tags: ["work", "people"],
        role: "teamlead",
      },
      {
        label: "임원 또는 차세대 경영 리더",
        tags: ["change", "future"],
        role: "executive",
      },
      {
        label: "현장관리자 또는 현장관리 후보자",
        tags: ["work", "influence"],
        role: "field",
      },
    ],
  },
  {
    id: "industry",
    title: "현재 우리 조직 또는 교육 대상자의 업무 분야와 가장 가까운 것은?",
    subtitle: "업무 분야에 맞춰 추천 과정의 사례와 커리큘럼 강조 포인트를 조정합니다.",
    options: [
      {
        label: "제조 / 생산 / 품질 / 현장관리",
        tags: [],
        industry: "manufacturing",
      },
      {
        label: "IT / 플랫폼 / 디지털 / 데이터",
        tags: [],
        industry: "it",
      },
      {
        label: "영업 / 마케팅 / 고객관리",
        tags: [],
        industry: "sales",
      },
      {
        label: "교육 / 공공 / 기관 / 서비스",
        tags: [],
        industry: "education",
      },
      {
        label: "연구개발 / 기획 / 프로젝트 조직",
        tags: [],
        industry: "rnd",
      },
      {
        label: "일반 사무 / 경영지원 / 관리 부서",
        tags: [],
        industry: "office",
      },
      {
        label: "기타 또는 여러 부서가 함께 참여하는 과정",
        tags: [],
        industry: "mixed",
      },
    ],
  },
  {
    id: "direction",
    title: "이번 리더십 교육에서 가장 강화하고 싶은 방향은?",
    subtitle: "선택한 교육 방향을 기준으로 나에게 맞는 리더십 유형을 추천합니다.",
    options: [
      {
        label: "자기주도성, 업무 몰입, 성장 마인드를 강화하고 싶다",
        tags: ["self", "self"],
      },
      {
        label: "실무자의 보고, 협업, 조율, 영향력을 높이고 싶다",
        tags: ["influence", "influence"],
      },
      {
        label: "목표관리, 성과관리, 실행관리, 평가·피드백 역량을 강화하고 싶다",
        tags: ["work", "work"],
      },
      {
        label: "변화관리, 전략적 사고, 조직 설득, 혁신 실행 역량을 키우고 싶다",
        tags: ["change", "change"],
      },
      {
        label: "소통, 코칭, 갈등관리, 세대공존, 조직문화 역량을 높이고 싶다",
        tags: ["people", "people"],
      },
      {
        label: "AI 활용, 데이터 기반 의사결정, 디지털 전환 리더십을 강화하고 싶다",
        tags: ["future", "future"],
      },
    ],
  },
  {
    id: "learning",
    title: "선호하는 학습 방식은?",
    subtitle: "교육을 어떤 방식으로 운영하면 좋을지 선택해주세요.",
    options: [
      {
        label: "핵심 내용을 빠르게 이해할 수 있는 특강형이 좋다",
        tags: ["short"],
      },
      {
        label: "실습과 토론이 포함된 참여형 워크숍이 좋다",
        tags: ["workshop"],
      },
      {
        label: "사례 분석과 액션플랜 수립까지 포함되면 좋다",
        tags: ["action"],
      },
      {
        label: "사전 진단과 개인별 피드백이 포함되면 좋다",
        tags: ["diagnosis"],
      },
      {
        label: "리더 대상 1:1 코칭 또는 소그룹 코칭이 있으면 좋다",
        tags: ["coaching"],
      },
      {
        label: "온라인·오프라인을 섞은 학습 여정형이 좋다",
        tags: ["journey"],
      },
    ],
  },
  {
    id: "duration",
    title: "희망하는 교육 기간은?",
    subtitle: "원하는 교육 길이에 따라 추천 운영 규모를 조정합니다.",
    options: [
      {
        label: "1~2시간 내외로 핵심만 간단히 듣고 싶다",
        tags: [],
        duration: "1~2시간 특강형",
      },
      {
        label: "반나절 과정으로 부담 없이 운영하고 싶다",
        tags: [],
        duration: "반나절 과정",
      },
      {
        label: "1일 과정으로 주요 내용을 충분히 다루고 싶다",
        tags: [],
        duration: "1일 과정",
      },
      {
        label: "2일 과정으로 실습과 적용까지 깊게 다루고 싶다",
        tags: [],
        duration: "2일 심화 과정",
      },
      {
        label: "3회 이상 시리즈 과정으로 단계적으로 운영하고 싶다",
        tags: [],
        duration: "3회 이상 시리즈 과정",
      },
      {
        label: "진단·교육·코칭·후속과제가 포함된 장기 학습 여정으로 운영하고 싶다",
        tags: [],
        duration: "장기 학습 여정형",
      },
    ],
  },
];