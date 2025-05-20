


document.addEventListener("DOMContentLoaded", function(e){
    animationOnHandler();
    headerScrollHandler();
    yearAni();
})
document.addEventListener("scroll", function(){
    animationOnHandler();
})

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
                    entry.target.classList.remove('on');
                }
            });
        }, {
            threshold: 0.5 // Adjust threshold as needed
        });
        
        // Observe each .ani element
        countList.forEach(element => observer.observe(element));
    }
}