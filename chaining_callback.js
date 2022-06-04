const uploadImage = (imageFile, nextStep) => {
  console.log(`uploading ${imageFile}`);
  const image = `fs-${imageFile}`;
  nextStep(image);
  //   return image;
};

const cropImage = (image) => {
  console.log(`cropping ${image}`);
  const croppedImage = `${image}-crop`;
  //   nextStep(croppedImage);
  console.log(croppedImage);
};

const addWatermark = (croppedImage, nextStep) => {
  console.log(`watermarking ${croppedImage}`);
  const watermarkedImage = `${croppedImage}-vm`;
  nextStep(watermarkedImage);
  //   return watermarkedImage;
};

// console.log(uploadImage("selfie"));
// console.log(cropImage("product"));
// console.log(addWatermark("photo"));

uploadImage("bando", (image) => cropImage(image));
