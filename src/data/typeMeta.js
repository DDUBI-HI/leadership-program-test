import { characterAssets } from "./constants";

export const typeOrder = ["self", "influence", "work", "change", "people", "future"];

export const typeMeta = {
  self: {
    title: "자기주도 성장형",
    badge: "Self Growth",
    short: "스스로 성장 방향을 잡고 실행력을 높이는 리더십이 필요합니다.",
    description:
      "현재 필요한 핵심은 자기관리, 주도성, 역할 인식, 성장 방향 설정입니다. 리더십의 출발점이 되는 셀프리더십을 강화하는 것이 우선입니다.",
    color: "from-sky-900 to-cyan-500",
    image: characterAssets.self,
    characterName: "탐험가 다람쥐",
    programs: {
      junior: ["신입사원 교육: Super Rookie Training", "AI 시대의 퍼스트 리더십", "열정 리빌딩: Passion Recovery"],
      associate: ["주임/대리 승진자: Next Level Player", "Pro-Active 셀프리더십", "조직을 이끄는 힘, 팔로워십"],
      middle: ["과장/차장 승진자: 팀 브릿지 리더십", "스스로 문제를 해결하는 셀프 코칭", "리더의 회복탄력성, 에너지 관리 리더십"],
      teamlead: ["팀장 리더십", "리더의 회복탄력성, 에너지 관리 리더십", "상황대응 리더십 KIUM"],
      executive: ["신임임원 과정: 차세대 리더 양성 미니 MBA", "셀프 리더십 & 회복탄력성", "리더의 스피치 역량 향상 프로젝트"],
      field: ["현장관리자 사전양성 과정", "현장관리자 리더십 향상과정", "Pro-Active 셀프리더십"],
    },
  },
  influence: {
    title: "실무 영향력 확장형",
    badge: "Practical Influence",
    short: "실무 전문성을 바탕으로 주변을 설득하고 영향력을 넓혀야 하는 단계입니다.",
    description:
      "현재 필요한 핵심은 협업, 설득, 조율, 팔로워십, 커뮤니케이션입니다. 개인의 실무 성과를 넘어 주변과 연결되는 영향력을 키우는 것이 중요합니다.",
    color: "from-indigo-900 to-blue-500",
    image: characterAssets.influence,
    characterName: "실무조율 비버",
    programs: {
      junior: ["관계관리와 팔로우십", "멘토링", "공감대UP 세대간 소통 솔루션"],
      associate: ["주임/대리 승진자: Next Level Player", "조직을 이끄는 힘, 팔로워십", "세대공존 커뮤니케이션"],
      middle: ["과장/차장 승진자: 팀 브릿지 리더십", "협업을 통한 문제해결", "리더의 스피치 역량 향상 프로젝트"],
      teamlead: ["중간관리자 리더십 역량 향상", "효과적인 인재육성과 질문리더십", "WinWin 코칭리더십"],
      executive: ["고급관리자 리더십역량 향상", "멀티젠 리더십", "리더의 스피치 역량 향상 프로젝트"],
      field: ["현장관리자 리더십 향상과정", "신뢰형성 팀 시너지", "프로젝트 매니지먼트 리더십"],
    },
  },
  work: {
    title: "성과관리 리더형",
    badge: "Performance Leader",
    short: "목표를 실행으로 전환하고 성과를 체계적으로 관리해야 하는 단계입니다.",
    description:
      "현재 필요한 핵심은 목표관리, 실행관리, 문제해결, 성과 피드백입니다. 좋은 의도를 실제 결과로 연결하는 관리 역량을 강화하는 것이 중요합니다.",
    color: "from-emerald-900 to-lime-500",
    image: characterAssets.work,
    characterName: "체크리스트 곰",
    programs: {
      junior: ["Business Specialist 모듈", "문제를 해결하는 비주얼 씽킹", "업무생산성을 높이는 GenAI 활용 실무"],
      associate: ["주임/대리 승진자: Next Level Player", "협업을 통한 문제해결", "합리적 의사결정"],
      middle: ["과장/차장 승진자: 성과를 주도하는 Change Maker", "성과관리 실무 스킬", "합리적 의사결정"],
      teamlead: ["성과내는 팀을 만드는 팀장 리더십", "중간관리자 리더십 역량 향상", "평가 및 고충면담 스킬"],
      executive: ["고급관리자 리더십역량 향상", "신임임원 과정: 차세대 리더 양성 미니 MBA", "성과창출 리더십"],
      field: ["현장관리자 리더십 향상과정", "현장관리자 사전양성 과정", "관리를 통한 강한조직 만들기"],
    },
  },
  change: {
    title: "변화주도 리더형",
    badge: "Change Leadership",
    short: "변화를 읽고 방향을 제시하며 조직을 움직이는 리더십이 필요합니다.",
    description:
      "현재 필요한 핵심은 전략적 사고, 변화관리, 설득, 부서 간 조율입니다. 변화의 방향을 해석하고 구성원의 실행을 이끌어내는 역량을 강화해야 합니다.",
    color: "from-amber-900 to-orange-500",
    image: characterAssets.change,
    characterName: "플랜메이커 여우",
    programs: {
      junior: ["AI 시대의 퍼스트 리더십", "창의적 사고", "자기이해 및 비전설계"],
      associate: ["주임/대리 승진자: Next Level Player", "조직을 이끄는 힘, 팔로워십", "업무 주도성"],
      middle: ["과장/차장 승진자: 성과를 주도하는 Change Maker", "과장/차장 승진자: 팀 브릿지 리더십", "창의적 문제해결 Design Thinking"],
      teamlead: ["중간관리자 리더십 역량 향상", "팀장 리더십", "애자일 리더십 워크숍"],
      executive: ["고급관리자 리더십역량 향상", "신임임원 과정: 차세대 리더 양성 미니 MBA", "윤리적 리더십과 지속가능 경영"],
      field: ["현장관리자 리더십 향상과정", "현장관리자 사전양성 과정", "프로젝트 매니지먼트 리더십"],
    },
  },
  people: {
    title: "사람중심 리더형",
    badge: "People Leadership",
    short: "사람을 이해하고 신뢰를 바탕으로 팀을 이끄는 리더십이 필요합니다.",
    description:
      "현재 필요한 핵심은 공감, 소통, 코칭, 갈등관리, 동기부여입니다. 구성원의 마음을 움직이고 관계 속에서 성과를 만드는 리더십이 중요합니다.",
    color: "from-pink-900 to-rose-500",
    image: characterAssets.people,
    characterName: "공감리더 강아지",
    programs: {
      junior: ["관계관리와 팔로우십", "공감대UP 세대간 소통 솔루션", "멘토링"],
      associate: ["주임/대리 승진자: Next Level Player", "세대공존 커뮤니케이션", "조직을 이끄는 힘, 팔로워십"],
      middle: ["과장/차장 승진자: 성과를 주도하는 Change Maker", "과장/차장 승진자: 팀 브릿지 리더십", "찰떡궁합 갈등관리"],
      teamlead: ["성과내는 팀을 만드는 팀장 리더십", "WinWin 코칭리더십", "효과적인 인재육성과 질문리더십"],
      executive: ["AI시대 휴먼리더십", "멀티젠 리더십", "리더의 스피치 역량 향상 프로젝트"],
      field: ["현장관리자 리더십 향상과정", "현장관리자 사전양성 과정", "신뢰형성 팀 시너지"],
    },
  },
  future: {
    title: "미래전환 리더형",
    badge: "Future Transition",
    short: "AI·데이터·디지털 변화에 맞춰 리더십 전환이 필요한 단계입니다.",
    description:
      "현재 필요한 핵심은 AI와 인간의 협업, 데이터 기반 의사결정, 디지털 전환 리더십입니다. 기술 변화 속에서도 사람과 조직을 함께 성장시키는 관점이 중요합니다.",
    color: "from-violet-900 to-fuchsia-500",
    image: characterAssets.future,
    characterName: "퓨처테크 토끼",
    programs: {
      junior: ["AI 시대의 퍼스트 리더십", "업무생산성을 높이는 GenAI 활용 실무", "AI·미래기술과 나의 성장"],
      associate: ["GenAI로 배우는 자기주도와 팀 협업", "업무생산성을 높이는 GenAI 활용 실무", "데이터 기반 의사결정"],
      middle: ["데이터 기반 의사결정", "GenAI를 활용한 리더의 평가면담", "애자일 리더십 워크숍"],
      teamlead: ["AI시대 휴먼리더십", "데이터 기반 의사결정", "AI 시대 기술 활용 리더십"],
      executive: ["AI시대 휴먼리더십", "데이터 기반 의사결정", "윤리적 리더십과 지속가능 경영"],
      field: ["AI 시대 기술 활용 리더십", "데이터 기반 의사결정", "현장관리자 리더십 향상과정"],
    },
  },
};
