import { motion } from "framer-motion";
import Icon from "./Icon";
import ProgramCard from "./ProgramCard";
import { GOOGLE_FORM_URL } from "../data/constants";
import { typeMeta } from "../data/typeMeta";

const learningMap = {
  short: "1~2시간 특강형",
  workshop: "참여형 워크숍형",
  action: "사례분석 + 액션플랜형",
  diagnosis: "진단 + 피드백형",
  coaching: "1:1 코칭 / 소그룹 코칭형",
  journey: "온·오프라인 혼합 학습여정형",
};

export default function Result({ result, onReset }) {
  const meta = typeMeta[result.topTag];
  const second = typeMeta[result.secondTag];

  const programs = meta.programs[result.role] || meta.programs.middle;
  const learningType = learningMap[result.learning] || "참여형 워크숍형";
  const durationType = result.duration || "1일 과정";
  const scoreMax = Math.max(...Object.values(result.scores));

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-6xl mx-auto"
    >
      <div className="grid lg:grid-cols-[.95fr_1.05fr] gap-6 items-stretch">
        <div
          className={`rounded-[2rem] bg-gradient-to-br ${meta.color} text-white p-7 md:p-9 shadow-xl overflow-hidden relative`}
        >
          <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/10" />
          <div className="absolute -right-8 top-28 h-24 w-24 rounded-full bg-white/10" />

          <div className="relative">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-semibold mb-7">
              <Icon name="sparkles" className="w-4 h-4" />
              {meta.badge}
            </div>

            <p className="text-white/70 mb-2">나의 리더십 추천 유형</p>

            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              {meta.title}
            </h2>

            <p className="text-lg text-white/85 leading-8 mb-6">
              {meta.short}
            </p>

            <div className="rounded-[1.75rem] overflow-hidden bg-white/10 border border-white/15 mb-5">
              <img
                src={meta.image}
                alt={meta.title}
                className="w-full aspect-square object-cover"
              />
            </div>

            <div className="rounded-3xl bg-white/10 p-5 backdrop-blur mb-4">
              <p className="text-sm text-white/70 mb-1">대표 캐릭터</p>
              <p className="text-2xl font-bold">{meta.characterName}</p>
            </div>

            {second && (
              <div className="rounded-3xl bg-white/10 p-5 backdrop-blur">
                <p className="text-sm text-white/70 mb-2">
                  함께 개발하면 좋은 보조 역량
                </p>
                <p className="text-xl font-bold">{second.title}</p>
              </div>
            )}
          </div>
        </div>

        <div className="rounded-[2rem] bg-white border border-slate-200 shadow-xl p-7 md:p-9">
          <div className="mb-7">
            <h3 className="text-2xl font-bold text-slate-950 mb-3">
              추천 이유
            </h3>
            <p className="text-slate-600 leading-8">{meta.description}</p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            <div className="rounded-3xl bg-slate-50 p-5 border border-slate-100">
              <p className="text-sm text-slate-500 mb-1">추천 운영 형태</p>
              <p className="font-bold text-slate-900">{learningType}</p>
            </div>

            <div className="rounded-3xl bg-slate-50 p-5 border border-slate-100">
              <p className="text-sm text-slate-500 mb-1">추천 교육 기간</p>
              <p className="font-bold text-slate-900">{durationType}</p>
            </div>

            <div className="rounded-3xl bg-slate-50 p-5 border border-slate-100">
              <p className="text-sm text-slate-500 mb-1">추천 학습 방향</p>
              <p className="font-bold text-slate-900">
                진단 → 실습 → 액션플랜
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-slate-950 mb-4">
              추천 프로그램
            </h3>

            <div className="grid gap-4">
              {programs.map((program, index) => (
                <ProgramCard key={program} program={program} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-[1fr_.82fr] gap-6 mt-6">
        <div className="rounded-[2rem] bg-white border border-slate-200 shadow-sm p-7">
          <h3 className="text-xl font-bold text-slate-950 mb-5">
            역량별 응답 분포
          </h3>

          <div className="space-y-4">
            {Object.entries(result.scores).map(([tag, score]) => {
              const type = typeMeta[tag];
              const label = type?.title || tag;
              const width =
                scoreMax === 0
                  ? 0
                  : Math.max(10, Math.round((score / scoreMax) * 100));

              return (
                <div key={tag}>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="font-medium text-slate-700">
                      {label}
                    </span>
                    <span className="text-slate-500">{score}점</span>
                  </div>

                  <div className="h-3 rounded-full bg-slate-100 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${width}%` }}
                      transition={{ duration: 0.5 }}
                      className="h-full rounded-full bg-slate-900"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="rounded-[2rem] bg-slate-950 text-white p-7 shadow-xl">
          <h3 className="text-2xl font-bold mb-3">
            우리 조직에 맞게 설계하고 싶다면?
          </h3>

          <p className="text-slate-300 leading-7 mb-6">
            추천 결과를 바탕으로 대상자, 교육 시간, 핵심 이슈에 맞춘 맞춤형
            리더십 학습 여정을 제안드릴 수 있습니다.
          </p>

          <div className="space-y-3 mb-7 text-sm text-slate-300">
            <div className="flex gap-2">
              <Icon name="check" className="w-5 h-5 text-white" />
              계층별 과정 설계
            </div>
            <div className="flex gap-2">
              <Icon name="check" className="w-5 h-5 text-white" />
              테마별 모듈 조합
            </div>
            <div className="flex gap-2">
              <Icon name="check" className="w-5 h-5 text-white" />
              특강·워크숍·코칭형 운영 가능
            </div>
          </div>

          <a
            href={GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-5 py-4 text-slate-950 font-bold hover:bg-slate-100 transition"
          >
            교육별 상세 커리큘럼 받기
            <Icon name="send" className="w-4 h-4" />
          </a>

          <button
            onClick={onReset}
            className="mt-3 w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-white/10 px-5 py-4 text-white font-bold hover:bg-white/15 transition"
          >
            다시 테스트하기
            <Icon name="reset" className="w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}