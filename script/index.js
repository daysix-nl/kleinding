
// try {
//     const observer = new IntersectionObserver((entries, observer) => {
//         entries.forEach((entry) => {
//             if (entry.isIntersecting) {
//                 entry.target.classList.add("show");
//                 observer.unobserve(entry.target); // Stop observeren na activering
//             }
//         });
//     });

//     const hiddenElements = document.querySelectorAll(".element-fade-in");
//     hiddenElements.forEach((el) => observer.observe(el));
// } catch (error) {
//     console.error("IntersectionObserver error:", error);
// }


try {
    document.addEventListener('DOMContentLoaded', function () {
        const accordionGroups = document.querySelectorAll('.accordion-group');

        accordionGroups.forEach(group => {
            const accItems = group.querySelectorAll('.accordion-item');
            const accButtons = group.querySelectorAll('.accordion');

            // Zet de eerste accordion-item in elke groep standaard op actief
            if (accItems.length > 0) {
                const firstItem = accItems[0];
                firstItem.classList.add('active');
            }

            accButtons.forEach(button => {
                button.addEventListener('click', function () {
                    const panel = this.nextElementSibling;

                    // Sluit alle andere panelen binnen dezelfde groep
                    accItems.forEach(item => {
                        if (item !== this.parentElement) {
                            item.classList.remove('active');
                        }
                    });

                    // Toggle de actieve status van de aangeklikte accordion-item
                    if (this.parentElement.classList.contains('active')) {
                        this.parentElement.classList.remove('active');
                    } else {
                        this.parentElement.classList.add('active');
                    }
                });
            });
        });
    });
} catch (error) { }