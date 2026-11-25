
import React from "react";
import { Link } from "react-router-dom";

export default function Academics() {

  const stages = [
    {
      number: "01",
      title: "Early Learning",
      subtitle: "Building Foundations",
      description:
        "Encouraging young learners to explore, communicate, discover and develop essential early learning abilities.",
      icon: "🌱",
      color: "#DAB716",
      text: "#173000",
      label: "FOUNDATION",
    },
    {
      number: "02",
      title: "Primary Education",
      subtitle: "Growing Knowledge",
      description:
        "Developing strong foundations in language, mathematics, science and other important areas of learning.",
      icon: "📚",
      color: "#FF671A",
      text: "#FFFFFF",
      label: "DEVELOPMENT",
    },
    {
      number: "03",
      title: "Secondary Learning",
      subtitle: "Preparing For Tomorrow",
      description:
        "Encouraging independent thinking, deeper understanding, problem-solving and preparation for future studies.",
      icon: "🎓",
      color: "#396000",
      text: "#FFFFFF",
      label: "ADVANCEMENT",
    },
  ];

  const subjects = [
    {
      icon: "🔢",
      title: "Mathematics",
      description: "Logical thinking, calculations and problem-solving.",
      color: "bg-[#DAB716]",
    },
    {
      icon: "🔬",
      title: "Science",
      description: "Exploring the world through observation and discovery.",
      color: "bg-[#396000]",
    },
    {
      icon: "📖",
      title: "Languages",
      description: "Building reading, writing and communication skills.",
      color: "bg-[#FF671A]",
    },
    {
      icon: "🌍",
      title: "Social Studies",
      description: "Understanding people, places, history and society.",
      color: "bg-[#FA3518]",
    },
    {
      icon: "💻",
      title: "Computer Studies",
      description: "Developing digital awareness and technology skills.",
      color: "bg-[#396000]",
    },
    {
      icon: "🎨",
      title: "Arts & Creativity",
      description: "Encouraging imagination and creative expression.",
      color: "bg-[#DAB716]",
    },
  ];

  const methods = [
    {
      number: "01",
      title: "Interactive Learning",
      description:
        "Encouraging students to participate, ask questions and become active learners.",
      icon: "💡",
    },
    {
      number: "02",
      title: "Practical Understanding",
      description:
        "Connecting classroom knowledge with practical examples and everyday experiences.",
      icon: "🧩",
    },
    {
      number: "03",
      title: "Individual Growth",
      description:
        "Recognizing different learning needs and encouraging continuous improvement.",
      icon: "🌿",
    },
    {
      number: "04",
      title: "Positive Guidance",
      description:
        "Supporting students through encouragement, feedback and meaningful guidance.",
      icon: "🤝",
    },
  ];

  const skills = [
    {
      icon: "🧠",
      title: "Critical Thinking",
      description: "Learning to analyze information and find solutions.",
    },
    {
      icon: "💬",
      title: "Communication",
      description: "Expressing thoughts and sharing ideas confidently.",
    },
    {
      icon: "🤝",
      title: "Teamwork",
      description: "Working together and respecting different perspectives.",
    },
    {
      icon: "✨",
      title: "Creativity",
      description: "Exploring ideas and discovering new possibilities.",
    },
  ];

  return (
    <div className="overflow-hidden bg-white text-[#173000]">

      {/* ================= HERO SECTION ================= */}
      <section className="relative overflow-hidden bg-[#FFFDF5]">

        <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#DAB716]/15 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:min-h-[650px] lg:grid-cols-2 lg:px-8 lg:py-24">

          <div className="relative z-10">

            <div className="mb-7 flex items-center gap-3">
              <span className="h-[3px] w-12 bg-[#FF671A]" />
              <span className="text-xs font-black uppercase tracking-[4px] text-[#396000]">
                Explore Our Academics
              </span>
            </div>

            <h1 className="text-5xl font-black leading-[1.08] tracking-tight text-[#396000] sm:text-6xl lg:text-[78px]">
              Learn With
              <span className="block text-[#FF671A]">Purpose.</span>
              Grow With
              <span className="block text-[#DAB716]">Confidence.</span>
            </h1>

            <p className="mt-8 max-w-lg text-base leading-8 text-gray-600">
              Discover an educational journey that encourages curiosity,
              develops knowledge and helps students build the skills
              they need for a brighter future.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/admissions"
                className="rounded-full bg-[#396000] px-8 py-4 font-bold text-white transition duration-300 hover:-translate-y-1 hover:bg-[#FF671A]"
              >
                Explore Admissions →
              </Link>

              <Link
                to="/contact"
                className="rounded-full border-2 border-[#396000] px-8 py-4 font-bold text-[#396000] transition hover:bg-[#DAB716] hover:border-[#DAB716]"
              >
                Ask A Question
              </Link>
            </div>

            <div className="mt-12 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#DAB716] text-2xl">
                ✦
              </div>
              <p className="text-sm font-bold text-gray-500">
                Knowledge Today. <span className="text-[#396000]">Possibilities Tomorrow.</span>
              </p>
            </div>

          </div>

          <div className="relative mx-auto w-full max-w-[540px]">

            <div className="absolute -right-5 -top-5 h-full w-full rounded-[35px] bg-[#DAB716]" />

            <div className="relative overflow-hidden rounded-[35px]">
              <img
                src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=1100&q=90"
                alt="Students studying together"
                className="h-[400px] w-full object-cover sm:h-[520px]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#173000]/75 via-transparent to-transparent" />

              <div className="absolute bottom-8 left-8">
                <span className="text-xs font-black uppercase tracking-[3px] text-[#DAB716]">
                  Discover Your Potential
                </span>
                <h3 className="mt-3 text-3xl font-black text-white">
                  Every Lesson Matters.
                </h3>
              </div>
            </div>

            <div className="absolute -bottom-8 -left-5 rounded-2xl bg-[#396000] p-5 text-white shadow-xl sm:-left-9">
              <span className="text-3xl text-[#DAB716]">✦</span>
              <p className="mt-1 text-sm font-black">
                Learn. Explore. Achieve.
              </p>
            </div>

          </div>
        </div>

        <div className="flex h-2">
          <div className="w-1/3 bg-[#DAB716]" />
          <div className="w-1/3 bg-[#FF671A]" />
          <div className="w-1/3 bg-[#FA3518]" />
        </div>
      </section>


      {/* ================= INTRODUCTION ================= */}
      <section className="bg-white px-6 py-24 lg:py-28">

        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">

          <div className="relative">

            <div className="absolute -left-6 -top-6 h-32 w-32 rounded-tl-[60px] border-l-[8px] border-t-[8px] border-[#FF671A]" />

            <img
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1000&q=85"
              alt="Students participating in classroom learning"
              className="relative h-[360px] w-full rounded-[25px] object-cover shadow-xl sm:h-[440px]"
            />

            <div className="absolute -bottom-8 -right-5 rounded-2xl bg-[#DAB716] p-6 shadow-xl sm:-right-8">
              <p className="text-xs font-black uppercase tracking-[2px] text-[#396000]">
                Our Focus
              </p>
              <p className="mt-2 text-xl font-black text-[#173000]">
                Learning For Life.
              </p>
            </div>

          </div>

          <div>

            <span className="text-xs font-black uppercase tracking-[4px] text-[#FF671A]">
              Our Educational Approach
            </span>

            <h2 className="mt-5 text-4xl font-black leading-tight text-[#396000] sm:text-5xl">
              Education Is
              <span className="block text-[#FF671A]">
                More Than A
              </span>
              Classroom.
            </h2>

            <div className="mt-6 h-1.5 w-20 rounded-full bg-[#DAB716]" />

            <p className="mt-8 text-base leading-8 text-gray-600">
              At New Star School, we believe that meaningful education
              combines academic knowledge with personal development.
              Students should have opportunities to understand concepts,
              ask questions and explore new ideas.
            </p>

            <p className="mt-5 text-base leading-8 text-gray-600">
              Our academic approach aims to develop confident learners
              who can think independently, communicate effectively and
              approach new challenges with curiosity.
            </p>

            <Link
              to="/about"
              className="mt-9 inline-flex items-center gap-3 font-black text-[#396000] transition hover:gap-5 hover:text-[#FF671A]"
            >
              Learn About Our Philosophy →
            </Link>

          </div>
        </div>
      </section>


      {/* ================= LEARNING STAGES ================= */}
      <section className="relative overflow-hidden bg-[#F5F4E9] px-6 py-24">

        <div className="absolute -right-28 top-0 h-80 w-80 rounded-full bg-[#DAB716]/15 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">

          <div className="mb-16 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">

            <div>
              <span className="text-xs font-black uppercase tracking-[4px] text-[#FF671A]">
                The Learning Journey
              </span>

              <h2 className="mt-5 text-4xl font-black text-[#396000] sm:text-5xl">
                Stages Of Education.
              </h2>
            </div>

            <p className="max-w-md leading-8 text-gray-500">
              Every educational stage provides new opportunities
              for students to discover, develop and grow.
            </p>

          </div>

          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">

            {stages.map((stage) => (
              <div
                key={stage.number}
                className="group relative overflow-hidden rounded-[30px] bg-white p-8 shadow-sm transition duration-500 hover:-translate-y-3 hover:shadow-2xl"
              >

                <div
                  className="absolute right-0 top-0 h-2 w-20 transition-all duration-500 group-hover:w-full"
                  style={{ backgroundColor: stage.color }}
                />

                <div className="flex items-center justify-between">
                  <div
                    className="flex h-20 w-20 items-center justify-center rounded-[25px] text-4xl shadow-md transition duration-500 group-hover:rotate-12"
                    style={{
                      backgroundColor: stage.color,
                      color: stage.text,
                    }}
                  >
                    {stage.icon}
                  </div>

                  <span className="text-6xl font-black text-gray-100">
                    {stage.number}
                  </span>
                </div>

                <p className="mt-9 text-xs font-black tracking-[3px] text-[#FF671A]">
                  {stage.label}
                </p>

                <h3 className="mt-3 text-2xl font-black text-[#396000]">
                  {stage.title}
                </h3>

                <h4 className="mt-2 font-bold text-[#DAB716]">
                  {stage.subtitle}
                </h4>

                <p className="mt-5 text-sm leading-7 text-gray-500">
                  {stage.description}
                </p>

                <Link
                  to="/admissions"
                  className="mt-8 inline-flex items-center gap-3 font-bold text-[#396000] transition group-hover:gap-5 group-hover:text-[#FF671A]"
                >
                  Admission Information →
                </Link>

              </div>
            ))}

          </div>
        </div>
      </section>


      {/* ================= SUBJECTS SECTION ================= */}
      <section className="bg-white px-6 py-24 lg:py-28">

        <div className="mx-auto max-w-7xl">

          <div className="mx-auto mb-16 max-w-2xl text-center">
            <span className="text-xs font-black uppercase tracking-[4px] text-[#FF671A]">
              Explore Knowledge
            </span>

            <h2 className="mt-5 text-4xl font-black text-[#396000] sm:text-5xl">
              Areas Of Learning.
            </h2>

            <p className="mt-5 leading-8 text-gray-500">
              A broad range of learning areas helps students develop
              knowledge, creativity and essential academic abilities.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

            {subjects.map((subject, index) => (
              <div
                key={subject.title}
                className="group flex gap-5 rounded-[25px] border border-gray-100 bg-[#FAFAF7] p-7 transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >

                <div className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl ${subject.color} text-3xl shadow-sm transition duration-500 group-hover:rotate-12`}>
                  {subject.icon}
                </div>

                <div>
                  <span className="text-xs font-black tracking-[2px] text-[#FF671A]">
                    AREA 0{index + 1}
                  </span>

                  <h3 className="mt-2 text-xl font-black text-[#396000]">
                    {subject.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-gray-500">
                    {subject.description}
                  </p>
                </div>

              </div>
            ))}

          </div>
        </div>
      </section>


      {/* ================= TEACHING METHODS ================= */}
      <section className="relative overflow-hidden bg-[#396000] px-6 py-24 lg:py-28">

        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full border-[55px] border-white/[0.04]" />
        <div className="absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-[#DAB716]/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">

          <div className="mb-16 max-w-2xl">
            <span className="text-xs font-black uppercase tracking-[4px] text-[#DAB716]">
              The Way We Learn
            </span>

            <h2 className="mt-5 text-4xl font-black leading-tight text-white sm:text-5xl">
              Learning That
              <span className="block text-[#DAB716]">
                Goes Beyond Books.
              </span>
            </h2>

            <p className="mt-6 leading-8 text-white/60">
              We believe students learn best when they are encouraged
              to participate, explore and understand the world around them.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">

            {methods.map((method) => (
              <div
                key={method.number}
                className="group flex gap-6 rounded-[25px] border border-white/10 bg-white/[0.06] p-7 transition duration-500 hover:-translate-y-2 hover:border-[#DAB716]/50 hover:bg-white/10 sm:p-9"
              >

                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#DAB716] text-3xl transition duration-500 group-hover:rotate-12 group-hover:bg-[#FF671A]">
                  {method.icon}
                </div>

                <div>
                  <span className="text-xs font-black tracking-[3px] text-[#DAB716]">
                    {method.number}
                  </span>

                  <h3 className="mt-2 text-xl font-black text-white sm:text-2xl">
                    {method.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-white/55">
                    {method.description}
                  </p>
                </div>

              </div>
            ))}

          </div>
        </div>
      </section>


      {/* ================= FUTURE SKILLS ================= */}
      <section className="relative overflow-hidden bg-[#FFFDF5] px-6 py-24">

        <div className="relative mx-auto max-w-7xl">

          <div className="grid items-center gap-14 lg:grid-cols-2">

            <div>
              <span className="text-xs font-black uppercase tracking-[4px] text-[#FF671A]">
                Beyond Academic Knowledge
              </span>

              <h2 className="mt-5 text-4xl font-black leading-tight text-[#396000] sm:text-5xl">
                Skills For A
                <span className="block text-[#FF671A]">
                  Changing World.
                </span>
              </h2>

              <p className="mt-7 text-base leading-8 text-gray-600">
                Education should prepare students for more than
                examinations. It should also help them develop the
                abilities to communicate, collaborate, think critically
                and approach new situations with confidence.
              </p>

              <img
                src="https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=1000&q=85"
                alt="Students collaborating in a learning environment"
                className="mt-9 h-[270px] w-full rounded-[25px] object-cover shadow-lg"
              />
            </div>

            <div className="grid gap-5 sm:grid-cols-2">

              {skills.map((skill, index) => (
                <div
                  key={skill.title}
                  className={`rounded-[25px] p-7 transition duration-300 hover:-translate-y-2 hover:shadow-xl ${
                    index === 0
                      ? "bg-[#DAB716]"
                      : index === 1
                      ? "bg-[#FF671A] text-white"
                      : index === 2
                      ? "bg-[#396000] text-white"
                      : "bg-[#F5F4E9]"
                  }`}
                >
                  <span className="text-4xl">{skill.icon}</span>

                  <h3 className={`mt-7 text-xl font-black ${
                    index === 0 || index === 3
                      ? "text-[#396000]"
                      : "text-white"
                  }`}>
                    {skill.title}
                  </h3>

                  <p className={`mt-4 text-sm leading-7 ${
                    index === 0 || index === 3
                      ? "text-[#173000]/65"
                      : "text-white/75"
                  }`}>
                    {skill.description}
                  </p>
                </div>
              ))}

            </div>

          </div>
        </div>
      </section>


      {/* ================= ACADEMIC ENVIRONMENT ================= */}
      <section className="relative overflow-hidden bg-[#F5F4E9] px-6 py-24">

        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">

          <div className="relative overflow-hidden rounded-[30px]">
            <img
              src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1100&q=85"
              alt="School classroom environment"
              className="h-[350px] w-full object-cover sm:h-[430px]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#173000]/70 to-transparent" />

            <div className="absolute bottom-8 left-8">
              <p className="text-xs font-black uppercase tracking-[3px] text-[#DAB716]">
                A Space To Discover
              </p>
              <h3 className="mt-2 text-3xl font-black text-white">
                Learning Together.
              </h3>
            </div>
          </div>

          <div>

            <span className="text-xs font-black uppercase tracking-[4px] text-[#FF671A]">
              Our Learning Environment
            </span>

            <h2 className="mt-5 text-4xl font-black leading-tight text-[#396000] sm:text-5xl">
              Where Ideas
              <span className="block text-[#FF671A]">
                Come To Life.
              </span>
            </h2>

            <p className="mt-7 text-base leading-8 text-gray-600">
              A positive learning environment plays an important role
              in a student's educational journey. We believe classrooms
              should encourage curiosity, participation and meaningful
              interaction.
            </p>

            <p className="mt-5 text-base leading-8 text-gray-600">
              Our goal is to create an atmosphere where students feel
              encouraged to ask questions, share ideas and take an active
              part in their learning.
            </p>

            <Link
              to="/gallery"
              className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#396000] px-8 py-4 font-bold text-white transition hover:bg-[#FF671A]"
            >
              Explore School Life →
            </Link>

          </div>
        </div>
      </section>


      {/* ================= FINAL CTA ================= */}
      <section className="relative overflow-hidden bg-[#FF671A] px-6 py-24">

        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full border-[55px] border-white/10" />
        <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-[#FA3518] blur-3xl" />

        <div className="relative mx-auto max-w-5xl text-center">

          <span className="text-xs font-black uppercase tracking-[4px] text-white/75">
            Your Educational Journey Starts Here
          </span>

          <h2 className="mt-6 text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
            Ready To Explore
            <span className="block text-[#DAB716]">
              A World Of Learning?
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-2xl leading-8 text-white/80">
            Discover the academic opportunities at New Star School
            and take the next step towards a brighter future.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/admissions"
              className="rounded-full bg-[#396000] px-9 py-4 font-black text-white transition hover:-translate-y-1 hover:bg-[#173000]"
            >
              Explore Admissions →
            </Link>

            <Link
              to="/contact"
              className="rounded-full border-2 border-white/70 px-9 py-4 font-bold text-white transition hover:bg-white hover:text-[#FF671A]"
            >
              Contact Us
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}
