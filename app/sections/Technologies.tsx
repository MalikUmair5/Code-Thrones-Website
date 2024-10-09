"use client";
import Image from "next/image";
import codoLogo from "../../assets/codeLogo.png";
import KotlinLogo from "../../assets/KotlinLogo.png";
import javaLogo from "../../assets/javaLogo.png";
import NextLogo from "../../assets/NextLogo.png";
import reactLogo from "../../assets/reactLogo.jpg";
import andriodStudioLogo from "../../assets/andriodStudioLogo.png";
import { motion } from "framer-motion";

const Technologies = () => {
  return (
    <div className="overflow-hidden w-full [mask-image:linear-gradient(to_right,transparent,black,transparent)] mt-10">
      {" "}
      {/* Container for scrolling logos */}
      <motion.div
        className="flex gap-10 flex-none items-center justify-around w-[200%] pr-10" // Twice the width for seamless animation
        animate={{
          translateX: "-50%", // Scroll the entire width of the container (100%)
        }}
        transition={{
          duration: 10, // Adjust speed (10 seconds)
          repeat: Infinity, // Infinite repeat
          ease: "linear", // Smooth linear animation for continuous motion
        }}
      >
        {/* First set of logos */}
        <Image
          className="w-[120px] rounded-md"
          src={codoLogo}
          alt="Code Logo"
        />
        <Image
          className="w-[220px] rounded-md"
          src={KotlinLogo}
          alt="Kotlin Logo"
        />
        <Image
          className="w-[120px] rounded-md"
          src={javaLogo}
          alt="Java Logo"
        />
        <Image
          className="w-[120px] rounded-md"
          src={NextLogo}
          alt="Next Logo"
        />
        <Image
          className="w-[120px] rounded-md"
          src={reactLogo}
          alt="React Logo"
        />
        <Image
          className="w-[120px] rounded-md"
          src={andriodStudioLogo}
          alt="Android Studio Logo"
        />

        {/* Duplicate set of logos for seamless infinite animation */}
        <Image
          className="w-[120px] rounded-md"
          src={codoLogo}
          alt="Code Logo"
        />
        <Image
          className="w-[220px] rounded-md"
          src={KotlinLogo}
          alt="Kotlin Logo"
        />
        <Image
          className="w-[120px] rounded-md"
          src={javaLogo}
          alt="Java Logo"
        />
        <Image
          className="w-[120px] rounded-md"
          src={NextLogo}
          alt="Next Logo"
        />
        <Image
          className="w-[120px] rounded-md"
          src={reactLogo}
          alt="React Logo"
        />
        <Image
          className="w-[120px] rounded-md"
          src={andriodStudioLogo}
          alt="Android Studio Logo"
        />
      </motion.div>
    </div>
  );
};

export default Technologies;
