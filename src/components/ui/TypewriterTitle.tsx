"use client";
import React from "react";
import Typewriter from "typewriter-effect";

type Props = {};

const TypewriterTitle = (props: Props) => {
    return (
      <Typewriter
        options={{
          loop: true,
        }}
        onInit={(typewriter) => {
          typewriter
            .typeString("Speedy Scribbles")
            .pauseFor(1000)
            .deleteAll()
            .typeString("AI-Driven Inspiration")
            .start();
        }}
      />
    );
  };

  export default TypewriterTitle;
