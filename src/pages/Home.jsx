
import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const programs = [
    {
      number: "01",
      title: "Early Years",
      subtitle: "Building Strong Foundations",
      description:
        "A joyful beginning where children explore, discover, play and develop essential early learning skills.",
      color: "bg-[#DAB716]",
      icon: "🌱",
    },
    {
      number: "02",
      title: "Primary Education",
      subtitle: "Learning With Confidence",
      description:
        "Developing curiosity, creativity and strong academic foundations through engaging learning experiences.",
      color: "bg-[#FF671A]",
      icon: "📚",
    },
    {
      number: "03",
      title: "Secondary Education",
      subtitle: "Preparing For Tomorrow",
      description:
        "Helping students develop knowledge, leadership, critical thinking and confidence for their future.",
      color: "bg-[#FA3518]",
      icon: "🎓",
    },
  ];

  const features = [
    {
      icon: "📖",
      title: "Quality Education",
      description:
        "A learning environment focused on academic development and understanding.",
    },
    {
      icon: "👩‍🏫",
      title: "Dedicated Teachers",
      description:
        "Supportive educators who encourage students to reach their potential.",
    },
    {
      icon: "🏆",
      title: "Student Development",
      description:
        "Opportunities to develop confidence, creativity and leadership.",
    },
    {
      icon: "🌍",
      title: "Positive Environment",
      description:
        "A welcoming atmosphere where every student is encouraged to grow.",
    },
  ];

  const activities = [
    {
      title: "Creative Learning",
      image:
        "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=900&q=85",
      category: "CLASSROOM",
    },
    {
      title: "Sports & Fitness",
      image:
        "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=900&q=85",
      category: "SPORTS",
    },
    {
      title: "Art & Creativity",
      image:
        "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=900&q=85",
      category: "CREATIVITY",
    },
  ];

  return (
    <div className="overflow-hidden bg-white text-[#173000]">

      {/* ================= HERO SECTION ================= */}
      <section className="relative isolate min-h-[680px] overflow-hidden bg-[#396000] lg:min-h-[750px]">

        {/* Background Decorations */}
        <div className="absolute -right-40 -top-40 h-[550px] w-[550px] rounded-full border-[80px] border-white/[0.05]" />
        <div className="absolute -bottom-40 -left-32 h-[450px] w-[450px] rounded-full bg-[#DAB716]/10 blur-3xl" />
        <div className="absolute right-[38%] top-28 h-5 w-5 rounded-full bg-[#FF671A] animate-pulse" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 py-20 lg:min-h-[750px] lg:grid-cols-2 lg:gap-10 lg:px-8 lg:py-16">

          {/* Hero Content */}
          <div className="hero-content relative z-10">

            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-[#DAB716]/40 bg-white/10 px-5 py-3 backdrop-blur-sm">
              <span className="h-2.5 w-2.5 rounded-full bg-[#DAB716] animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-[2px] text-[#FCE89B]">
                A Place Where Dreams Begin
              </span>
            </div>

            <h1 className="max-w-2xl text-5xl font-black leading-[1.12] tracking-tight text-white sm:text-6xl lg:text-[76px]">
              Discover Your
              <span className="block text-[#DAB716]">
                Potential.
              </span>
              Shape Your
              <span className="relative inline-block text-white">
                Future.
                <span className="absolute -bottom-2 left-0 h-2 w-full rounded-full bg-[#FF671A]" />
              </span>
            </h1>

            <p className="mt-9 max-w-lg text-base leading-8 text-white/75 sm:text-lg">
              Welcome to New Star School, where curiosity is encouraged,
              knowledge is celebrated, and every student gets the opportunity
              to shine.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/admissions"
                className="group inline-flex items-center gap-4 rounded-full bg-[#DAB716] px-8 py-4 font-extrabold text-[#173000] shadow-xl transition duration-300 hover:-translate-y-1 hover:bg-white"
              >
                Explore Admissions
                <span className="text-xl transition-transform group-hover:translate-x-2">
                  →
                </span>
              </Link>

              <Link
                to="/about"
                className="rounded-full border border-white/40 px-8 py-4 font-bold text-white transition duration-300 hover:border-[#FF671A] hover:bg-[#FF671A]"
              >
                Discover More
              </Link>
            </div>

            <div className="mt-14 flex flex-wrap items-center gap-5">
              <div className="flex -space-x-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-[#396000] bg-[#DAB716] text-xl">🎓</div>
                <div className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-[#396000] bg-[#FF671A] text-xl">📚</div>
                <div className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-[#396000] bg-white text-xl">⭐</div>
              </div>
              <p className="text-sm font-medium text-white/70">
                Inspiring minds. <span className="text-[#DAB716]">Creating futures.</span>
              </p>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative mx-auto w-full max-w-[550px] lg:ml-auto">

            <div className="absolute -right-5 -top-5 h-full w-full rounded-[45%_45%_20%_20%] border-2 border-[#DAB716]/60 sm:-right-8 sm:-top-8" />

            <div className="hero-image relative overflow-hidden rounded-[45%_45%_18%_18%] border-[7px] border-white/10 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1100&q=90"
                alt="Students learning in a classroom"
                className="h-[400px] w-full object-cover sm:h-[510px]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#173000]/70 via-transparent to-transparent" />

              <div className="absolute bottom-8 left-7">
                <p className="text-xs font-bold uppercase tracking-[3px] text-[#DAB716]">
                  Learn • Grow • Shine
                </p>
                <h3 className="mt-2 text-3xl font-black text-white">
                  Your Future Starts Here.
                </h3>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-7 -left-5 flex h-28 w-28 flex-col items-center justify-center rounded-full border-[5px] border-[#396000] bg-[#DAB716] text-center shadow-xl sm:-left-10">
              <span className="text-3xl">⭐</span>
              <span className="mt-1 text-[10px] font-black uppercase tracking-wider text-[#173000]">
                Shine Bright
              </span>
            </div>

            <div className="absolute -right-4 top-20 hidden h-16 w-16 rotate-12 items-center justify-center rounded-2xl bg-[#FF671A] text-3xl shadow-xl sm:flex">
              ✦
            </div>
          </div>
        </div>

        {/* Bottom Color Pattern */}
        <div className="absolute bottom-0 left-0 flex h-2 w-full">
          <div className="w-1/3 bg-[#DAB716]" />
          <div className="w-1/3 bg-[#FF671A]" />
          <div className="w-1/3 bg-[#FA3518]" />
        </div>
      </section>


      {/* ================= HIGHLIGHTS SECTION ================= */}
      <section className="relative z-10 bg-[#DAB716] px-6 py-9">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-7 md:grid-cols-4">

          {[
            ["01", "Quality Learning"],
            ["02", "Student Growth"],
            ["03", "Creative Thinking"],
            ["04", "Bright Futures"],
          ].map(([number, title]) => (
            <div key={number} className="flex items-center gap-4">
              <span className="text-3xl font-black text-[#396000]/40">
                {number}
              </span>
              <div>
                <p className="text-sm font-extrabold text-[#173000] sm:text-base">
                  {title}
                </p>
                <div className="mt-1 h-1 w-9 rounded-full bg-[#FF671A]" />
              </div>
            </div>
          ))}

        </div>
      </section>


      {/* ================= WELCOME SECTION ================= */}
      <section className="relative overflow-hidden bg-[#FFFDF5] px-6 py-24 lg:py-32">

        <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#DAB716]/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">

          {/* Images */}
          <div className="relative mx-auto w-full max-w-[540px]">

            <div className="absolute -left-5 -top-5 h-40 w-40 rounded-tl-[70px] border-l-[8px] border-t-[8px] border-[#FF671A]" />

            <img
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1100&q=85"
              alt="Students in a modern learning environment"
              className="relative h-[350px] w-full rounded-[30px] object-cover shadow-xl sm:h-[460px]"
            />

            <div className="absolute -bottom-8 -right-3 max-w-[250px] rounded-2xl bg-[#396000] p-6 text-white shadow-xl sm:-right-8">
              <span className="text-3xl text-[#DAB716]">✦</span>
              <p className="mt-2 text-xl font-extrabold">
                Learning Today,
                <span className="block text-[#DAB716]">Leading Tomorrow.</span>
              </p>
            </div>

            <div className="absolute -bottom-12 -left-5 -z-0 h-28 w-28 rounded-full bg-[#DAB716]/30 blur-xl" />
          </div>

          {/* Text */}
          <div className="relative">
            <span className="text-xs font-black uppercase tracking-[4px] text-[#FF671A]">
              A Little About Us
            </span>

            <h2 className="mt-5 text-4xl font-black leading-tight text-[#396000] sm:text-5xl">
              Education That
              <span className="block text-[#FF671A]">
                Makes A Difference.
              </span>
            </h2>

            <div className="mt-6 h-1.5 w-24 rounded-full bg-[#DAB716]" />

            <p className="mt-8 text-base leading-8 text-gray-600">
              At New Star School, we believe education is more than just
              textbooks and examinations. It is about developing confident
              individuals, encouraging new ideas, and helping every child
              discover their strengths.
            </p>

            <p className="mt-5 text-base leading-8 text-gray-600">
              Our aim is to create an encouraging learning environment where
              students can explore their interests, build essential skills,
              and prepare themselves for the opportunities of tomorrow.
            </p>

            <div className="mt-9 grid grid-cols-2 gap-5">
              <div className="border-l-4 border-[#DAB716] pl-4">
                <h4 className="font-black text-[#396000]">Our Mission</h4>
                <p className="mt-2 text-sm leading-6 text-gray-500">
                  Encourage knowledge and personal growth.
                </p>
              </div>

              <div className="border-l-4 border-[#FF671A] pl-4">
                <h4 className="font-black text-[#396000]">Our Vision</h4>
                <p className="mt-2 text-sm leading-6 text-gray-500">
                  Inspire students to create a better tomorrow.
                </p>
              </div>
            </div>

            <Link
              to="/about"
              className="mt-10 inline-flex items-center gap-3 rounded-full bg-[#396000] px-8 py-4 font-bold text-white transition duration-300 hover:bg-[#FF671A]"
            >
              Discover Our Story <span>→</span>
            </Link>
          </div>
        </div>
      </section>


      {/* ================= PROGRAMS SECTION ================= */}
      <section className="relative overflow-hidden bg-[#F5F4E9] px-6 py-24">

        <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-[#DAB716]/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">

          <div className="mx-auto mb-16 max-w-2xl text-center">
            <span className="text-xs font-black uppercase tracking-[4px] text-[#FF671A]">
              Learning Pathways
            </span>
            <h2 className="mt-4 text-4xl font-black text-[#396000] sm:text-5xl">
              Education For
              <span className="text-[#FF671A]"> Every Stage.</span>
            </h2>
            <p className="mt-5 leading-8 text-gray-500">
              Every stage of education brings new opportunities to learn,
              grow and discover something wonderful.
            </p>
          </div>

          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">

            {programs.map((program) => (
              <div
                key={program.number}
                className="group relative overflow-hidden rounded-[28px] bg-white p-8 shadow-sm transition duration-500 hover:-translate-y-3 hover:shadow-2xl"
              >
                <div className={`absolute right-0 top-0 h-2 w-24 ${program.color} transition-all duration-500 group-hover:w-full`} />

                <div className="flex items-center justify-between">
                  <div className={`flex h-16 w-16 items-center justify-center rounded-2xl ${program.color} text-3xl shadow-md transition duration-500 group-hover:rotate-12`}>
                    {program.icon}
                  </div>
                  <span className="text-5xl font-black text-gray-100">
                    {program.number}
                  </span>
                </div>

                <p className="mt-9 text-xs font-bold uppercase tracking-[2px] text-[#FF671A]">
                  {program.subtitle}
                </p>

                <h3 className="mt-3 text-2xl font-black text-[#396000]">
                  {program.title}
                </h3>

                <p className="mt-5 text-sm leading-7 text-gray-500">
                  {program.description}
                </p>

                <Link
                  to="/academics"
                  className="mt-8 inline-flex items-center gap-3 font-bold text-[#396000] transition group-hover:gap-5 group-hover:text-[#FF671A]"
                >
                  Explore Program <span>→</span>
                </Link>
              </div>
            ))}

          </div>
        </div>
      </section>


      {/* ================= WHY CHOOSE US ================= */}
      <section className="relative overflow-hidden bg-[#396000] px-6 py-24 lg:py-28">

        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full border-[55px] border-white/[0.04]" />
        <div className="absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-[#DAB716]/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">

          <div className="mb-16 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">

            <div className="max-w-2xl">
              <span className="text-xs font-black uppercase tracking-[4px] text-[#DAB716]">
                The New Star Difference
              </span>

              <h2 className="mt-5 text-4xl font-black leading-tight text-white sm:text-5xl">
                More Than A School.
                <span className="block text-[#DAB716]">
                  A Place To Grow.
                </span>
              </h2>
            </div>

            <p className="max-w-md text-sm leading-8 text-white/60">
              We believe that every child deserves the opportunity to learn
              in an environment that supports their academic and personal
              development.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="group rounded-[25px] border border-white/10 bg-white/[0.06] p-7 backdrop-blur-sm transition duration-500 hover:-translate-y-2 hover:border-[#DAB716]/60 hover:bg-white/10"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#DAB716] text-3xl transition duration-500 group-hover:rotate-12 group-hover:bg-[#FF671A]">
                  {feature.icon}
                </div>

                <h3 className="mt-7 text-xl font-extrabold text-white">
                  {feature.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-white/55">
                  {feature.description}
                </p>

                <div className="mt-7 h-1 w-10 rounded-full bg-[#FF671A] transition-all duration-500 group-hover:w-full" />
              </div>
            ))}

          </div>
        </div>
      </section>


      {/* ================= SCHOOL LIFE SECTION ================= */}
      <section className="bg-white px-6 py-24 lg:py-28">

        <div className="mx-auto max-w-7xl">

          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <span className="text-xs font-black uppercase tracking-[4px] text-[#FF671A]">
                Beyond The Classroom
              </span>

              <h2 className="mt-4 text-4xl font-black text-[#396000] sm:text-5xl">
                Experience School Life.
              </h2>

              <p className="mt-5 max-w-xl leading-8 text-gray-500">
                Learning becomes even more meaningful when students explore,
                participate, create and enjoy new experiences.
              </p>
            </div>

            <Link
              to="/gallery"
              className="inline-flex w-fit items-center gap-3 rounded-full border-2 border-[#396000] px-7 py-3.5 font-bold text-[#396000] transition hover:border-[#FF671A] hover:bg-[#FF671A] hover:text-white"
            >
              View Gallery →
            </Link>
          </div>

          <div className="grid gap-7 md:grid-cols-3">

            {activities.map((activity, index) => (
              <Link
                to="/gallery"
                key={activity.title}
                className={`group relative overflow-hidden rounded-[28px] ${
                  index === 1 ? "md:mt-12" : ""
                }`}
              >
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="h-[370px] w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#173000]/95 via-[#173000]/10 to-transparent" />

                <div className="absolute bottom-0 left-0 p-8">
                  <span className="rounded-full bg-[#DAB716] px-4 py-2 text-[10px] font-black tracking-[2px] text-[#173000]">
                    {activity.category}
                  </span>

                  <h3 className="mt-5 text-2xl font-black text-white">
                    {activity.title}
                  </h3>

                  <p className="mt-3 translate-y-3 font-semibold text-[#DAB716] opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    Explore More →
                  </p>
                </div>
              </Link>
            ))}

          </div>
        </div>
      </section>


      {/* ================= QUOTE SECTION ================= */}
      <section className="relative overflow-hidden bg-[#DAB716] px-6 py-20">

        <div className="absolute -right-20 -top-28 h-72 w-72 rounded-full border-[40px] border-white/20" />
        <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-[#FF671A]/20 blur-2xl" />

        <div className="relative mx-auto max-w-5xl text-center">
          <span className="text-6xl font-black text-[#396000]/30">“</span>

          <h2 className="mx-auto max-w-4xl text-3xl font-black leading-snug text-[#173000] sm:text-4xl lg:text-5xl">
            Every Great Journey Begins With A Single Step Towards Learning.
          </h2>

          <div className="mx-auto mt-8 h-1.5 w-20 rounded-full bg-[#FF671A]" />

          <p className="mt-6 text-sm font-black uppercase tracking-[3px] text-[#396000]">
            New Star School
          </p>
        </div>
      </section>


      {/* ================= ADMISSIONS CTA ================= */}
      <section className="relative overflow-hidden bg-[#FF671A] px-6 py-24">

        <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full border-[45px] border-white/10" />
        <div className="absolute -bottom-28 -left-20 h-80 w-80 rounded-full bg-[#FA3518] blur-3xl" />

        <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-between gap-10 text-center lg:flex-row lg:text-left">

          <div className="max-w-2xl">
            <span className="text-xs font-black uppercase tracking-[4px] text-white/75">
              Your Next Chapter Starts Here
            </span>

            <h2 className="mt-5 text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
              Ready To Begin
              <span className="block text-[#173000]">
                Your Journey?
              </span>
            </h2>

            <p className="mt-6 max-w-xl leading-8 text-white/85">
              Discover an environment where learning meets opportunity.
              Explore our admission information and take the next step
              towards a brighter future.
            </p>
          </div>

          <Link
            to="/admissions"
            className="group inline-flex shrink-0 items-center gap-5 rounded-full bg-[#396000] px-9 py-5 text-lg font-black text-white shadow-xl transition duration-300 hover:-translate-y-2 hover:bg-[#173000]"
          >
            Explore Admissions
            <span className="text-2xl transition-transform group-hover:translate-x-2">
              →
            </span>
          </Link>

        </div>
      </section>


      {/* ================= CUSTOM ANIMATIONS ================= */}
      <style>{`
        @keyframes heroEnter {
          from {
            opacity: 0;
            transform: translateY(35px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes imageEnter {
          from {
            opacity: 0;
            transform: translateX(35px) scale(0.96);
          }
          to {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }

        .hero-content {
          animation: heroEnter 1s ease-out both;
        }

        .hero-image {
          animation: imageEnter 1.2s ease-out both;
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-content,
          .hero-image {
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
