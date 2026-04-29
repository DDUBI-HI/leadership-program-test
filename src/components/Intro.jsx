import { motion } from "framer-motion";
import Icon from "./Icon";
import TypePreviewCard from "./TypePreviewCard";
import { GOOGLE_FORM_URL } from "../data/constants";
import { typeMeta, typeOrder } from "../data/typeMeta";

export default function Intro({ onStart }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-10"
    >
      <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-center">
        <div className="space-y-7">
          <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700">
            <Icon name="sparkles" className="w-4 h-4" />
            1분 리더십 프로그램 추천 테스트
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-slate-950 leading-tight">
              지금 나에게 필요한
              <br />
              리더십 프로그램은?
            </h1>
            <p className="text-lg text-slate-600 leading-8 max-w-2xl">
              5개의 간단한 질문에 답하면, 현재 역할과 고민에 맞는 리더십 유형과 추천 프로그램을 확인할 수 있습니다.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-3">
            {["6가지 유형 진단", "3D 캐릭터 결과", "추천 프로그램 큐레이션"].map((item) => (
              <div key={item} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <Icon name="check" className="w-5 h-5 text-slate-900 mb-2" />
                <p className="font-semibold text-slate-800">{item}</p>
              </div>
            ))}
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <button
              onClick={onStart}
              className="group inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-slate-950 px-6 py-4 text-white font-semibold shadow-lg shadow-slate-300 hover:bg-slate-800 transition"
            >
              테스트 시작하기
              <Icon name="chevron" className="w-5 h-5 group-hover:translate-x-1 transition" />
            </button>
            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-slate-300 bg-[#e4f2ff] px-6 py-4 text-slate-900 font-semibold hover:bg-slate-50 transition"
            >
              교육별 상세 커리큘럼 받기
              <Icon name="send" className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="rounded-[2rem] bg-white border border-slate-200 shadow-xl p-5 lg:p-6">
          <div className="mb-5">
            <p className="text-sm font-bold text-slate-400 tracking-widest uppercase">Result Types</p>
            <h2 className="text-2xl font-bold text-slate-950 mt-1">6가지 리더십 유형</h2>
          </div>
          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
            {typeOrder.map((key) => (
              <TypePreviewCard key={key} meta={typeMeta[key]} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
