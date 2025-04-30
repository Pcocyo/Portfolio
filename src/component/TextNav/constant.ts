export const links = ['About', 'Project', 'Contact'];

export const linkVariants = {
    initial: { color: '#f5f5f5' },
    animate: (isActive: boolean) => ({
      color: isActive ? '#FF2B51' : undefined,
      transition: { type: 'spring', duration: 0.4 },
    }),
    whileHover: {
      scale: 1.1,
      transition: { duration: 0.2},
    },
};
