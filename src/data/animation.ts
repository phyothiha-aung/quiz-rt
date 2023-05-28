export const navVarient = {
  hidden: {
    y: -100,
  },
  visible: {
    y: 0,
    transition: {
      type: "spring",
      stiffness: 150,
    },
  },
};

export const pageVarient = {
  hidden: {
    x: "100vw",
  },
  visible: {
    x: 0,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 150,
    },
  },
};

export const buttonVarient = {
  hidden: {
    x: -200,
  },
  visible: {
    x: 0,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 250,
    },
  },
};
