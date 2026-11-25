
import React from "react";
import { FaGraduationCap, FaEnvelope, FaArrowRight } from "react-icons/fa";

const team = [
  {
    name: "Sarah Ahmed",
    role: "Principal",
    subject: "School Leadership",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600",
    color: "#396000",
  },
  {
    name: "James Wilson",
    role: "Senior Teacher",
    subject: "Mathematics",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600",
    color: "#FF671A",
  },
  {
    name: "Ayesha Khan",
    role: "Senior Teacher",
    subject: "English Language",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600",
    color: "#DAB716",
  },
  {
    name: "Michael Brown",
    role: "Science Teacher",
    subject: "Physics & Chemistry",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600",
    color: "#FA3518",
  },
  {
    name: "Fatima Noor",
    role: "Teacher",
    subject: "Computer Science",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600",
    color: "#396000",
  },
  {
    name: "David Miller",
    role: "Teacher",
    subject: "Social Studies",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600",
    color: "#FF671A",
  },
];

const OurTeam = () => {
  return (
    <div className="bg-white text-black overflow-hidden">

      {/* HERO SECTION */}
      <section className="relative bg-[#396000] text-white py-24 md:py-32 px-6 overflow-hidden">

        <div className="absolute -top-24 -right-20 w-80 h-80 bg-[#DAB716] rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-32 -left-20 w-96 h-96 bg-[#FF671A] rounded-full opacity-20 blur-3xl"></div>

        <div className="absolute top-16 right-20 w-20 h-20 border-4 border-[#DAB716] rounded-full opacity-40 hidden md:block"></div>

        <div className="relative max-w-7xl mx-auto">
          <span className="inline-block bg-[#DAB716] text-[#396000] px-5 py-2 rounded-full text-sm font-bold mb-6">
            MEET THE PEOPLE BEHIND OUR SUCCESS
          </span>

          <h1 className="text-5xl md:text-7xl font-black leading-tight max-w-3xl">
            The Amazing People
            <span className="text-[#DAB716]"> Behind New Star</span>
          </h1>

          <p className="text-gray-200 max-w-xl mt-6 text-lg leading-relaxed">
            Great schools are built by great people. Meet our dedicated
            teachers and professionals who inspire students to learn,
            grow, and achieve their dreams.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#teachers"
              className="bg-[#FF671A] hover:bg-[#FA3518] px-8 py-4 rounded-full font-bold transition duration-300 hover:-translate-y-1"
            >
              Meet Our Team <FaArrowRight className="inline ml-2" />
            </a>
          </div>
        </div>
      </section>

      {/* INTRO SECTION */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          <div>
            <span className="text-[#FF671A] font-bold uppercase tracking-widest text-sm">
              Our Greatest Strength
            </span>

            <h2 className="text-4xl md:text-5xl font-black text-[#396000] mt-4 leading-tight">
              Dedicated People.
              <br />
              Brighter Futures.
            </h2>

            <p className="text-gray-600 mt-6 leading-8">
              At New Star School, our team is more than a group of
              educators. We are mentors, guides, and lifelong learners
              working together to create a positive learning environment.
            </p>

            <p className="text-gray-600 mt-4 leading-8">
              Every member of our team brings passion, knowledge, and
              commitment to help every student reach their full potential.
            </p>
          </div>

          <div className="relative">
            <div className="absolute -top-5 -left-5 w-full h-full bg-[#DAB716] rounded-3xl rotate-3"></div>

            <img
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1000"
              alt="Teachers working together"
              className="relative w-full h-[350px] md:h-[420px] object-cover rounded-3xl shadow-xl"
            />

            <div className="absolute -bottom-6 -right-3 md:-right-6 bg-[#FF671A] text-white p-6 rounded-2xl shadow-xl">
              <FaGraduationCap size={35} />
              <p className="font-black text-xl mt-2">Together</p>
              <p className="text-sm">We make a difference</p>
            </div>
          </div>

        </div>
      </section>

      {/* TEAM MEMBERS */}
      <section id="teachers" className="bg-[#F7F8F2] py-24 px-6">

        <div className="max-w-7xl mx-auto">

          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#FF671A] font-bold uppercase tracking-widest text-sm">
              The Faces of New Star
            </span>

            <h2 className="text-4xl md:text-5xl font-black text-[#396000] mt-4">
              Meet Our Team
            </h2>

            <p className="text-gray-600 mt-5 leading-7">
              Our passionate educators bring learning to life with
              creativity, care, and dedication.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {team.map((member, index) => (
              <div
                key={index}
                className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition duration-500 hover:-translate-y-3"
              >

                <div className="relative overflow-hidden h-72">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                  />

                  <div
                    className="absolute bottom-0 left-0 w-full h-2"
                    style={{ backgroundColor: member.color }}
                  ></div>

                  <div className="absolute top-5 right-5 bg-white/90 text-[#396000] w-11 h-11 rounded-full flex items-center justify-center">
                    <FaGraduationCap size={20} />
                  </div>
                </div>

                <div className="p-7">
                  <span
                    className="text-sm font-bold uppercase tracking-wider"
                    style={{ color: member.color }}
                  >
                    {member.role}
                  </span>

                  <h3 className="text-2xl font-black text-[#396000] mt-2">
                    {member.name}
                  </h3>

                  <p className="text-gray-500 mt-2">
                    {member.subject}
                  </p>

                  <div
                    className="w-12 h-1 mt-5 rounded-full group-hover:w-24 transition-all duration-500"
                    style={{ backgroundColor: member.color }}
                  ></div>
                </div>

              </div>
            ))}

          </div>
        </div>
      </section>

      {/* OUR VALUES */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">

          <div className="bg-[#396000] rounded-[35px] p-10 md:p-16 text-white relative overflow-hidden">

            <div className="absolute -right-20 -top-20 w-72 h-72 border-[35px] border-white/10 rounded-full"></div>

            <div className="relative grid md:grid-cols-2 gap-12 items-center">

              <div>
                <span className="text-[#DAB716] font-bold tracking-widest uppercase text-sm">
                  What Makes Us Special
                </span>

                <h2 className="text-4xl md:text-5xl font-black mt-5 leading-tight">
                  More Than Teachers,
                  <span className="text-[#DAB716]"> We're Mentors.</span>
                </h2>

                <p className="text-gray-200 mt-6 leading-8">
                  We believe that every child has unique abilities.
                  Our team works together to discover those abilities
                  and turn them into lifelong strengths.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">

                {[
                  ["01", "Passion for Teaching"],
                  ["02", "Student First"],
                  ["03", "Creative Learning"],
                  ["04", "Teamwork"],
                ].map(([number, title]) => (
                  <div
                    key={number}
                    className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-[#FF671A] transition duration-300"
                  >
                    <span className="text-[#DAB716] text-3xl font-black">
                      {number}
                    </span>
                    <h3 className="font-bold mt-4">{title}</h3>
                  </div>
                ))}

              </div>

            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="bg-[#DAB716] py-20 px-6 text-center">

        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-[#396000]">
            Great Things Start With Great People.
          </h2>

          <p className="text-[#396000] mt-5 text-lg">
            Together, we are building a brighter future for the next generation.
          </p>

          <a
            href="/contact"
            className="inline-block mt-8 bg-[#396000] hover:bg-[#FF671A] text-white px-9 py-4 rounded-full font-bold transition duration-300 hover:-translate-y-1"
          >
            Get In Touch <FaArrowRight className="inline ml-2" />
          </a>
        </div>

      </section>

    </div>
  );
};

export default OurTeam;
