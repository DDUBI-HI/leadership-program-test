import BrandLogo from "./components/BrandLogo";
import { useMemo, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Icon from "./components/Icon";
import Intro from "./components/Intro";
import Progress from "./components/Progress";
import QuestionCard from "./components/QuestionCard";
import Result from "./components/Result";
import { questions } from "./data/questions";
import { scoreAnswers } from "./lib/scoring";

export default function App() {
  const [started, setStarted] = useState(false);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);

  const currentQuestion = questions[step];
  const result = useMemo(() => scoreAnswers(answers), [answers]);

  const handleSelect = (option) => {
    setAnswers((prev) => ({ ...prev, [currentQuestion.id]: option }));
  };

  const handleNext = () => {
    if (step === questions.length - 1) {
      setShowResult(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    setStep((prev) => prev + 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBack = () => {
    if (step === 0) {
      setStarted(false);
      return;
    }

    setStep((prev) => prev - 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const reset = () => {
    setStarted(false);
    setStep(0);
    setAnswers({});
    setShowResult(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,#f1f5f9,transparent_35%),linear-gradient(to_bottom,#ffffff,#f8fafc)] p-4 md:p-8">
      <BrandLogo />

      <div className="mx-auto max-w-7xl pt-14 md:pt-16">
        <header className="flex items-center justify-between py-4 mb-6">
          <div>
            <p className="text-sm font-bold text-slate-500 tracking-widest uppercase">
              Insight Learning
            </p>
            <p className="text-xl font-black text-slate-950">
              Leadership Architecture
            </p>
          </div>

          <div className="hidden sm:flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600 shadow-sm">
            <Icon name="sparkles" className="w-4 h-4" />
            맞춤형 리더십 큐레이션
          </div>
        </header>

        {!started && !showResult && <Intro onStart={() => setStarted(true)} />}

        {started && !showResult && (
          <div>
            <Progress current={step} />

            <AnimatePresence mode="wait">
              <QuestionCard
                question={currentQuestion}
                selected={answers[currentQuestion.id]}
                onSelect={handleSelect}
                onNext={handleNext}
                onBack={handleBack}
                isLast={step === questions.length - 1}
              />
            </AnimatePresence>
          </div>
        )}

        {showResult && <Result result={result} onReset={reset} />}
      </div>
    </div>
  );
}