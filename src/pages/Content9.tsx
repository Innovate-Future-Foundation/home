import React, { useRef, useEffect, useState } from "react";
import { getChildrenToRender } from "./utils";

const Content9: React.FC<any> = (props) => {
  const { dataSource, isMobile, ...restProps } = props;

  const FadeInAnimation = ({ children, className, id, delay = 0 }: any) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        },
        {
          threshold: 0.3,
        }
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return () => observer.disconnect();
    }, []);

    return (
      <div
        ref={ref}
        className={className}
        id={id}
        style={{
          opacity: isVisible ? 1 : 0,
          transform: `translateY(${isVisible ? 0 : "20px"})`,
          transition: `opacity 0.6s ease-out ${delay}ms, transform 0.6s ease-out ${delay}ms`,
        }}
      >
        {children}
      </div>
    );
  };

  const getBlockChildren = (block: any, i: number) => {
    const item = block.children;
    const textWrapper = (
      <FadeInAnimation
        key="text"
        delay={isMobile ? 0 : 100}
        className={item.textWrapper?.className}
      >
        <div key="time" {...item.time}>
          {item.time.children}
        </div>
        <h2 key="title" {...item.title}>
          <i {...item.icon}>
            <img src={item.icon.children} alt="img" />
          </i>
          {item.title.children}
        </h2>
        <div key="p" {...item.content}>
          {item.content.children}
        </div>
      </FadeInAnimation>
    );

    return (
      <FadeInAnimation
        key={i.toString()}
        className={block.className}
        id={block.id}
      >
        {isMobile && textWrapper}
        <FadeInAnimation
          className="image-wrapper"
          key="image"
          delay={isMobile ? 100 : 0}
        >
          <div key="image" {...item.img}>
            <img src={item.img.children} alt="img" />
          </div>
          <div key="name" className="name-wrapper">
            <div key="name" {...item.name}>
              {item.name.children}
            </div>
            <div key="post" {...item.post}>
              {item.post.children}
            </div>
          </div>
        </FadeInAnimation>
        {!isMobile && textWrapper}
      </FadeInAnimation>
    );
  };

  const children = dataSource.block.children.map(getBlockChildren);

  return (
    <div {...restProps} {...dataSource.wrapper}>
      <div {...dataSource.page}>
        <div {...dataSource.titleWrapper}>
          {dataSource.titleWrapper.children.map(getChildrenToRender)}
        </div>
        <div {...dataSource.block}>{children}</div>
      </div>
    </div>
  );
};

export default Content9;
