import { ReactNode } from "react";
import { motion } from "framer-motion";
import { Row, Col } from "antd";
import { page3 } from "./data";

interface Page3Item {
  title: string;
  content: ReactNode[];
  svg: ReactNode;
  exp?: string | ReactNode;
}

export default function Page3() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "easeOut",
        duration: 0.5,
      },
    },
  };

  const data: Page3Item[] = page3;

  const children = data.map((d, i) => (
    <Col span={8} className="col" key={i.toString()}>
      <motion.div
        variants={itemVariants}
        className="content-wrapper home-hover"
        onClick={() => {
          window.location.href = "/intro/price";
        }}
      >
        <div key="image" className="image">
          {d.svg}
        </div>
        <h3>{d.title}</h3>
        {d.content}
        {d.exp && <div className="exp">{d.exp}</div>}
      </motion.div>
    </Col>
  ));

  return (
    <div className="home-layout-wrapper home-serve-wrapper">
      <motion.div
        className="home-layout"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={containerVariants}
      >
        <motion.div className="home-serve">
          <motion.h2 variants={itemVariants} key="h2">
            服务方案
          </motion.h2>
          <motion.i className="line" variants={itemVariants} key="i" />
          <Row gutter={96}>{children}</Row>
        </motion.div>
      </motion.div>
    </div>
  );
}
