import React, { useRef, ReactNode } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "antd";
import { getChildrenToRender } from "./utils";

interface ContentItem {
  name: string;
  children: ReactNode;
  className?: string;
  href?: string;
  [key: string]: any;
}

interface Content11Props {
  dataSource: {
    titleWrapper: {
      children: ContentItem[];
    };
    button: {
      children: {
        a: ContentItem;
      };
    };
  };
  className?: string;
  id?: string;
  style?: React.CSSProperties;
}

const Content11: React.FC<Content11Props> = ({
  dataSource,
  className,
  id,
  style,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.6,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  // Only pass valid HTML attributes to the motion.div
  const validProps = {
    className: `content11-wrapper ${className || ""}`,
    id,
    style,
  };

  return (
    <motion.div
      ref={ref}
      {...validProps}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <motion.div
        variants={itemVariants}
        className="icon-wrapper"
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "12px",
          marginBottom: "24px",
        }}
      ></motion.div>

      <motion.div variants={itemVariants} style={{ textAlign: "center" }}>
        {dataSource.titleWrapper.children.map((item, i) =>
          getChildrenToRender(item, i)
        )}
      </motion.div>

      <motion.div
        style={{
          textAlign: "center",
          marginTop: "48px",
        }}
        variants={itemVariants}
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <Button {...dataSource.button.children.a} style={{ color: "#fff" }}>
          {dataSource.button.children.a.children}
        </Button>
      </motion.div>
    </motion.div>
  );
};

export default Content11;
