import React, { useEffect, useState } from 'react';
import { PhotoAlbum } from 'react-photo-album';
import Lightbox from 'yet-another-react-lightbox';

import { GalleryContainer, GalleryTitle } from './Gallery.styled';
import 'yet-another-react-lightbox/styles.css';
import { photos, getSlides } from './Photos';

export default function Gallery() {
  const [index, setIndex] = useState(-1);
  const [pics, setPics] = useState<any>([]);
  const [slides, setSlides] = useState<any>([]);

  useEffect(() => {
    Promise.all(photos).then((res) => setPics(res));
    getSlides().then((slides) => setSlides(slides));
    // setSlides();
  }, []);

  return (
    <GalleryContainer>
      <GalleryTitle>Gallery</GalleryTitle>
      <PhotoAlbum
        layout='rows'
        photos={pics}
        targetRowHeight={200}
        onClick={(event, photo, index) => setIndex(index)}
        componentsProps={{
          imageProps: {
            loading: 'lazy',
          } as React.HTMLAttributes<HTMLElement>,
        }}
      />
      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={slides}
      />
    </GalleryContainer>
  );
}
