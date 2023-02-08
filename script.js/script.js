gsap.to('#big-wheel-one', {
  rotation: 360,
  duration: 10,
  repeat: -1,
  ease: 'none',
  transformOrigin: 'center center',
});

gsap.to('#big-wheel-two', {
  rotation: -360,
  duration: 10,
  repeat: -1,
  ease: 'none',
  transformOrigin: 'center center',
});

gsap.to('#big-wheel-three', {
  rotation: 360,
  duration: 10,
  repeat: -1,
  ease: 'none',
  transformOrigin: 'center center',
});

gsap.to('#small-wheel-one', {
  rotation: 360,
  duration: 5,
  repeat: -1,
  ease: 'power1',
  transformOrigin: 'center center',
});

gsap.to('#small-wheel-two', {
  rotation: -360,
  duration: 3,
  repeat: -1,
  ease: 'power3',
  transformOrigin: 'center center',
});
