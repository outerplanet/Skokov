const body=document.querySelector("body"),root=document.documentElement,hamburgerButton=document.querySelector(".header__hamburger"),hamburger=document.querySelector(".hamburger"),hamburgerMenu=document.querySelector(".hamburger__menu");let hamburgerOpen=!1;function openHamburger(){if(0==hamburgerOpen){const e=window.innerWidth-body.offsetWidth+"px";body.style.overflow="hidden",body.style.paddingRight=e,hamburger.classList.add("hamburger-open"),hamburgerMenu.classList.add("hamburger__menu-open"),hamburgerOpen=!0}}hamburgerButton.onclick=()=>openHamburger(),window.onclick=function(e){1==hamburgerOpen&&e.target==hamburger&&(hamburgerMenu.classList.remove("hamburger__menu-open"),setTimeout((function(){hamburger.classList.remove("hamburger-open"),hamburgerOpen=!1,body.style.overflow="visible",body.style.paddingRight=0}),200))};const scrollToTop=document.querySelector(".scroll-to-top");setInterval((function(){pageYOffset<window.innerHeight?scrollToTop.classList.add("scroll-to-top--hidden"):scrollToTop.classList.remove("scroll-to-top--hidden")}),100);let pageWidth=document.querySelector(".page-width");function getPageWidth(){root.style.setProperty("--page-width",pageWidth.offsetWidth-30+"px")}window.addEventListener("resize",getPageWidth),getPageWidth();const headerNews=document.querySelector(".header__nav-link-news"),newsPage=document.querySelector(".news-page"),postPage=document.querySelector(".post");null!=newsPage?headerNews.classList.add("header__nav-link--active"):null!=postPage&&headerNews.classList.add("header__nav-link--active");const anchors=document.querySelectorAll('a[href^="#"]');let hash;window.location.href.indexOf("#")>-1&&(hash=window.location.hash,null==document.querySelector(hash)&&(window.location.href="index"+hash),document.querySelector(""+hash).scrollIntoView({behavior:"auto",block:"start"}),history.replaceState("",document.title,window.location.pathname+window.location.search)),window.onload=function(){null!=hash&&document.querySelector(""+hash).scrollIntoView({behavior:"smooth",block:"start"})};for(let e of anchors)e.addEventListener("click",(function(o){o.preventDefault();let t=e.getAttribute("href");null==document.querySelector(t)&&(window.location.href="index"+t),hamburger.click(),document.querySelector(""+t).scrollIntoView({behavior:"smooth",block:"start"})}));const newsColumn1=document.querySelectorAll(".news__column1"),newsColumn2=document.querySelectorAll(".news__column2"),newsPosts=document.querySelector(".news-page__posts"),newsButton=document.querySelector(".news__button");let newPostsSet=0;function showMore(){2==newPostsSet&&(newPostsSet=0);let e=newsColumn1[newPostsSet].cloneNode(!0),o=newsColumn2[newPostsSet].cloneNode(!0);newsPosts.appendChild(e),newsPosts.appendChild(o),e.classList.add("news__column--animation"),o.classList.add("news__column--animation"),setTimeout((function(){e.classList.remove("news__column--animation"),o.classList.remove("news__column--animation")}),100),newPostsSet++}null!=newsPosts&&newsButton.addEventListener("click",showMore);