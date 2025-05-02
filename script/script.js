// Enhanced mobile navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    // Get CTA button event listener from original code
    const ctaButton = document.getElementById("cta");
    if (ctaButton) {
        ctaButton.addEventListener("click", function() {
            alert("Welcome to Sunrise Telecom! Let's get you connected.");
        });
    }

    // Improved mobile navigation toggle
    const navToggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('nav');

    if (navToggle && nav) {
        // Ensure initial state is set
        navToggle.setAttribute('aria-expanded', 'false');
        
        // Fix toggle button functionality
        navToggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            // Toggle the active class
            nav.classList.toggle('active');
            
            // Update aria attributes
            const isExpanded = nav.classList.contains('active');
            navToggle.setAttribute('aria-expanded', isExpanded);
            
            // Control body scroll
            document.body.style.overflow = isExpanded ? 'hidden' : '';
            
            console.log('Menu toggled:', isExpanded ? 'open' : 'closed');
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (nav.classList.contains('active') && !nav.contains(e.target) && !navToggle.contains(e.target)) {
                nav.classList.remove('active');
                navToggle.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
            }
        });

        // Close menu when clicking a nav link
        const navLinks = document.querySelectorAll('nav a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('active');
                navToggle.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
            });
        });
    }

    // Keep the testimonial slider functionality from the original code
    const testimonials = document.querySelectorAll('.testimonial');
    if (testimonials.length > 0) {
        let currentTestimonial = 0;

        function showTestimonial(index) {
            testimonials.forEach(t => t.style.display = 'none');
            testimonials[index].style.display = 'flex';
        }

        function nextTestimonial() {
            currentTestimonial = (currentTestimonial + 1) % testimonials.length;
            showTestimonial(currentTestimonial);
        }

        // Show first testimonial and start autoplay
        showTestimonial(0);
        setInterval(nextTestimonial, 5000); // Change testimonial every 5 seconds
    }
});