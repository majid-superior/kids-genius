import React, { useState, useEffect } from "react";
import { data } from "../assets/data";

const Quiz = () => {
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  // Generate random questions on component mount
  useEffect(() => {
    const getRandomQuestions = () => {
      const questionsCopy = [...data];
      // Shuffle using Fisher-Yates algorithm
      for (let i = questionsCopy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [questionsCopy[i], questionsCopy[j]] = [
          questionsCopy[j],
          questionsCopy[i],
        ];
      }
      return questionsCopy.slice(0, 10);
    };

    setQuizQuestions(getRandomQuestions());
  }, []);

  const handleAnswer = (selected) => {
    if (!quizQuestions[currentQuestion]) return;

    if (selected === quizQuestions[currentQuestion].ans) {
      setScore(score + 1);
    }

    const next = currentQuestion + 1;
    if (next < quizQuestions.length) {
      setCurrentQuestion(next);
    } else {
      setShowResult(true);
    }
  };

  const restartQuiz = () => {
    // Regenerate new random questions
    const getRandomQuestions = () => {
      const questionsCopy = [...data];
      for (let i = questionsCopy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [questionsCopy[i], questionsCopy[j]] = [
          questionsCopy[j],
          questionsCopy[i],
        ];
      }
      return questionsCopy.slice(0, 10);
    };

    setQuizQuestions(getRandomQuestions());
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
  };

  // Loading state
  if (quizQuestions.length === 0) {
    return (
      <div className="flex justify-center p-4 mt-20 xl:mt-30">
        <div className="flex flex-col text-center w-2xl bg-white shadow-lg rounded-xl p-4">
          <h2 className="text-2xl xl:text-4xl font-bold">
            Loading questions...
          </h2>
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center p-4 mt-20 xl:mt-30">
      <div className="flex flex-col text-center w-2xl bg-white shadow-lg rounded-xl p-4">
        {!showResult ? (
          <>
            <h2 className="text-2xl xl:text-4xl font-bold mb-4 xl:mb-8">
              Question {currentQuestion + 1} of {quizQuestions.length}
            </h2>
            <p className="text-2xl xl:text-4xl mb-6 xl:mb-10">
              {quizQuestions[currentQuestion]?.question}
            </p>

            <div className="grid gap-4 xl:gap-6">
              {/* Render options dynamically */}
              {[
                quizQuestions[currentQuestion]?.option1,
                quizQuestions[currentQuestion]?.option2,
                quizQuestions[currentQuestion]?.option3,
                quizQuestions[currentQuestion]?.option4,
              ].map(
                (option, index) =>
                  option && (
                    <button
                      key={index}
                      onClick={() => handleAnswer(index + 1)}
                      className="w-full px-4 py-2 bg-blue-500 text-white text-2xl xl:text-4xl rounded-lg hover:bg-blue-600 transition"
                    >
                      {option}
                    </button>
                  )
              )}
            </div>
          </>
        ) : (
          <>
            <h2 className="text-3xl xl:text-6xl font-bold mb-4 xl:mb-10">
              Quiz Completed 🎉
            </h2>
            <p className="text-2xl xl:text-4xl mb-6 xl:mb-12">
              Your Score: <span className="font-bold">{score}</span> /{" "}
              {quizQuestions.length}
            </p>
            <button
              onClick={restartQuiz}
              className="px-6 py-3 bg-green-500 text-white text-2xl xl:text-4xl rounded-lg hover:bg-green-600 transition"
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
