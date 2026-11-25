
import React, { useState } from "react";
import { FaArrowRight, FaExpand, FaImages } from "react-icons/fa";

const galleryItems = [
  {
    title: "Learning Together",
    category: "Classroom",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1000",
    size: "large",
  },
  {
    title: "Sports Day",
    category: "Sports",
    image: "https://images.unsplash.com/photo-1526676037777-05a232554f77?w=800",
  },
  {
    title: "Creative Minds",
    category: "Activities",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800",
  },
  {
    title: "Science in Action",
    category: "Classroom",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800",
  },
  {
    title: "School Memories",
    category: "Events",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800",
    size: "large",
  },
  {
    title: "Outdoor Learning",
    category: "Activities",
    image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800",
  },
  {
    title: "Future Leaders",
    category: "Events",
    image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800",
  },
  {
    title: "Team Spirit",
    category: "Sports",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800",
  },
];

const categories = ["All", "Classroom", "Sports", "Activities", "Events"];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredItems =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter(
          (item) => item.category === activeCategory
        );

  return (
    <main className="bg-white text-black overflow-hidden">

      {/* HERO SECTION */}
      <section className="relative bg-[#396000] text-white px-6 py-24 md:py-32 overflow-hidden">

        <div className="absolute -right-20 -top-24 w-96 h-96 rounded-full border-[45px] border-white/10" />
        <div className="absolute -left-20 -bottom-32 w-80 h-80 rounded-full bg-[#FF671A]/20 blur-3xl" />

        <div className="max-w-7xl mx-auto relative z-10">

          <span className="inline-flex items-center gap-2 bg-[#DAB716] text-[#396000] px-5 py-2 rounded-full font-bold text-sm">
            <FaImages /> OUR SCHOOL MEMORIES
          </span>

          <div className="grid md:grid-cols-2 gap-10 items-end mt-8">

            <h1 className="text-5xl md:text-7xl font-black leading-tight">
              Moments That
              <span className="text-[#DAB716] block">
                Tell Our Story.
              </span>
            </h1>

            <div>
              <p className="text-gray-200 text-lg leading-8 max-w-lg">
                Every picture holds a memory, every moment tells a story.
                Explore the exciting world of New Star School through
                our collection of unforgettable experiences.
              </p>

              <a
                href="#gallery"
                className="inline-flex items-center gap-3 mt-7 bg-[#FF671A] hover:bg-[#FA3518] px-7 py-4 rounded-full font-bold transition duration-300 hover:-translate-y-1"
              >
                Explore Gallery <FaArrowRight />
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-8">

          <div className="max-w-2xl">
            <span className="text-[#FF671A] font-bold uppercase tracking-widest text-sm">
              A Glimpse Into Our World
            </span>

            <h2 className="text-4xl md:text-5xl font-black text-[#396000] mt-4">
              Life At New Star
            </h2>

            <p className="text-gray-600 leading-8 mt-5">
              From exciting classroom activities to memorable celebrations,
              our school is full of opportunities to learn, explore,
              create, and grow.
            </p>
          </div>

          <div className="bg-[#DAB716] p-6 rounded-2xl min-w-48">
            <FaImages className="text-[#396000] text-3xl mb-3" />
            <h3 className="text-2xl font-black text-[#396000]">
              Beautiful
            </h3>
            <p className="text-[#396000] font-medium">
              Memories, Together.
            </p>
          </div>

        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="bg-[#F7F8F2] py-20 px-6">

        <div className="max-w-7xl mx-auto">

          {/* CATEGORY FILTER */}
          <div className="flex flex-wrap gap-3 justify-center mb-14">

            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full font-bold text-sm transition duration-300 ${
                  activeCategory === category
                    ? "bg-[#396000] text-white shadow-lg"
                    : "bg-white text-[#396000] hover:bg-[#DAB716]"
                }`}
              >
                {category}
              </button>
            ))}

          </div>

          {/* IMAGE GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {filteredItems.map((item, index) => (
              <div
                key={item.title}
                className={`group relative rounded-3xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500 ${
                  item.size === "large" && activeCategory === "All"
                    ? "lg:col-span-2"
                    : ""
                }`}
                style={{ minHeight: "300px" }}
                onClick={() => setSelectedImage(item)}
              >

                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-80 group-hover:opacity-100 transition duration-500" />

                <div className="absolute top-5 left-5">
                  <span className="bg-[#DAB716] text-[#396000] px-4 py-2 rounded-full text-xs font-black uppercase">
                    {item.category}
                  </span>
                </div>

                <div className="absolute bottom-0 left-0 w-full p-7 flex justify-between items-end">

                  <div>
                    <h3 className="text-white text-2xl md:text-3xl font-black">
                      {item.title}
                    </h3>
                    <p className="text-gray-200 text-sm mt-2">
                      A special moment at New Star School
                    </p>
                  </div>

                  <div className="bg-[#FF671A] text-white w-12 h-12 rounded-full flex items-center justify-center group-hover:bg-[#DAB716] group-hover:text-[#396000] transition duration-300 shrink-0">
                    <FaExpand />
                  </div>

                </div>

              </div>
            ))}

          </div>

          {filteredItems.length === 0 && (
            <p className="text-center text-gray-500 py-10">
              No images found.
            </p>
          )}

        </div>
      </section>

      {/* FEATURE SECTION */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1529390079861-591de354faf5?w=1000"
              alt="Students learning together"
              className="w-full h-[400px] object-cover rounded-[35px]"
            />

            <div className="absolute -bottom-6 -right-3 md:-right-6 bg-[#FF671A] text-white p-6 rounded-2xl shadow-xl">
              <p className="text-3xl font-black">Learn.</p>
              <p className="text-3xl font-black text-[#DAB716]">Grow.</p>
              <p className="text-3xl font-black">Shine.</p>
            </div>
          </div>

          <div>
            <span className="text-[#FF671A] uppercase tracking-widest font-bold text-sm">
              Beyond The Classroom
            </span>

            <h2 className="text-4xl md:text-5xl font-black text-[#396000] mt-4 leading-tight">
              Education Is An Adventure.
            </h2>

            <p className="text-gray-600 leading-8 mt-6">
              We believe that the best learning experiences happen
              everywhere. Through sports, creative activities, teamwork,
              and special events, our students discover their talents
              and build confidence.
            </p>

            <a
              href="/contact"
              className="inline-flex items-center gap-3 bg-[#396000] hover:bg-[#FF671A] text-white px-8 py-4 rounded-full font-bold mt-8 transition duration-300"
            >
              Discover Our School <FaArrowRight />
            </a>
          </div>

        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="bg-[#DAB716] py-20 px-6 text-center">

        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-[#396000]">
            Every Day Creates A New Memory!
          </h2>

          <p className="text-[#396000] mt-5 text-lg">
            Be a part of the New Star School family and create
            your own unforgettable memories.
          </p>

          <a
            href="/admissions"
            className="inline-flex items-center gap-3 mt-8 bg-[#396000] hover:bg-[#FF671A] text-white px-9 py-4 rounded-full font-bold transition duration-300"
          >
            Join Our School <FaArrowRight />
          </a>
        </div>

      </section>

      {/* IMAGE LIGHTBOX */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-5"
          onClick={() => setSelectedImage(null)}
        >

          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-7 text-white text-4xl hover:text-[#DAB716]"
            aria-label="Close image"
          >
            &times;
          </button>

          <div
            className="max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="w-full max-h-[75vh] object-contain rounded-2xl"
            />

            <h3 className="text-white text-center text-2xl font-bold mt-5">
              {selectedImage.title}
            </h3>

          </div>
        </div>
      )}

    </main>
  );
};

export default Gallery;
