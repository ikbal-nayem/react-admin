export const fade_in_right = {
  from: {x:70, y:-10, opacity:0},
  to: {x:0, y:0, opacity:1, transition: {staggerChildren: 0.1}},
  exit: {x:70, opacity: 0}
}

export const fade_in_left = {
  from: {x:-70, y:-10, opacity:0},
  to: {x:0, y:0, opacity:1, transition: {staggerChildren: 0.1}},
  exit: {x:-70, opacity: 0}
}

export const header = {
  head: {
    from: {y: '-10vh', opacity: 0},
    to: {y: 0, opacity: 1},
    exit: {y: '-10vh', opacity: 0}
  },
  right: {
    from: {x: '15vw', opacity: 0},
    to: {x: 0, opacity: 1, transition: {delay: .5}},
    exit: {x: '15vw', opacity: 0}
  },
  left: {
    from: {x: '-15vw', opacity: 0},
    to: {x: 0, opacity: 1, transition: {delay: .5}},
    exit: {x: '-15vw', opacity: 0}
  }
}