import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          Hello! My name is Baileigh and I enjoy 
          creating things for the web.
          My interest in web development started back 
          as far as I can remember. Being younger in the age of social media 
          definitely fueled my fire of always wanting to create websites for
          my little corner of the internet and the people in it. 

          I never thought its somthing that i'd find myself taking serious
        </p>

        <br />

        <p className="text-xl">
          I thought I would spend my entire professional life being a teacher 👩‍🏫 , but now i've become 
          a full stack software engineer. The difference is drastic between the two but if there's anything
          amazing about programming, it is the ability to create anything that you have been idealizing. It's 
          challenging, fulfilling, and (at times) fun.
        </p>
      </div>
    </div>
  );
};

export default About;