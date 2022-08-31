import reactImageSize from 'react-image-size';

const breakpoints = [4320, 2160, 1080, 640, 384, 256, 128];

const shopPhotos = [
  'https://i.postimg.cc/LXWs6Ycn/1.jpg',
  'https://i.postimg.cc/W17gp8Xz/10.jpg',
  'https://i.postimg.cc/rpn4xm6L/11.jpg',
  'https://i.postimg.cc/vHFVWkKD/12.jpg',
  'https://i.postimg.cc/kg7RH8qm/13.jpg',
  'https://i.postimg.cc/PqxpXjCV/14.jpg',
  'https://i.postimg.cc/CKF5vVCL/2.jpg',
  'https://i.postimg.cc/SRzxXQ4V/3.jpg',
  'https://i.postimg.cc/gjr6gPW6/4.jpg',
  'https://i.postimg.cc/76K21Zpk/5.jpg',
  'https://i.postimg.cc/WpKDsCVX/6.jpg',
  'https://i.postimg.cc/fbZt6dss/7.jpg',
  'https://i.postimg.cc/CdTLbyL0/8.jpg',
  'https://i.postimg.cc/Jz8jWv3S/9.jpg',
];

const photos = shopPhotos.map(async (photo, index) => {
  const photoObject = await reactImageSize(photo)
    .then(({ width, height }: { width: number; height: number }) => {
      return {
        src: photo,
        key: `${index}`,
        width,
        height,
        images: breakpoints.map((breakpoint) => {
          const breakpointHeight = Math.round((height / width) * breakpoint);
          return {
            src: photo,
            width: breakpoint*4,
            height: breakpointHeight*4,
          };
        }),
      };
    })
    .catch((errorMessage: unknown) => console.log(errorMessage));

  return photoObject;
});

const getSlides = () => {
  return Promise.all(photos).then((res) =>
    res.map(({ src, key, width, height, images }) => ({
      src,
      key,
      width,
      height,
    }))
  );
};

const slides = photos.map(({ src, key, width, height, images }: any) => ({
  src,
  key,
  width,
  height,
  srcSet: images?.map((image: any) => ({
    src: image.src,
    width: '100%',
    height: '100%',
  })),
}));

export { photos, slides, getSlides };
