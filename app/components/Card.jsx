import Image from "next/image";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

import images from "./images";

export default function Card(props) {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <div className="w-fit">
      <motion.div
        ref={carousel}
        className="carousel cursor-grab overflow-hidden"
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="flex justify-center"
        >
          {images.map((image) => {
            return (
              <motion.div className="p-5 min-w-min pointer-events-none">
                <Image
                  key={image.name}
                  className="rounded-3xl"
                  src={image.image}
                  alt="image"
                  height={100}
                  width={200}
                />
                <motion.h3 className="flex justify-center">
                  {image.name}
                </motion.h3>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
}
