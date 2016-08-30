
const calcTiming = (keyframes) => {
  return keyframes.map((frame, index) => {
    if (index === 0) return 0
    if (frame.offset !== undefined && frame.offset <= 1 && frame.offset >= 0) {
      return frame.offset
    }
    return index / (keyframes.length - 1)
  })
}
const calcPrecentageTimings = (keyframes) => {
  return calcTiming(keyframes)
    .map(offset => offset * 100)
    .map(precentage => `${precentage}%`)
}

module.exports = calcPrecentageTimings
