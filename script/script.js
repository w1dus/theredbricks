

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
    subCircleBoxHalfImgBox();
    qnaSlideToggle();
    Sub04_1_progressSec();
    sub04_1_scroll();
    QnaToggle();
    sub02_2_count();
    qnaHandle2();
    floatingMenu();
})
const QnaToggle = () => {
    $('.sub04_2 .contentSection .qnaList .qBox').click(function(){
        $('.sub04_2 .contentSection .qnaList .qBox').not(this).closest('li').removeClass('active');
        $('.sub04_2 .contentSection .qnaList .qBox').not(this).siblings('.aBox').slideUp();
        $(this).closest('li').toggleClass('active');
        $(this).siblings('.aBox').slideToggle();
    })

    $('.sub04_2 .contentSection .tabList .item').click(function(){
        const clickNumber = $(this).closest('li').index();
        $(this).toggleClass('active')
        $('.sub04_2 .contentSection .tabList .item').removeClass('active');
        $('.sub04_2 .contentSection .contentList > li').removeClass('active');
        $('.sub04_2 .contentSection .contentList > li').eq(clickNumber).addClass('active')
    })
}

const sub04_1_scroll = () => {
    const mm = gsap.matchMedia();
    

    if(document.querySelector(".sub04_1 .pointSec")){
        mm.add("(min-width: 950px)", () => {
            // 950px 이상일 때 실행할 애니메이션
            gsap.to(".sub04_1 .pointSec", {
              scrollTrigger: {
                trigger: ".sub04_1 .pointSec",
                start: "top 0%",
                end: "bottom 20%",
                pin: true,
                anticipatePin: 1,
                markers: false,
                onEnter: () => {
                  document.querySelector(".sub04_1 .pointSec").classList.add("on");
                },
                onEnterBack: () => {
                  document.querySelector(".sub04_1 .pointSec").classList.add("on");
                },
                onLeaveBack: () => {
                  document.querySelector(".sub04_1 .pointSec").classList.remove("on");
                },
              }
          });
        
          gsap.utils.toArray(".sub04_1 .contentSection").forEach((section) => {
              const inner = section.querySelector(".inner");
              const contentBox = section.querySelector(".halfBox .contentBox");
              const imgText = section.querySelector(".imgBox .textBox");
        
              gsap.fromTo(
                contentBox,
                { y: '30%', opacity: 0 },
                {
                  y: 0,
                  opacity: 1,
                  duration: 0.2,
                  ease: "power2.out",
                  scrub: true,
                  scrollTrigger: {
                    trigger: section,
                    start: "top top",
                    end: "bottom 0%",
                    scrub: true,
                  }
                }
              );
        
              gsap.fromTo(
                imgText,
                { y: '100%', opacity: 0 },
                {
                  y: 0,
                  opacity: 1,
                  duration: 1.5,
                  ease: "power2.out",
                  scrub: true,
                  scrollTrigger: {
                    trigger: section,
                    start: "top top",
                    end: "bottom top", 
                    scrub: true,
                  }
                }
              );
        
              gsap.from(inner, {
                opacity: 0,
                y: 0,
                duration: 0.4,
                ease: "power2.out",
                scrollTrigger: {
                  trigger: section,
                  start: "top top",
                  end : "bottom top",
                  toggleActions: "play none none none",
                }
                
              });
        
              ScrollTrigger.create({
                trigger: section,
                start: "top top",
                end: "bottom 0%",
                pin: true,
                anticipatePin: 1,
                snap: {
                  snapTo: 1,
                  duration: 0.5,
                  ease: "power1.inOut"
                },
                // markers: true,
              });
            });
        
            // 반환할 클린업 함수 (matchMedia가 조건 바뀔 때 자동으로 호출됨)
            return () => {
              ScrollTrigger.getAll().forEach(trigger => trigger.kill());
              // 스타일 초기화 등 필요 시 여기서 처리
              document.querySelectorAll(".sub04_1 .contentSection .inner").forEach(section => {
                section.style.position = "static";
                section.style.top = "0";
                section.style.left = "0";
                section.style.opacity = "1";
              });
            };
          });
      
          const moAni = () => {
              gsap.utils.toArray(".sub04_1 .moAni").forEach(elem => {
                ScrollTrigger.create({
                  trigger: elem,
                  start: "top 80%", 
                  end: "bottom 0%", 
                  once: true,
                  toggleClass: { targets: elem, className: "on" },
                  once: false, //
                });
              });
          };
        
          mm.add("(max-width: 949px)", () => {
            // 950px 미만일 때 실행할 코드 (애니메이션 해제 및 기본 상태 유지)
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
            document.querySelectorAll(".sub04_1 .contentSection .inner").forEach(section => {
              section.style.position = "static";
              section.style.top = "0";
              section.style.left = "0";
              section.style.opacity = "1";
            });
              moAni();
          });
    }
    
    
    window.addEventListener('resize', ScrollTrigger.update);
};

const Sub04_1_progressSec = () => {
    // .sub04_1 .progressSec .t1 .text
    gsap.to(".sub04_1 .progressSec .t1 .text", {
        xPercent: -100,
        ease: "none",
        duration: 15,
        repeat: -1,
        modifiers: {
          yPercent: gsap.utils.wrap(-100, 0)
        }
    });

    $('.sub04_1 .progressSec .progressBox .number').each(function() {
        var $this = $(this),
            countTo = $this.attr('data-count');
        $({ countNum: $this.text()}).animate({
          countNum: countTo
        },
        {
          duration: 1000,
          easing:'linear',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
          }
        });  
    });

}

const qnaSlideToggle = () => {
    $('.sub02_4 .qnaSec .halfBox .qnaList .qBox').click(function(){
        $(this).parent('li').toggleClass('on')
        $(this).siblings('.aBox').slideToggle();
    })
}


const subCircleBoxHalfImgBox = () => {
    $(document).ready(function () {
        const $images = $('.sub02 .circleWrap .content');
        let current = 0;
        setInterval(function () {
          // 모든 이미지에서 'on' 클래스 제거
          $images.removeClass('on');
          // 현재 이미지에 'on' 클래스 추가
          $images.eq(current).addClass('on');
          // 다음 이미지로 인덱스 이동
          current = (current + 1) % $images.length;
        }, 1000); // 1초 간격
      });
}

const sub01_1_circleSec = () => {
    gsap.to(".sub01_1 .circleSec", {
      scrollTrigger: {
        trigger: ".sub01_1 .circleSec", // trigger
        start: "top top", // 첫 번째 start
        end: "bottom top", // 첫 번째 end
        pin: true, // 해당 섹션 고정 (한 번만 적용)
        markers: false, // 디버그용 마커 표시
        onUpdate: (self) => {
            if (self.direction === 1) { // 스크롤 내릴 때
              if (self.progress > 0.75) {
                $('.sub01_1 .circleSec .halfBox:nth-child(4)').addClass('on');
              } else if (self.progress > 0.5) {
                $('.sub01_1 .circleSec .halfBox:nth-child(3)').addClass('on');
              }else if(self.progress > 0.25){
                $('.sub01_1 .circleSec .halfBox:nth-child(2)').addClass('on');
              }
            } else if (self.direction === -1) { // 스크롤 올릴 때
              if (self.progress < 0.75) {
                $('.sub01_1 .circleSec .halfBox:nth-child(4)').removeClass('on');
              }
              if (self.progress < 0.5) {
                $('.sub01_1 .circleSec .halfBox:nth-child(3)').removeClass('on');
              }
              if (self.progress < 0.25) {
                $('.sub01_1 .circleSec .halfBox:nth-child(2)').removeClass('on');
              }
            }
        }
      }
    });
};

  

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
// const logoSlide = () => {
//     gsap.to(".logoSlideSec .logoWrap .logoList:nth-child(2n-1) > li", {
//         yPercent: -1000,
//         ease: "none",
//         duration: 30,
//         repeat: -1,
//         modifiers: {
//           yPercent: gsap.utils.wrap(-100, 0)
//         }
//     });
    

//     gsap.to(".logoSlideSec .logoWrap .logoList:nth-child(2n) > li", {
//         yPercent: 1000,
//         ease: "none",
//         duration: 30,
//         repeat: -1,
//         modifiers: {
//           yPercent: gsap.utils.wrap(-100, 0)
//         }
//     });
// }

const logoSlide = () => {
  document.querySelectorAll(".logoSlideSec .logoWrap .logoList").forEach((list, i) => {
    // 이미 복제한 적 없으면 복제
    if (!list.dataset.cloned) {
      list.innerHTML += list.innerHTML;
      list.dataset.cloned = "true";
    }

    // 홀수/짝수 라인 방향 다르게
    const direction = (i % 2 === 0) ? "-50%" : "50%";

    gsap.to(list, {
      y: direction,
      duration: 30,
      ease: "none",
      repeat: -1
    });
  });
};

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
        header.removeClass(' on');
        $('header .subMenu').stop(true, true).slideUp();
    });
}

// 8/11 sub02_2 카운트
const sub02_2_count = () => {
  $('.counting').each(function() {
    var $this = $(this),
        countTo = $this.attr('data-count');
    
    $({ countNum: $this.text()}).animate({
      countNum: countTo
    },
  
    {
  
      duration: 800,
      easing:'linear',
      step: function() {
        $this.text(Math.floor(this.countNum));
      },
      complete: function() {
        $this.text(this.countNum);
        //alert('finished');
      }
  
    });  
    
  
  });
}
// sub02_3 qna

// const qnaHandle2 = () => {
//     $('.answer_box').hide();

//     $('.plus_btn').click(function(){
//       $(this).closest('.question_box').next('.answer_box').slideToggle();
//     })
    
//     $('.minus_btn').click(function(){
//       $(this).parent('.answer_box').slideUp();
//     })
// }

const qnaHandle2 = () => {
  $('.answer_box').hide(); // 처음엔 전부 닫기

  $('.plus_btn').click(function(){
    const targetAnswer = $(this).closest('.question_box').next('.answer_box');

    // 현재 클릭한 answer_box를 제외하고 모두 닫기
    $('.answer_box').not(targetAnswer).slideUp();

    // 현재 클릭한 answer_box 토글
    targetAnswer.slideToggle();
  });

  $('.minus_btn').click(function(){
    $(this).closest('.answer_box').slideUp();
  });
}

// floating menu
const floatingMenu = () => {
  $('.floating_menu .toggleBtn').click(function(){
    $('.f_list').toggleClass('on');
    $('.floating_menu ul').toggleClass('on');
    // $(this).addClass('on');
    // $(this).find('.open_icon').addClass('on');
    $('.floating_menu ul li.toggleBtn .item2 .close_icon').toggleClass('on');
    $('.floating_menu ul li.toggleBtn .item2 .open_icon').toggleClass('on');
  })
}
