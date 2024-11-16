import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Content10: React.FC<any> = ({ dataSource, isMobile, ...props }) => {
  const [showInfo, setShowInfo] = useState(isMobile);

  // Use the direct embed URL from Google Maps
  const mapEmbedUrl = "https://www.google.com/maps/place/Amazon+Web+Services+Australia+Pty.+Ltd./@-33.8716828,151.2046063,18z/data=!3m1!5s0x6b12ae3e666166e3:0x6af5fe6b4faecf25!4m10!1m2!2m1!1samazon+2+park+st!3m6!1s0x6b12ae3e636797e7:0x429e42deec6fa6ad!8m2!3d-33.8727748!4d151.2076501!15sChBhbWF6b24gMiBwYXJrIHN0IgOIAQGSARBjb3Jwb3JhdGVfb2ZmaWNl4AEA!16s%2Fg%2F11dx9j6c6_?entry=ttu&g_ep=EgoyMDI0MTExMy4xIKXMDSoASAFQAw%3D%3D";

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
