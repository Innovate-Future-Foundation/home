import { motion } from "framer-motion";
import { Row, Col } from "antd";
import { page4 } from "./data";

export default function Page4() {
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

  const rows = [];
  for (let i = 0; i < Math.floor(page4.length / 4); i++) {
    const rowItems = page4.slice(i * 4, (i + 1) * 4).map((d, index) => (
      <Col
        className="col"
        span={4}
        key={i * 4 + index}
        offset={index === 0 ? 1 : 2}
      >
        <motion.div variants={itemVariants}>
          <i style={{ backgroundImage: `url(${d})` }} />
        </motion.div>
      </Col>
    ));

    rows.push(<Row key={i}>{rowItems}</Row>);
  }

  return (
    <div className="home-layout-wrapper home-user-wrapper">
      <motion.div
        className="home-layout"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={containerVariants}
      >
        <motion.div className="home-user">
          <motion.h2 variants={itemVariants} key="h2">
            我们的用户
          </motion.h2>
          <motion.i className="line" variants={itemVariants} key="i" />
          <motion.div variants={containerVariants}>{rows}</motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
