// import React from "react";

// const Home = () => {
//   return (
//     <div>
//       <h1>Home</h1>
//       <p>Welcome to our website!</p>
//     </div>
//   );
// };

// export default Home;

import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-20 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Welcome to Kids Genius
        </h1>
        <p className="text-lg md:text-xl mb-6 max-w-2xl">
          A fun way to test your knowledge! Designed for kids aged 6–12 with
          engaging quizzes to help them learn while playing.
        </p>
        <Link
          to="/quiz"
          className="px-8 py-4 bg-yellow-400 text-black font-semibold rounded-2xl shadow-lg hover:bg-yellow-300 transition"
        >
          Start Quiz
        </Link>
      </section>

      {/* Features Section */}
      <section className="px-6 py-16 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Why Choose Us?</h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3">Fun Learning</h3>
            <p>
              Interactive quizzes that make learning exciting and enjoyable.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3">Age-Friendly</h3>
            <p>Carefully designed for kids between 6–12 years old.</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3">Boost Knowledge</h3>
            <p>Encourages curiosity, memory, and general knowledge skills.</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-gray-100 px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">About Kids Genius</h2>
          <p className="text-lg text-gray-700">
            Kids Genius is a platform created to help children learn in a
            playful way. Our quizzes cover general knowledge, science, history,
            and much more. We believe that learning should always be fun and
            exciting!
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-6 py-16 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
        <p className="mb-4 text-gray-700">
          Have questions or feedback? We’d love to hear from you.
        </p>
        <Link
          to="/contact"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-500 transition"
        >
          Contact Us
        </Link>
      </section>
    </div>
  );
};

export default Home;
