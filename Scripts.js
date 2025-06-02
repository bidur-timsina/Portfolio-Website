 // Page navigation functionality
        let currentPage = 'portfolio';

        function showPage(pageId) {
            // Hide all pages
            document.querySelectorAll('.page-content').forEach(page => {
                page.classList.add('hidden');
            });

            // Show selected page
            document.getElementById(pageId + 'Page').classList.remove('hidden');

            // Update page title
            const pageTitle = document.getElementById('pageTitle');
            pageTitle.textContent = pageId.charAt(0).toUpperCase() + pageId.slice(1);

            // Update navigation states
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('text-white', 'bg-gray-700');
                link.classList.add('text-gray-400');
            });

            // Highlight active navigation
            document.querySelectorAll(`[data-page="${pageId}"]`).forEach(link => {
                link.classList.remove('text-gray-400');
                link.classList.add('text-white');
                if (link.closest('#sidebar')) {
                    link.classList.add('bg-gray-700');
                }
            });

            currentPage = pageId;

            // Close mobile menu when navigating
            if (window.innerWidth < 1024) {
                sidebar.classList.add('-translate-x-full');
                overlay.classList.add('hidden');
            }
        }

        // Mobile menu functionality
        
        const sidebar = document.getElementById('sidebar');
        const overlay = document.getElementById('overlay');

    

        overlay.addEventListener('click', () => {
            sidebar.classList.add('-translate-x-full');
            overlay.classList.add('hidden');
        });

        // Navigation event listeners
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const pageId = link.getAttribute('data-page');
                showPage(pageId);
            });
        });

        // Portfolio filter functionality
        const filterButtons = document.querySelectorAll('.filter-btn');
        const portfolioItems = document.querySelectorAll('.portfolio-item');

        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove active class from all buttons
                filterButtons.forEach(btn => {
                    btn.classList.remove('bg-blue-600', 'text-white');
                    btn.classList.add('bg-gray-700', 'text-gray-300');
                });

                // Add active class to clicked button
                button.classList.remove('bg-gray-700', 'text-gray-300');
                button.classList.add('bg-blue-600', 'text-white');

                // Filter portfolio items
                const filterText = button.textContent.toLowerCase();
                
                portfolioItems.forEach(item => {
                    const category = item.getAttribute('data-category');
                    
                    if (filterText === 'all' || category.includes(filterText.replace(' ', ''))) {
                        item.style.display = 'block';
                        item.classList.add('animate-fadeIn');
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });

        // Contact form submission
        document.querySelector('#contactPage form').addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for your message! I\'ll get back to you soon.');
            e.target.reset();
        });

        // Add smooth animations
        const style = document.createElement('style');
        style.textContent = `
            @keyframes fadeIn {
                from { opacity: 0; transform: translateY(20px); }
                to { opacity: 1; transform: translateY(0); }
            }
            .animate-fadeIn {
                animation: fadeIn 0.5s ease-out;
            }
            .page-content {
                animation: fadeIn 0.3s ease-out;
            }
        `;
        document.head.appendChild(style);

        // Close mobile menu when window is resized
        window.addEventListener('resize', () => {
            if (window.innerWidth >= 1024) {
                sidebar.classList.remove('-translate-x-full');
                overlay.classList.add('hidden');
            }
        });

        // Initialize the page
        showPage('about');

function toggleContact() {
    const contactDiv = document.getElementById('mobileContacts');
    const toggleBtnText = document.getElementById('toggleBtnText');

    if (contactDiv.classList.contains('hidden')) {
      contactDiv.classList.remove('hidden');
      toggleBtnText.textContent = 'Hide Contacts';
    } else {
      contactDiv.classList.add('hidden');
      toggleBtnText.textContent = 'Show Contacts';
    }
  }


 document.getElementById("contact-form").addEventListener("submit", function (e) {
      e.preventDefault();

      emailjs.sendForm("service_ezlh1j6", "template_cz67lq5", this)
        .then(function () {
          alert("✅ Message sent successfully!");
          document.getElementById("contact-form").reset();
        }, function (error) {
          alert("❌ Failed to send message.\n" + JSON.stringify(error));
        });
    });



