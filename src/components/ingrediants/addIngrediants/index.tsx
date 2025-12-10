import { Check, ChevronRight } from "lucide-react";
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

import AddIngrediantsFormStep1 from "./step1";
import AddIngrediantsFormStep2 from "./step2";
import AddIngrediantsFormStep3 from "./step3";
import AddIngrediantsFormStep4 from "./step4";
import AddIngrediantsFormStep5 from "./step5";

type StepDef = { id: 1 | 2 | 3 | 4 | 5; label: string };

const steps: StepDef[] = [
  { id: 1, label: "General information" },
  { id: 2, label: "Benefits" },
  { id: 3, label: "Properties" },
  { id: 4, label: "FAQ" },
  { id: 5, label: "Overview" },
];

const StepRenderer = ({ step }: { step: number }) => {
  if (step === 1) return <AddIngrediantsFormStep1 />;
  if (step === 2) return <AddIngrediantsFormStep2 />;
  if (step === 3) return <AddIngrediantsFormStep3 />;
  if (step === 4) return <AddIngrediantsFormStep4 />;
  return <AddIngrediantsFormStep5 />;
};

const AddIngrediantsForm = () => {
  const [step, setStep] = useState<1 | 2 | 3 | 4 | 5>(1);
  // +1 when moving forward, -1 when moving backward (for slide direction)
  const [dir, setDir] = useState<1 | -1>(1);

  const goTo = (next: 1 | 2 | 3 | 4 | 5) => {
    setDir(next > step ? 1 : -1);
    setStep(next);
  };

  const next = () => {
    if (step < 5) goTo((step + 1) as 1 | 2 | 3 | 4 | 5);
  };

  const prev = () => {
    if (step > 1) goTo((step - 1) as 1 | 2 | 3 | 4 | 5);
  };

  const slideVariant = useMemo(() => {
    // forward: from right; back: from left
    return {
      initial: { opacity: 0, x: dir === 1 ? 24 : -24 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: dir === 1 ? -24 : 24 },
    };
  }, [dir]);

  return (
    <div className="h-full mt-5 pb-5 overflow-y-scroll">
      <div className="max-w-7xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="flex items-center gap-3 mt-5 px-5"
        >
          <span className="text-[#3A643B]">Product</span>
          <ChevronRight color="#3A643B" />
          <span className="text-[#3A643B] font-medium">Add Product</span>
        </motion.p>

        {/* Stepper */}
        <div className="w-full flex justify-center mt-10 mb-20">
          <div className="flex items-center gap-3">
            {steps.map((s, idx) => {
              const isActive = step === s.id;
              const isDone = step > s.id;

              return (
                <div key={s.id} className="flex items-center">
                  <motion.button
                    type="button"
                    onClick={() => goTo(s.id)}
                    whileHover={{ scale: 1.06 }}
                    whileTap={{ scale: 0.96 }}
                    className="relative"
                  >
                    <motion.p
                      initial={false}
                      animate={{
                        backgroundColor: isDone ? "#3A643B" : "transparent",
                        borderColor: step >= s.id ? "#3A643B" : "#878890",
                      }}
                      transition={{ duration: 0.18 }}
                      className="border-2 font-medium text-[13px] text-[#3A643B] h-[32px] w-[32px] flex justify-center items-center rounded-full"
                    >
                      {isDone ? <Check color="white" /> : String(s.id).padStart(2, "0")}
                    </motion.p>

                    <motion.p
                      initial={false}
                      animate={{ color: step >= s.id ? "#3A643B" : "#878890" }}
                      className="absolute text-nowrap -bottom-7 font-semibold text-sm"
                      style={{ left: idx === 0 ? -50 : idx === 1 ? -10 : idx === 2 ? -15 : idx === 3 ? -2 : -15 }}
                    >
                      {s.label}
                    </motion.p>
                  </motion.button>

                  {idx < steps.length - 1 && (
                    <div className="h-[2px] w-[80px] bg-[#878890]" aria-hidden="true" />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Step content with animated switch */}
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={step}
            variants={slideVariant}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
          >
            <StepRenderer step={step} />
          </motion.div>
        </AnimatePresence>

        {/* Footer buttons */}
        <div className="flex justify-center">
          {step === 5 ? (
            <button className="bg-[#3A643B] text-white px-12 py-3 rounded-lg font-medium hover:bg-[#2d4f2e]">
              Submit
            </button>
          ) : (
            <div className="flex justify-center gap-4 mt-8">
              <button
          
                className="bg-[#3A643B] text-white px-12 py-3 rounded-lg font-medium hover:bg-[#2d4f2e]"
              >
                Save
              </button>
              <button
                      onClick={next}
                className="bg-white border border-gray-300 text-gray-700 px-12 py-3 rounded-lg font-medium hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next
              </button>
              
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddIngrediantsForm;
