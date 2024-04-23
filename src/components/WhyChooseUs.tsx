"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const content = [
  {
    title: "Interactive Music Lessons",
    description:
      "Join our interactive music lessons and engage with our experienced instructors in real time. Collaborate with fellow students, explore new musical concepts, and enhance your skills while having fun. With our platform, you can elevate your musical journey and unleash your potential.",
  },
  {
    title: "Live Performance Workshops",
    description:
      "Participate in our live performance workshops and experience music in action. Witness the magic of live music-making, learn performance techniques, and hone your stage presence under the guidance of seasoned musicians. Let your passion for music thrive with our immersive workshops.",
  },
  {
    title: "Mastering Musical Skills",
    description:
      "Embark on a journey of mastering musical skills with our comprehensive curriculum. Dive deep into theory, technique, and performance, guided by our dedicated instructors. Experience the joy of progress and unleash your creativity in a supportive learning environment.",
  },
  {
    title: "Exploring Music Theory",
    description:
      "Delve into the fascinating world of music theory and expand your understanding of musical concepts. From harmony to composition, our courses offer a comprehensive exploration of music theory, tailored to musicians of all levels. Join us and discover the secrets behind the music.",
  },
];

export function WhyChooseUs() {
  return (
    <div>
      <StickyScroll content={content} />
    </div>
  );
}
