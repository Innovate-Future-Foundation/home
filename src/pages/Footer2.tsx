import React from "react";
import { motion } from "framer-motion";
import LinkedInIcon from "../assets/linkedin_icon.png";

const Footer2: React.FC<any> = ({ dataSource, isMobile, ...rest }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "0 20px",
        width: "100%",
      }}
      {...rest}
      {...dataSource.wrapper}
    >
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        style={{
          color: "#8c8c8c",
          textAlign: "center",
        }}
        {...dataSource.copyright}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "12px",
            flexWrap: "wrap",
          }}
        >
          {dataSource.copyright.children.map((item: any, i: number) => {
            // Special handling for both image and image2
            if (item.name === "image" || item.name === "image2") {
              return (
                <div
                  key={i}
                  className={item.className}
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <img
                    src={item.children}
                    alt="logo"
                    style={{
                      height: "24px",
                      width: "auto",
                    }}
                  />
                </div>
              );
            }

            // Handle other elements
            return React.createElement(
              item.name?.indexOf("title") === 0 ? "h1" : "div",
              {
                key: i.toString(),
                style: {
                  color: "inherit",
                  margin: 0,
                  fontSize: "14px",
                },
                ...item,
              },
              item.children
            );
          })}

          <a
            href="https://www.linkedin.com/company/innovate-future-foundation/?viewAsMember=true"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              marginLeft: "12px",
            }}
          >
            <img
              src={LinkedInIcon}
              alt="LinkedIn"
              style={{
                height: "20px",
                width: "auto",
                filter: "brightness(0) invert(0.6)",
              }}
            />
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Footer2;
