//STAR PRINTING
function getRandomPosition(min, max) {
    return Math.random() * (max - min) + min;
};

export const generateStars = () => {
    const pageHeight = document.documentElement.scrollHeight;
    const pageWidth = document.documentElement.scrollWidth;
    
    window.onload = () => {
        for( let i = 0; i < 70; i++) {
            const star = document.createElement("div");
            star.className = "star";
            star.innerHTML = "★";
    
            star.style.top = `${Math.random() * pageHeight}px`;
            star.style.left = `${Math.random() * pageWidth}px`;
            document.body.append(star);
        }
    };
};
