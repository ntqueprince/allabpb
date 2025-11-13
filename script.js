    // ========================================
    // COMPLETE DATA STRUCTURE - All Content from PDF
    // ========================================
    const pdfData = {
        hero: {
            title: "Insurance Simplified For Everyone",
            subtitle: "India's Largest Online Insurance Marketplace",
            tagline: "🎯 Transparency • Empowerment • Smart Decisions",
            stats: [
                { icon: "📅", value: 17, label: "Years of Journey" },
                { icon: "📄", value: 5.26, label: "Crore Policies Sold" },
                { icon: "🏆", value: 93.4, label: "% Market Share" }
            ]
        },
        
        about: [
            { icon: "🔍", title: "Compare & Choose", description: "Compare different insurance products side-by-side before making a decision" },
            { icon: "💪", title: "Customer Empowerment", description: "Make informed decisions without agent pressure or hidden terms" },
            { icon: "💎", title: "Full Transparency", description: "Crystal clear information to help you understand every policy detail" },
            { icon: "🎯", title: "Smart Decisions", description: "Data-driven insights to find the perfect insurance for your needs" }
        ],
        
        mission: {
            values: [
                { icon: "💡", title: "Transparency", description: "Bring complete openness to the insurance industry. No hidden clauses, no fine print surprises." },
                { icon: "📘", title: "Simplification", description: "Make complex insurance terms easy to understand for everyone, regardless of background." },
                { icon: "🛡️", title: "Protection", description: "Safeguard people from mis-selling and policy lapses. Your protection is our priority." }
            ],
            ultimateGoal: "Make insurance accessible and understandable for every Indian"
        },
        
        ecosystem: {
            parent: "PB Fintech Limited",
            brands: [
                { name: "Policybazaar", description: "Insurance Marketplace", icon: "🛡️", gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" },
                { name: "Paisabazaar", description: "Loans & Credit Services", icon: "💰", gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)" },
                { name: "PB Partners", description: "Agent & Partner Network", icon: "🤝", gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)" },
                { name: "DocPrime", description: "Healthcare Services", icon: "🏥", gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)" }
            ]
        },
        
        milestones: [
            { year: 2008, title: "Policybazaar Launched", description: "The beginning of insurance revolution", icon: "🚀" },
            { year: 2014, title: "Paisabazaar Launched", description: "Expanded to loans & credit", icon: "💰" },
            { year: 2018, title: "Became a Unicorn", description: "Crossed $1 billion valuation", icon: "🦄" },
            { year: 2021, title: "IPO Launched", description: "Listed on stock exchanges", icon: "📈" }
        ],
        
        marketLeadership: {
            policybazaar: [
                { value: 28100, unit: "Crores", label: "Insurance Premium", icon: "💵" },
                { value: 5.26, unit: "Crores", label: "Policies Sold", icon: "📄" },
                { value: 93.4, unit: "%", label: "Online Market Share", icon: "🏆" }
            ],
            paisabazaar: [
                { value: 30600, unit: "Crores", label: "Loan Disbursals", icon: "💳" },
                { value: 5.08, unit: "Crores", label: "Credit Score Checks", icon: "📊" }
            ],
            pbPartners: [
                { value: 2.25, unit: "Lakh+", label: "Registered Agents", icon: "👥" },
                { value: 18000, unit: "+", label: "Pin Codes Covered", icon: "📍" }
            ]
        },
        
        comparison: {
            traditional: [
                { icon: "📝", title: "Manual Processes", description: "Slow, paper-heavy, and inefficient workflows" },
                { icon: "👔", title: "Agent Dependency", description: "Extra costs and potential bias in recommendations" },
                { icon: "🔒", title: "Lack of Transparency", description: "Hidden terms leading to poor decisions" },
                { icon: "📋", title: "Generic Underwriting", description: "One-size-fits-all, not personalized" }
            ],
            digital: [
                { icon: "⚡", title: "Digital-First Experience", description: "Fast, paperless, and seamless buying process" },
                { icon: "🔍", title: "Transparent Comparisons", description: "Side-by-side policy comparison at your fingertips" },
                { icon: "🎯", title: "Personalized Policies", description: "Tailored recommendations based on your needs" },
                { icon: "💨", title: "Smooth & Fast", description: "Buy insurance in minutes, not days" }
            ]
        },
        
        future: [
            { icon: "🚀", title: "Innovation", description: "New products & digital touchpoints to meet evolving customer needs" },
            { icon: "📊", title: "Data Analytics", description: "Understand risk patterns, predict claims with precision" },
            { icon: "⚙️", title: "Automation", description: "Auto-process claims, save time & reduce human errors" },
            { icon: "🤖", title: "AI & ML", description: "Simplify verification & workflows with intelligent systems" },
            { icon: "🔗", title: "Blockchain", description: "Improve trust & data security with encryption" },
            { icon: "📜", title: "Smart Contracts", description: "Increase transparency & efficiency in policy management" }
        ],
        
        journey: [
            { number: "01", icon: "🎁", title: "Launch New Products", description: "Innovating to meet diverse insurance needs" },
            { number: "02", icon: "✨", title: "Improve User Experience", description: "Making every interaction delightful" },
            { number: "03", icon: "🗺️", title: "Expand Reach", description: "Reaching every corner of India" },
            { number: "04", icon: "🤝", title: "Build Together", description: "Innovation, trust & digital transformation" }
        ],
        
    quiz: [
        {
            question: "What is Policybazaar primarily known for?",
            options: [
                "An online travel booking platform",
                "India's largest online insurance marketplace",
                "A retail e-commerce platform",
                "A mutual fund trading site"
            ],
            correct: 1,
            explanation: "Policybazaar is India’s largest and most trusted online insurance marketplace."
        },
        {
            question: "What was Policybazaar’s original legal name?",
            options: [
                "Etechaces Marketing and Consulting Pvt. Ltd.",
                "PB Fintech Pvt. Ltd.",
                "Policybazaar Ltd.",
                "Etech Global Insurance Pvt. Ltd."
            ],
            correct: 0,
            explanation: "Policybazaar was initially incorporated as Etechaces Marketing and Consulting Pvt. Ltd. in 2008."
        },
        {
            question: "When was Policybazaar incorporated?",
            options: ["2005", "2006", "2008", "2010"],
            correct: 2,
            explanation: "Policybazaar was incorporated on June 4, 2008."
        },
        {
            question: "Which company is the parent organization of Policybazaar?",
            options: ["PB Fintech Ltd.", "Reliance Capital", "Bajaj Allianz", "Paytm Money"],
            correct: 0,
            explanation: "PB Fintech Limited is the parent company of Policybazaar and Paisabazaar."
        },
        {
            question: "Which other brand operates under PB Fintech along with Policybazaar?",
            options: ["Google Pay", "Paisabazaar", "Paytm", "YONO SBI"],
            correct: 1,
            explanation: "Paisabazaar offers loan and credit services and is part of the PB Fintech ecosystem."
        },
        {
            question: "What is the main purpose of Policybazaar?",
            options: [
                "To make insurance complex and agent-driven",
                "To simplify and make insurance transparent",
                "To sell only car insurance policies",
                "To invest in mutual funds"
            ],
            correct: 1,
            explanation: "Policybazaar aims to simplify insurance and bring transparency to the process."
        },
        {
            question: "Which of the following is NOT a core value of Policybazaar?",
            options: ["Transparency", "Simplification", "Protection", "Profit Maximization"],
            correct: 3,
            explanation: "The core values are Transparency, Simplification, and Protection."
        },
        {
            question: "Which year did Policybazaar launch Paisabazaar?",
            options: ["2012", "2013", "2014", "2015"],
            correct: 2,
            explanation: "Paisabazaar was launched in 2014 to expand PB Fintech’s portfolio into loans and credit."
        },
        {
            question: "In which year did Policybazaar become a unicorn?",
            options: ["2016", "2017", "2018", "2019"],
            correct: 2,
            explanation: "Policybazaar became a unicorn in 2018 after crossing $1 billion in valuation."
        },
        {
            question: "When did Policybazaar launch its IPO?",
            options: ["2019", "2020", "2021", "2022"],
            correct: 2,
            explanation: "Policybazaar went public in 2021."
        },
        {
            question: "Which industry problem was Policybazaar originally trying to solve?",
            options: [
                "Lack of transparency and manual processes in insurance",
                "High cost of mutual fund trading",
                "Airline ticket booking delays",
                "E-commerce logistics issues"
            ],
            correct: 0,
            explanation: "Policybazaar sought to bring transparency and digitization to insurance buying."
        },
        {
            question: "What is one key benefit of Policybazaar’s digital platform?",
            options: [
                "Slower processing",
                "Agent dependency",
                "Paperless and fast policy comparisons",
                "Manual claim submissions"
            ],
            correct: 2,
            explanation: "Policybazaar enables digital, fast, and paperless policy comparisons."
        },
        {
            question: "Which technology helps Policybazaar provide personalized underwriting?",
            options: ["Blockchain", "Data Analytics", "Robotics", "Cloud Gaming"],
            correct: 1,
            explanation: "Data analytics enables Policybazaar to personalize underwriting and assess risk accurately."
        },
        {
            question: "What is the online insurance market share of Policybazaar?",
            options: ["73.4%", "83.4%", "93.4%", "97.4%"],
            correct: 2,
            explanation: "Policybazaar commands a 93.4% share of India’s online insurance market."
        },
        {
            question: "Which challenge still exists for online insurance in India?",
            options: [
                "Lack of insurance products",
                "Low customer awareness and complex language",
                "Too many agents online",
                "Excessive policy transparency"
            ],
            correct: 1,
            explanation: "Online insurance still faces challenges of customer awareness and complex terms."
        },
        {
            question: "What percentage was India's total insurance penetration during COVID-19 (2020–22)?",
            options: ["2.6%", "3.3%", "4.19%", "5.0%"],
            correct: 2,
            explanation: "Total insurance penetration rose to 4.19% during COVID-19."
        },
        {
            question: "What was the non-life insurance penetration in India by 2023-24?",
            options: ["0.6%", "0.8%", "1.0%", "1.3%"],
            correct: 2,
            explanation: "Non-life insurance penetration in India reached about 1.0% by 2023–24."
        },
        {
            question: "Which of the following is an initiative of Policybazaar to empower users?",
            options: [
                "Hiding policy details",
                "Providing side-by-side policy comparisons",
                "Mandatory agent consultations",
                "Offline-only renewals"
            ],
            correct: 1,
            explanation: "Policybazaar empowers users through transparent, side-by-side policy comparisons."
        },
        {
            question: "Which FinTech concept is used to automate claim processing?",
            options: ["Robotics and AI", "Quantum Computing", "Blockchain", "5G Networks"],
            correct: 0,
            explanation: "Robotics and AI make routine claim verification and document checks faster and more accurate."
        },
        {
            question: "Which of these brands in the PB Fintech ecosystem focuses on healthcare?",
            options: ["DocPrime", "Paisabazaar", "PB Partners", "FinTechCare"],
            correct: 0,
            explanation: "DocPrime provides healthcare-related services under the PB Fintech umbrella."
        },
        {
            question: "How does Policybazaar prevent mis-selling?",
            options: [
                "By offering agent-exclusive plans",
                "By eliminating transparency",
                "By providing unbiased comparisons and direct online purchase",
                "By selling only through call centers"
            ],
            correct: 2,
            explanation: "Policybazaar reduces mis-selling by offering transparent, unbiased comparisons online."
        },
        {
            question: "What is PB Partners’ main role in the ecosystem?",
            options: [
                "Retail sales",
                "Agent and partner network support",
                "Mutual fund management",
                "Credit score analysis"
            ],
            correct: 1,
            explanation: "PB Partners connects and supports agents and partners in the PB Fintech network."
        },
        {
            question: "Which year did Policybazaar achieve $1 billion valuation?",
            options: ["2016", "2017", "2018", "2019"],
            correct: 2,
            explanation: "It became a unicorn in 2018."
        },
        {
            question: "What kind of insurance comparison does Policybazaar specialize in?",
            options: [
                "Travel and tour booking",
                "Mutual fund performance",
                "Side-by-side comparison of insurance products",
                "Stock trading analytics"
            ],
            correct: 2,
            explanation: "Policybazaar enables users to compare insurance plans side-by-side for better decisions."
        },
        {
            question: "What is Policybazaar’s mission statement focus?",
            options: [
                "Maximize shareholder profit",
                "Make insurance accessible and understandable for every Indian",
                "Promote only health insurance",
                "Offer crypto investment services"
            ],
            correct: 1,
            explanation: "Policybazaar’s mission is to make insurance accessible and understandable for every Indian."
        }
    ],    tips: [
            "💙 Every policy tells a story of protection and trust",
            "🎯 Insurance is not a cost, it's an investment in peace of mind",
            "🚀 Technology is making insurance accessible to millions of Indians",
            "💡 Transparency builds trust, trust builds relationships",
            "✨ Simplification is the ultimate sophistication in insurance",
            "🛡️ Protection today ensures security tomorrow",
            "📊 Data-driven decisions lead to better outcomes"
        ]
    };

    // ========================================
    // INTERSECTION OBSERVER - Scroll Animations
    // ========================================
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };

    const animationObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Don't unobserve so animation can repeat if user scrolls back
            }
        });
    }, observerOptions);

    // Initialize observers when DOM is ready
    document.addEventListener('DOMContentLoaded', () => {
        const elementsToAnimate = document.querySelectorAll('[data-animate]');
        elementsToAnimate.forEach(el => animationObserver.observe(el));
    });

    // ========================================
    // COUNTER ANIMATIONS - Number Count Up
    // ========================================
    function animateCounter(element, target, decimals = 0, duration = 2000) {
        const start = 0;
        const startTime = performance.now();
        
        function updateCounter(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Easing function for smooth animation
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            const current = start + (target - start) * easeOutQuart;
            
            if (decimals > 0) {
                element.textContent = current.toFixed(decimals);
            } else {
                element.textContent = Math.floor(current).toLocaleString();
            }
            
            if (progress < 1) {
                requestAnimationFrame(updateCounter);
            } else {
                // Add "+" symbol for certain stats
                const unit = element.nextElementSibling?.textContent;
                if (unit && (unit.includes('+') || unit === '%')) {
                    element.textContent = decimals > 0 ? current.toFixed(decimals) : Math.floor(current).toLocaleString();
                }
            }
        }
        
        requestAnimationFrame(updateCounter);
    }

    // Observer for counter animations
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const numberElement = entry.target.querySelector('[data-count]');
                if (numberElement && !numberElement.classList.contains('counted')) {
                    const target = parseFloat(numberElement.dataset.count);
                    const decimals = target % 1 !== 0 ? 2 : 0;
                    animateCounter(numberElement, target, decimals);
                    numberElement.classList.add('counted');
                }
                counterObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    // Initialize counter observers
    document.addEventListener('DOMContentLoaded', () => {
        const statElements = document.querySelectorAll('.stat-box, .hero-stat-card');
        statElements.forEach(el => counterObserver.observe(el));
    });

    // ========================================
    // QUIZ FUNCTIONALITY
    // ========================================
    let currentQuestionIndex = 0;
    let userScore = 0;
    let quizAnswers = [];

    // Initialize quiz
    function initQuiz() {
        const quizContainer = document.querySelector('.quiz-container');
        quizContainer.innerHTML = '';
        
        pdfData.quiz.forEach((q, index) => {
            const quizCard = document.createElement('div');
            quizCard.className = 'quiz-card';
            if (index === 0) quizCard.classList.add('active');
            quizCard.dataset.question = index;
            
            quizCard.innerHTML = `
                <div class="quiz-question-text">${q.question}</div>
                <div class="quiz-options">
                    ${q.options.map((option, i) => `
                        <div class="quiz-option" data-option="${i}">${option}</div>
                    `).join('')}
                </div>
                <div class="quiz-feedback"></div>
            `;
            
            quizContainer.appendChild(quizCard);
        });
        
        // Add click handlers to options
        document.querySelectorAll('.quiz-option').forEach(option => {
            option.addEventListener('click', handleOptionClick);
        });
        
        updateQuizProgress();
    }

    // Handle option selection
    function handleOptionClick(e) {
        const selectedOption = e.target;
        const questionCard = selectedOption.closest('.quiz-card');
        const questionIndex = parseInt(questionCard.dataset.question);
        const selectedAnswer = parseInt(selectedOption.dataset.option);
        const correctAnswer = pdfData.quiz[questionIndex].correct;
        
        // Disable all options
        questionCard.querySelectorAll('.quiz-option').forEach(opt => {
            opt.classList.add('disabled');
        });
        
        // Mark selected option
        selectedOption.classList.add('selected');
        
        // Check if answer is correct
        const isCorrect = selectedAnswer === correctAnswer;
        
        setTimeout(() => {
            if (isCorrect) {
                selectedOption.classList.add('correct');
                userScore++;
                showFeedback(questionCard, true, pdfData.quiz[questionIndex].explanation);
            } else {
                selectedOption.classList.add('wrong');
                // Show correct answer
                questionCard.querySelectorAll('.quiz-option')[correctAnswer].classList.add('correct');
                showFeedback(questionCard, false, pdfData.quiz[questionIndex].explanation);
            }
            
            quizAnswers[questionIndex] = {
                selected: selectedAnswer,
                correct: correctAnswer,
                isCorrect: isCorrect
            };
            
            // Update score display
            document.getElementById('quiz-score').textContent = userScore;
            
            // Enable next button
            document.getElementById('nextBtn').disabled = false;
        }, 300);
    }

    // Show feedback
    function showFeedback(card, isCorrect, explanation) {
        const feedback = card.querySelector('.quiz-feedback');
        feedback.className = 'quiz-feedback show ' + (isCorrect ? 'correct' : 'wrong');
        feedback.innerHTML = `
            <strong>${isCorrect ? '✅ Correct!' : '❌ Incorrect'}</strong><br>
            ${explanation}
        `;
    }

    // Update quiz progress
    function updateQuizProgress() {
        const totalQuestions = pdfData.quiz.length;
        const progress = ((currentQuestionIndex + 1) / totalQuestions) * 100;
        
        document.querySelector('.quiz-progress-fill').style.width = progress + '%';
        document.getElementById('quiz-current').textContent = currentQuestionIndex + 1;
        document.getElementById('quiz-total').textContent = totalQuestions;
        
        // Update button states
        document.getElementById('prevBtn').disabled = currentQuestionIndex === 0;
        document.getElementById('nextBtn').disabled = !quizAnswers[currentQuestionIndex];
        
        // Change next button text on last question
        const nextBtn = document.getElementById('nextBtn');
        if (currentQuestionIndex === totalQuestions - 1 && quizAnswers[currentQuestionIndex]) {
            nextBtn.textContent = 'Finish Quiz 🎉';
        } else {
            nextBtn.textContent = 'Next ➡';
        }
    }

    // Navigate to next question
    function nextQuestion() {
        const totalQuestions = pdfData.quiz.length;
        
        if (currentQuestionIndex < totalQuestions - 1) {
            // Hide current question
            document.querySelectorAll('.quiz-card')[currentQuestionIndex].classList.remove('active');
            
            // Show next question
            currentQuestionIndex++;
            document.querySelectorAll('.quiz-card')[currentQuestionIndex].classList.add('active');
            
            updateQuizProgress();
        } else {
            // Quiz completed
            showQuizComplete();
        }
    }

    // Navigate to previous question
    function prevQuestion() {
        if (currentQuestionIndex > 0) {
            // Hide current question
            document.querySelectorAll('.quiz-card')[currentQuestionIndex].classList.remove('active');
            
            // Show previous question
            currentQuestionIndex--;
            document.querySelectorAll('.quiz-card')[currentQuestionIndex].classList.add('active');
            
            updateQuizProgress();
        }
    }

    // Show quiz completion screen
    function showQuizComplete() {
        const totalQuestions = pdfData.quiz.length;
        const percentage = (userScore / totalQuestions) * 100;
        
        // Hide quiz container and actions
        document.querySelector('.quiz-container').style.display = 'none';
        document.querySelector('.quiz-actions').style.display = 'none';
        document.querySelector('.quiz-progress-bar').style.display = 'none';
        document.querySelector('.quiz-status').style.display = 'none';
        
        // Show completion screen
        const completeScreen = document.getElementById('quizComplete');
        completeScreen.style.display = 'block';
        
        // Update score
        document.getElementById('finalScore').textContent = userScore;
        document.getElementById('finalTotal').textContent = totalQuestions;
        
        // Show message based on score
        const messageElement = document.getElementById('completeMessage');
        if (percentage === 100) {
            messageElement.innerHTML = '🌟 <strong>Perfect Score!</strong> You are a Policybazaar expert! 🎓';
            triggerConfetti(150);
        } else if (percentage >= 80) {
            messageElement.innerHTML = '🎉 <strong>Excellent!</strong> You have a great understanding of Policybazaar! 👏';
            triggerConfetti(100);
        } else if (percentage >= 60) {
            messageElement.innerHTML = '👍 <strong>Good Job!</strong> You learned quite a bit about Policybazaar! 💪';
            triggerConfetti(50);
        } else {
            messageElement.innerHTML = '📚 <strong>Keep Learning!</strong> Review the content and try again! 💡';
        }
        
        // Save score to localStorage
        localStorage.setItem('policybazaarQuizScore', userScore);
        localStorage.setItem('policybazaarQuizTotal', totalQuestions);
    }

    // Restart quiz
    function restartQuiz() {
        currentQuestionIndex = 0;
        userScore = 0;
        quizAnswers = [];
        
        // Hide completion screen
        document.getElementById('quizComplete').style.display = 'none';
        
        // Show quiz elements
        document.querySelector('.quiz-container').style.display = 'block';
        document.querySelector('.quiz-actions').style.display = 'flex';
        document.querySelector('.quiz-progress-bar').style.display = 'block';
        document.querySelector('.quiz-status').style.display = 'flex';
        
        // Reset score display
        document.getElementById('quiz-score').textContent = '0';
        
        // Reinitialize quiz
        initQuiz();
    }

    // Initialize quiz on page load
    document.addEventListener('DOMContentLoaded', () => {
        initQuiz();
        
        // Add event listeners to navigation buttons
        document.getElementById('nextBtn').addEventListener('click', nextQuestion);
        document.getElementById('prevBtn').addEventListener('click', prevQuestion);
        document.getElementById('restartQuiz').addEventListener('click', restartQuiz);
    });

    // ========================================
    // CONFETTI ANIMATION
    // ========================================
    function triggerConfetti(particleCount = 100) {
        const canvas = document.getElementById('confettiCanvas');
        const ctx = canvas.getContext('2d');
        
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        canvas.style.display = 'block';
        
        const particles = [];
        const colors = ['#667eea', '#764ba2', '#f093fb', '#f5576c', '#4facfe', '#00f2fe', '#43e97b', '#38f9d7'];
        
        // Create particles
        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height - canvas.height,
                r: Math.random() * 6 + 3,
                d: Math.random() * particleCount + 10,
                color: colors[Math.floor(Math.random() * colors.length)],
                tilt: Math.random() * 10 - 10,
                tiltAngle: 0,
                tiltAngleIncrement: Math.random() * 0.1 + 0.05
            });
        }
        
        function drawParticles() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            particles.forEach((p, index) => {
                ctx.beginPath();
                ctx.lineWidth = p.r / 2;
                ctx.strokeStyle = p.color;
                ctx.moveTo(p.x + p.tilt + p.r, p.y);
                ctx.lineTo(p.x + p.tilt, p.y + p.tilt + p.r);
                ctx.stroke();
                
                // Update particle position
                p.tiltAngle += p.tiltAngleIncrement;
                p.y += (Math.cos(p.d) + 3 + p.r / 2) / 2;
                p.tilt = Math.sin(p.tiltAngle) * 15;
                
                // Remove particle if it's off screen
                if (p.y > canvas.height) {
                    particles.splice(index, 1);
                }
            });
            
            if (particles.length > 0) {
                requestAnimationFrame(drawParticles);
            } else {
                canvas.style.display = 'none';
            }
        }
        
        drawParticles();
    }

    // ========================================
    // ROTATING TIPS IN FOOTER
    // ========================================
    let currentTipIndex = 0;

    function rotateTips() {
        const tipElement = document.querySelector('.tip-text');
        
        setInterval(() => {
            // Fade out
            tipElement.style.animation = 'none';
            tipElement.offsetHeight; // Trigger reflow
            
            // Change text
            setTimeout(() => {
                currentTipIndex = (currentTipIndex + 1) % pdfData.tips.length;
                tipElement.textContent = pdfData.tips[currentTipIndex];
                tipElement.style.animation = 'tipFadeIn 1s ease forwards';
            }, 100);
        }, 5000);
    }

    document.addEventListener('DOMContentLoaded', rotateTips);

    // ========================================
    // SMOOTH SCROLL FOR NAVIGATION
    // ========================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ========================================
    // NAVBAR SCROLL EFFECT
    // ========================================
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const navbar = document.getElementById('navbar');
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            navbar.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.12)';
        } else {
            navbar.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.08)';
        }
        
        lastScroll = currentScroll;
    });

    // ========================================
    // LOCAL STORAGE - Quiz Progress
    // ========================================
    function saveQuizProgress() {
        const progressData = {
            currentQuestion: currentQuestionIndex,
            score: userScore,
            answers: quizAnswers,
            timestamp: Date.now()
        };
        localStorage.setItem('policybazaarQuizProgress', JSON.stringify(progressData));
    }

    function loadQuizProgress() {
        const savedProgress = localStorage.getItem('policybazaarQuizProgress');
        if (savedProgress) {
            const data = JSON.parse(savedProgress);
            // Check if progress is less than 24 hours old
            if (Date.now() - data.timestamp < 86400000) {
                return data;
            }
        }
        return null;
    }

    // ========================================
    // CONSOLE EASTER EGG
    // ========================================
    console.log('%c🎉 Welcome to Policybazaar Learning Hub!', 'font-size: 24px; color: #667eea; font-weight: bold; text-shadow: 2px 2px 4px rgba(0,0,0,0.2);');
    console.log('%c📚 Making Insurance Education Fun & Interactive!', 'font-size: 16px; color: #764ba2; font-weight: 600;');
    console.log('%c💡 Built with vanilla HTML, CSS & JavaScript', 'font-size: 14px; color: #4facfe;');
    console.log('%c🚀 Explore, Learn, and Test Your Knowledge!', 'font-size: 14px; color: #43e97b;');
    console.log('%c\n💙 Did you know? You can check your quiz score anytime by typing: localStorage.getItem("policybazaarQuizScore")', 'font-size: 12px; color: #666;');

    // ========================================
    // PERFORMANCE MONITORING
    // ========================================
    window.addEventListener('load', () => {
        const loadTime = performance.now();
        console.log(`%c⚡ Page loaded in ${loadTime.toFixed(2)}ms`, 'color: #00c853; font-weight: bold;');
    });

    // ========================================
    // ACCESSIBILITY ENHANCEMENTS
    // ========================================
    // Keyboard navigation for quiz options
    document.addEventListener('keydown', (e) => {
        const activeCard = document.querySelector('.quiz-card.active');
        if (!activeCard) return;
        
        const options = activeCard.querySelectorAll('.quiz-option:not(.disabled)');
        
        // Number keys 1-4 to select options
        if (e.key >= '1' && e.key <= '4') {
            const index = parseInt(e.key) - 1;
            if (options[index]) {
                options[index].click();
            }
        }
        
        // Enter key for next button
        if (e.key === 'Enter' && !document.getElementById('nextBtn').disabled) {
            document.getElementById('nextBtn').click();
        }
        
        // Backspace for previous button
        if (e.key === 'Backspace' && !document.getElementById('prevBtn').disabled) {
            e.preventDefault();
            document.getElementById('prevBtn').click();
        }
    });

    // ========================================
    // RESPONSIVE IMAGE LOADING
    // ========================================
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.classList.add('loaded');
                        imageObserver.unobserve(img);
                    }
                }
            });
        });
        
        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }

    // ========================================
    // PRINT STYLES HANDLER
    // ========================================
    window.addEventListener('beforeprint', () => {
        console.log('Preparing page for printing...');
        // Could add logic to show all collapsed sections, etc.
    });

    // ========================================
    // ERROR HANDLING
    // ========================================
    window.addEventListener('error', (e) => {
        console.error('An error occurred:', e.error);
    });

    // ========================================
    // END OF SCRIPT
    // ========================================
    console.log('%c✅ All scripts loaded successfully!', 'color: #00c853; font-weight: bold;');
