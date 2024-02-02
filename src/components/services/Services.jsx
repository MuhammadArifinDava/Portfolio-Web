/* eslint-disable no-unused-vars */
import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 6,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I can focus on your brand&rsquo;s branding
          <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{color:"orange"}}>My</motion.b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{color:"orange"}}>For Your</motion.b> Business.
          </h1>
          <button>WHAT I CAN DO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Social Media Editing</h2>
          <p>
            Make your own Business interesting by some of my editing touch. C&rsquo;mon, people maybe skip your account if your account feel flat. Use some of my editing touch so That will make your Social Media account be growth !.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>VideoGraphy Editing </h2>
          <p>
            I&rsquo;m sure that boring video with flat editing was make yours viewers feel bored. You need to add some editing to make your viewers feeling curious until the video end.   Don&rsquo;t be shy to contact me below :D
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Website Programming</h2>
          <p>
            You didn&rsquo;t have any website for your company?? and confuse how to publish your company to people?? Or want to make your shop/ store own website with online programming to make the purchase easier? Contact me below from email or instagram, feel happy to work with you.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Invitation Website</h2>
          <p>
          Do you have any help to make Wedding invitation? Birthday invitation ? Event invitation ? or make about your own websit ? Yeah, you&rsquo;ve came to the right person. Contact me below from email or instagram, feel happy to work with you.
          </p>
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
