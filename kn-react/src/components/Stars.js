const generateStars = () => {
    const existingStars = document.querySelectorAll('.star');
    existingStars.forEach(star => star.remove());

    const pageHeight = document.documentElement.scrollHeight;
    const pageWidth = document.documentElement.scrollWidth;
    for( let i = 0; i < 70; i++) {
        const star = document.createElement("div");
        star.className = "star";
        star.innerHTML = "★";

        star.style.top = `${Math.random() * (pageHeight - 50)}px`;
        star.style.left = `${Math.random() * (pageWidth - 50)}px`;
        document.body.append(star);
    };
};
window.onload = generateStars;
window.onresize = generateStars;

export default generateStars;