import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import WorkRoom from "./WorkRoom";
import { Suspense } from "react";
import CanvasLoader from "./CanvasLoader";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <section className="min-h-screen w-full flex flex-col relative">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <motion.p
          className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Typewriter
            words={["Hello, I am Ridho 👋"]}
            loop={false}
            cursor
            cursorStyle="|"
            typeSpeed={50}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </motion.p>

        <motion.p
          className="hero_tag text-gray_gradient text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Fullstack Javascript Developer
        </motion.p>
      </div>

      <div className="w-full h-full mt-10 absolute inset-0">
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />
            <WorkRoom
              scale={0.05}
              position={[0, 0, 0]}
              rotation={[0, 280, 0]}
            />
            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={1} />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Hero;
