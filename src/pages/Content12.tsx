import React, { useRef, useEffect, useState } from "react";
import { Row, Col } from "antd";
import { TweenOneGroup } from "rc-tween-one";

const Content12: React.FC = (props: any) => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1, rootMargin: "30px" }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  const getChildrenToRender = (data: any[] = []) => {
    if (!Array.isArray(data)) return null;

    return data
      .map((item) => {
        if (!item?.children?.wrapper || !item?.children?.img) return null;

        return (
          <Col key={item.name} {...item}>
            <div {...item.children.wrapper}>
              <span {...item.children.img}>
                <img src={item.children.img.children} alt="img" />
              </span>
            </div>
          </Col>
        );
      })
      .filter(Boolean);
  };

  const { dataSource, isMobile, ...restProps } = props;
  const childrenToRender = dataSource?.block?.children
    ? getChildrenToRender(dataSource.block.children)
    : null;

  const { isMobile: wrapperMobile, ...wrapperProps } =
    dataSource?.wrapper || {};

  return (
    <div {...restProps} {...wrapperProps}>
      <div {...dataSource?.page}>
        <div key="title" {...dataSource?.titleWrapper}>
          {dataSource?.titleWrapper?.children?.map((item: any) => {
            const { children, className, name, ...itemProps } = item;
            return (
              <div key={name} className={className}>
                {children.match(/\.(png|jpe?g|gif|svg)$/) ? (
                  <img src={children} alt="title" {...itemProps} />
                ) : (
                  <h1 className="title-h1">
                    <span>{children}</span>
                  </h1>
                )}
              </div>
            );
          })}
        </div>
        <div
          ref={containerRef}
          className={`content-template ${restProps.className || ""}`}
        >
          <TweenOneGroup
            component={Row}
            key="ul"
            enter={
              isVisible
                ? {
                    y: "+=30",
                    opacity: 0,
                    type: "from",
                    ease: "easeOutQuad",
                  }
                : null
            }
            leave={{ y: "+=30", opacity: 0, ease: "easeOutQuad" }}
            {...dataSource?.block}
          >
            {childrenToRender}
          </TweenOneGroup>
        </div>
      </div>
    </div>
  );
};

export default Content12;
