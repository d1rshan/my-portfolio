import React from "react";
import NavBar from "./components/NavBar";
import Marquee from "react-fast-marquee";

export default function App() {
  return (
    <main className="h-screen">
      <NavBar />
      <HeroSection />
      <About />
      <Skills />
    </main>
  );
}

function Title({ value }) {
  return (
    <h2 className="text-5xl md:text-7xl lg:text-8xl mb-5 md:mb-10 font-medium tracking-tighter">
      {value}
    </h2>
  );
}

function HeroSection() {
  return (
    <div className="h-full w-full bg-[url('src/assets/background.png')] bg-cover bg-center  flex flex-col justify-end  px-5">
      <h1 className="hidden lg:block text-[14vw] font-semibold tracking-[-0.08em] leading-none">
        Darshan Paccha
      </h1>
      <h1 className="lg:hidden text-[23.3vw] font-semibold tracking-[-0.08em] leading-none">
        Darshan <br />
        Paccha
      </h1>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="scroll-mt-30">
      <div className="mt-70 flex flex-col justify-center items-center px-5 md:px-10 lg:px-20 xl:px-40 ">
        <Title value={"About me"} />
        <p className="text-[18px] sm:text-2xl  text-gray-800 text-left bg-gray-50 p-10 rounded-2xl">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque
          dolor rem voluptas enim. Sint incidunt eos dolorum a voluptates totam
          necessitatibus id modi tempore quod et, quidem accusantium dolores
          nostrum labore quibusdam pariatur sed nisi animi odio consectetur
          deserunt! Eaque, velit? Alias dolore accusamus magni porro tenetur
          corporis, suscipit quam ut odio eum mollitia ad perspiciatis incidunt
          corrupti deserunt libero modi nisi natus commodi fugit. Mollitia,
          voluptatibus quae atque corrupti eos hic quasi vero? Similique fuga,
          saepe et culpa libero hic quidem veniam sunt dolorum quasi totam
          voluptatem? Maiores fuga impedit accusantium tenetur asperiores minus
          possimus, sequi quam qui optio? Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Quibusdam, corporis! Lorem ipsum dolor
          sit amet consectetur adipisicing elit. A quam quas iusto, ratione
          laboriosam possimus exercitationem molestiae quaerat maxime
          distinctio!
        </p>
      </div>
    </section>
  );
}

function Skills() {
  let my_skills = [
    "Dart",
    "Flutter",
    "Python",
    "React",
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "Firebase",
    "Java",
    "C",
    "C++",
    "Next.js",
  ];
  return (
    <section id="skills" className="scroll-mt-30">
      <div className="mt-35 flex flex-col justify-center items-center px-5  md:px-10 lg:px-20 xl:px-40">
        <Title value={"My skills"} />
        {/* SKills Container */}

        <Marquee className="mb-5" pauseOnHover={true} speed={30}>
          {my_skills.map((eachValue, index) => (
            <SkillCard value={eachValue} />
          ))}
        </Marquee>

        <Marquee direction="right" pauseOnHover={true} speed={30}>
          {my_skills.map((eachValue, index) => (
            <SkillCard value={eachValue} />
          ))}
        </Marquee>

        {/* <div className="flex flex-wrap gap-2 bg-gray-50 p-10 rounded-2xl"></div> */}
      </div>
    </section>
  );
}

function SkillCard({ value }) {
  return (
    <div className="bg-black py-3 px-5 rounded-[0.8em] text-center cursor-pointer mx-1 ">
      <span className="text-[18px] sm:text-2xl text-gray-400 ">{value}</span>
    </div>
  );
}
