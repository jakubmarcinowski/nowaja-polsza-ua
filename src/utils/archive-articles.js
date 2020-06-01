export const findCover = (covers, { issue, year }) =>
  covers.find(cover => cover.relativePath.startsWith(`${year}/${issue}.`))
