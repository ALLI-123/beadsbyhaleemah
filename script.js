// Product data - this is what the client can easily update
        const products = [
            {
                id: 1,
                title: "Handmade Ceramic Mug",
                tag: "Ceramics",
                price: "₦12,500",
                image: "https://images.unsplash.com/photo-1574169487961-43bf8b5e4e81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 2,
                title: "Woven Wall Hanging",
                tag: "Textiles",
                price: "₦22,500",
                image: "https://images.unsplash.com/photo-1605733513597-45b4cd6aaf8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 3,
                title: "Wooden Serving Board",
                tag: "Woodwork",
                price: "₦16,250",
                image: "https://images.unsplash.com/photo-1606787620819-8bdf0c44c293?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 4,
                title: "Silver Hoop Earrings",
                tag: "Jewelry",
                price: "₦9,500",
                image: "https://images.unsplash.com/photo-1605926525185-7a4c2e4fc2f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 5,
                title: "Hand-Knit Throw Blanket",
                tag: "Textiles",
                price: "₦34,000",
                image: "https://images.unsplash.com/photo-1602235345467-3bb1b5c7e8f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 6,
                title: "Ceramic Plant Pot",
                tag: "Ceramics",
                price: "₦10,000",
                image: "https://images.unsplash.com/photo-1605733513597-45b4cd6aaf8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
            },

            {
                id: 6,
                title: "Ceramic Plant Pot",
                tag: "Ceramics",
                price: "₦10,000",
                image: "https://images.unsplash.com/photo-1605733513597-45b4cd6aaf8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
            },

            {
                id: 6,
                title: "Ceramic Plant Pot",
                tag: "Ceramics",
                price: "₦10,000",
                image: "https://images.unsplash.com/photo-1605733513597-45b4cd6aaf8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
            }


        ];

        // Render products
        function renderProducts() {
            const container = document.getElementById('productsContainer');
            container.innerHTML = '';
            
            products.forEach(product => {
                const productCard = document.createElement('div');
                productCard.className = 'product-card';
                productCard.innerHTML = `
                    <div class="product-image">
                        <img src="${product.image}" alt="${product.title}">
                    </div>
                    <div class="product-info">
                        <span class="product-tag">${product.tag}</span>
                        <h3 class="product-title">${product.title}</h3>
                        <div class="product-price">${product.price}</div>
                        <a href="https://wa.me/2348012345678?text=Hi! I'm interested in your ${encodeURIComponent(product.title)} (${product.price}). Could you tell me more about it?" 
                           class="whatsapp-btn" target="_blank">
                            <i class="fab fa-whatsapp"></i> Order via WhatsApp
                        </a>
                    </div>
                `;
                container.appendChild(productCard);
            });
        }

        // Mobile menu toggle
        document.getElementById('menuToggle').addEventListener('click', function() {
            document.getElementById('mainNav').classList.toggle('active');
        });

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if(targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if(targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu if open
                    document.getElementById('mainNav').classList.remove('active');
                }
            });
        });

        // Carousel functionality
        let currentSlide = 0;
        const slides = document.querySelectorAll('.carousel-slide');
        const dots = document.querySelectorAll('.dot');
        
        function showSlide(n) {
            slides.forEach(slide => slide.classList.remove('active'));
            dots.forEach(dot => dot.classList.remove('active'));
            
            currentSlide = n;
            slides[currentSlide].classList.add('active');
            dots[currentSlide].classList.add('active');
        }
        
        function nextSlide() {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        }
        
        // Auto-advance carousel
        setInterval(nextSlide, 5000);
        
        // Dot click functionality
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                showSlide(index);
            });
        });

        // Initialize
        document.addEventListener('DOMContentLoaded', function() {
            renderProducts();
        });