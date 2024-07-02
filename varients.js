// variants.js
export const fadeIn = (direction = 'up', duration = 0.6) => {
    return {
        hidden: {
            opacity: 0,
            y: direction === 'up' ? 30 : direction === 'down' ? -30 : 0,
            x: direction === 'left' ? 30 : direction === 'right' ? -30 : 0
        },
        show: {
            opacity: 1,
            y: 0,
            x: 0,
            transition: {
                duration: duration,
                ease: [0.42, 0, 0.58, 1] 
            }
        }
    };
};
