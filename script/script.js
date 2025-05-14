

document.addEventListener("DOMContentLoaded", function(e){

    pcMenuSlide();
    youtubeBackground();
    mobileMenu();
    privacyUsePopup();
    paralSlideSection();
    howRedBricks();
    logoSlide();
    positiveSection();
    sub01_1_scrollText();
    sub01_1_circleSec();

})

const sub01_1_circleSec = () => {
    gsap.to(".sub01_1 .circleSec", {
      scrollTrigger: {
        trigger: ".sub01_1 .circleSec", // trigger
        start: "top top", // 첫 번째 start
        end: "bottom top", // 첫 번째 end
        pin: true, // 해당 섹션 고정 (한 번만 적용)
        markers: true, // 디버그용 마커 표시
        onUpdate: (self) => {
            if (self.direction === 1) { // 스크롤 내릴 때
              if (self.progress > 0.66) {
                $('.sub01_1 .circleSec .halfBox:nth-child(3)').addClass('on');
              } else if (self.progress > 0.33) {
                $('.sub01_1 .circleSec .halfBox:nth-child(2)').addClass('on');
              }
            } else if (self.direction === -1) { // 스크롤 올릴 때
              if (self.progress < 0.66) {
                $('.sub01_1 .circleSec .halfBox:nth-child(3)').removeClass('on');
              }
              if (self.progress < 0.33) {
                $('.sub01_1 .circleSec .halfBox:nth-child(2)').removeClass('on');
              }
            }
        }
      }
    });
  };

  
// const sub01_1_circleSec = () => {
//     gsap.to(".sub01_1 .circleSec", {
//         scrollTrigger: {
//           trigger: ".sub01_1 .circleSec", // trigger
//           start: "top ", // 첫 번째 start
//           end: "bottom top", // 첫 번째 end
//           pin: true, // 해당 섹션 고정 (한 번만 적용)
//           markers: true, // 디버그용 마커 표시
//           onUpdate: (self) => {
//             console.log("현재 스크롤 위치:", self.scroll()); // 실제 스크롤 위치를 출력
//             // 원하는 조건을 설정하여 효과를 줄 수 있습니다.
//             if (self.progress > 0.66) {
//                 console.log("1")
//               $('.sub01_1 .circleSec .halfBox:nth-child(3)').addClass('on')
//             }else if (self.progress > 0.33) {
//               // 예시: 스크롤이 50% 이상 진행되었을 때 특정 효과 추가
//               console.log("2")
//               $('.sub01_1 .circleSec .halfBox:nth-child(2)').addClass('on')

//             }
//           }
//         }
//     });
    
    
      
// };
  
  
const sub01_1_scrollText= () =>{
        // 01. 세로로 무한으로 흐르는 슬라이드 
    // GSAP 애니메이션
    gsap.to(".sub .scrollTextSec .textBox:nth-child(2n-1) .textList > li", {
        xPercent: -100,
        ease: "none",
        duration: 15,
        repeat: -1,
        modifiers: {
          yPercent: gsap.utils.wrap(-100, 0)
        }
    });
    gsap.to(".sub .scrollTextSec .textBox:nth-child(2n) .textList > li", {
        xPercent: 100,
        ease: "none",
        duration: 20,
        repeat: -1,
        modifiers: {
          yPercent: gsap.utils.wrap(-100, 0)
        }
    });
}
const positiveSection = () => {
    ScrollTrigger.create({
        trigger: ".main .positiveSection",
        start: "top 90%",
        end: "top center",
        markers: false,
        onEnter: () => {
          $(".main .positiveSection")?.addClass("on");
        }
    });
}
const logoSlide = () => {

    // 01. 세로로 무한으로 흐르는 슬라이드 
    // GSAP 애니메이션
    gsap.to(".logoSlideSec .logoWrap .logoList:nth-child(2n-1) > li", {
        yPercent: -1000,
        ease: "none",
        duration: 30,
        repeat: -1,
        modifiers: {
          yPercent: gsap.utils.wrap(-100, 0)
        }
    });


    gsap.to(".logoSlideSec .logoWrap .logoList:nth-child(2n) > li", {
        yPercent: 1000,
        ease: "none",
        duration: 30,
        repeat: -1,
        modifiers: {
          yPercent: gsap.utils.wrap(-100, 0)
        }
    });
}
const howRedBricks = () => {
    const section = document.querySelector('.howRedBricksSection')

    if(section){
        gsap.to(".howRedBricksSection .textBox.redBg", {
            duration: 2,
            x: "-60%",
            scrollTrigger: {
                scrub: 0.5,    //true, 1, 2,....
                trigger: ".howRedBricksSection .textBox.redBg",
                start: "bottom 80%",
                end: "bottom 20%", 
                markers: false,
            }
        });

        gsap.to(".howRedBricksSection .textBox.mintBg", {
            duration: 2,
            x: "60%",
            scrollTrigger: {
                scrub: 0.5,    //true, 1, 2,....
                trigger: ".howRedBricksSection .textBox.mintBg",
                start: "bottom 120%",
                end: "bottom 20%", 
                markers: false,
            }
        });
    }

}
const paralSlideSection = () => {
    // 슬라이드
    var swiper = new Swiper(".paralSlideSection .slideWrap .swiper", {
        loop : true,
        centeredSlides: true,
        spaceBetween: 130,
        navigation: {
          nextEl: ".paralSlideSection .slideBox .pnBtnWrap .nextBtn",
          prevEl: ".paralSlideSection .slideBox .pnBtnWrap .prevBtn",
        },
        breakpoints: {
            0: {
              slidesPerView: 1.5,
              spaceBetween: 10,
            },
            650: {
                slidesPerView: 1.5,
                spaceBetween: 10,
            },
            950: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 1,
              spaceBetween: 130,
            },
        },
    });

    // 패럴렉스
    const slideWrap = document.querySelector('.paralSlideSection')

    if (slideWrap) {

        gsap.to(".paralSlideSection .hiddenWrap", {
            width: "20vw",
            height: "20vw",
            maxWidth: "unset",
            maxHeight: "unset",
        });

        // 스크롤에 따라 scrollBox를 고정 + 확대/축소 같은 애니메이션 하고 싶을 때
        gsap.to(slideWrap, {
            scrollTrigger: {
                trigger: slideWrap,
                start: "top 0%",  
                end: "bottom top",  
                pin: true,        
                markers: false,
            },
        });

        gsap.to(slideWrap,  
            {
            scrollTrigger: {
                trigger: slideWrap,
                start: "top 0%",   
                end: "bottom top", 
                markers: false,
                onEnter: () => {
                    gsap.to(".paralSlideSection .hiddenWrap", {
                        duration: 1,  // 애니메이션 지속 시간
                        width: "100%", // 애니메이션으로 width 변경
                        height: "auto",   // 애니메이션으로 height 변경
                        overflow: "hidden",
                        ease: "power2.out", // 이징 효과 (선택 사항)
                        onUpdate: () => {
                            // 애니메이션 완료 후 overflow 제거
                            swiper.update();
                        }
                    });

                },
                onLeaveBack: () => {
                    gsap.to(".paralSlideSection .hiddenWrap", {
                        // duration: 1,
                        width: "20vw",  // 원래 크기
                        height: "20vw", // 원래 크기
                        // ease: "power2.in" // 이징 효과 (선택 사항)
                    });
                }
            },
        });
    
    } else {
        return false;
    }
    

}
const privacyUsePopup = () => {
    $('.privacyPopupBtn').click(function(e){
        e.preventDefault();
        $('#privacyPopup').addClass('active');
    })
    $('.privacyPopup .contentWrap .titleBox .closeBtn').click(function(){
        $('.privacyPopup').removeClass('active')
    })
    $('.privacyPopup').click(function(){
        $('.privacyPopup').removeClass('active')
    })
    $('.privacyPopup .contentWrap').click(function(e){
        e.stopPropagation()
    })
}
const youtubeBackground = () => {
    $('[data-vbg]').youtube_background(); // 실행
}
const mobileMenu = () => {
    $('header .slideMenuBtn').click(function(){
        $(this).toggleClass('on');
        $('.mobileMenu').slideToggle();
        $('header').toggleClass('whiteBg');
    })
    $('.mobileMenu .item').click(function(){
        $(this).siblings('.subMenu').slideToggle();
        $(this).find('.plus_minus').toggleClass('on')
    })
}
const pcMenuSlide = () => {
    const header = $('header');
    const menuItems = $('header .menuList .item');
    const menuLi = $('header .menuList > li');

    menuItems.on('mouseenter', function () {
        header.addClass('on');
        menuLi.find('.subMenu').stop(true, true).slideUp();
        const index = $(this).closest('li').index();
        menuLi.eq(index).find('.subMenu').stop(true, true).slideDown();
    });

    // header 전체에서 마우스가 벗어나면
    header.on('mouseleave', function () {
        header.removeClass('on');
        $('header .subMenu').stop(true, true).slideUp();
    });
}

