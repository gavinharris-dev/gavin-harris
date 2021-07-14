import { useCallback, useEffect, useRef, useState } from "react";
import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";
import Link from "next/link";
import PostBody from "./post-body";
import cn from "classnames";

type Props = {
  title: string;
  coverImage: string;
  startDate: string;
  endDate?: string;
  summary: string;
  slug: string;
};

const INTERSECTION_OPTIONS: IntersectionObserverInit = {
  threshold: 0,
  rootMargin: "10px",
};

export const PostComponent = ({
  title,
  coverImage,
  startDate,
  endDate,
  summary,
  slug,
}: Props) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [onScreen, setOnScreen] = useState(false);

  const intersectionCallback: IntersectionObserverCallback = useCallback(
    (entries, observer) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        setOnScreen(true);
        observer.unobserve(entry.target);
      }
    },
    []
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      intersectionCallback,
      INTERSECTION_OPTIONS
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [sectionRef, intersectionCallback]);

  return (
    <section
      ref={sectionRef}
      className={cn({
        "print:opacity-100": true,
        "border-b-2": true,
        "opacity-0": !onScreen,
        "fade-in": onScreen,
      })}
    >
      <div className='flex flex-col mb-8 mt-4'>
        <div className='flex flex-col md:flex-row justify-start w-full mb-4 items-center'>
          <CoverImage
            title={title}
            src={coverImage}
            slug={slug}
            className='md:w-36 print:hidden mb-1'
          />
          <h3 className='text-xl flex-grow flex'>
            <span className='flex flex-col md:flex-row justify-between w-full content-bottom'>
              <span className='text-left flex justify-center'>{title}</span>
              <span className='text-right text-sm flex justify-end'>
                <span style={{ height: "min-content" }}>
                  <DateFormatter dateString={startDate} /> -{" "}
                  {endDate ? (
                    <DateFormatter dateString={endDate} />
                  ) : (
                    " Ongoing"
                  )}
                </span>
              </span>
            </span>
          </h3>
        </div>
        <PostBody content={summary} />
      </div>
    </section>
  );
};
