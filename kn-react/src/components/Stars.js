function getRandomPosition(min, max) {
    return Math.random() * (max - min) + min;
};

const pageHeight = document.documentElement.scrollHeight;
const pageWidth = document.documentElement.scrollWidth;

const generateStars = () => {
    window.onload = () => {
        for( let i = 0; i < 70; i++) {
            const star = document.createElement("div");
            star.className = "star";
            star.innerHTML = "★";
    
            star.style.top = `${Math.random() * pageHeight}px`;
            star.style.left = `${Math.random() * pageWidth}px`;
            document.body.append(star);
        }
    }
};

export default generateStars;