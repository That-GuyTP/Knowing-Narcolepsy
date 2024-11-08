
const pageHeight = document.documentElement.scrollHeight;
const pageWidth = document.documentElement.scrollWidth;

const generateStars = () => {
    window.onload = () => {
        for( let i = 0; i < 70; i++) {
            const star = document.createElement("div");
            star.className = "star";
            star.innerHTML = "★";
    
            star.style.top = `${Math.random() * (pageHeight - 50)}px`;
            star.style.left = `${Math.random() * (pageWidth - 50)}px`;
            document.body.append(star);
        };
    };
    
    window.onresize = () => {
        //Clear Current Stars
        const existingStars = document.querySelectorAll('.star');
        existingStars.forEach(star => star.remove());

        const newPageHeight = document.documentElement.scrollHeight;
        const newPageWidth = document.documentElement.scrollWidth;
        for( let i = 0; i < 70; i++) {
            const star = document.createElement("div");
            star.className = "star";
            star.innerHTML = "★";
            star.style.top = `${Math.random() * (newPageHeight - 50)}px`;
            star.style.left = `${Math.random() * (newPageWidth - 50)}px`;
            document.body.append(star);
        };
    };
};

export default generateStars;