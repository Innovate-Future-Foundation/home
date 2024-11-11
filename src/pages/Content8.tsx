import React, { useRef, useEffect } from "react";
import { Row, Col } from "antd";
import { motion, useInView, useAnimation } from "framer-motion";
import { getChildrenToRender } from "./utils";

interface Content8Props {
  isMobile?: boolean;
  dataSource: any;
  [key: string]: any;
}

const Content8: React.FC<Content8Props> = ({
  isMobile,
  dataSource,
  ...props
}) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const getBlockChildren = (item: any, i: number) => {
    const children = item.children;
    const delay = isMobile ? i * 0.1 : (i % 3) * 0.1 + Math.floor(i / 3) * 0.1;

    return (
      <Col key={i.toString()} md={item.md} xs={item.xs}>
        <motion.div
          className={item.className}
          initial={{ y: 30, opacity: 0 }}
          animate={controls}
          variants={{
            visible: {
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.5,
                delay,
                ease: "easeOut",
              },
            },
          }}
        >
          <div className={children.className}>
            <motion.div
              className={children.img.className}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              style={{
                width: "200px",
                height: "200px",
                margin: "0 auto",
                overflow: "hidden",
                position: "relative",
              }}
            >
              <img
                src={children.img.children}
                alt="guest"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  position: "absolute",
                  top: 0,
                  left: 0,
                }}
              />
            </motion.div>
            <motion.h2
              className={children.title.className}
              initial={{ opacity: 0 }}
              animate={controls}
              variants={{
                visible: {
                  opacity: 1,
                  transition: { delay: delay + 0.2 },
                },
              }}
              style={{ marginTop: "16px" }}
            >
              {children.title.children}
            </motion.h2>
            <motion.div
              className={children.content.className}
              initial={{ opacity: 0 }}
              animate={controls}
              variants={{
                visible: {
                  opacity: 1,
                  transition: { delay: delay + 0.3 },
                },
              }}
              style={{ marginTop: "8px" }}
            >
              {children.content.children}
            </motion.div>
          </div>
        </motion.div>
      </Col>
    );
  };

  const { dataSource: _, isMobile: __, ...restProps } = props;
  const children = dataSource.block.children.map(getBlockChildren);

  return (
    <div {...restProps} {...dataSource.wrapper}>
      <div {...dataSource.page}>
        <div {...dataSource.titleWrapper}>
          {dataSource.titleWrapper.children.map(getChildrenToRender)}
        </div>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          variants={{
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.6,
                staggerChildren: 0.1,
              },
            },
          }}
        >
          <Row {...dataSource.block} gutter={[24, 24]}>
            {children}
          </Row>
        </motion.div>
      </div>
    </div>
  );
};

export default Content8;
