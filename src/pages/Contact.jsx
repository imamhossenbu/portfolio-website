import { motion } from "framer-motion";
import { FaFacebook, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      const result = await emailjs.sendForm(
        "service_pn3gwi3", // Replace with your EmailJS Service ID
        "template_ysdluxs", // Replace with your EmailJS Template ID
        form.current, // Reference to the form
        "8gjdjgqWd_2T9xPZI" // Replace with your EmailJS Public Key
      );
      console.log("Email sent:", result.text);
      alert("Message sent successfully!");
    } catch (error) {
      console.error("Email sending failed:", error);
      alert("Failed to send the message. Please check your configuration and try again.");
    }

    e.target.reset(); // Reset the form after submission
  };

  return (
    <section id="contact" className="bg-gray-900 text-white pb-20 pt-40  px-5">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">Contact Me</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <motion.div
            className="bg-gray-800 p-6 rounded-lg shadow-lg"
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <form ref={form} onSubmit={sendEmail}>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="user_name"
                  className="w-full p-3 bg-gray-700 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
                  placeholder="Your Name"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="user_email"
                  className="w-full p-3 bg-gray-700 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
                  placeholder="Your Email"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  className="w-full p-3 bg-gray-700 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded-lg transition duration-300"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="flex flex-col justify-center space-y-6"
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div>
              <h3 className="text-lg font-medium mb-2">Address</h3>
              <p className="text-gray-400">Barisal University, Barisal, Bangladesh</p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">Email</h3>
              <p className="text-gray-400">imam62310@gmail.com</p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">Follow Me</h3>
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/imamhossainbu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 text-2xl hover:text-blue-600 transition duration-300"
                >
                  <FaFacebook />
                </a>
                <a
                  href="https://www.linkedin.com/in/imam-hossen-ub/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 text-2xl hover:text-blue-500 transition duration-300"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://github.com/imamhossenbu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 text-2xl hover:text-gray-400 transition duration-300"
                >
                  <FaGithub />
                </a>
                <a
                  href="mailto:imam62310@gmail.com"
                  className="text-red-500 text-2xl hover:text-red-600 transition duration-300"
                >
                  <FaEnvelope />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
