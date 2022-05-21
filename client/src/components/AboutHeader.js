import React from "react";

function AboutHeader() {
  return (
    <section className="h-screen flex flex-col justify-center gap-4 p-10">
      <h1
        style={{ fontFamily: "Josefin Sans, arial" }}
        className="text-7xl tracking-widest"
      >
        HELLO THERE!
        <br />
        MY NAME IS
        <br />
        <span>ANDREW PATASIK</span>
      </h1>
      <h3
        style={{ fontFamily: "Montserrat, sans-serif" }}
        className="text-2xl text-gray-400"
      >
        I'm a Fullstack Developer with Computer Science degree from Universitas
        Esa Unggul, Jakarta.
        <br />
        I'm focusing on write clean code with test-first approach in my
        development process, where I<br />
        use MERN stack as my main tools to develop website and web application.
      </h3>
    </section>
  );
}

export default AboutHeader;
