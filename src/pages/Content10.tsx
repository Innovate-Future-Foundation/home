import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Content10: React.FC<any> = ({ dataSource, isMobile, ...props }) => {
  const [showInfo, setShowInfo] = useState(isMobile);

  // Use the direct embed URL from Google Maps
  const mapEmbedUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.5775366696227!2d151.20710661179734!3d-33.86881973454899!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ae3f3298a729%3A0x2e2e3f6e3f693d4!2sLevel%2013%2F309%20Kent%20St%2C%20Sydney%20NSW%202000!5e0!3m2!1sen!2sau!4v1710921418445!5m2!1sen!2sau";

  const onClick = () => {
    window.open("https://maps.app.goo.gl/dVJxuwYMU3UqBMgc6");
  };

  const markerEnter = () => {
    setShowInfo(true);
  };

  const markerLeave = () => {
    setShowInfo(false);
  };

  return (
    <div {...props} {...dataSource.wrapper} style={{ position: "relative" }}>
      <iframe
        src={mapEmbedUrl}
        width="100%"
        height="100%"
        style={{ border: 0, position: "absolute", top: 0, left: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      <motion.div
        {...dataSource.Content}
        onMouseEnter={markerEnter}
        onMouseLeave={markerLeave}
        onClick={onClick}
        onTouchEnd={onClick}
        style={{ position: "relative", zIndex: 1 }}
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <motion.div {...dataSource.Content.children.icon}>
          <img src={dataSource.Content.children.icon.children} alt="img" />
        </motion.div>
        <motion.div {...dataSource.Content.children.iconShadow}>
          <img
            src={dataSource.Content.children.iconShadow.children}
            alt="img"
          />
        </motion.div>
      </motion.div>
      <AnimatePresence>
        {showInfo && (
          <motion.div
            className="map-tip"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <h2>{dataSource.Content.children.title.children}</h2>
            <p>{dataSource.Content.children.content.children}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Content10;
