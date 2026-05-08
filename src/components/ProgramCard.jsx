import { getProgramByTitle } from "../data/programCatalog";

export default function ProgramCard({ program, index }) {
  const item =
    typeof program === "string"
      ? getProgramByTitle(program) || {
          title: program,
          summary: "현재 역할과 선택한 역량을 기준으로 추천된 프로그램입니다.",
          goal: "리더십 핵심 역량을 강화할 수 있도록 설계되었습니다.",
          point: "조직 니즈에 따라 특강·워크숍·코칭형으로 유연하게 운영 가능합니다.",
        }
      : program;

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-5 hover:shadow-md transition">
      <div className="flex items-start gap-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-950 text-white font-bold">
          {index + 1}
        </div>

        <div className="flex-1">
          <p className="font-bold text-slate-900 text-lg">{item.title}</p>
          <p className="text-slate-600 mt-2 leading-7">{item.summary}</p>

          <div className="mt-4 grid gap-2">
            <div className="rounded-2xl bg-slate-50 p-3">
              <p className="text-xs font-semibold text-slate-500 mb-1">
                과정 목표
              </p>
              <p className="text-sm text-slate-700 leading-6">{item.goal}</p>
            </div>

            <div className="rounded-2xl bg-indigo-50 p-3 border border-indigo-100">
              <p className="text-xs font-semibold text-indigo-500 mb-1">
                차별 포인트
              </p>
              <p className="text-sm text-slate-700 leading-6">{item.point}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}