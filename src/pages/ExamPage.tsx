/**
 * ExamPage
 * -------------------------------------------------------
 * This page controls the full CBT exam experience.
 *
 * Main responsibilities:
 * 1. Shuffle the question order once at the start
 * 2. Show the current question and options
 * 3. Track selected answers
 * 4. Handle question navigation
 * 5. Run the countdown timer
 * 6. Show exam instructions before starting
 * 7. Auto-submit when time runs out
 * 8. Send exam result data to the result page
 */

import { useCallback, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Clock3, ChevronRight, ChevronLeft } from "lucide-react";
import { questions as questionBank } from "../data/questions";
import "../styles/exam.css";

export default function ExamPage() {
  /**
   * React Router navigation helper.
   * Used to move the user to other pages like home or result.
   */
  const navigate = useNavigate();

  /**
   * Total exam time in seconds.
   * 15 minutes × 60 seconds = 900 seconds
   */
  const totalTimeInSeconds = 15 * 60;

  /**
   * Remaining exam time.
   * This value counts down every second after the exam starts.
   */
  const [timeLeft, setTimeLeft] = useState(totalTimeInSeconds);

  /**
   * Controls whether the instruction modal is visible.
   * The exam does not begin until the user clicks "Start Exam".
   */
  const [showInstructions, setShowInstructions] = useState(true);

  /**
   * Controls whether the timer should run.
   * Prevents the timer from starting before the user begins the exam.
   */
  const [examStarted, setExamStarted] = useState(false);

  /**
   * Shuffle the question order once when the page loads.
   * This makes the exam feel more realistic and prevents fixed order repetition.
   *
   * We store the shuffled result in state so the order stays stable
   * during the entire exam session.
   */
  const [shuffledQuestions] = useState(() => {
    const copied = [...questionBank];

    for (let i = copied.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copied[i], copied[j]] = [copied[j], copied[i]];
    }

    return copied;
  });

  /**
   * Tracks the currently displayed question index.
   * Example:
   * 0 = first question
   * 1 = second question
   */
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  /**
   * Stores the user's selected answers.
   * Each position in the array matches a question index.
   *
   * Example:
   * selectedAnswers[0] = answer for first question
   * selectedAnswers[1] = answer for second question
   *
   * Initially all values are null because nothing has been answered yet.
   */
  const [selectedAnswers, setSelectedAnswers] = useState<(string | null)[]>(
    Array(shuffledQuestions.length).fill(null)
  );

  /**
   * The question currently being displayed to the user.
   */
  const currentQuestion = shuffledQuestions[currentQuestionIndex];

  /**
   * Number of questions the user has answered so far.
   * useMemo is used so this value only recalculates when answers change.
   */
  const answeredCount = useMemo(() => {
    return selectedAnswers.filter((answer) => answer !== null).length;
  }, [selectedAnswers]);

  /**
   * Current exam progress as a percentage.
   * This is used for the progress bar.
   */
  const progressPercentage =
    ((currentQuestionIndex + 1) / shuffledQuestions.length) * 100;

  /**
   * Saves the selected answer for the current question.
   * The new answer replaces any previous answer for that same question.
   */
  function handleSelectOption(option: string) {
    const updatedAnswers = [...selectedAnswers];
    updatedAnswers[currentQuestionIndex] = option;
    setSelectedAnswers(updatedAnswers);
  }

  /**
   * Moves to the next question if the current question
   * is not already the last one.
   */
  function goToNextQuestion() {
    if (currentQuestionIndex < shuffledQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  }

  /**
   * Moves to the previous question if the current question
   * is not already the first one.
   */
  function goToPreviousQuestion() {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  }

  /**
   * Allows direct navigation to a specific question
   * from the question palette.
   */
  function goToQuestion(index: number) {
    setCurrentQuestionIndex(index);
  }

  /**
   * Calculates the final score and navigates to the result page.
   *
   * Data passed to the result page includes:
   * - score
   * - total number of questions
   * - selected answers
   * - the shuffled question set used in this session
   * - total time used
   */
  const handleSubmitExam = useCallback(() => {
    const score = shuffledQuestions.reduce((total, question, index) => {
      return total + (selectedAnswers[index] === question.correctAnswer ? 1 : 0);
    }, 0);

    navigate("/result", {
      state: {
        score,
        totalQuestions: shuffledQuestions.length,
        selectedAnswers,
        questions: shuffledQuestions,
        timeUsed: totalTimeInSeconds - timeLeft,
      },
    });
  }, [shuffledQuestions, selectedAnswers, navigate, totalTimeInSeconds, timeLeft]);

  /**
   * Converts raw seconds into MM:SS format.
   * Example:
   * 542 -> 09:02
   */
  function formatTime(seconds: number) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    return `${String(minutes).padStart(2, "0")}:${String(
      remainingSeconds
    ).padStart(2, "0")}`;
  }

  /**
   * Countdown timer effect.
   *
   * How it works:
   * - does nothing until the exam starts
   * - decreases timeLeft by 1 every second
   * - auto-submits the exam when time reaches zero
   * - clears the interval properly to avoid memory leaks
   */
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
      {/* 
        Instruction modal shown before the exam starts.
        This improves the user experience by making expectations clear
        before the timer begins.
      */}
      {showInstructions && (
        <div className="exam-modal-overlay">
          <div className="exam-modal">
            <h2>Exam Instructions</h2>
            <ul>
              <li>Read each question carefully before choosing an answer.</li>
              <li>
                You can move between questions using the palette or the
                next/previous buttons.
              </li>
              <li>
                The exam is timed and will auto-submit when the timer reaches
                zero.
              </li>
              <li>
                Your answers will be reviewed on the result page after
                submission.
              </li>
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
        {/* 
          Sidebar area:
          - brand label
          - timer / session status
          - question palette for quick navigation
        */}
        <aside className="exam-sidebar">
          <div className="exam-brand-mini">SmartPrep</div>

          <div className="exam-status-card">
            <div className="exam-status-top">
              <span>Exam Session</span>
              <Clock3 size={18} />
            </div>

            <strong>{formatTime(timeLeft)}</strong>
            <p>
              {answeredCount} / {shuffledQuestions.length} answered
            </p>
          </div>

          {/* 
            Question palette:
            - active = current question
            - answered = user has selected an answer
          */}
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

        {/* Main exam content area */}
        <section className="exam-main">
          {/* Top exam bar */}
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

          {/* Progress bar */}
          <div className="exam-progress-wrap">
            <div className="exam-progress-info">
              <span>Exam Progress</span>
              <span>{Math.round(progressPercentage)}%</span>
            </div>

            <div className="exam-progress-bar">
              <div
                className="exam-progress-fill"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
          </div>

          {/* Question card */}
          <div className="exam-card">
            <p className="exam-label">
              Question {currentQuestionIndex + 1}
            </p>

            <h1 className="exam-question">{currentQuestion.text}</h1>

            {/* Option list for the current question */}
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

            {/* Navigation controls */}
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