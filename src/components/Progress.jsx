import { motion } from "framer-motion";
import { questions } from "../data/questions";

export default function Progress({ current }) {
  const percent = Math.round(((current + 1) / questions.length) * 100);

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between text-sm text-slate-500 mb-2">
        <span>Leadership Fit Test</span>
        <span>{percent}%</span>
      </div>
      <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-slate-900 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${percent}%` }}
          transition={{ duration: 0.35 }}
        />
      </div>
    </div>
  );
}
