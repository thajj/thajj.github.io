"use client";

import { useState, useEffect } from "react";
import Masonry from "react-masonry-css";
import Image from "next/image";
import { SmartImage } from "@/components/once-ui/components";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { gallery } from "@/resources";
import styles from "@/app/gallery/Gallery.module.scss";

export default function MasonryGrid() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxIndex(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const breakpointColumnsObj = {
    default: 4,
    1440: 3,
    1024: 2,
    560: 1,
  };

  return (
    <>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className={styles.masonryGrid}
        columnClassName={styles.masonryGridColumn}
      >
        {gallery.images.map((image, index) => (
          <button
            type="button"
            key={index}
            className={styles.gridItem}
            onClick={() => setLightboxIndex(index)}
            style={{
              border: "none",
              padding: 0,
              background: "none",
              cursor: "pointer",
              textAlign: "left",
              width: "100%",
            }}
          >
            <SmartImage
              radius="m"
              aspectRatio={image.orientation === "horizontal" ? "16 / 9" : "9 / 16"}
              src={image.src}
              alt={image.alt}
              className={styles.gridItem}
            />
          </button>
        ))}
      </Masonry>
      <Dialog open={lightboxIndex !== null} onOpenChange={(open) => !open && setLightboxIndex(null)}>
        <DialogContent className="max-w-[90vw] max-h-[90vh] w-auto p-2 border-none bg-black/90">
          <DialogTitle className="sr-only">
            {lightboxIndex !== null ? gallery.images[lightboxIndex].alt : "Image lightbox"}
          </DialogTitle>
          {lightboxIndex !== null && (
            <Image
              src={gallery.images[lightboxIndex].src}
              alt={gallery.images[lightboxIndex].alt}
              width={1200}
              height={800}
              className="object-contain max-h-[85vh] w-auto"
              unoptimized
            />
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
