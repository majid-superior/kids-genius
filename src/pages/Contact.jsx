import { useState } from "react";

const Contact = () => {
  const [message, setMessage] = useState("");

  const handleSendWhatsApp = () => {
    if (!message.trim()) return;

    const phoneNumber = "923324737650";
    const encodedMessage = encodeURIComponent(message);

    // Create WhatsApp URL
    const whatsappUrl = `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;

    // Open WhatsApp directly
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    // Reset message
    setMessage("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendWhatsApp();
    }
  };

  return (
    <div className="h-[80vh]">
      <section className="flex flex-col items-center justify-center text-center px-6 py-10 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
        <h1 className="text-4xl xl:text-8xl font-bold mb-6 xl:mb-10">
          Get in Touch
        </h1>
        <p className="text-2xl xl:text-4xl mb-6 xl:mb-10">
          Have questions or feedback? We'd love to hear from you.
        </p>
        {/* Contact Form Directly on Page */}
        <div className="bg-white rounded-2xl shadow-xl max-w-2xl w-full p-8 mt-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Send us a Message
          </h2>

          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your message here..."
            className="w-full h-40 p-4 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 text-xl mb-6"
          />

          <button
            onClick={handleSendWhatsApp}
            disabled={!message.trim()}
            className="w-full bg-green-500 text-white text-2xl font-semibold py-4 rounded-lg hover:bg-green-600 transition disabled:bg-green-300 disabled:cursor-not-allowed"
          >
            Send WhatsApp
          </button>
        </div>
      </section>
    </div>
  );
};

export default Contact;
