import React from "react";
import { motion } from "framer-motion";
import QRCode from "qrcode.react";
import { Row, Col } from "antd";
import { page2 } from "./data";

export default function Page2() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        ease: "easeOut",
        duration: 0.6,
      },
    },
  };

  const children = page2.map((d, i) => {
    if (i > 2) {
      return null;
    }
    return (
      <Col key={i} className="col" span={8}>
        <motion.div
          variants={itemVariants}
          className="content-wrapper home-hover"
        >
          <div
            className="image"
            style={{ backgroundImage: `url(${d.image})` }}
          />
          <div className="code-wrapper">
            <h4>扫码预览</h4>
            <QRCode value={d.url} size={160} />
          </div>
        </motion.div>
      </Col>
    );
  });

  return (
    <div className="home-layout-wrapper home-case-wrapper">
      <motion.div
        className="home-layout"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }} // equivalent to playScale={0.4}
      >
        <motion.div className="home-case" variants={containerVariants}>
          <motion.h2 variants={itemVariants} key="h2">
            精品案例扫一扫
          </motion.h2>
          <motion.i className="line" variants={itemVariants} key="i" />
          <motion.div variants={containerVariants} key="content">
            <Row gutter={171}>{children}</Row>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
