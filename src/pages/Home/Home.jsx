import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import Innovation from "./Innovation";

function Home() {
  const [sectionRef, sectionInView] = useInView();
  const [imageRef, imageInView] = useInView();

  const itemVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, delay: 0.3 },
    },
  };

  const itemVariantsFadeIn = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 0,
      transition: { duration: 2, delay: -1 },
    },
  };
  const flipInVariant = {
    hidden: { opacity: 0, rotateY: -180 },
    visible: {
      opacity: 1,
      rotateY: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="overflow-hidden bg-white mb-10">
      <div className="relative bg-white dark:bg-dark pt-8" ref={sectionRef}>
        <div className="lg:w-full sm:w-full">
          <motion.div 
            className="flex flex-wrap items-center m-10 animate__animated animate__fadeIn"
            variants={itemVariants}
            initial="hidden"
            animate={sectionInView ? "visible" : "hidden"}
          >
            <div className="w-full lg:w-5/12 animate__animated animate__slideInLeft">
              <div className="lg:ml-40 hero-content">
                <h1 className="text-4xl font-bold !leading-[1.208] text-dark dark:text-white sm:text-[42px] lg:text-[40px] xl:text-6xl">
                  World's 1st
                  <br />
                  Smart Aid <br />
                  Glasses for
                </h1>
                <p className="pt-5 w-full mb-8 xl:text-5xl text-base text-body-color dark:text-dark-6">
                  Deaf⭐Mute⭐Blind
                </p>
                <ul className="flex flex-wrap items-center">
                  <li>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link
                        to="/contactus"
                        className="bg-gray-700 inline-flex items-center justify-center px-6 py-3 text-3xl text-center text-white rounded-md  hover:bg-gray-400 lg:px-7 ml-20 animate__animated animate__bounceIn"
                      >
                        Get Early Access
                      </Link>
                    </motion.div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="hidden px-4 lg:block lg:w-1/12"></div>
            <div
              className="w-full px-4 lg:w-6/12 animate__animated animate__slideInRight"
              variants={itemVariants}
              initial="hidden"
              animate={imageInView ? "visible" : "hidden"}
              ref={imageRef}
            >
              <div class="grid gap-4 col-start-1 col-end-3 row-start-1 sm:mb-6 w-full p-4  lg:gap-6 lg:col-start-2 lg:row-end-6 lg:row-span-6 lg:mb-0">
                <motion.img
                  src="media/home.jpg"
                  alt=""
                  typeof="image"
                  class="w-full h-100 object-cover rounded-lg sm:h-52 sm:col-span-2 lg:col-span-full"
                  loading="lazy"
                  variants={itemVariants}
                  initial="hidden"
                  animate={imageInView ? "visible" : "hidden"}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <Innovation />
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.h2
            className="text-center text-7xl font-bold leading-8 text-gray-900"
            variants={itemVariantsFadeIn}
            initial="hidden"
            animate={sectionInView ? "visible" : "hidden"}
          >
            Our Supporters
          </motion.h2>
          <motion.div
            className="mx-auto mt-20 grid max-w-lg grid-cols-3 items-center gap-x-8 gap-y-20 sm:max-w-xl sm:grid-cols-4  md:girds-col-2 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-3"
            variants={itemVariantsFadeIn}
            initial="hidden"
            animate={sectionInView ? "visible" : "hidden"}
          >
            <motion.img
              className="col-span-2 max-h-40 w-full object-contain lg:col-span-1"
              src="media/support1.png"
              alt="Transistor"
              width={300}
              height={100}
            />
            <motion.img
              className="col-span-2 max-h-20 w-full object-contain lg:col-span-1"
              src="media/support2.png"
              alt="Reform"
              width={200}
              height={100}
            />
            <motion.img
              className="col-span-2 max-h-20 w-full object-contain lg:col-span-1"
              src="media/support3.png"
              alt="Tuple"
              width={200}
              height={100}
            />
            <motion.img
              className="lg:mx-60 col-span-2 max-h-20 w-full object-contain sm:col-start-auto lg:col-span-1"
              src="media/support4.png"
              alt="SavvyCal"
              width={400}
              height={100}
            />
            <motion.img
              className="lg:mx-60 col-span-2 col-start-2 max-h-40 w-full object-contain sm:col-start-auto lg:col-span-1"
              src="media/support5.png"
              alt="Statamic"
              width={400}
              height={100}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Home;
