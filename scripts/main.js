// Main JavaScript functionality
document.addEventListener('DOMContentLoaded', function() {
    // Tab functionality
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked button and corresponding content
            button.classList.add('active');
            const tabId = button.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });
    
    // Mobile menu toggle
    document.querySelector('.menu-toggle').addEventListener('click', function() {
        document.getElementById('main-nav').classList.toggle('show');
    });

    // Read More Button Functionality
    const readMoreBtns = document.querySelectorAll('.read-more-btn');
    
    readMoreBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const additionalContent = this.nextElementSibling;
            const isExpanded = additionalContent.style.display === 'block';
            
            // Toggle content visibility
            additionalContent.style.display = isExpanded ? 'none' : 'block';
            
            // Update button text and icon
            this.innerHTML = isExpanded ? 
                'Read More <i class="fas fa-chevron-down"></i>' : 
                'Read Less <i class="fas fa-chevron-up"></i>';
            
            // Toggle active class
            this.classList.toggle('active');
        });
    });

    // Back to top button
    const backToTopButton = document.getElementById('backToTop');
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    });
    
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Dropdown menu functionality for mobile
    const dropdowns = document.querySelectorAll('.dropdown');
    
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                this.querySelector('.dropdown-content').classList.toggle('show');
            }
        });
    });
});
// Mobile menu functionality
        document.addEventListener('DOMContentLoaded', function() {
            const mobileMenu = document.getElementById('mobile-menu');
            const navbarMenu = document.querySelector('.navbar-menu');
            const dropdowns = document.querySelectorAll('.dropdown');
            
            // Toggle mobile menu
            mobileMenu.addEventListener('click', function() {
                mobileMenu.classList.toggle('active');
                navbarMenu.classList.toggle('active');
            });
            
            // Handle dropdowns on mobile
            if (window.innerWidth <= 968) {
                dropdowns.forEach(dropdown => {
                    const link = dropdown.querySelector('.navbar-link');
                    
                    link.addEventListener('click', function(e) {
                        e.preventDefault();
                        dropdown.classList.toggle('active');
                    });
                });
            }
            
            // Close mobile menu when clicking outside
            document.addEventListener('click', function(e) {
                if (!navbarMenu.contains(e.target) && !mobileMenu.contains(e.target) && navbarMenu.classList.contains('active')) {
                    mobileMenu.classList.remove('active');
                    navbarMenu.classList.remove('active');
                    
                    // Also close any open dropdowns
                    dropdowns.forEach(dropdown => {
                        dropdown.classList.remove('active');
                    });
                }
            });
            
            // Update dropdown handling on window resize
            window.addEventListener('resize', function() {
                if (window.innerWidth > 968) {
                    // Reset dropdowns on desktop
                    dropdowns.forEach(dropdown => {
                        dropdown.classList.remove('active');
                    });
                }
            });
        });
