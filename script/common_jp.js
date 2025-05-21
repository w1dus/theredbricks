


document.addEventListener("DOMContentLoaded", function(e){
    animationOnHandler();
    headerScrollHandler();
    yearAni();
    countingNumberHandler();
    mainHeader();
})
document.addEventListener("scroll", function(){
    animationOnHandler();
})

const mainHeader = () => {
    $('header.main').addClass('show')
}

const countingNumberHandler = () => {
    const countList = document.querySelector('.main .aboutSec');
    const numbers = document.querySelectorAll('.main .aboutSec .main_title2 .count');
    const duration = 1; // Duration in seconds
    if(countList){
        // Function to reset numbers to 0
        function resetNumbers() {
            numbers.forEach(number => {
                number.textContent = '0';
            });
        }
    
        // Function to format numbers with commas
        function formatNumber(num) {
            return num.toLocaleString();
        }
    
        // Function to animate counting
        function animateCount() {
            numbers.forEach(number => {
                const target = +number.getAttribute('data-count');
                const increment = target / (duration * 60); // 60 frames per second
                let current = 0;
    
                function updateCount() {
                    current += increment;
                    if (current < target) {
                        number.textContent = formatNumber(Math.ceil(current));
                        requestAnimationFrame(updateCount);
                    } else {
                        number.textContent = formatNumber(target);
                    }
                }
                updateCount();
            });
        }
    
        // Intersection Observer to detect visibility
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    countList.classList.add('on');
                    animateCount();
                } else {
                    countList.classList.remove('on');
                    resetNumbers();
                }
            });
        }, {
            threshold: 0.1 // Adjust threshold as needed
        });
        observer.observe(countList);
    }
}

const yearAni = () => {
    const countList = document.querySelectorAll('.year_ani');
  
    if (countList.length) {
      const onScroll = () => {
        const viewportMiddle = window.innerHeight / 2;
  
        let closestEl = null;
        let closestDistance = Infinity;
  
        countList.forEach(el => {
          const rect = el.getBoundingClientRect();
          const elementMiddle = rect.top + rect.height / 2;
          const distance = Math.abs(viewportMiddle - elementMiddle);
  
          if (distance < closestDistance) {
            closestDistance = distance;
            closestEl = el;
          }
        });
  
        // 모든 요소에서 .on 제거
        countList.forEach(el => el.classList.remove('on'));
  
        // 가장 가까운 요소에만 .on 추가
        if (closestEl) {
          closestEl.classList.add('on');
        }
      };
  
      window.addEventListener('scroll', onScroll);
      window.addEventListener('resize', onScroll);
      onScroll();
    }
  };
  
  
const headerScrollHandler = () => {
    /* header */
    const header_main = document.querySelector('header');

    if(header_main){
        document.addEventListener("scroll", function(){
            let scroll_top = window.scrollY;
            if(scroll_top > 0){
                header_main.classList.add("whiteBg");
            }else{
                header_main.classList.remove("whiteBg");
            }
        })
    }
}
  

const animationOnHandler = () => {
    const countList = document.querySelectorAll('.ani');
    if (countList.length) {
        // Intersection Observer to detect visibility
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('on');
                } else {
                    // entry.target.classList.remove('on');
                }
            });
        }, {
            threshold: 0.1 // Adjust threshold as needed
        });
        
        // Observe each .ani element
        countList.forEach(element => observer.observe(element));
    }
}