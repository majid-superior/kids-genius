import React, { useState } from "react";

const Quiz = () => {
  // Sample quiz data (you can load from API or JSON later)
  const questions = [
    {
      question: "What is the capital of France?",
      options: ["London", "Paris", "Berlin", "Madrid"],
      answer: "Paris",
    },
    {
      question: "How many legs does a spider have?",
      options: ["6", "8", "10", "12"],
      answer: "8",
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Venus", "Earth", "Mars", "Jupiter"],
      answer: "Mars",
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (selected) => {
    if (selected === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    const next = currentQuestion + 1;
    if (next < questions.length) {
      setCurrentQuestion(next);
    } else {
      setShowResult(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="max-w-xl w-full bg-white shadow-lg rounded-xl p-6 text-center">
        {!showResult ? (
          <>
            <h2 className="text-2xl font-bold mb-4">
              Question {currentQuestion + 1} of {questions.length}
            </h2>
            <p className="text-lg mb-6">
              {questions[currentQuestion].question}
            </p>

            <div className="grid gap-4">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(option)}
                  className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                >
                  {option}
                </button>
              ))}
            </div>
          </>
        ) : (
          <>
            <h2 className="text-3xl font-bold mb-4">Quiz Completed 🎉</h2>
            <p className="text-xl mb-6">
              Your Score: <span className="font-bold">{score}</span> /{" "}
              {questions.length}
            </p>
            <button
              onClick={restartQuiz}
              className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
            >
              Restart Quiz
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Quiz;
