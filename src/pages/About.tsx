import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Row, Col } from "antd";

const pointPos = [
  { x: -90, y: -20 },
  { x: 35, y: -25 },
  { x: -120, y: 125 },
  { x: -100, y: 165 },
  { x: 95, y: -5 },
  { x: 90, y: 160, opacity: 0.2 },
  { x: 110, y: 50 },
];

interface AboutItem {
  title: string;
  content: string;
  src: string;
  color: string;
  shadowColor: string;
  link: string;
}

interface AboutProps {
  id?: string;
  isMobile?: boolean;
  dataSource: {
    title: string;
    children: AboutItem[];
  };
}

const About: React.FC<AboutProps> = ({ isMobile, dataSource, ...props }) => {
  const [hoverNum, setHoverNum] = useState<number | null>(null);

  const getEnter = (index: number) => {
    const r = Math.random() * 2 - 1;
    const y = Math.random() * 10 + 5;
    const delay = Math.round(Math.random() * (index * 50));

    return {
      initial: { opacity: 0, x: 0, y: 30 },
      animate: {
        opacity: 0.4,
        ...pointPos[index],
        transition: {
          delay: delay / 1000,
          duration: 0.3,
          ease: "easeOut",
        },
      },
      whileHover: {
        y: r > 0 ? `+=${y}` : `-=${y}`,
        transition: {
          duration: 1 + Math.random() * 2,
          repeat: Infinity,
          repeatType: "reverse" as const,
        },
      },
    };
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="page-wrapper page1" {...props}>
      <div className="page">
        <div className="title-wrapper">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{ margin: "100px auto 32px" }}
          >
            {dataSource.title}
          </motion.h1>
          <motion.i
            initial={{ width: 0 }}
            animate={{ width: 100 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="title-description"
            style={{
              textAlign: "center",
              maxWidth: "800px",
              margin: "64px auto",
              fontSize: "16px",
              lineHeight: "1.6",
              color: "rgba(0, 0, 0, 0.85)",
            }}
          >
            The Innovate Future Association (IFA) is dedicated to advancing
            professional development and fostering innovation within the
            technology sector.
          </motion.p>
        </div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <Row
            gutter={[24, 24]}
            justify="center"
            style={{
              maxWidth: "1400px",
              margin: "0 auto",
            }}
          >
            {dataSource.children.map((item, i) => (
              <Col flex="1" key={i} className="page1-item">
                <motion.div
                  className="page1-item-link"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  onHoverStart={() => setHoverNum(i)}
                  onHoverEnd={() => setHoverNum(null)}
                  style={{
                    padding: "20px 16px",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    position: "relative",
                  }}
                >
                  <AnimatePresence>
                    {(hoverNum === i || isMobile) && (
                      <motion.div className="point-wrapper">
                        {[
                          "point-ring left",
                          "point-ring point-ring-0 right",
                          "point-0",
                          "point-2",
                          "point-1",
                          "point-3",
                          "point-2",
                        ].map((className, ii) => (
                          <motion.i
                            key={ii}
                            className={className}
                            style={{
                              background: item.color,
                              borderColor: item.color,
                            }}
                            {...getEnter(ii)}
                          />
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      width: "100%",
                      gap: "16px",
                    }}
                  >
                    <motion.div
                      className="page1-item-img"
                      style={{
                        boxShadow: `0 16px 32px ${item.shadowColor}`,
                        width: "64px",
                        height: "64px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "50%",
                        background: "#fff",
                      }}
                    >
                      <img
                        src={item.src}
                        alt={item.title}
                        style={{
                          width: "32px",
                          height: "32px",
                        }}
                      />
                    </motion.div>
                    <motion.div
                      className="page1-item-title"
                      style={{
                        color: item.color,
                        fontSize: "16px",
                        fontWeight: 500,
                        margin: 0,
                      }}
                    >
                      {item.title}
                    </motion.div>
                    <motion.p
                      style={{
                        fontSize: "14px",
                        lineHeight: "1.5",
                        margin: 0,
                        maxWidth: "200px",
                        textAlign: "center",
                      }}
                    >
                      {item.content}
                    </motion.p>
                  </div>
                </motion.div>
              </Col>
            ))}
          </Row>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
