import { motion } from "framer-motion";
import Icon from "./Icon";

export default function QuestionCard({ question, selected, onSelect, onNext, onBack, isLast }) {
  return (
    <motion.div
      key={question.id}
      initial={{ opacity: 0, x: 24 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -24 }}
      transition={{ duration: 0.25 }}
      className="mx-auto max-w-3xl"
    >
      <div className="rounded-[2rem] bg-white border border-slate-200 shadow-xl p-6 md:p-9">
        <div className="mb-8">
          <p className="text-sm font-semibold text-slate-500 mb-2">Question</p>
          <h2 className="text-3xl font-bold tracking-tight text-slate-950 mb-3">{question.title}</h2>
          <p className="text-slate-600">{question.subtitle}</p>
        </div>

        <div className="grid gap-3">
          {question.options.map((option, index) => {
            const active = selected?.label === option.label;
            return (
              <button
                key={option.label}
                onClick={() => onSelect(option)}
                className={`text-left rounded-2xl border p-4 md:p-5 transition group ${
                  active
                    ? "border-slate-950 bg-slate-950 text-white shadow-lg shadow-slate-200"
                    : "border-slate-200 bg-white hover:border-slate-400 hover:bg-slate-50"
                }`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border text-sm font-bold ${
                      active
                        ? "border-white bg-white text-slate-950"
                        : "border-slate-300 text-slate-500 group-hover:border-slate-600"
                    }`}
                  >
                    {String.fromCharCode(65 + index)}
                  </div>
                  <span className="font-medium leading-7">{option.label}</span>
                </div>
              </button>
            );
          })}
        </div>

        <div className="mt-8 flex items-center justify-between">
          <button onClick={onBack} className="rounded-xl px-4 py-3 text-slate-500 font-semibold hover:bg-slate-100 transition">
            이전
          </button>
          <button
            onClick={onNext}
            disabled={!selected}
            className="inline-flex items-center gap-2 rounded-xl bg-slate-950 px-5 py-3 text-white font-semibold disabled:opacity-30 disabled:cursor-not-allowed hover:bg-slate-800 transition"
          >
            {isLast ? "결과 보기" : "다음"}
            <Icon name="chevron" className="w-5 h-5" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
