import React from "react";
import { motion } from "framer-motion";
import { Row, Col } from "antd";
import { useInView } from "react-intersection-observer";
import { page1 } from "./data";

export default function Page1() {
  const { ref, inView } = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });

  const children = page1.map((d, i) => (
    <Col key={i} span={8} className="col">
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: i * 0.1 }}
      >
        <div className="image" style={{ backgroundImage: `url(${d.src})` }} />
        <h3>{d.title}</h3>
        <p>{d.content}</p>
      </motion.div>
    </Col>
  ));

  return (
    <div className="home-layout-wrapper home-func-wrapper" id="home-func">
      <h2>功能介绍</h2>
      <i className="line" />
      <div ref={ref} className="home-layout">
        {inView && (
          <motion.div
            className="home-func"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Row gutter={171}>{children}</Row>
          </motion.div>
        )}
      </div>
    </div>
  );
}
