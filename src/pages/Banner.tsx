import React from "react";
import { Button } from "antd";
import BannerImage from "./BannerImage";
import "../styles/banner.less";

interface BannerProps {
  className?: string;
}

const Banner: React.FC<BannerProps> = ({ className = "home-banner" }) => {
  return (
    <div className={`home-layout-wrapper ${className}`}>
      <div className="home-layout">
        <div className={`${className}-content-wrapper fade-in`}>
          <h1 className="slide-in">极简制作，一键呈现</h1>
          <p className="slide-in">
            为您提供专业的云上建站服务，满足不同行业的个性化需求
          </p>
          <span className="slide-in">
            <Button
              type="primary"
              onClick={() => {
                window.location.href = "/activity/home";
              }}
            >
              开始使用
            </Button>
          </span>
        </div>
        <div className={`${className}-image-wrapper fade-in`}>
          <BannerImage />
        </div>
      </div>
    </div>
  );
};

export default Banner;
