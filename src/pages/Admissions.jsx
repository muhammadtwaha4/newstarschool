
import React from "react";
import { Link } from "react-router-dom";

export default function Admissions() {
  const benefits = [
    {
      icon: "📚",
      title: "Learning Opportunities",
      description:
        "An environment that encourages students to explore knowledge, develop skills and become confident learners.",
      color: "bg-[#DAB716]",
    },
    {
      icon: "🌱",
      title: "Personal Development",
      description:
        "Opportunities to develop positive character, communication, creativity and responsibility.",
      color: "bg-[#FF671A]",
    },
    {
      icon: "👩‍🏫",
      title: "Teacher Guidance",
      description:
        "Support and guidance to help students understand their lessons and work towards their goals.",
      color: "bg-[#396000]",
    },
  ];

  const admissionSteps = [
    {
      number: "01",
      title: "Explore Our School",
      description:
        "Learn about our academic programs, educational environment and the classes offered at New Star School.",
      icon: "🏫",
    },
    {
      number: "02",
      title: "Visit The School",
      description:
        "Parents can visit the school to explore the facilities, meet the school representatives and discuss admission enquiries.",
      icon: "🚶",
    },
    {
      number: "03",
      title: "Discuss Requirements",
      description:
        "Get information about class eligibility, available seats, required documents and admission requirements.",
      icon: "📋",
    },
    {
      number: "04",
      title: "Complete Admission",
      description:
        "Follow the admission guidance provided by the school and complete the necessary admission formalities.",
      icon: "🎓",
    },
  ];

  const documents = [
    "Previous school report card, if applicable",
    "Student's birth certificate or B-Form",
    "Recent passport-size photographs",
    "Parent or guardian's identification document",
    "School leaving certificate, if applicable",
  ];

  const guidelines = [
    {
      title: "Class Placement",
      description:
        "Students are considered for an appropriate class based on their previous educational background and age.",
    },
    {
      title: "Previous Academic Record",
      description:
        "Previous academic records may be reviewed to understand the student's educational progress.",
    },
    {
      title: "Document Verification",
      description:
        "Parents should provide accurate information and the required documents during the admission process.",
    },
    {
      title: "Admission Confirmation",
      description:
        "Admission is subject to the school's requirements, available seats and completion of the admission procedure.",
    },
  ];

  return (
    <div className="overflow-hidden bg-white text-[#173000]">

      {/* ================= HERO SECTION ================= */}
      <section className="relative overflow-hidden bg-[#396000]">

        <div className="absolute -right-40 -top-40 h-[550px] w-[550px] rounded-full border-[75px] border-white/[0.05]" />
        <div className="absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-[#DAB716]/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:min-h-[650px] lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-24">

          {/* Hero Text */}
          <div className="relative z-10">

            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-[#DAB716]/40 bg-white/10 px-5 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-[#DAB716] animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-[3px] text-[#DAB716]">
                Admissions Information
              </span>
            </div>

            <h1 className="text-5xl font-black leading-[1.1] text-white sm:text-6xl lg:text-[76px]">
              Your Child's
              <span className="block text-[#DAB716]">
                Journey.
              </span>
              Our Shared
              <span className="block text-[#FF671A]">
                Commitment.
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-base leading-8 text-white/70 sm:text-lg">
              Every great future begins with an opportunity to learn.
              Discover how your child can become part of the New Star
              School learning community.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="group rounded-full bg-[#DAB716] px-8 py-4 font-black text-[#173000] shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-white"
              >
                Admission Enquiries
                <span className="ml-3 transition group-hover:translate-x-2">→</span>
              </Link>

              <Link
                to="/academics"
                className="rounded-full border border-white/40 px-8 py-4 font-bold text-white transition hover:border-[#FF671A] hover:bg-[#FF671A]"
              >
                Explore Academics
              </Link>
            </div>

          </div>

          {/* Hero Image */}
          <div className="relative mx-auto w-full max-w-[540px]">

            <div className="absolute -right-5 -top-5 h-full w-full rounded-[35px] border-2 border-[#DAB716] sm:-right-8 sm:-top-8" />

            <div className="relative overflow-hidden rounded-[35px] shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1100&q=90"
                alt="Students learning together"
                className="h-[400px] w-full object-cover sm:h-[500px]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#173000]/80 via-transparent to-transparent" />

              <div className="absolute bottom-8 left-8">
                <span className="text-xs font-black uppercase tracking-[3px] text-[#DAB716]">
                  A New Beginning
                </span>
                <h3 className="mt-2 text-3xl font-black text-white">
                  Let Them Shine.
                </h3>
              </div>
            </div>

            <div className="absolute -bottom-7 -left-5 flex h-24 w-24 flex-col items-center justify-center rounded-2xl bg-[#FF671A] text-center text-white shadow-xl sm:-left-10">
              <span className="text-3xl">✦</span>
              <span className="text-[10px] font-black uppercase tracking-wider">
                Start Growing
              </span>
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
      <section className="relative bg-[#FFFDF5] px-6 py-24 lg:py-28">

        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">

          <div className="relative">
            <span className="text-xs font-black uppercase tracking-[4px] text-[#FF671A]">
              Welcome To New Star
            </span>

            <h2 className="mt-5 text-4xl font-black leading-tight text-[#396000] sm:text-5xl">
              An Opportunity
              <span className="block text-[#FF671A]">
                To Learn.
              </span>
              A Future To Build.
            </h2>

            <div className="mt-6 h-1.5 w-20 rounded-full bg-[#DAB716]" />

            <p className="mt-8 text-base leading-8 text-gray-600">
              Choosing the right school is an important decision for every
              family. At New Star School, we aim to provide a supportive
              educational environment where students can develop their
              academic abilities and personal qualities.
            </p>

            <p className="mt-5 text-base leading-8 text-gray-600">
              We welcome parents to learn more about our school, explore
              the academic opportunities and understand the admission
              requirements before making their decision.
            </p>

            <Link
              to="/about"
              className="mt-9 inline-flex items-center gap-3 font-black text-[#396000] transition hover:gap-5 hover:text-[#FF671A]"
            >
              Learn About Our School →
            </Link>
          </div>

          <div className="relative">
            <div className="absolute -right-5 -top-5 h-full w-full rounded-[30px] bg-[#DAB716]" />

            <img
              src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1000&q=85"
              alt="Students in an educational environment"
              className="relative h-[350px] w-full rounded-[30px] object-cover shadow-xl sm:h-[440px]"
            />

            <div className="absolute -bottom-8 -left-5 rounded-2xl bg-[#396000] p-6 text-white shadow-xl sm:-left-9">
              <p className="text-xs font-bold uppercase tracking-[2px] text-[#DAB716]">
                Our Belief
              </p>
              <h3 className="mt-2 text-xl font-black">
                Every Child Can Shine.
              </h3>
            </div>
          </div>

        </div>
      </section>


      {/* ================= WHY CHOOSE US ================= */}
      <section className="relative overflow-hidden bg-[#F5F4E9] px-6 py-24">

        <div className="absolute -right-32 top-0 h-80 w-80 rounded-full bg-[#DAB716]/15 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">

          <div className="mx-auto mb-16 max-w-2xl text-center">
            <span className="text-xs font-black uppercase tracking-[4px] text-[#FF671A]">
              Why New Star School?
            </span>

            <h2 className="mt-5 text-4xl font-black text-[#396000] sm:text-5xl">
              A Place To Grow
              <span className="text-[#FF671A]"> And Succeed.</span>
            </h2>

            <p className="mt-5 leading-8 text-gray-500">
              We aim to make every student's learning experience meaningful,
              engaging and full of opportunities.
            </p>
          </div>

          <div className="grid gap-7 md:grid-cols-3">

            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="group relative overflow-hidden rounded-[28px] bg-white p-9 shadow-sm transition duration-500 hover:-translate-y-3 hover:shadow-xl"
              >
                <div className={`flex h-20 w-20 items-center justify-center rounded-[25px] ${benefit.color} text-4xl shadow-md transition duration-500 group-hover:rotate-12`}>
                  {benefit.icon}
                </div>

                <span className="absolute right-7 top-7 text-5xl font-black text-gray-100">
                  0{index + 1}
                </span>

                <h3 className="mt-8 text-2xl font-black text-[#396000]">
                  {benefit.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-gray-500">
                  {benefit.description}
                </p>

                <div className="mt-8 h-1 w-12 rounded-full bg-[#FF671A] transition-all duration-500 group-hover:w-full" />
              </div>
            ))}

          </div>
        </div>
      </section>


      {/* ================= ADMISSION PROCESS ================= */}
      <section className="relative overflow-hidden bg-white px-6 py-24 lg:py-28">

        <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-[#DAB716]/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">

          <div className="mb-16 text-center">
            <span className="text-xs font-black uppercase tracking-[4px] text-[#FF671A]">
              Simple & Clear
            </span>

            <h2 className="mt-5 text-4xl font-black text-[#396000] sm:text-5xl">
              How To Join Us?
            </h2>

            <p className="mx-auto mt-5 max-w-xl leading-8 text-gray-500">
              Follow these simple steps to learn about the admission
              procedure at New Star School.
            </p>
          </div>

          <div className="relative grid gap-7 md:grid-cols-2 lg:grid-cols-4">

            <div className="absolute left-0 right-0 top-10 hidden h-[2px] bg-[#DAB716] lg:block" />

            {admissionSteps.map((step, index) => (
              <div key={step.number} className="relative">

                <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full border-[7px] border-white bg-[#396000] text-3xl shadow-lg transition duration-300 hover:rotate-12 hover:bg-[#FF671A]">
                  {step.icon}
                </div>

                <div className="mt-7 rounded-[25px] border border-gray-100 bg-[#FAFAF7] p-7 transition duration-300 hover:-translate-y-2 hover:shadow-xl">

                  <span className="text-sm font-black tracking-[3px] text-[#FF671A]">
                    STEP {step.number}
                  </span>

                  <h3 className="mt-4 text-xl font-black text-[#396000]">
                    {step.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-gray-500">
                    {step.description}
                  </p>

                  <div className="mt-6 flex items-center justify-between">
                    <span className="text-3xl font-black text-[#DAB716]">
                      0{index + 1}
                    </span>
                    <span className="text-xl text-[#FF671A]">✦</span>
                  </div>
                </div>

              </div>
            ))}

          </div>
        </div>
      </section>


      {/* ================= ELIGIBILITY SECTION ================= */}
      <section className="relative overflow-hidden bg-[#396000] px-6 py-24">

        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full border-[55px] border-white/[0.05]" />
        <div className="absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-[#DAB716]/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">

          <div>
            <span className="text-xs font-black uppercase tracking-[4px] text-[#DAB716]">
              Finding The Right Class
            </span>

            <h2 className="mt-5 text-4xl font-black leading-tight text-white sm:text-5xl">
              Every Student
              <span className="block text-[#DAB716]">
                Has A Starting Point.
              </span>
            </h2>

            <p className="mt-7 text-base leading-8 text-white/70">
              Admission and class placement are considered according to
              the student's age, previous educational background and
              the school's admission requirements.
            </p>

            <p className="mt-5 text-base leading-8 text-white/70">
              Parents are encouraged to contact or visit the school to
              discuss suitable class placement and understand the
              requirements for their child's admission.
            </p>

            <Link
              to="/contact"
              className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#DAB716] px-8 py-4 font-black text-[#173000] transition hover:bg-[#FF671A] hover:text-white"
            >
              Discuss Eligibility →
            </Link>
          </div>

          <div className="relative rounded-[30px] border border-white/10 bg-white/[0.07] p-8 backdrop-blur-sm sm:p-10">

            <div className="absolute -right-3 -top-3 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#FF671A] text-3xl shadow-xl">
              🎓
            </div>

            <h3 className="text-2xl font-black text-white">
              Class Placement Considerations
            </h3>

            <div className="mt-8 space-y-6">

              {[
                ["01", "Student's Age", "Age-appropriate class placement."],
                ["02", "Previous Education", "Review of previous academic studies."],
                ["03", "Learning Background", "Understanding the student's educational level."],
                ["04", "School Requirements", "Meeting the relevant admission criteria."],
              ].map(([number, title, description]) => (
                <div key={number} className="flex gap-5 border-b border-white/10 pb-5 last:border-0">

                  <span className="text-2xl font-black text-[#DAB716]">
                    {number}
                  </span>

                  <div>
                    <h4 className="font-bold text-white">
                      {title}
                    </h4>
                    <p className="mt-1 text-sm text-white/50">
                      {description}
                    </p>
                  </div>

                </div>
              ))}

            </div>
          </div>
        </div>
      </section>


      {/* ================= DOCUMENTS SECTION ================= */}
      <section className="bg-[#FFFDF5] px-6 py-24">

        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">

          {/* Documents Card */}
          <div className="relative overflow-hidden rounded-[30px] bg-white p-8 shadow-xl sm:p-10">

            <div className="absolute right-0 top-0 h-3 w-32 bg-[#FF671A]" />

            <div className="flex items-center gap-5">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#DAB716] text-3xl">
                📁
              </div>

              <div>
                <span className="text-xs font-black uppercase tracking-[2px] text-[#FF671A]">
                  Be Prepared
                </span>
                <h3 className="mt-1 text-2xl font-black text-[#396000]">
                  Required Documents
                </h3>
              </div>
            </div>

            <p className="mt-6 text-sm leading-7 text-gray-500">
              Parents may be asked to provide the following documents
              during the admission process. Please confirm the exact
              requirements with the school.
            </p>

            <div className="mt-8 space-y-4">
              {documents.map((document, index) => (
                <div
                  key={document}
                  className="flex items-start gap-4 rounded-xl bg-[#F5F4E9] p-4 transition hover:bg-[#DAB716]/20"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#396000] text-sm font-black text-white">
                    ✓
                  </span>

                  <p className="text-sm font-semibold leading-6 text-gray-700">
                    {document}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-7 rounded-xl border-l-4 border-[#FF671A] bg-orange-50 p-4">
              <p className="text-xs leading-6 text-gray-600">
                <strong>Note:</strong> This is a general preparation
                checklist. The school may require additional documents
                depending on the student's circumstances.
              </p>
            </div>

          </div>

          {/* Image and Text */}
          <div>
            <span className="text-xs font-black uppercase tracking-[4px] text-[#FF671A]">
              Before You Visit
            </span>

            <h2 className="mt-5 text-4xl font-black leading-tight text-[#396000] sm:text-5xl">
              A Little Preparation
              <span className="block text-[#FF671A]">
                Goes A Long Way.
              </span>
            </h2>

            <p className="mt-7 text-base leading-8 text-gray-600">
              Having the necessary educational records and identification
              documents ready can help parents understand and complete
              the admission procedure more easily.
            </p>

            <img
              src="https://images.unsplash.com/photo-1453738773917-9c3eff1db985?auto=format&fit=crop&w=1000&q=85"
              alt="Books and educational materials"
              className="mt-8 h-[260px] w-full rounded-[25px] object-cover shadow-lg"
            />
          </div>

        </div>
      </section>


      {/* ================= IMPORTANT GUIDELINES ================= */}
      <section className="relative overflow-hidden bg-[#F5F4E9] px-6 py-24">

        <div className="relative mx-auto max-w-7xl">

          <div className="mb-14 text-center">
            <span className="text-xs font-black uppercase tracking-[4px] text-[#FF671A]">
              For Parents & Guardians
            </span>

            <h2 className="mt-5 text-4xl font-black text-[#396000] sm:text-5xl">
              Important Guidelines
            </h2>

            <p className="mx-auto mt-5 max-w-xl leading-8 text-gray-500">
              A few important points to understand before proceeding
              with your child's admission.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">

            {guidelines.map((item, index) => (
              <div
                key={item.title}
                className="group flex gap-5 rounded-[25px] bg-white p-7 transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-9"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#DAB716] text-xl font-black text-[#396000] transition group-hover:bg-[#FF671A] group-hover:text-white">
                  0{index + 1}
                </div>

                <div>
                  <h3 className="text-xl font-black text-[#396000]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-gray-500">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>


      {/* ================= FINAL CTA ================= */}
      <section className="relative overflow-hidden bg-[#FF671A] px-6 py-24">

        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full border-[60px] border-white/10" />
        <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-[#FA3518] blur-3xl" />

        <div className="relative mx-auto max-w-5xl text-center">

          <span className="text-xs font-black uppercase tracking-[4px] text-white/75">
            Take The Next Step
          </span>

          <h2 className="mt-6 text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
            Let's Start Something
            <span className="block text-[#DAB716]">
              Wonderful Together.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-white/80">
            Have questions about admissions, class placement or school
            requirements? Our school team is ready to guide you through
            the next steps.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="rounded-full bg-[#396000] px-9 py-4 font-black text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-[#173000]"
            >
              Contact Our School →
            </Link>

            <Link
              to="/academics"
              className="rounded-full border-2 border-white/70 px-9 py-4 font-bold text-white transition hover:bg-white hover:text-[#FF671A]"
            >
              Explore Programs
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}
