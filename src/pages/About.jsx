import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="h-[80hv]">
      {/* About Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-10 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
        <h1 className="text-4xl xl:text-8xl font-bold mb-6 xl:mb-10">
          About Kids Genius
        </h1>
        <p className="text-2xl xl:text-4xl mb-6 xl:mb-10">
          Kids Genius is a platform created to help children learn in a playful
          way. Our quizzes cover general knowledge, science, history, and much
          more. We believe that learning should always be fun and exciting!
        </p>
      </section>
    </div>
  );
};

export default About;
