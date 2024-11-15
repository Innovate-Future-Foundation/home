import React from "react";
import { Button } from "antd";
import { motion } from "framer-motion";

interface BannerProps {
  dataSource: {
    wrapper: any;
    textWrapper: {
      children: Array<{
        name: string;
        texty?: boolean;
        children: React.ReactNode;
        [key: string]: any;
      }>;
      [key: string]: any;
    };
    [key: string]: any;
  };
  isMobile?: boolean;
  [key: string]: any;
}

const Banner: React.FC<BannerProps> = ({
  dataSource,
  isMobile,
  ...currentProps
}) => {
  const { isMobile: _, ...wrapperProps } = dataSource.wrapper;

  const children = dataSource.textWrapper.children.map((item, index) => {
    const { name, texty, ...itemProps } = item;

    if (name.match("button")) {
      return (
        <motion.div
          key={name}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <Button
            type="primary"
            {...itemProps}
            onClick={() => {
              const element = document.getElementById("Content11_0");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            {item.children}
          </Button>
        </motion.div>
      );
    }

    return (
      <motion.div
        key={name}
        initial={{ opacity: 0, y: texty ? 50 : 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: index * 0.1,
          duration: 0.5,
          ease: "easeOut",
        }}
        {...itemProps}
      >
        {texty ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.1 + 0.2 }}
          >
            {item.children}
          </motion.div>
        ) : (
          item.children
        )}
      </motion.div>
    );
  });

  return (
    <div {...currentProps} {...wrapperProps}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        {...dataSource.textWrapper}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Banner;
