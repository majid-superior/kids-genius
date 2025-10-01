import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="h-[80hv]">
      <section className="flex flex-col items-center justify-center text-center px-6 py-10 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
        <h1 className="text-4xl xl:text-8xl font-bold mb-6 xl:mb-10">
          Get in Touch
        </h1>
        <p className="text-2xl xl:text-4xl mb-6 xl:mb-10">
          Have questions or feedback? We’d love to hear from you.
        </p>
        <Link
          to="/contact"
          className="bg-yellow-400 text-2xl xl:text-4xl text-black font-semibold rounded-2xl shadow-lg px-8 py-4 xl:px-10 xl:py-6 hover:bg-yellow-300 transition"
        >
          Contact Us
        </Link>
      </section>
    </div>
  );
};

export default Contact;
