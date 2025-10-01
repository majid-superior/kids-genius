import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="h-[80hv]">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-10 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
        <h1 className="text-4xl xl:text-8xl font-bold mb-6 xl:mb-10">
          Welcome to Kids Genius
        </h1>
        <p className="text-2xl xl:text-4xl mb-6 xl:mb-10">
          A fun way to test your knowledge! Designed for kids aged 6-12 with
          engaging quizzes to help them learn while playing.
        </p>
        <Link
          to="/quiz"
          className="bg-yellow-400 text-2xl xl:text-4xl text-black font-semibold rounded-2xl shadow-lg px-8 py-4 xl:px-10 xl:py-6 hover:bg-yellow-300 transition"
        >
          Start Quiz
        </Link>
      </section>

      {/* Features Section */}
      <section className="px-6 pt-10 pb-30">
        <h2 className="text-3xl xl:text-4xl font-bold text-center mb-4 xl:mb-8">
          Why Choose Us?
        </h2>
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 xl:gap-8 text-center">
          <div className="p-6 bg-white rounded-2xl xl:rounded-3xl shadow-blue-500 shadow-md hover:shadow-lg transition">
            <h3 className="text-xl xl:text-3xl font-semibold mb-3">
              Fun Learning
            </h3>
            <p>
              Interactive quizzes that make learning exciting and enjoyable.
            </p>
          </div>
          <div className="p-6 bg-white rounded-2xl xl:rounded-3xl shadow-blue-500 shadow-md hover:shadow-lg transition">
            <h3 className="text-xl xl:text-3xl font-semibold mb-3">
              Age-Friendly
            </h3>
            <p>Carefully designed for kids between 6–12 years old.</p>
          </div>
          <div className="p-6 bg-white rounded-2xl xl:rounded-3xl shadow-blue-500 shadow-md hover:shadow-lg transition">
            <h3 className="text-xl xl:text-3xl font-semibold mb-3">
              Boost Knowledge
            </h3>
            <p>Encourages curiosity, memory, and general knowledge skills.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
