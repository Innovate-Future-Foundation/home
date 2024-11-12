import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface NavProps {
  dataSource: any;
  isMobile: boolean;
  [key: string]: any;
}

const Header: React.FC<NavProps> = ({ dataSource, isMobile, ...props }) => {
  const [phoneOpen, setPhoneOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const phoneClick = () => {
    setPhoneOpen(!phoneOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const { LinkMenu } = dataSource;
  const navData = LinkMenu.children;
  const navChildren = Object.keys(navData).map((key, i) => {
    const item = navData[key];

    if (item.to && item.to.match(/\//g)) {
      // External link
      return (
        <a href={item.to} key={i.toString()} {...item}>
          {navData[key].children}
        </a>
      );
    }

    // Internal scroll link
    return (
      <button
        key={i.toString()}
        onClick={() => scrollToSection(item.to)}
        style={{ background: "none", border: "none", cursor: "pointer" }}
        {...item}
      >
        {navData[key].children}
      </button>
    );
  });

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      {...dataSource.wrapper}
      {...props}
    >
      <div
        {...dataSource.page}
        className={`${dataSource.page.className}${phoneOpen ? " open" : ""}`}
      >
        <motion.div
          initial={{ x: -30 }}
          animate={{ x: 0 }}
          transition={{ ease: "easeOut" }}
          {...dataSource.logo}
        >
          <img width="100%" src={dataSource.logo.children} alt="img" />
        </motion.div>

        {isMobile && (
          <div {...dataSource.mobileMenu} onClick={phoneClick}>
            <em />
            <em />
            <em />
          </div>
        )}

        <AnimatePresence>
          <motion.div
            ref={menuRef}
            className={LinkMenu.className}
            initial={isMobile ? { height: 0 } : { height: "auto" }}
            animate={{
              height: isMobile ? (phoneOpen ? "auto" : 0) : "auto",
            }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
            style={{ overflow: "hidden" }}
          >
            {navChildren}
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;
