import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function AboutUs() {
  const [sectionRef, sectionInView] = useInView();
  const [visionRef, visionInView] = useInView();
  const [descriptionRef, descriptionInView] = useInView();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 1.5 },
    },
  };
  const popInVariant = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: { duration: 1.5, ease: "easeOut" },
    },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, delay: 0.5 },
    },
  };
  const fadeInVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 1 },
    },
  };
  return (
    <motion.div initial="hidden" animate="visible" variants={popInVariant}>
      <motion.section
        className="overflow-hidden lg:pb-[90px] bg-white dark:bg-dark animate__animated animate__fadeIn"
        variants={itemVariants}
        initial="hidden"
        animate={sectionInView ? "visible" : "hidden"}
        ref={sectionRef}
      >
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center justify-between">
            <div className="w-full  m-12 lg:w-1/2 xl:w-5/12">
              <div className="lg:mt-0">
                <span className="block mb-4 text-5xl font-bold text-dark">
                  What We Do
                </span>
                <div className="relative rounded-lg bg-gray-700 p-8 shadow-lg dark:bg-dark-2 sm:p-12">
                  <span className="mb-4 text-5xl font-bold text-dark">"</span>
                  <p className="mb-5 text-xl font-bold text-white dark:text-white-6">
                    We at Ksham Innovation work to provide smart aid glasses for
                    Deaf, Mute and Blind. The Able glasses uses patented bone
                    conduction to enable Deaf to Listen, interpret sign language
                    for mute, the sensory audio-based information enables the
                    blind to visualize. The open ear design makes able glasses a
                    complete smart glasses device for everyone.
                  </p>
                  <span className="mb-4 mx-auto text-5xl font-bold text-dark">
                    "
                  </span>
                </div>
              </div>
              <p className="mt-20 text-4xl font-bold text-dark dark:text-white-6">
                Our mission is to make Information, Education & Entertainment
                accessible through Smart Wearable Solutions.
              </p>
            </div>
            <div className="w-full px-4 lg:w-6/12">
              <div className="flex items-center sm:-mx-4">
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="py-3 sm:py-4">
                    <img
                      src="media/about1.png"
                      alt=""
                      className="w-full rounded-2xl"
                    />
                  </div>
                  <div className="py-3 sm:py-4">
                    <img
                      src="media/about2.png"
                      alt=""
                      className="w-full rounded-2xl"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="relative z-10 my-4">
                    <img
                      src="media/about3.png"
                      alt=""
                      className="w-full rounded-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
      {/* About Us section */}
      <motion.div
        className="bg-gray-100 py-12 m-12 -mt-5"
        variants={itemVariants}
        initial="hidden"
        animate={visionInView ? "visible" : "hidden"}
        ref={visionRef}
      >
        <div className="container mx-auto p-10">
          <h2 className="text-3xl font-bold mb-8">Our Vision</h2>
          <p className="text-2xl">
            <b>"Empowering the World without Communication Barrier" </b>Our
            vision is to leverage cutting-edge technology to empower individuals
            with hearing, speech, or visual impairments, fostering a more
            inclusive and accessible world. We envision a future where our smart
            glasses become a bridge to communication, independence, and endless
            possibilities, allowing everyone, regardless of their abilities, to
            connect, express themselves, and thrive in our interconnected
            society.
          </p>
        </div>
      </motion.div>
      {/* Hero section */}
      <motion.div
        className="bg-gray-700 text-white py-6 m-12 -mt-5"
        variants={itemVariants}
        initial="hidden"
        animate={descriptionInView ? "visible" : "hidden"}
        ref={descriptionRef}
      >
        <div className="container p-10 border-spacing-0 rounded">
          <h2 className="text-3xl font-bold mb-8 text-start">Description</h2>
          <p className="text-2xl mb-8">
            At Ksham Innovation, we break down barriers and make technology
            accessible to everyone. We believe that everyone deserves the
            opportunity to hear, speak, and navigate the world in real-time,
            regardless of having hearing, speech, or visual impairment.
          </p>
          <p className="text-2xl mb-8">
            Our technology is designed to empower those with disabilities,
            allowing them to learn, communicate & perform their daily chores
            with greater ease and independence. But our work doesn't stop there.
            We dream & envision creating a smart and safer alternative to
            traditional earbuds and headphones, extending the age during which
            people may face difficulties in hearing.
          </p>
          <p className="text-2xl mb-8">
            <p className="text-2xl mb-8">
              Our technology is designed to empower those with disabilities,
              allowing them to learn, communicate & perform their daily chores
              with greater ease and independence. But our work doesn't stop
              there. We dream & envision creating a smart and safer alternative
              to traditional earbuds and headphones, extending the age during
              which people may face difficulties in hearing.
            </p>
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default AboutUs;
