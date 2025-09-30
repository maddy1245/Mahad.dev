(function ($) {
    'use strict';
    /*=============================================
	=              Preloader       =
    =============================================*/
    function preloader() {
        $('#preloader').delay(0).fadeOut();
    }
    /*=============================================
    =     Offcanvas Menu      =
    =============================================*/
    function offcanvasMenu() {
        $('.menu-tigger').on('click', function () {
            $('.offCanvas__info, .offCanvas__overly').addClass('active');
            return false;
        });
        $('.menu-close, .offCanvas__overly').on('click', function () {
            $('.offCanvas__info, .offCanvas__overly').removeClass('active');
        });
    }
    /*=============================================
	=          Data Background      =
    =============================================*/
    function dataBackground() {
        $('[data-background]').each(function () {
            $(this).css('background-image', 'url(' + $(this).attr('data-background') + ')');
        });
    }
    /*=============================================
	=           Go to top       =
    =============================================*/
    function progressPageLoad() {
        var progressWrap = document.querySelector('.btn-scroll-top');
        if (progressWrap != null) {
            var progressPath = document.querySelector('.btn-scroll-top path');
            var pathLength = progressPath.getTotalLength();
            var offset = 50;
            progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
            progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
            progressPath.style.strokeDashoffset = pathLength;
            progressPath.getBoundingClientRect();
            progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
            window.addEventListener('scroll', function (event) {
                var scroll = document.body.scrollTop || document.documentElement.scrollTop;
                var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
                var progress = pathLength - (scroll * pathLength) / height;
                progressPath.style.strokeDashoffset = progress;
                var scrollElementPos = document.body.scrollTop || document.documentElement.scrollTop;
                if (scrollElementPos >= offset) {
                    progressWrap.classList.add('active-progress');
                } else {
                    progressWrap.classList.remove('active-progress');
                }
            });
            progressWrap.addEventListener('click', function (e) {
                e.preventDefault();
                window.scroll({
                    top: 0,
                    left: 0,
                    behavior: 'smooth',
                });
            });
        }
    }
    /*=============================================
	=           Aos Active       =
    =============================================*/
    function aosAnimation() {
        AOS.init({
            duration: 1000,
            mirror: true,
            once: true,
            disable: 'mobile',
        });
    }
    /*=============================================
	=           counterState       =
    =============================================*/
    function counterState() {
        var counters = document.querySelectorAll('.counter');
        counters.forEach(function (counter) {
            var countTo = counter.getAttribute('data-count');
            var countNum = parseInt(counter.textContent);
            var duration = 4000;
            var stepDuration = duration / Math.abs(countTo - countNum);
            var increment = countTo > countNum ? 1 : -1;
            var timer = setInterval(function () {
                countNum += increment;
                counter.textContent = countNum;
                if (countNum == countTo) {
                    clearInterval(timer);
                    //alert('finished');
                }
            }, stepDuration);
        });
    }
    /*=============================================
	=    		Magnific Popup		      =
    =============================================*/
    function magnificPopup() {
        $('.popup-image').magnificPopup({
            type: 'image',
            gallery: {
                enabled: true,
            },
        });
        /* magnificPopup video view */
        $('.popup-video').magnificPopup({
            type: 'iframe',
        });
    }
    /*=============================================
	=    		 Wow Active  	         =
    =============================================*/
    function wowAnimation() {
        var wow = new WOW({
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 0,
            mobile: false,
            live: true,
        });
        wow.init();
    }
    /*=============================================
	=           masonry Active       =
    =============================================*/
    function masonryFillter() {
        $('.masonry-active').imagesLoaded(function () {
            var $filter = '.masonry-active',
                $filterItem = '.filter-item',
                $filterMenu = '.filter-menu-active';
            if ($($filter).length > 0) {
                var $grid = $($filter).isotope({
                    itemSelector: $filterItem,
                    filter: '*',
                    masonry: {
                        // use outer width of grid-sizer for columnWidth
                        // columnWidth: 1,
                        columnWidth: '.grid-sizer',
                    },
                });
                // filter items on button click
                $($filterMenu).on('click', 'button', function () {
                    var filterValue = $(this).attr('data-filter');
                    $grid.isotope({
                        filter: filterValue,
                    });
                });
                // Menu Active Class
                $($filterMenu).on('click', 'button', function (event) {
                    event.preventDefault();
                    $(this).addClass('active');
                    $(this).siblings('.active').removeClass('active');
                });
            }
        });
    }
    function customSwiper() {
        const sliderone = new Swiper('.slider-one', {
            slidesPerView: 2,
            spaceBetween: 20,
            slidesPerGroup: 1,
            centeredSlides: false,
            loop: true,
            autoplay: {
                delay: 4000,
            },
            breakpoints: {
                1200: {
                    slidesPerView: 2,
                },
                992: {
                    slidesPerView: 2,
                },
                768: {
                    slidesPerView: 2,
                },
                576: {
                    slidesPerView: 1,
                },
                0: {
                    slidesPerView: 1,
                },
            },
        });
        const slidertwo = new Swiper('.slider-two', {
            slidesPerView: 1,
            // spaceBetween: 20,
            slidesPerGroup: 1,
            centeredSlides: false,
            loop: true,
            autoplay: {
                delay: 4000,
            },
            pagination: {
                el: '.swiper-pagination',
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
        const slider1 = new Swiper('.slider-1', {
            slidesPerView: 3,
            spaceBetween: 20,
            slidesPerGroup: 1,
            centeredSlides: false,
            loop: true,
            autoplay: {
                delay: 4000,
            },
            breakpoints: {
                1200: {
                    slidesPerView: 3,
                },
                992: {
                    slidesPerView: 3,
                },
                768: {
                    slidesPerView: 2,
                },
                576: {
                    slidesPerView: 1,
                },
                0: {
                    slidesPerView: 1,
                },
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                el: '.swiper-pagination',
            },
        });
        const slider2 = new Swiper('.slider-2', {
            slidesPerView: 2,
            spaceBetween: 30,
            slidesPerGroup: 1,
            centeredSlides: false,
            loop: true,
            autoplay: {
                delay: 4000,
            },
            breakpoints: {
                1200: {
                    slidesPerView: 2,
                },
                992: {
                    slidesPerView: 2,
                },
                768: {
                    slidesPerView: 2,
                },
                576: {
                    slidesPerView: 1,
                },
                0: {
                    slidesPerView: 1,
                },
            },
            pagination: {
                el: '.swiper-pagination',
            },
        });
    }
    function carauselScroll() {
        $('.carouselTicker-left').each(function () {
            $(this).carouselTicker({
                direction: 'prev',
                speed: 1,
                delay: 30,
            });
        });
        $('.carouselTicker-right').each(function () {
            $(this).carouselTicker({
                direction: 'next',
                speed: 1,
                delay: 30,
            });
        });
    }
    function odometerCounter() {
        if ($('.odometer').length > 0) {
            $('.odometer').appear(function (e) {
                var odo = $('.odometer');
                odo.each(function () {
                    var countNumber = $(this).attr('data-count');
                    $(this).html(countNumber);
                });
            });
        }
    }
    $('.change-price-plan li a').on('click', function (e) {
        e.preventDefault();
        $('.change-price-plan li a').removeClass('active');
        $(this).addClass('active');
        var type = $(this).attr('data-type');
        if (type == 'monthly') {
            $('.text-price-standard').html('49');
            $('.text-type-standard').html('/ month');
            $('.text-price-business').html('69');
            $('.text-type-business').html('/ month');
            $('.text-price-enterprise').html('99');
            $('.text-type-enterprise').html('/ month');
        } else {
            $('.text-price-standard').html('441');
            $('.text-type-standard').html('/ year');
            $('.text-price-business').html('621');
            $('.text-type-business').html('/ year');
            $('.text-price-enterprise').html('891');
            $('.text-type-enterprise').html('/ year');
        }
    });
    function inputFocus() {
        $('input')
            .focus(function () {
                $(this).closest('div.input-group').addClass('focus');
            })
            .blur(function () {
                $(this).closest('div.input-group').removeClass('focus');
            });
        $('textarea')
            .focus(function () {
                $(this).closest('div.input-group').addClass('focus');
            })
            .blur(function () {
                $(this).closest('div.input-group').removeClass('focus');
            });
        $('select')
            .focus(function () {
                $(this).closest('div.input-group').addClass('focus');
            })
            .blur(function () {
                $(this).closest('div.input-group').removeClass('focus');
            });
    }
    function mobileHeaderActive() {
        var navbarTrigger = $('.burger-icon'),
            navCanvas = $('.burger-icon-2'),
            closeCanvas = $('.close-canvas'),
            endTrigger = $('.mobile-menu-close'),
            container = $('.mobile-header-active'),
            containerCanvas = $('.sidebar-canvas-wrapper'),
            wrapper4 = $('body');
        wrapper4.prepend('<div class="body-overlay-1"></div>');
        navbarTrigger.on('click', function (e) {
            navbarTrigger.toggleClass('burger-close');
            e.preventDefault();
            container.toggleClass('sidebar-visible');
            wrapper4.toggleClass('mobile-menu-active');
        });
        endTrigger.on('click', function () {
            container.removeClass('sidebar-visible');
            wrapper4.removeClass('mobile-menu-active');
        });
        var $offCanvasNav = $('.mobile-menu'),
            $offCanvasNavSubMenu = $offCanvasNav.find('.sub-menu');
        /*Add Toggle Button With Off Canvas Sub Menu*/
        $offCanvasNavSubMenu.parent().prepend('<span class="menu-expand"><i class="arrow-small-down"></i></span>');
        /*Close Off Canvas Sub Menu*/
        $offCanvasNavSubMenu.slideUp();
        /*Category Sub Menu Toggle*/
        $offCanvasNav.on('click', 'li a, li .menu-expand', function (e) {
            var $this = $(this);
            if (
                $this
                    .parent()
                    .attr('class')
                    .match(/\b(menu-item-has-children|has-children|has-sub-menu)\b/) &&
                ($this.attr('href') === '#' || $this.hasClass('menu-expand'))
            ) {
                e.preventDefault();
                if ($this.siblings('ul:visible').length) {
                    $this.parent('li').removeClass('active');
                    $this.siblings('ul').slideUp();
                } else {
                    $this.parent('li').addClass('active');
                    $this.closest('li').siblings('li').removeClass('active').find('li').removeClass('active');
                    $this.closest('li').siblings('li').find('ul:visible').slideUp();
                    $this.siblings('ul').slideDown();
                }
            }
        });
    }
    function cardScroll() {
        if ($('.cards').length > 0) {
            const { ScrollObserver, valueAtPercentage } = aat;
            const cardsContainer = document.querySelector('.cards');
            const cards = document.querySelectorAll('.card-custom');
            cardsContainer.style.setProperty('--cards-count', cards.length);
            cardsContainer.style.setProperty('--card-height', `${cards[0].clientHeight}px`);
            Array.from(cards).forEach((card, index) => {
                const offsetTop = 20 + index * 20;
                card.style.paddingTop = `${offsetTop}px`;
                if (index === cards.length - 1) {
                    return;
                }
                const toScale = 1 - (cards.length - 1 - index) * 0.1;
                const nextCard = cards[index + 1];
                const cardInner = card.querySelector('.card__inner');
                ScrollObserver.Element(nextCard, {
                    offsetTop,
                    offsetBottom: window.innerHeight - card.clientHeight,
                }).onScroll(({ percentageY }) => {
                    cardInner.style.scale = valueAtPercentage({
                        from: 1,
                        to: toScale,
                        percentage: percentageY,
                    });
                    cardInner.style.filter = `brightness(${valueAtPercentage({
                        from: 1,
                        to: 0.6,
                        percentage: percentageY,
                    })})`;
                });
            });
        }
    }
    /*=============================================
	=           Page Load       =
    =============================================*/
    $(window).on('load', function () {
        preloader();
        progressPageLoad();
        offcanvasMenu();
        dataBackground();
        aosAnimation();
        counterState();
        customSwiper();
        magnificPopup();
        wowAnimation();
        carauselScroll();
        odometerCounter();
        masonryFillter();
        inputFocus();
        mobileHeaderActive();
        cardScroll();
    });
})(jQuery);




// chatbot 

function toggleChat() {
    const chatWidget = document.getElementById("chat-widget");
    chatWidget.style.display =
      chatWidget.style.display === "none" ? "flex" : "none";
  }
  document.getElementById("chat-toggle").addEventListener("click", toggleChat);
  
  function appendMessage(text, sender) {
    const chatBody = document.getElementById("chat-body");
    const message = document.createElement("div");
    message.className = `chat-message ${sender}`;
    message.textContent = text;
    chatBody.appendChild(message);
    chatBody.scrollTop = chatBody.scrollHeight;
  }
  
  // Send message when button is clicked
  async function sendMessage() {
    const input = document.getElementById("user-input");
    const userMessage = input.value.trim();
    if (!userMessage) return;
  
    appendMessage(userMessage, "user");
    input.value = "";
  
    appendMessage("Typing...", "bot");
  
    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyD5nCDzZRl-V_c0NAuz67OWzm6gDqthOyo`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            contents: [
              {
                parts: [
                  {
                    text: `You are **Muhammad Huzaifa** — a friendly and professional full-stack developer and WordPress expert from Karachi, Pakistan.
  You have:
  - Over **2 years of professional experience** in WordPress development
  - Strong **frontend skills** using **React** and **Tailwind CSS**
  - Backend expertise with **Node.js**, **Express.js**, and **MongoDB**
  - Built and deployed real-world full-stack **MERN applications**
  - Developed **LMS systems** with live class features
  - Integrated **AI** into applications
  - Successfully managed **live projects** with clients
  - Worked at **Rojrz Tech** as both an intern and a junior developer
  - Deep knowledge of **Elementor**, **Contact Form 7**, **WPForms**, and building **custom WordPress themes**
  
  Certifications include:
  - **Meta Front-End Developer Specialization**
  - **Responsive Web Design** by freeCodeCamp
  - **Front-End Web Development** by Great Learning
  - **Full Stack Open – Backend Development**
  
  ### Recent Projects:
  🚗 **CarHub – Car Rental Website (WordPress + Elementor)**  
  ✅ Sleek UI, responsive design, great use of animations  
  💡 Feedback: Add booking functionality with pricing filters. A "featured car" carousel would be a nice touch.
  
  🏗️ **Architecture Design Website (Next.js + React + SCSS)**  
  ✅ Isotope layout + Swiper = excellent combo for showcasing projects  
  💡 Feedback: Add light/dark mode toggle & lazy load images for better performance.
  
  💳 **PayTip – SaaS Payment Landing Page (HTML + TailwindCSS + JS)**  
  ✅ Clean, fast, responsive — perfect for SaaS presentation  
  💡 Feedback: Add testimonials or trust badges for credibility.
  
  🍽️ **Restaurant Website (React + GSAP + Bootstrap)**  
  ✅ Great animations via GSAP, appetizing vibe  
  💡 Feedback: Add reservation system or interactive menu for enhanced UX.
  
  🤖 **Cogni AI – AI Writer Website (Next.js 14)**  
  ✅ Modern UI, solid branding, AI-focused design  
  💡 Feedback: Add real-time writing samples or demo mode.
  
  🎨 **Design Agency Website (Next.js + Bootstrap + TypeScript)**  
  ✅ Beautiful animation, responsive layout  
  💡 Feedback: Add "Case Studies" or "Our Work" section to build trust.
  
  🔗 **Lynk – URL Shortener (Next.js + MongoDB + Clerk Auth)**  
  ✅ Analytics + User Dashboard = 🔥  
  💡 Feedback: Add custom aliases and QR code generation.
  
  🧠 **Task Management App (React + Node + MongoDB)**  
  ✅ JWT Auth, CRUD ops, user roles — solid full-stack app  
  💡 Feedback: Add drag-and-drop & deadline reminders via toast/snackbar.
  
  🖼️ **CodeScreenshot Tool**  
  ✅ Multiple themes, real-time preview, font control  
  💡 Feedback: Add “share to Twitter/LinkedIn” button for devs.
  
  👞 **LeatherStride – Ecommerce Store (WordPress + WooCommerce)**  
  ✅ Classy design, intuitive navigation, immersive brand feel  
  💡 Feedback: Add a lookbook or zoom feature + blog with styling tips.
  
  You're also a blogger:
  - **Codeblib** – launched **5 months ago**, focused on tutorials, how-to guides, and career tips for developers
  
  ---
  🎯 **Purpose of this chatbot:**
  Act as Muhammad Huzaifa on his portfolio website. Greet users, answer questions about his skills, work, or services, and guide them to take action (like contact or visit projects). Your goal is to be helpful, informative, and engaging.
  
  **Tone:** Friendly + professional  
  **Language:** English (with casual tone if needed)  
  **Style:** Clear, helpful, and confident
  
  ---
  🧠 **How to Respond:**
  If someone asks:
  - “What do you do?” → Summarize Huzaifa’s skills (WordPress, MERN, React Native, etc.)
  - “Show me your work” → Mention the above projects with short highlights
  - “Do you take freelance work?” → Yes, Huzaifa works with clients. Share contact info or point to form
  - “Can you build a custom LMS or app?” → Yes! Huzaifa has experience building a live class LMS
  - “Can I see your blog?” → Yes! Share [Codeblib](https://codeblib.com)
  - “Do you know Elementor?” → Yes, 2+ years of experience with Elementor, WPForms, CF7, custom themes
  
  For any inquiries, you can reach Muhammad Huzaifa via:
  - **Mobile:** 03168499138
  - **Email:** [mhuzaifa3737@gmail.com](mailto:mhuzaifa3737@gmail.com)
  - **LinkedIn:** [Muhammad Huzaifa](https://www.linkedin.com/in/huzaifa-dev)
  - **GitHub:** [huzaifa-mern-dev](https://github.com/huzaifa-mern-dev)
  
  If unsure, say:  
  “I’m Muhammad Huzaifa! Feel free to reach out to him through the contact form — he’ll get back to you soon 😊”
  `, // 👈 Ye hai tumhari prompt!
                  },
                  {
                    text: userMessage,
                  },
                ],
              },
            ],
          }),
        }
      );
  
      const data = await response.json();
      const botReply =
        data.candidates?.[0]?.content?.parts?.[0]?.text ||
        "⚠️ Unable to respond.";
      document.querySelector(".chat-message.bot:last-child").remove();
      appendMessage(botReply, "bot");
    } catch (error) {
      console.error(error);
      document.querySelector(".chat-message.bot:last-child").remove();
      appendMessage("❌ Unable to respond.", "bot");
    }
  }
  
  // ✅ Listen for "Enter" key on input field
  document.getElementById("user-input").addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      e.preventDefault(); // Prevent default form submission (if any)
      sendMessage();
    }
  });
  
