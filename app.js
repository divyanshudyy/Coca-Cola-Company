let codepen = () => {
  gsap.registerPlugin(ScrollTrigger);
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
    lerp: 0.02,
  });
  locoScroll.on("scroll", ScrollTrigger.update);
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
};
codepen();

let cursorEffect = () => {
  let cursor = document.querySelector("#cursor");
  document.querySelector("#main").addEventListener("mousemove", (e) => {
    gsap.to(cursor, {
      x: e.x,
      y: e.y,
      duration: 1,
      ease: "back.out",
    });
  });

  let video = () => {
    document
      .querySelector("#page1 video")
      .addEventListener("mouseenter", (e) => {
        gsap.to(cursor, {
          scale: 1,
          opacity: 1,
          background: "transparent",
          border: "2px solid #f40009",
          innerText: "Scroll",
        });
      });
    document
      .querySelector("#page1 video")
      .addEventListener("mouseleave", (e) => {
        gsap.to(cursor, {
          scale: 0,
          opacity: 0,
        });
      });
  };
  video();

  let pageOne = () => {
    document
      .querySelector("#landing-page")
      .addEventListener("mouseenter", (e) => {
        gsap.to(cursor, {
          scale: 1,
          opacity: 1,
          background: "transparent",
          border: "2px solid #f40009",
          innerText: "Scroll",
        });
      });
    document
      .querySelector("#landing-page")
      .addEventListener("mouseleave", (e) => {
        gsap.to(cursor, {
          scale: 0,
          opacity: 0,
        });
      });
  };
  pageOne();

  let pageTwo = () => {
    document.querySelector("#page2").addEventListener("mouseenter", (e) => {
      gsap.to(cursor, {
        scale: 0.8,
        opacity: 1,
        backgroundColor: "white",
        border: "none",
        innerText: "",
        mixBlendMode: "difference",
      });
    });

    document.querySelector("#page2").addEventListener("mouseleave", (e) => {
      gsap.to(cursor, {
        scale: 0,
        opacity: 0,
      });
    });
  };
  pageTwo();

  let page3 = () => {
    document.querySelector("#page3").addEventListener("mouseenter", () => {
      gsap.to(cursor, {
        scale: 0.4,
        opacity: 1,
        backgroundColor: "white",
        border: "none",
      });
    });

    document.querySelector("#page3").addEventListener("mouseleave", () => {
      gsap.to(cursor, {
        scale: 0,
        opacity: 0,
      });
    });
  };
  page3();

  let slider3 = () => {
    document
      .querySelector("#slider-container")
      .addEventListener("mouseenter", () => {
        gsap.to(cursor, {
          scale: 1,
          opacity: 1,
          backgroundColor: "#f40009",
          innerText: "View",
          mixBlendMode: "normal",
        });
      });

    document
      .querySelector("#slider-container")
      .addEventListener("mouseleave", () => {
        gsap.to(cursor, {
          scale: 0,
          opacity: 0,
        });
      });
  };
  slider3();

  let pageFour = () => {
    document.querySelector("#page4").addEventListener("mouseenter", () => {
      gsap.to(cursor, {
        scale: 0.5,
        opacity: 1,
        border: "none",
        background: "white",
        innerText: "",
        mixBlendMode: "difference",
      });
    });

    document.querySelector("#page4").addEventListener("mouseleave", (e) => {
      gsap.to(cursor, {
        scale: 0,
        opacity: 0,
      });
    });
  };
  pageFour();

  let contentFour1 = () => {
    document
      .querySelector("#content-box1 img")
      .addEventListener("mouseenter", () => {
        gsap.to(cursor, {
          scale: 1,
          opacity: 1,
          backgroundColor: "#f40009",
          innerText: "view",
          mixBlendMode: "normal",
        });
      });

    document
      .querySelector("#content-box1 img")
      .addEventListener("mouseleave", (e) => {
        gsap.to(cursor, {
          scale: 0.5,
          opacity: 1,
          border: "none",
          background: "white",
          innerText: "",
          mixBlendMode: "difference",
        });
      });
  };
  contentFour1();

  let contentFour2 = () => {
    document
      .querySelector("#content-box2 img")
      .addEventListener("mouseenter", () => {
        gsap.to(cursor, {
          scale: 1,
          opacity: 1,
          backgroundColor: "#f40009",
          innerText: "view",
          mixBlendMode: "normal",
        });
      });

    document
      .querySelector("#content-box2 img")
      .addEventListener("mouseleave", (e) => {
        gsap.to(cursor, {
          scale: 0.5,
          opacity: 1,
          border: "none",
          background: "white",
          innerText: "",
          mixBlendMode: "difference",
        });
      });
  };
  contentFour2();

  let contentFour3 = () => {
    document
      .querySelector("#content-box3 img")
      .addEventListener("mouseenter", () => {
        gsap.to(cursor, {
          scale: 1,
          opacity: 1,
          backgroundColor: "#f40009",
          innerText: "view",
          mixBlendMode: "normal",
        });
      });

    document
      .querySelector("#content-box3 img")
      .addEventListener("mouseleave", (e) => {
        gsap.to(cursor, {
          scale: 0.5,
          opacity: 1,
          border: "none",
          background: "white",
          innerText: "",
          mixBlendMode: "difference",
        });
      });
  };
  contentFour3();

  let pageFive = () => {
    document.querySelector("#page5").addEventListener("mouseenter", (e) => {
      gsap.to(cursor, {
        scale: 0.4,
        opacity: 1,

        backgroundColor: "white",
        border: "none",
        innerText: "",
        mixBlendMode: "difference",
      });
    });

    document.querySelector("#page5").addEventListener("mouseleave", (e) => {
      gsap.to(cursor, {
        scale: 0,
        opacity: 0,
      });
    });
  };
  pageFive();

  let page6h2 = () => {
    document.querySelector("#page6").addEventListener("mouseenter", () => {
      gsap.to(cursor, {
        scale: 0.5,
        opacity: 1,
        border: "none",
        background: "white",
        innerText: "",
        mixBlendMode: "difference",
      });
    });

    document.querySelector("#page6").addEventListener("mouseleave", (e) => {
      gsap.to(cursor, {
        scale: 0,
        opacity: 0,
      });
    });
  };
  page6h2();

  let pageSix = () => {
    document
      .querySelector("#page6 .news-container")
      .addEventListener("mouseenter", () => {
        gsap.to(cursor, {
          scale: 1,
          opacity: 1,
          backgroundColor: "#f40009",
          innerText: "Hover",
          mixBlendMode: "normal",
        });
      });

    document
      .querySelector("#page6 .news-container")
      .addEventListener("mouseleave", () => {
        gsap.to(cursor, {
          scale: 0.5,
          opacity: 1,
          border: "none",
          background: "white",
          innerText: "",
          mixBlendMode: "difference",
        });
      });
  };
  pageSix();

  let footer = () => {
    document.querySelector("#footer").addEventListener("mouseenter", (e) => {
      gsap.to(cursor, {
        scale: 0.5,
        opacity: 1,
        backgroundColor: "white",
        border: "none",
        innerText: "",
        mixBlendMode: "difference",
      });
    });

    document.querySelector("#footer").addEventListener("mouseleave", (e) => {
      gsap.to(cursor, {
        scale: 0,
        opacity: 0,
      });
    });
  };
  footer();
};
cursorEffect();

let wrapper = () => {
  gsap.to("#wrapper h2", {
    duration: 1,
    delay: 2,
    ease: "back.out",
    opacity: 0,
  });
  gsap.to("#wrapper #door1", {
    y: "-100%",
    height: 0,
    duration: 2,
    delay: 2,
    ease: "back.inOut(4.5)",
    filter: "drop-shadow(20px 20px 30px rgba(0, 0, 0, 1))",
  });
  gsap.to("#wrapper #door2", {
    y: "-120%",
    height: 0,
    duration: 2.6,
    delay: 2,
    ease: "back.inOut(0)",
  });
  gsap.to("#wrapper", {
    delay: 3,
    ease: "back.out",
    display: "none",
  });
};
wrapper();

let menu = () => {
  document.querySelector("#menu").addEventListener("click", () => {
    gsap.to("#menu-page", {
      transformOrigin: "top",
      height: "100vh",
      backgroundColor: "#f40009",
      duration: 1,
      ease: "power4.inOut",
    });
    gsap.from(".menu-links h2", {
      y: 50,
      bottom: 0,
      delay: 0.8,
      opacity: 0,
      repeat: 0,
    });
    gsap.from("#menu-page #sign", {
      opacity: 0,
      y: "40%",
      duration: 0.8,
      delay: 0.8,
    });
  });

  document.querySelector("#close").addEventListener("click", () => {
    gsap.to("#menu-page", {
      transformOrigin: "top",
      height: 0,
      backgroundColor: "#050505",
      duration: 1.3,
      ease: "power4.inOut",
      scrub: 1,
    });
    gsap.to("#menu-page #sign", {
      opacity: 1,
      y: "0%",
      duration: 1.3,
    });
  });
};
menu();

let tl = gsap.timeline();

let scroll = () => {
  tl.from("#scroll", {
    opacity: 0.8,
    scrollTrigger: {
      trigger: "landing-page",
      scroller: "#main",
      // markers: true,
      start: "bottom 100%",
      end: "100% 0%",
      scrub: 1,
    },
  });
};
scroll();

let navBar = () => {
  tl.from("#navbar", {
    opacity: 0,
    ease: "expoScale(0.5,7,none)",
    scrollTrigger: {
      trigger: "#landing-page",
      scroller: "#main",
      // markers: true,
      start: "top -40%",
      end: " bottom -38%",
      scrub: 1,
      duration: 1,
      delay: 1,
      stagger: -1,
    },
  });
};
navBar();

let page1 = () => {
  tl.from("#landing-page", {
    height: 0,
    transformOrigin: "center",
    scrollTrigger: {
      trigger: "#page1",
      scroller: "#main",
      // markers: true,
      start: "bottom 100%",
      end: "100% 0%",
      pin: true,
      scrub: 1,
    },
  });

  tl.from("#landing-page h2", {
    opacity: 0,
    scrollTrigger: {
      trigger: "landing-page",
      scroller: "#main",
      // markers: true,
      start: "bottom 100%",
      end: "100% 0%",
      pin: true,
      scrub: 1,
    },
  });

  tl.to("#landing-page , #page2", {
    backgroundColor: "#f40009",
    scrollTrigger: {
      trigger: "#overlay",
      scroller: "#main",
      // markers: "true",
      start: "top 30%",
      end: " 100% 0%",
      stagger: -1,
      delay: 0,
      duration: 0,
      ease: "power4.out",
      scrub: 1,
    },
  });
};
page1();

let page2 = () => {
  let timeline = gsap.timeline({
    scrollTrigger: {
      trigger: "#overlay",
      scroller: "#main",
      start: "top -28%",
      end: "+=150%",
      scrub: 1,
      // markers: true,
      stagger: 5,
      pin: "#page2",
      delay: 2,
    },
  });
  timeline.to("#textVision-hover .line1", {
    width: "100%",
    duration: 10,
  });
  timeline.to("#textVision-hover .line2", {
    width: "100%",
    duration: 10,
  });
  timeline.to("#textVision-hover .line3", {
    width: "100%",
    duration: 10,
  });
  tl.to(".text", {
    opacity: 1,
    scrollTrigger: {
      trigger: ".text",
      scroller: "#main",
      // markers: true,
      start: "top 100%",
      end: "bottom 40%",
      scrub: 1,
      duration: 0,
      delay: 0,
    },
  });
};
page2();

let page3 = () => {
  tl.from("#page3 #underline", {
    width: 0,
    delay: 0.5,
    duration: 7.5,
    scrollTrigger: {
      trigger: "#page3",
      scroller: "#main",
      // markers: true,
      start: "top 120%",
      scrub: 1,
    },
  });
  tl.from("#content-box1 #content h2", {
    y: 100,
    opacity: 0,
    ease: "power2.in",
    stagger: 5,
    scrollTrigger: {
      trigger: "#page3 #content-box1",
      scroller: "#main",
      // markers: true,
      start: "bottom 120%",
      end: "top 10%",
      scrub: 1,
    },
  });
  tl.from("#content-box2 #content h2", {
    y: 100,
    opacity: 0,
    ease: "power2.in",
    stagger: 5,
    scrollTrigger: {
      trigger: "#page3 #content-box2",
      scroller: "#main",
      // markers: true,
      start: "bottom 120%",
      end: "top 10%",
      scrub: 1,
    },
  });
  tl.from("#content-box3 #content h2", {
    y: 100,
    opacity: 0,
    ease: "power2.in",
    stagger: 5,
    scrollTrigger: {
      trigger: "#page3 #content-box3",
      scroller: "#main",
      // markers: true,
      start: "bottom 120%",
      end: "top 10%",
      scrub: 1,
    },
  });
  tl.from(".content-box", {
    opacity: 0,
    stagger: 3,
    scrollTrigger: {
      trigger: "#page3 .content-box",
      scroller: "#main",
      // markers: true,
      start: "bottom 120%",
      end: "top 10%",
      scrub: 5,
    },
  });
};
page3();

let page4 = () => {
  tl.from("#page4 .img-container img", {
    y: 50,
    opacity: 0,
    // stagger: 1,
    duration: 1,
    scrollTrigger: {
      trigger: "#page4",
      scroller: "#main",
      // markers: true,
      start: "bottom 120%",
      end: "top 30%",
      scrub: 4,
    },
  });
  tl.from("#page4 #underline", {
    width: 0,
    delay: 0.5,
    duration: 7.5,
    scrollTrigger: {
      trigger: "#page4",
      scroller: "#main",
      // markers: true,
      start: "top 120%",
      scrub: 1,
    },
  });
};
page4();

let page5 = () => {
  tl.from("#page5 #slider-container .sliders", {
    clipPath: "polygon(100% 0px, 100% 0px, 100% 100%, 150% 100%)",
    stagger: 7.5,
    duration: 7.5,
    scrollTrigger: {
      trigger: "#page5",
      scroller: "#main",
      scrub: 1,
      // markers: true,
      pin: true,
    },
  });
};
page5();

let page6 = () => {
  tl.from("#page6 #underline", {
    width: 0,
    delay: 0.5,
    duration: 7.5,
    scrollTrigger: {
      trigger: "#page6",
      scroller: "#main",
      // markers: true,
      start: "top 120%",
      scrub: 1,
    },
  });
};
page6();

let footer = () => {
  tl.from("#footer #heading #brand-img", {
    y: 200,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: "#page6",
      scroller: "#main",
      // markers: true,
      start: "bottom 50%",
      end: "top 0%",
      scrub: 3,
    },
  });
};
footer();
