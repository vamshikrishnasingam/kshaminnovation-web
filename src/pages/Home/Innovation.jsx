/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
function Innovation() {
  const [sectionRef, sectionInView] = useInView();
  const [visionRef, visionInView] = useInView();
  const [descriptionRef, descriptionInView] = useInView();
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { duration: 1.5 },
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
  const itemVariants1 = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 2,
      transition: { duration: 2, delay: 0 },
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
    <div>
      <motion.section
        className="overflow-hidden bg-white dark:bg-dark m-12 -mb-40"
        variants={itemVariants}
        initial="hidden"
        animate={visionInView ? "visible" : "hidden"}
        ref={visionRef}
      >
        <motion.div
          className="container mx-auto"
          variants={itemVariants}
          initial="hidden"
          animate={visionInView ? "visible" : "hidden"}
          ref={visionRef}
        >
          <span className="mt-8 block text-5xl font-bold text-dark">
            Why Able Innovation Exists
          </span>
          <div className="flex flex-wrap items-center justify-between">
            <div className="w-full lg:w-6/12">
              <video
                className="w-full h-auto max-w-full border border-gray-200 rounded-lg dark:border-gray-700"
                controls
                autoPlay
                loop={true}
              >
                <source src="media/vhome1.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="w-full  m-12 lg:w-1/2 xl:w-5/12">
              <div className="lg:mt-0">
                <div>
                  <ul className="list-disc text-3xl m-4 text-left">
                    <li className="m-7">
                      Globally, there are over 680 million people who are deaf,
                      hard of hearing, mute, or blind.
                    </li>
                    <li className="m-7">
                      India alone is home to more than 80 million individuals
                      belonging to these diverse disability groups.
                    </li>
                    <li className="m-7">
                      Sadly, an estimated 90% of these individuals lack access
                      to education and often face poverty.
                    </li>
                    <li className="m-7">
                      For these individuals, accessing essential information,
                      education, and communication channels remains a
                      significant challenge.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.section>
      <motion.section
        className="overflow-hidden mt-40 bg-white dark:bg-dark animate__animated animate__fadeIn"
        variants={itemVariants}
        initial="hidden"
        animate={sectionInView ? "visible" : "hidden"}
        ref={sectionRef}
      >
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center justify-between">
            <div className="w-full  m-12 lg:w-1/2 xl:w-5/12">
              <div className="lg:mt-0">
                <span className="block mb-4 px-3 text-6xl font-bold text-left text-dark">
                  Our Innovation
                </span>
                <div className="relative rounded-lg bg-yellow-400 p-8 shadow-lg dark:bg-dark-2 sm:p-12">
                  <span className="mb-4 text-5xl font-bold text-dark">"</span>
                  <p className="mb-5 text-xl font-bold text-white text-left dark:text-white-6">
                    Able glasses aims to provide smart aid glasses for Deaf,
                    Mute and Blind.
                  </p>
                  <p className="mb-5 text-xl font-bold text-white text-left dark:text-white-6">
                    The Able glasses uses patented bone conduction to enable
                    Deaf to Listen, interpret signs & acts as voice assist tool
                    for the mute, the sensory audio-based information enables
                    the blind to visualize.
                  </p>
                  <p className="mb-5 text-xl font-bold text-white text-left dark:text-white-6">
                    The open ear design makes able glasses a complete smart
                    glasses device for everyone
                  </p>
                  <span className="mb-4 mx-auto text-5xl font-bold text-dark">
                    "
                  </span>
                </div>
              </div>
              <div className="flex flex-wrap items-center justify-center">
                <div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      to="/aboutus"
                      className="m-10 bg-yellow-400 inline-flex items-center justify-center py-3 text-3xl text-center text-white rounded-md  hover:bg-gray-400 lg:px-7 animate__animated animate__bounceIn"
                    >
                      About Us
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>
            <div className="w-full px-4 lg:w-6/12">
              <div className="flex items-center sm:-mx-4">
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="py-3 sm:py-4">
                    <div className="-mt-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                      <div className="rounded-2xl bg-gray-900 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                        <motion.img
                          className="ml-8 mb-8 rounded-circle"
                          src="media/img1.png"
                          width={100}
                          height={100}
                        />
                        <div className="mx-auto max-w-xs px-8">
                          <p className="text-bold text-3xl font-semibold text-yellow-600">
                            Glasses for Deaf & Hard of hearing
                          </p>
                          <div className="text-white">
                            <ul className="list-disc text-md m-4 text-left">
                              <li className="m-2">
                                Patented Dome Bone Conduction Transducer
                              </li>
                              <li className="m-2">Arrays of Microphones</li>
                              <li className="m-2">Bluetooth & Rechargeable</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="py-3 sm:py-4 ">
                    <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                      <div className="rounded-2xl bg-gray-900 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                        <div className="mx-auto max-w-xs px-8">
                          <motion.img
                            className="mb-8 rounded-circle"
                            src="media/img3.png"
                            width={100}
                            height={100}
                          />
                          <p className="text-bold text-3xl font-semibold text-yellow-600">
                            Glasses for Mute
                          </p>
                          <div className="text-white">
                            <ul className="list-disc text-md m-4 text-left">
                              <li className="m-2">
                                Real time sign language to audio conversion
                              </li>
                              <li className="m-2">
                                Pairs of side camera & speaker.
                              </li>
                              <li className="m-2">Offline processing</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full h-full px-3 sm:px-4 xl:w-1/2 ">
                  <div className="relative z-10 my-10">
                    <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                      <div className="rounded-2xl bg-gray-900 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                        <div className="mx-auto max-w-xs px-8">
                          <motion.img
                            className="mb-8 rounded-circle"
                            src="media/img2.png"
                            width={100}
                            height={100}
                          />
                          <p className="text-bold text-3xl font-semibold text-yellow-600">
                            Glasses for Blind
                          </p>
                          <div className="text-white">
                            <ul className="list-disc text-md m-4 text-left">
                              <li className="m-2">
                                Objects & Face Recognition
                              </li>
                              <li className="m-2">1080p front camera</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="py-3 sm:py-4">
                    <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                      <div className="rounded-2xl bg-gray-900 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                        <div className="mx-auto max-w-xs px-8">
                          <motion.img
                            className="ml-8 rounded-circle"
                            src="media/img4.png"
                            width={100}
                            height={100}
                          />
                          <p className="text-bold text-3xl font-semibold text-yellow-600">
                            Smart Case
                          </p>
                          <div className="text-white">
                            <ul className="list-disc text-md m-4 text-left">
                              <li className="m-2">Day long battery backup</li>
                              <li className="m-2">Desktop computer mode.</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
      <motion.div
        className="flex flex-wrap items-center justify-between"
        variants={itemVariants}
        initial="hidden"
        animate={descriptionInView ? "visible" : "hidden"}
        ref={descriptionRef}
      >
        <div className="w-3/4 lg:w-3/4 mx-auto m-7 mb-40">
          <span className="m-12 block text-7xl font-bold text-dark">
            How Able Glasses Work
          </span>
          <video
            className="w-full h-auto max-w-full border border-gray-200 dark:border-gray-700"
            controls
            autoPlay
            loop={true}
          >
            <source src="media/vhome2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </motion.div>
    </div>
  );
}

export default Innovation;
