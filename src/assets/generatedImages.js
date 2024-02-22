// Slower method
// const generatedImages = Array.from({ length: 11 }).map((_, i) => {
//   const c = i + 1
//   return {
//     id: c,
//     src: `/images/image-${c}.${c < 10 ? "webp" : "jpeg"}`,
//   }
// })

const generatedImages = []
for (let i = 1; i < 10; i++) {
  generatedImages.push({
    id: i.toString(),
    src: `./images/00${i}.${i < 9 ? "png" : "jpg"}`,
  })
}

export default generatedImages
