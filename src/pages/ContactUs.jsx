
import React, { useRef, useState } from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaClock,
  FaArrowRight,
  FaPaperPlane,
  FaCheckCircle,
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

const Contact = () => {
  const form = useRef();

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      );

      setStatus("success");
      form.current.reset();
    } catch (error) {
      console.error("Email error:", error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  const contactCards = [
    {
      icon: <FaPhoneAlt />,
      title: "Call Us",
      detail: "Add School Phone Number",
      link: "tel:+920000000000",
      color: "#FF671A",
    },
    {
      icon: <FaEnvelope />,
      title: "Email Us",
      detail: "info@newstarschool.com",
      link: "mailto:info@newstarschool.com",
      color: "#396000",
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Visit Us",
      detail: "Visit Our School Campus",
      link: "#location",
      color: "#FA3518",
    },
    {
      icon: <FaClock />,
      title: "School Hours",
      detail: "Monday – Saturday",
      link: "#hours",
      color: "#DAB716",
    },
  ];

  return (
    <main className="bg-white text-black overflow-hidden">

      {/* HERO */}
      <section className="relative bg-[#396000] text-white px-6 py-24 md:py-32 overflow-hidden">

        <div className="absolute -right-20 -top-20 w-96 h-96 rounded-full border-[45px] border-white/10" />
        <div className="absolute -left-20 -bottom-32 w-80 h-80 bg-[#FF671A]/20 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto relative z-10">

          <span className="inline-block bg-[#DAB716] text-[#396000] px-5 py-2 rounded-full text-sm font-bold">
            WE ARE HERE TO HELP
          </span>

          <h1 className="text-5xl md:text-7xl font-black mt-8 leading-tight max-w-4xl">
            Let's Start A
            <span className="text-[#DAB716]"> Conversation.</span>
          </h1>

          <p className="text-gray-200 text-lg max-w-xl leading-8 mt-6">
            Have questions about admissions, academics, or school life?
            We would love to hear from you. Get in touch with our team.
          </p>

          <a
            href="#contact-form"
            className="inline-flex items-center gap-3 mt-9 bg-[#FF671A] hover:bg-[#FA3518] px-8 py-4 rounded-full font-bold transition duration-300 hover:-translate-y-1"
          >
            Send Us A Message <FaArrowRight />
          </a>

        </div>
      </section>

      {/* CONTACT INFORMATION */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto">

          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-[#FF671A] font-bold uppercase tracking-widest text-sm">
              Get In Touch
            </span>

            <h2 className="text-4xl md:text-5xl font-black text-[#396000] mt-4">
              We'd Love To Hear From You
            </h2>

            <p className="text-gray-500 mt-5 leading-7">
              Whether you are a parent, student, or visitor, our doors
              are always open for your questions.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {contactCards.map((card, index) => (
              <a
                href={card.link}
                key={index}
                className="group bg-[#F7F8F2] rounded-3xl p-8 hover:bg-[#396000] transition-all duration-300 hover:-translate-y-2"
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-6"
                  style={{
                    backgroundColor: card.color,
                    color: "white",
                  }}
                >
                  {card.icon}
                </div>

                <h3 className="text-xl font-black text-[#396000] group-hover:text-[#DAB716] transition">
                  {card.title}
                </h3>

                <p className="text-gray-500 group-hover:text-white/80 mt-3 text-sm transition">
                  {card.detail}
                </p>

                <div className="mt-6 text-[#FF671A] group-hover:text-[#DAB716] transition">
                  <FaArrowRight />
                </div>
              </a>
            ))}

          </div>
        </div>
      </section>

      {/* CONTACT FORM SECTION */}
      <section id="contact-form" className="bg-[#F7F8F2] py-24 px-6">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-5 gap-12 items-start">

          {/* LEFT CONTENT */}
          <div className="lg:col-span-2">

            <span className="text-[#FF671A] font-bold uppercase tracking-widest text-sm">
              Send A Message
            </span>

            <h2 className="text-4xl md:text-5xl font-black text-[#396000] mt-5 leading-tight">
              We're Just A Message Away.
            </h2>

            <p className="text-gray-600 leading-8 mt-6">
              Fill out the form and tell us what you need.
              Our school team will receive your message and
              get back to you as soon as possible.
            </p>

            <div className="mt-10 bg-[#396000] text-white rounded-3xl p-8 relative overflow-hidden">

              <div className="absolute -right-10 -bottom-10 w-40 h-40 rounded-full border-[20px] border-white/10" />

              <FaEnvelope className="text-[#DAB716] text-4xl mb-5" />

              <h3 className="text-2xl font-black">
                Your Questions Matter!
              </h3>

              <p className="text-gray-200 mt-3 leading-7">
                We believe good communication builds strong
                relationships between schools and families.
              </p>

            </div>

          </div>

          {/* FORM */}
          <div className="lg:col-span-3 bg-white p-7 md:p-10 rounded-[30px] shadow-xl">

            <h3 className="text-3xl font-black text-[#396000]">
              Send Us A Message
            </h3>

            <p className="text-gray-500 mt-2 mb-8">
              All fields marked with * are required.
            </p>

            <form ref={form} onSubmit={sendEmail} className="space-y-6">

              <div className="grid md:grid-cols-2 gap-6">

                <div>
                  <label className="block font-bold text-sm mb-2 text-[#396000]">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="user_name"
                    placeholder="Enter your full name"
                    required
                    maxLength={100}
                    className="w-full bg-[#F7F8F2] border border-gray-200 rounded-xl px-5 py-4 outline-none focus:border-[#396000] transition"
                  />
                </div>

                <div>
                  <label className="block font-bold text-sm mb-2 text-[#396000]">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="user_email"
                    placeholder="Enter your email"
                    required
                    maxLength={150}
                    className="w-full bg-[#F7F8F2] border border-gray-200 rounded-xl px-5 py-4 outline-none focus:border-[#396000] transition"
                  />
                </div>

              </div>

              <div className="grid md:grid-cols-2 gap-6">

                <div>
                  <label className="block font-bold text-sm mb-2 text-[#396000]">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="user_phone"
                    placeholder="Your phone number"
                    maxLength={30}
                    className="w-full bg-[#F7F8F2] border border-gray-200 rounded-xl px-5 py-4 outline-none focus:border-[#396000] transition"
                  />
                </div>

                <div>
                  <label className="block font-bold text-sm mb-2 text-[#396000]">
                    Subject *
                  </label>
                  <select
                    name="subject"
                    required
                    defaultValue=""
                    className="w-full bg-[#F7F8F2] border border-gray-200 rounded-xl px-5 py-4 outline-none focus:border-[#396000] transition"
                  >
                    <option value="" disabled>Select a subject</option>
                    <option value="Admissions">Admissions</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Academic Information">Academic Information</option>
                    <option value="School Activities">School Activities</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

              </div>

              <div>
                <label className="block font-bold text-sm mb-2 text-[#396000]">
                  Your Message *
                </label>

                <textarea
                  name="message"
                  rows="6"
                  placeholder="Write your message here..."
                  required
                  maxLength={3000}
                  className="w-full bg-[#F7F8F2] border border-gray-200 rounded-xl px-5 py-4 outline-none focus:border-[#396000] transition resize-none"
                />
              </div>

              {status === "success" && (
                <div className="bg-green-50 text-green-700 p-4 rounded-xl flex items-center gap-3">
                  <FaCheckCircle />
                  Your message has been sent successfully!
                </div>
              )}

              {status === "error" && (
                <div className="bg-red-50 text-red-700 p-4 rounded-xl">
                  Something went wrong. Please try again later.
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full md:w-auto bg-[#396000] hover:bg-[#FF671A] disabled:opacity-60 text-white px-10 py-4 rounded-xl font-bold flex items-center justify-center gap-3 transition duration-300 hover:-translate-y-1"
              >
                {loading ? "Sending Message..." : "Send Message"}
                <FaPaperPlane />
              </button>

            </form>
          </div>

        </div>
      </section>

      {/* SCHOOL LOCATION */}
      <section id="location" className="py-24 px-6">

        <div className="max-w-7xl mx-auto">

          <div className="grid md:grid-cols-2 gap-12 items-center">

            <div>
              <span className="text-[#FF671A] uppercase tracking-widest text-sm font-bold">
                Find Our Campus
              </span>

              <h2 className="text-4xl md:text-5xl font-black text-[#396000] mt-4">
                Come And Visit Us!
              </h2>

              <p className="text-gray-600 leading-8 mt-5">
                We would be delighted to welcome you to New Star School.
                Visit our campus, meet our team, and discover our
                learning environment.
              </p>

              <div className="mt-8 space-y-5">

                <div className="flex items-center gap-4">
                  <div className="bg-[#DAB716] p-4 rounded-xl text-[#396000]">
                    <FaMapMarkerAlt size={22} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#396000]">School Address</h4>
                    <p className="text-gray-500 text-sm">Add your school's complete address</p>
                  </div>
                </div>

                <div id="hours" className="flex items-center gap-4">
                  <div className="bg-[#FF671A] p-4 rounded-xl text-white">
                    <FaClock size={22} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#396000]">Opening Hours</h4>
                    <p className="text-gray-500 text-sm">Monday – Saturday | Add school timings</p>
                  </div>
                </div>

              </div>
            </div>

            <div className="relative">
              <div className="absolute -top-4 -right-4 w-full h-full bg-[#DAB716] rounded-3xl" />

              <div className="relative bg-[#396000] rounded-3xl h-[350px] md:h-[420px] flex flex-col items-center justify-center text-center p-8 text-white">

                <FaMapMarkerAlt className="text-[#DAB716] text-6xl mb-6" />

                <h3 className="text-3xl font-black">
                  New Star School
                </h3>

                <p className="text-gray-200 mt-3">
                  Your destination for learning and growth.
                </p>

                <p className="text-[#DAB716] text-sm mt-6">
                  Add the actual school location to display Google Maps here.
                </p>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#DAB716] py-20 px-6 text-center">

        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-[#396000]">
            Let's Build A Brighter Future Together!
          </h2>

          <p className="text-[#396000] mt-5 text-lg">
            Your journey with New Star School can start with just
            one conversation.
          </p>

          <a
            href="#contact-form"
            className="inline-flex items-center gap-3 mt-8 bg-[#396000] hover:bg-[#FF671A] text-white px-9 py-4 rounded-full font-bold transition duration-300"
          >
            Contact Our Team <FaArrowRight />
          </a>
        </div>

      </section>

    </main>
  );
};

export default Contact;
