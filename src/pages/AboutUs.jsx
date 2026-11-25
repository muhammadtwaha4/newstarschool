
import React from "react";
import { Link } from "react-router-dom";

export default function AboutUs() {
  const values = [
    {
      number: "01",
      icon: "✦",
      title: "Excellence",
      description:
        "We encourage students to give their best, develop their abilities and take pride in their achievements.",
      color: "#DAB716",
    },
    {
      number: "02",
      icon: "♡",
      title: "Respect",
      description:
        "We believe in kindness, understanding and treating everyone with dignity and fairness.",
      color: "#FF671A",
    },
    {
      number: "03",
      icon: "◎",
      title: "Creativity",
      description:
        "We encourage curiosity, imagination and independent thinking in every learning experience.",
      color: "#396000",
    },
    {
      number: "04",
      icon: "✧",
      title: "Responsibility",
      description:
        "We help students develop discipline, honesty and a positive sense of responsibility.",
      color: "#FA3518",
    },
  ];

  const approach = [
    {
      number: "01",
      title: "Discover",
      description:
        "We encourage students to ask questions, explore new ideas and discover their interests.",
    },
    {
      number: "02",
      title: "Learn",
      description:
        "We provide learning experiences that help students develop knowledge and essential skills.",
    },
    {
      number: "03",
      title: "Develop",
      description:
        "We support personal growth, confidence, creativity and positive character development.",
    },
    {
      number: "04",
      title: "Achieve",
      description:
        "We encourage every student to work towards their goals and prepare for future opportunities.",
    },
  ];

  return (
    <div className="overflow-hidden bg-white text-[#173000]">

      {/* ================= HERO SECTION ================= */}
      <section className="relative overflow-hidden bg-[#F5F4E9]">

        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full border-[65px] border-[#DAB716]/15" />
        <div className="absolute bottom-0 left-0 h-2 w-40 bg-[#FF671A]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:min-h-[600px] lg:grid-cols-2 lg:px-8 lg:py-24">

          <div className="about-reveal relative z-10">

            <div className="mb-7 flex items-center gap-3">
              <span className="h-[2px] w-12 bg-[#FF671A]" />
              <span className="text-xs font-black uppercase tracking-[4px] text-[#396000]">
                Get To Know Us
              </span>
            </div>

            <h1 className="text-6xl font-black leading-[1.05] tracking-tight text-[#396000] sm:text-7xl lg:text-[88px]">
              Beyond
              <span className="block text-[#FF671A]">Books.</span>
              Beyond
              <span className="block text-[#DAB716]">Limits.</span>
            </h1>

            <p className="mt-8 max-w-lg text-base leading-8 text-gray-600">
              At New Star School, we believe every child has something
              special to offer. Our purpose is to encourage learning,
              inspire curiosity and help students build a brighter future.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-5">
              <Link
                to="/academics"
                className="rounded-full bg-[#396000] px-8 py-4 font-bold text-white transition duration-300 hover:-translate-y-1 hover:bg-[#FF671A]"
              >
                Explore Academics →
              </Link>

              <span className="text-sm font-bold text-[#396000]">
                Learning With Purpose.
              </span>
            </div>

          </div>

          <div className="relative mx-auto w-full max-w-[530px]">

            <div className="absolute -right-5 -top-5 h-full w-full rounded-[30px] border-2 border-[#FF671A] sm:-right-8 sm:-top-8" />

            <div className="relative overflow-hidden rounded-[30px]">
              <img
                src="https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=1100&q=85"
                alt="Students learning together"
                className="h-[390px] w-full object-cover sm:h-[510px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#173000]/60 to-transparent" />

              <div className="absolute bottom-7 left-7">
                <p className="text-xs font-bold uppercase tracking-[3px] text-[#DAB716]">
                  The New Star Spirit
                </p>
                <h3 className="mt-2 text-3xl font-black text-white">
                  Every Mind Matters.
                </h3>
              </div>
            </div>

            <div className="absolute -bottom-9 -left-5 flex h-28 w-28 flex-col items-center justify-center rounded-full bg-[#DAB716] text-center shadow-xl sm:-left-10">
              <span className="text-4xl">✦</span>
              <span className="mt-1 text-[10px] font-black uppercase tracking-wider">
                Grow & Shine
              </span>
            </div>

          </div>
        </div>
      </section>


      {/* ================= INTRODUCTION SECTION ================= */}
      <section className="relative px-6 py-24 lg:py-32">

        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">

          {/* Image Composition */}
          <div className="relative mx-auto w-full max-w-[550px] pb-12 pr-8">

            <div className="absolute left-0 top-0 h-48 w-48 rounded-full bg-[#DAB716]/20 blur-2xl" />

            <img
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=900&q=85"
              alt="Students in a classroom"
              className="relative h-[360px] w-full rounded-tl-[100px] rounded-br-[100px] object-cover shadow-xl sm:h-[430px]"
            />

            <img
              src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=700&q=85"
              alt="Children enjoying learning"
              className="absolute -bottom-2 -right-1 h-48 w-52 rounded-3xl border-[8px] border-white object-cover shadow-xl sm:h-56 sm:w-64"
            />

            <div className="absolute -left-4 bottom-20 -z-10 h-40 w-40 rounded-full border-[25px] border-[#FF671A]/20" />

          </div>

          {/* Text Content */}
          <div>

            <span className="text-xs font-black uppercase tracking-[4px] text-[#FF671A]">
              Who We Are
            </span>

            <h2 className="mt-5 text-4xl font-black leading-tight text-[#396000] sm:text-5xl">
              A Place Where
              <span className="block text-[#FF671A]">
                Potential Becomes
              </span>
              Possibility.
            </h2>

            <div className="mt-6 h-1.5 w-20 rounded-full bg-[#DAB716]" />

            <p className="mt-8 text-base leading-8 text-gray-600">
              New Star School is built around a simple belief: every child
              deserves the opportunity to learn, explore and grow.
            </p>

            <p className="mt-5 text-base leading-8 text-gray-600">
              We believe education should develop more than academic
              knowledge. It should also help students become confident,
              thoughtful, responsible and creative individuals.
            </p>

            <p className="mt-5 text-base leading-8 text-gray-600">
              Through meaningful learning experiences and a supportive
              environment, we aim to prepare our students for the challenges
              and opportunities that lie ahead.
            </p>

            <div className="mt-9 border-l-4 border-[#DAB716] bg-[#FFFDF5] px-6 py-5">
              <p className="text-lg font-bold italic leading-8 text-[#396000]">
                "Education is not just about learning facts; it is about
                discovering what you can become."
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* ================= PHILOSOPHY SECTION ================= */}
      <section className="relative overflow-hidden bg-[#396000] px-6 py-24">

        <div className="absolute -right-20 -top-28 h-80 w-80 rounded-full border-[50px] border-white/[0.05]" />
        <div className="absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-[#DAB716]/10 blur-3xl" />

        <div className="relative mx-auto max-w-6xl text-center">

          <span className="text-xs font-black uppercase tracking-[4px] text-[#DAB716]">
            What We Believe
          </span>

          <h2 className="mt-7 text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
            Every Child Has A
            <span className="block text-[#DAB716]">
              Star Within.
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-base leading-8 text-white/70 sm:text-lg">
            Our philosophy is based on recognizing the individual potential
            of every student. We believe the right guidance, encouragement
            and learning opportunities can help every child discover their
            strengths and move towards success.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            {["Believe", "Explore", "Improve", "Achieve"].map((item, i) => (
              <div
                key={item}
                className="rounded-full border border-[#DAB716]/40 bg-white/[0.07] px-7 py-3 text-sm font-bold text-[#DAB716] transition hover:bg-[#DAB716] hover:text-[#173000]"
              >
                <span className="mr-2 text-[#FF671A]">✦</span>
                {item}
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* ================= MISSION & VISION ================= */}
      <section className="bg-[#FFFDF5] px-6 py-24 lg:py-28">

        <div className="mx-auto max-w-7xl">

          <div className="mb-14 text-center">
            <span className="text-xs font-black uppercase tracking-[4px] text-[#FF671A]">
              Our Direction
            </span>

            <h2 className="mt-4 text-4xl font-black text-[#396000] sm:text-5xl">
              Mission & Vision
            </h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">

            {/* Mission */}
            <div className="group relative overflow-hidden rounded-[30px] bg-[#DAB716] p-9 sm:p-12">

              <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full border-[30px] border-white/20 transition duration-500 group-hover:scale-125" />

              <div className="relative">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#396000] text-3xl text-white">
                  🎯
                </div>

                <p className="mt-9 text-xs font-black uppercase tracking-[3px] text-[#396000]">
                  What Drives Us
                </p>

                <h3 className="mt-3 text-4xl font-black text-[#173000]">
                  Our Mission
                </h3>

                <p className="mt-6 max-w-lg text-base leading-8 text-[#173000]/75">
                  To provide a supportive and engaging learning environment
                  that encourages academic development, builds strong
                  character and helps students discover their full potential.
                </p>

                <div className="mt-10 h-1.5 w-16 rounded-full bg-[#FF671A]" />
              </div>
            </div>

            {/* Vision */}
            <div className="group relative overflow-hidden rounded-[30px] bg-[#FF671A] p-9 text-white sm:p-12">

              <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full border-[30px] border-white/15 transition duration-500 group-hover:scale-125" />

              <div className="relative">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-3xl">
                  🔭
                </div>

                <p className="mt-9 text-xs font-black uppercase tracking-[3px] text-white/80">
                  Where We Aspire To Go
                </p>

                <h3 className="mt-3 text-4xl font-black">
                  Our Vision
                </h3>

                <p className="mt-6 max-w-lg text-base leading-8 text-white/85">
                  To inspire a generation of knowledgeable, confident and
                  responsible individuals who can contribute positively
                  to their communities and the world around them.
                </p>

                <div className="mt-10 h-1.5 w-16 rounded-full bg-[#DAB716]" />
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ================= CORE VALUES ================= */}
      <section className="relative overflow-hidden bg-white px-6 py-24">

        <div className="absolute -left-28 top-20 h-72 w-72 rounded-full bg-[#DAB716]/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">

          <div className="mb-16 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">

            <div>
              <span className="text-xs font-black uppercase tracking-[4px] text-[#FF671A]">
                What Makes Us
              </span>

              <h2 className="mt-4 text-4xl font-black text-[#396000] sm:text-5xl">
                Our Core Values.
              </h2>
            </div>

            <p className="max-w-md text-sm leading-8 text-gray-500">
              Our values guide the way we learn, interact and grow together
              as a school community.
            </p>

          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {values.map((value) => (
              <div
                key={value.number}
                className="group relative overflow-hidden rounded-[25px] border border-gray-100 bg-[#FAFAF7] p-7 transition duration-500 hover:-translate-y-3 hover:shadow-2xl"
              >
                <div
                  className="absolute right-0 top-0 h-1.5 w-16 transition-all duration-500 group-hover:w-full"
                  style={{ backgroundColor: value.color }}
                />

                <div className="flex items-center justify-between">
                  <span
                    className="flex h-16 w-16 items-center justify-center rounded-2xl text-3xl text-white transition duration-500 group-hover:rotate-12"
                    style={{ backgroundColor: value.color }}
                  >
                    {value.icon}
                  </span>

                  <span className="text-4xl font-black text-gray-200">
                    {value.number}
                  </span>
                </div>

                <h3 className="mt-8 text-2xl font-black text-[#396000]">
                  {value.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-gray-500">
                  {value.description}
                </p>

                <div
                  className="mt-8 h-1 w-10 rounded-full transition-all duration-500 group-hover:w-full"
                  style={{ backgroundColor: value.color }}
                />
              </div>
            ))}

          </div>
        </div>
      </section>


      {/* ================= OUR APPROACH ================= */}
      <section className="relative overflow-hidden bg-[#F5F4E9] px-6 py-24 lg:py-28">

        <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-[#DAB716]/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">

          <div className="mx-auto mb-16 max-w-2xl text-center">
            <span className="text-xs font-black uppercase tracking-[4px] text-[#FF671A]">
              The Journey Of Growth
            </span>

            <h2 className="mt-4 text-4xl font-black text-[#396000] sm:text-5xl">
              How We Encourage Growth.
            </h2>

            <p className="mt-5 leading-8 text-gray-500">
              Learning is a journey. Every step brings students closer
              to discovering their abilities and achieving their goals.
            </p>
          </div>

          <div className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            <div className="absolute left-0 right-0 top-10 hidden h-[2px] bg-[#DAB716] lg:block" />

            {approach.map((item, index) => (
              <div key={item.number} className="relative">

                <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full border-[7px] border-[#F5F4E9] bg-[#396000] text-2xl font-black text-[#DAB716] shadow-lg transition duration-300 hover:rotate-12 hover:bg-[#FF671A]">
                  {item.number}
                </div>

                <div className="mt-7 rounded-[25px] bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">
                  <h3 className="text-2xl font-black text-[#396000]">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-gray-500">
                    {item.description}
                  </p>

                  <span className="mt-6 block text-2xl font-black text-[#DAB716]">
                    0{index + 1} <span className="text-[#FF671A]">✦</span>
                  </span>
                </div>

              </div>
            ))}

          </div>
        </div>
      </section>


      {/* ================= TEAM PREVIEW ================= */}
      <section className="bg-white px-6 py-24">

        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">

          <div>
            <span className="text-xs font-black uppercase tracking-[4px] text-[#FF671A]">
              People Behind The Learning
            </span>

            <h2 className="mt-5 text-4xl font-black leading-tight text-[#396000] sm:text-5xl">
              Great Education
              <span className="block text-[#DAB716]">
                Starts With Great People.
              </span>
            </h2>

            <p className="mt-7 text-base leading-8 text-gray-500">
              Teachers and school staff play an important role in creating
              a positive learning environment. We believe in the importance
              of guidance, encouragement and meaningful relationships
              between educators and students.
            </p>

            <Link
              to="/team"
              className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#396000] px-8 py-4 font-bold text-white transition hover:bg-[#FF671A]"
            >
              Meet Our Team →
            </Link>
          </div>

          <div className="relative">
            <div className="absolute -right-4 -top-4 h-full w-full rounded-[30px] bg-[#DAB716]" />

            <img
              src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1100&q=85"
              alt="Teacher guiding students"
              className="relative h-[390px] w-full rounded-[30px] object-cover shadow-xl sm:h-[450px]"
            />

            <div className="absolute -bottom-7 -left-5 rounded-2xl bg-[#396000] px-7 py-5 text-white shadow-xl">
              <span className="text-sm font-bold text-[#DAB716]">
                Together We Grow
              </span>
              <p className="mt-1 text-xl font-black">
                Together We Shine.
              </p>
            </div>
          </div>

        </div>
      </section>


      {/* ================= FINAL CTA ================= */}
      <section className="relative overflow-hidden bg-[#FA3518] px-6 py-20">

        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full border-[50px] border-white/10" />
        <div className="absolute -bottom-28 -left-20 h-80 w-80 rounded-full bg-[#FF671A] blur-3xl" />

        <div className="relative mx-auto max-w-5xl text-center">

          <span className="text-xs font-black uppercase tracking-[4px] text-white/70">
            Become Part Of Our Journey
          </span>

          <h2 className="mt-6 text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
            Let's Build A
            <span className="block text-[#DAB716]">
              Brighter Tomorrow.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-white/80">
            Discover what makes New Star School a place for learning,
            personal growth and new opportunities.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/admissions"
              className="rounded-full bg-[#DAB716] px-9 py-4 font-black text-[#173000] transition hover:-translate-y-1 hover:bg-white"
            >
              Explore Admissions →
            </Link>

            <Link
              to="/contact"
              className="rounded-full border-2 border-white/60 px-9 py-4 font-bold text-white transition hover:bg-white hover:text-[#FA3518]"
            >
              Contact Us
            </Link>
          </div>

        </div>
      </section>


      {/* ================= ANIMATIONS ================= */}
      <style>{`
        @keyframes aboutReveal {
          from {
            opacity: 0;
            transform: translateY(35px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .about-reveal {
          animation: aboutReveal 1s ease-out both;
        }

        @media (prefers-reduced-motion: reduce) {
          .about-reveal {
            animation: none;
          }

          *,
          *::before,
          *::after {
            scroll-behavior: auto !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>

    </div>
  );
}
