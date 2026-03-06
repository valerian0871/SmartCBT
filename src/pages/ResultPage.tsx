import { useLocation, useNavigate } from "react-router-dom";
import { CheckCircle2, RotateCcw, Home } from "lucide-react";
import "../styles/result.css";

interface Question {
  id: string;
  text: string;
  correctAnswer: string;
}

export default function ResultPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const examData = location.state;

  function formatTimeUsed(seconds: number) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    return `${minutes}m ${remainingSeconds}s`;
  }

  if (!examData) {
    return (
      <main className="result-page">
        <div className="result-shell">
          <div className="result-hero">
            <h1>No result data found</h1>
            <p>Please take an exam first before viewing the result page.</p>
            <div className="result-actions">
              <button
                className="result-btn primary"
                onClick={() => navigate("/exam")}
              >
                <RotateCcw size={18} />
                Go to Exam
              </button>
            </div>
          </div>
        </div>
      </main>
    );
  }

  const { score, totalQuestions, selectedAnswers, questions, timeUsed } =
    examData;

  const percentage = Math.round((score / totalQuestions) * 100);

  return (
    <main className="result-page">
      <div className="result-shell">
        <div className="result-hero">
          <div className="result-badge">
            <CheckCircle2 size={18} />
            Exam Completed
          </div>

          <h1>Your result is ready</h1>
          <p>
            Here is a quick summary of your performance and a review of your
            answers.
          </p>
        </div>

        <div className="result-grid">
          <div className="result-card score-card">
            <span>Total Score</span>
            <strong>{percentage}%</strong>
            <p>Keep practicing to improve your weak areas.</p>
          </div>

          <div className="result-card">
            <span>Correct Answers</span>
            <strong>
              {score} / {totalQuestions}
            </strong>
          </div>

          <div className="result-card">
            <span>Questions Attempted</span>
            <strong>
              {
                selectedAnswers.filter(
                  (answer: string | null) => answer !== null
                ).length
              }
            </strong>
          </div>

          <div className="result-card">
            <span>Time Used</span>
            <strong>{formatTimeUsed(timeUsed)}</strong>
          </div>
        </div>

        <div className="answer-review">
          <h2>Answer Review</h2>

          <div className="review-list">
            {questions.map((question: Question, index: number) => {
              const userAnswer = selectedAnswers[index];
              const isCorrect = userAnswer === question.correctAnswer;

              return (
                <div className="review-card" key={question.id}>
                  <p className="review-question">
                    {index + 1}. {question.text}
                  </p>

                  <p>
                    <strong>Your Answer:</strong>{" "}
                    <span className={isCorrect ? "correct-text" : "wrong-text"}>
                      {userAnswer ?? "Not answered"}
                    </span>
                  </p>

                  <p>
                    <strong>Correct Answer:</strong> {question.correctAnswer}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="result-actions">
          <button
            className="result-btn ghost"
            onClick={() => navigate("/")}
          >
            <Home size={18} />
            Back Home
          </button>

          <button
            className="result-btn primary"
            onClick={() => navigate("/exam")}
          >
            <RotateCcw size={18} />
            Retake Exam
          </button>
        </div>
      </div>
    </main>
  );
}