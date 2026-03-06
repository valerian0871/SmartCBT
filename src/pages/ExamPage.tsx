import { useCallback, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Clock3, ChevronRight, ChevronLeft } from "lucide-react";
import { questions as questionBank } from "../data/questions";
import "../styles/exam.css";

export default function ExamPage() {
  const navigate = useNavigate();
  const [showInstructions, setShowInstructions] = useState(true);
  const [examStarted, setExamStarted] = useState(false);
  const totalTimeInSeconds = 15 * 60;
  const [timeLeft, setTimeLeft] = useState(totalTimeInSeconds);

  const [shuffledQuestions] = useState(() => {
  const copied = [...questionBank];
  for (let i = copied.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copied[i], copied[j]] = [copied[j], copied[i]];
  }
  return copied;
});

const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
const [selectedAnswers, setSelectedAnswers] = useState<(string | null)[]>(
  Array(shuffledQuestions.length).fill(null)
);

const currentQuestion = shuffledQuestions[currentQuestionIndex];
  const answeredCount = useMemo(() => {
    return selectedAnswers.filter((answer) => answer !== null).length;
  }, [selectedAnswers]);

  function handleSelectOption(option: string) {
    const updatedAnswers = [...selectedAnswers];
    updatedAnswers[currentQuestionIndex] = option;
    setSelectedAnswers(updatedAnswers);
  }

  function goToNextQuestion() {
    if (currentQuestionIndex <shuffledQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  }

  function goToPreviousQuestion() {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  }

  function goToQuestion(index: number) {
    setCurrentQuestionIndex(index);
  }

  function formatTime(seconds: number) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    return `${String(minutes).padStart(2, "0")}:${String(
      remainingSeconds
    ).padStart(2, "0")}`;
  }

  const handleSubmitExam = useCallback(() => {
    const score = shuffledQuestions.reduce((total, shuffledQuestions, index) => {
      return total + (selectedAnswers[index] === shuffledQuestions.correctAnswer ? 1 : 0);
    }, 0);

    navigate("/result", {
      state: {
        score,
        totalQuestions: shuffledQuestions.length,
        selectedAnswers,
        shuffledQuestions,
        timeUsed: totalTimeInSeconds - timeLeft,
      },
    });
  }, [shuffledQuestions, selectedAnswers, navigate, totalTimeInSeconds, timeLeft]);

 useEffect(() => {
  if (!examStarted) return;

  if (timeLeft <= 0) {
    handleSubmitExam();
    return;
  }

  const timer = setInterval(() => {
    setTimeLeft((prevTime) => prevTime - 1);
  }, 1000);

  return () => clearInterval(timer);
}, [timeLeft, examStarted, handleSubmitExam]);

  return (
    <main className="exam-page">
      {showInstructions && (
  <div className="exam-modal-overlay">
    <div className="exam-modal">
      <h2>Exam Instructions</h2>
      <ul>
        <li>Read each question carefully before choosing an answer.</li>
        <li>You can move between questions using the palette or next/previous buttons.</li>
        <li>The exam is timed and will auto-submit when the timer reaches zero.</li>
        <li>Your answers will be reviewed on the result page after submission.</li>
      </ul>

      <button
        className="primary-action"
        onClick={() => {
          setShowInstructions(false);
          setExamStarted(true);
        }}
      >
        Start Exam
      </button>
    </div>
  </div>
)}
      <div className="exam-shell">
        <aside className="exam-sidebar">
          <div className="exam-brand-mini">SmartPrep</div>

          <div className="exam-status-card">
            <div className="exam-status-top">
              <span>Exam Session</span>
              <Clock3 size={18} />
            </div>
            <strong>{formatTime(timeLeft)}</strong>
            <p>{answeredCount} / {shuffledQuestions.length} answered</p>
          </div>

          <div className="question-palette">
            {shuffledQuestions.map((question, index) => {
              const isActive = index === currentQuestionIndex;
              const isAnswered = selectedAnswers[index] !== null;

              return (
                <button
                  key={question.id}
                  className={`palette-btn ${isActive ? "active" : ""} ${
                    isAnswered ? "answered" : ""
                  }`}
                  onClick={() => goToQuestion(index)}
                >
                  {index + 1}
                </button>
              );
            })}
          </div>
        </aside>

        <section className="exam-main">
          <div className="exam-topbar">
            <button className="back-btn" onClick={() => navigate("/")}>
              <ArrowLeft size={18} />
              Back
            </button>

            <div className="exam-meta">
              <span>{currentQuestion.subject}</span>
              <span>
                Question {currentQuestionIndex + 1} of {shuffledQuestions.length}
              </span>
            </div>
          </div>

          <div className="exam-card">
            <p className="exam-label">Question {currentQuestionIndex + 1}</p>

            <h1 className="exam-question">{currentQuestion.text}</h1>

            <div className="exam-options">
              {currentQuestion.options.map((option) => {
                const isSelected =
                  selectedAnswers[currentQuestionIndex] === option;

                return (
                  <button
                    key={option}
                    className={`exam-option ${isSelected ? "active" : ""}`}
                    onClick={() => handleSelectOption(option)}
                  >
                    {option}
                  </button>
                );
              })}
            </div>

            <div className="exam-actions">
              <button
                className="secondary-action"
                onClick={goToPreviousQuestion}
                disabled={currentQuestionIndex === 0}
              >
                <ChevronLeft size={18} />
                Previous
              </button>

              {currentQuestionIndex === shuffledQuestions.length - 1 ? (
                <button className="primary-action" onClick={handleSubmitExam}>
                  Submit Exam
                  <ChevronRight size={18} />
                </button>
              ) : (
                <button className="primary-action" onClick={goToNextQuestion}>
                  Next Question
                  <ChevronRight size={18} />
                </button>
              )}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}