import React, { useState, useEffect } from "react";
import { data } from "../assets/data";

const Quiz = () => {
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [wrongAnswers, setWrongAnswers] = useState([]);

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
    } else {
      // const correctOption =
      //   quizQuestions[currentQuestion][
      //     `option${quizQuestions[currentQuestion].ans}`
      //   ];
      // alert(`Wrong answer! The correct answer is: ${correctOption}`);
      // Add wrong answer to the table
      const wrongAnswer = {
        question: quizQuestions[currentQuestion].question,
        yourAnswer: quizQuestions[currentQuestion][`option${selected}`],
        correctAnswer:
          quizQuestions[currentQuestion][
            `option${quizQuestions[currentQuestion].ans}`
          ],
        explanation: quizQuestions[currentQuestion].definition,
      };
      setWrongAnswers((prev) => [...prev, wrongAnswer]);
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
    setWrongAnswers([]);
  };

  // Loading state
  if (quizQuestions.length === 0) {
    return (
      <div className="flex justify-center p-4 mt-20 xl:mt-30">
        <div className="flex flex-col text-center w-full bg-white shadow-lg rounded-xl p-4">
          <h2 className="text-2xl xl:text-4xl font-bold">
            Loading questions...
          </h2>
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center p-4 mt-20 xl:mt-30">
      <div className="flex flex-col text-center bg-white shadow-lg rounded-xl p-4">
        {!showResult ? (
          <div className="w-full xl:w-2xl">
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
          </div>
        ) : (
          <div className="w-full">
            <h2 className="text-3xl xl:text-6xl font-bold mb-4 xl:mb-10  -mt-20 xl:-mt-30">
              Quiz Completed 🎉
            </h2>
            <p className="text-2xl xl:text-4xl mb-6 xl:mb-12">
              Your Score: <span className="font-bold">{score}</span> /{" "}
              {quizQuestions.length}
            </p>
            {/* Wrong Answers Table */}
            {wrongAnswers.length > 0 && (
              <div className="mb-10">
                <h3 className="text-2xl xl:text-4xl font-bold mb-4 text-red-600">
                  Questions You Got Wrong:
                </h3>

                {/* Desktop Table (hidden on mobile) */}
                <div className="hidden xl:block overflow-x-auto">
                  <table className="w-full bg-white border border-gray-300">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="py-2 px-3 border-b text-2xl text-left">
                          Question
                        </th>
                        <th className="py-2 px-3 border-b text-2xl text-left">
                          Your Answer
                        </th>
                        <th className="py-2 px-3 border-b text-2xl text-left">
                          Correct Answer
                        </th>
                        <th className="py-2 px-3 border-b text-2xl text-left">
                          Explanation
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {wrongAnswers.map((item, index) => (
                        <tr key={index} className="border-b">
                          <td className="py-3 px-2 text-xl text-left align-top">
                            {item.question}
                          </td>
                          <td className="py-3 px-2 text-xl text-red-600 align-top">
                            {item.yourAnswer}
                          </td>
                          <td className="py-3 px-2 text-xl text-green-600 align-top">
                            {item.correctAnswer}
                          </td>
                          <td className="py-3 px-2 text-xl text-left align-top">
                            {item.explanation}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Mobile Cards (visible only on mobile) */}
                <div className="xl:hidden space-y-6">
                  {wrongAnswers.map((item, index) => (
                    <div
                      key={index}
                      className="bg-white border border-red-300 rounded-lg p-4 shadow-md"
                    >
                      {/* Question Row */}
                      <div className="">
                        <div className="text-xl text-gray-900">
                          {item.question}
                        </div>
                        <div className="border-t border-gray-300"></div>
                      </div>

                      {/* Your Answer Row */}
                      <div className="">
                        <div className="text-lg font-semibold text-gray-700 mb-1">
                          Your Answer:{" "}
                          <span className="text-xl text-red-600 font-medium">
                            {item.yourAnswer}
                          </span>
                        </div>
                      </div>

                      {/* Correct Answer Row */}
                      <div className="">
                        <div className="text-lg font-semibold text-gray-700 mb-1">
                          Correct Answer:
                          <span className="text-xl text-green-600 font-medium">
                            {item.correctAnswer}
                          </span>
                        </div>
                      </div>

                      {/* Explanation Row */}
                      <div>
                        <div className="border-t border-gray-300"></div>
                        <div className="text-lg text-gray-800">
                          {item.explanation}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {wrongAnswers.length === 0 && (
              <p className="text-2xl xl:text-4xl mb-6 xl:mb-12 text-green-600 font-bold">
                Perfect! You got all answers correct! 🎉
              </p>
            )}
            <button
              onClick={restartQuiz}
              className="px-6 py-3 bg-green-500 text-white text-2xl xl:text-4xl mb-10 rounded-lg hover:bg-green-600 transition"
            >
              Restart Quiz
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
