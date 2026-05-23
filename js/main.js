document.addEventListener('DOMContentLoaded', () => {
    
    // --- RESPONSIVE MOBILE NAVIGATION TOGGLE ---
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            
            // Simple animated toggle look for hamburger bars
            const bars = menuToggle.querySelectorAll('span');
            bars.forEach(bar => bar.classList.toggle('toggle-active'));
        });

        // Auto collapse mobile menu drawer when clicking inline navigation points
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    }

    // --- FORM INTERCEPTION & CONVERSION VALIDATION ---
    const leadForm = document.getElementById('leadForm');
    
    if (leadForm) {
        leadForm.addEventListener('submit', (e) => {
            // Field validation parameters 
            const requiredFields = leadForm.querySelectorAll('[required]');
            let formIsValid = true;

            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    formIsValid = false;
                    field.style.borderColor = '#e63946'; // Red error highlights
                } else {
                    field.style.borderColor = 'var(--border-color)';
                }
            });

            if (!formIsValid) {
                e.preventDefault();
                alert('Please fill out all required fields marked with an asterisk (*).');
                return;
            }

            // Visual submission state for better UI perception
            const submitBtn = leadForm.querySelector('.submit-btn-large');
            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.innerText = 'Securing Your Quote...';
            }
        });
    }
});