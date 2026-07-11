/* ===================================================================
   Psychic Source — shared chrome + interactions for interior pages.
   Injects cosmos background, header, mobile menu, footer, float CTA;
   wires scroll state, mobile menu, reveal-on-scroll, starfield.
   =================================================================== */
(function(){
  "use strict";
  function frag(html){ return document.createRange().createContextualFragment(html); }

  var LOGO_SVG =
    '<svg viewBox="0 0 40 40" fill="none">'+
      '<circle cx="20" cy="20" r="19" stroke="#C9A86A" stroke-width=".5" opacity=".55"/>'+
      '<circle cx="20" cy="20" r="13" stroke="#C9A86A" stroke-width=".4" opacity=".28"/>'+
      '<g class="star">'+
        '<path d="M20 1.5 L21.5 18.5 L38.5 20 L21.5 21.5 L20 38.5 L18.5 21.5 L1.5 20 L18.5 18.5 Z" fill="url(#lg)"/>'+
        '<path d="M20 7 L20.8 19.2 L33 20 L20.8 20.8 L20 33 L19.2 20.8 L7 20 L19.2 19.2 Z" fill="url(#lg)" opacity=".5" transform="rotate(45 20 20)"/>'+
        '<circle cx="20" cy="20" r="2" fill="#1C1550"/><circle cx="20" cy="20" r=".9" fill="url(#lg)"/>'+
      '</g>'+
      '<defs><linearGradient id="lg" x1="2" y1="2" x2="38" y2="38"><stop stop-color="#E8CF9A"/><stop offset="1" stop-color="#9C7E48"/></linearGradient></defs>'+
    '</svg>';

  var ZOD = [['♈','Aries'],['♉','Taurus'],['♊','Gemini'],['♋','Cancer'],['♌','Leo'],['♍','Virgo'],['♎','Libra'],['♏','Scorpio'],['♐','Sagittarius'],['♑','Capricorn'],['♒','Aquarius'],['♓','Pisces']];
  var zodDrop = ZOD.map(function(z){return '<a href="horoscopes.html"><span class="zod">'+z[0]+'</span>'+z[1]+'</a>';}).join('');

  var HEADER =
  '<header id="hdr">'+
    '<div class="util-bar"><div class="wrap util-inner">'+
      '<span class="util-tag">Life’s possibilities, revealed.</span>'+
      '<div class="util-links">'+
        '<a href="#">Login</a><a href="contact.html">Customer Care</a>'+
        '<a class="util-phone" href="tel:+18009653049">+1.800.965.3049</a>'+
        '<form class="util-search" role="search" action="#" onsubmit="return false"><input type="search" placeholder="Search psychics…" aria-label="Search psychics"/><button type="submit" aria-label="Search"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4-4"/></svg></button></form>'+
      '</div>'+
    '</div></div>'+
    '<div class="wrap nav">'+
      '<a class="logo" href="index.html"><span class="logo-glow" aria-hidden="true"></span>'+LOGO_SVG+
        '<span class="logo-word"><span class="logo-name">Psychic Source</span><span class="logo-tag">Est. 1989</span></span></a>'+
      '<nav class="main"><ul class="tabs">'+
        '<li class="tab"><a href="advisors.html">Psychics <span class="caret">▾</span></a>'+
          '<div class="drop"><a href="advisors.html">All Psychics</a><a href="love.html">Love Psychics</a><a href="mediumship.html">Psychic Mediums</a><a href="advisors.html">Clairvoyants</a><a href="tarot.html">Tarot Readers</a><a href="advisors.html">Pet Psychics</a></div></li>'+
        '<li class="tab"><a href="readings.html">Readings <span class="caret">▾</span></a>'+
          '<div class="drop"><a href="tarot.html">Tarot Readings</a><a href="horoscopes.html">Astrology Readings</a><a href="love.html">Love Readings</a><a href="mediumship.html">Mediumship</a><a href="readings.html">All Readings</a><a href="how-it-works.html">How It Works</a></div></li>'+
        '<li class="tab"><a href="horoscopes.html">Horoscopes <span class="caret">▾</span></a>'+
          '<div class="drop drop-zodiac">'+zodDrop+'</div></li>'+
        '<li class="tab"><a href="manifesto.html">About <span class="caret">▾</span></a>'+
          '<div class="drop"><a href="manifesto.html">Our Manifesto</a><a href="guarantee.html">Satisfaction Guarantee</a><a href="ethics.html">Code of Ethics</a><a href="reviews.html">Reviews</a><a href="become-a-psychic.html">Become a Psychic</a></div></li>'+
      '</ul></nav>'+
      '<a class="nav-cta" href="advisors.html">Get Your Reading</a>'+
      '<button class="burger" id="burger" aria-label="Open menu" aria-expanded="false"><span></span><span></span></button>'+
    '</div>'+
  '</header>'+
  '<div class="mobile-menu" id="mobileMenu" aria-hidden="true"><nav>'+
    '<a href="advisors.html">Psychics</a><a href="readings.html">Readings</a><a href="horoscopes.html">Horoscopes</a><a href="manifesto.html">About</a>'+
  '</nav><a class="btn-primary" href="advisors.html" style="margin-top:8px">Get Your Reading</a>'+
  '<div class="mm-foot">Login · Customer Care · +1.800.965.3049</div></div>';

  var FOOTER =
  '<footer><div class="wrap"><div class="foot-grid">'+
    '<div class="foot-brand"><a class="logo" href="index.html">'+
      '<svg viewBox="0 0 40 40" fill="none" style="width:30px;height:30px"><circle cx="20" cy="20" r="19" stroke="#C9A86A" stroke-width=".5" opacity=".55"/><circle cx="20" cy="20" r="13" stroke="#C9A86A" stroke-width=".4" opacity=".28"/><path d="M20 1.5 L21.5 18.5 L38.5 20 L21.5 21.5 L20 38.5 L18.5 21.5 L1.5 20 L18.5 18.5 Z" fill="url(#fg)"/><path d="M20 7 L20.8 19.2 L33 20 L20.8 20.8 L20 33 L19.2 20.8 L7 20 L19.2 19.2 Z" fill="url(#fg)" opacity=".5" transform="rotate(45 20 20)"/><defs><linearGradient id="fg" x1="2" y1="2" x2="38" y2="38"><stop stop-color="#E8CF9A"/><stop offset="1" stop-color="#9C7E48"/></linearGradient></defs></svg>'+
      '<span class="logo-word"><span class="logo-name" style="font-size:18px">Psychic Source</span><span class="logo-tag">Life’s possibilities, revealed</span></span></a>'+
      '<p>America’s oldest and most respected psychic service, guiding seekers to clarity since 1989.</p></div>'+
    '<div class="foot-col"><h4>Discover</h4><ul><li><a href="advisors.html">All Psychics</a></li><li><a href="love.html">Love &amp; Relationships</a></li><li><a href="tarot.html">Tarot Readings</a></li><li><a href="mediumship.html">Mediumship</a></li><li><a href="horoscopes.html">Horoscopes</a></li></ul></div>'+
    '<div class="foot-col"><h4>About</h4><ul><li><a href="manifesto.html">Our Manifesto</a></li><li><a href="ethics.html">Code of Ethics</a></li><li><a href="guarantee.html">Satisfaction Guarantee</a></li><li><a href="how-it-works.html">How It Works</a></li><li><a href="reviews.html">Reviews</a></li></ul></div>'+
    '<div class="foot-col"><h4>Care</h4><ul><li><a href="contact.html">Contact Us</a></li><li><a href="rewards.html">Membership Rewards</a></li><li><a href="faqs.html">FAQs</a></li><li><a href="become-a-psychic.html">Become a Psychic</a></li><li><a href="privacy.html">Privacy Policy</a></li></ul></div>'+
  '</div><div class="foot-bottom"><p>© 2026 Psychic Source. All rights reserved. For entertainment only. 18+</p>'+
    '<div class="foot-social">'+
      '<a href="#" aria-label="Instagram"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg></a>'+
      '<a href="#" aria-label="Facebook"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3"><path d="M15 3h-3a4 4 0 0 0-4 4v3H5v4h3v7h4v-7h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg></a>'+
      '<a href="#" aria-label="YouTube"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3"><rect x="2" y="5" width="20" height="14" rx="4"/><path d="M10 9l5 3-5 3z" fill="currentColor" stroke="none"/></svg></a>'+
    '</div></div></div></footer>';

  var COSMOS = '<div class="cosmos" aria-hidden="true"><span class="drift g1"></span><span class="drift g2"></span><div class="starscape cosmos-stars"></div></div><div id="sourceGlow" aria-hidden="true"></div>';
  var FLOAT = '<a class="float-cta" id="floatCta" href="advisors.html"><span class="fc-dot"></span>Readings from <em>&nbsp;$1/min</em></a>';

  // ---- inject chrome ----
  document.body.insertBefore(frag('<a class="skip" href="#main">Skip to content</a>'+COSMOS+HEADER), document.body.firstChild);
  document.body.appendChild(frag(FOOTER));
  document.body.appendChild(frag(FLOAT));

  // ---- active nav highlight ----
  var here = (location.pathname.split('/').pop()||'index.html');
  document.querySelectorAll('.tabs .tab > a, .foot-col a').forEach(function(a){
    if(a.getAttribute('href')===here){ a.style.color='var(--ivory)'; }
  });

  // ---- header scroll state + float cta ----
  var hdr=document.getElementById('hdr'), fc=document.getElementById('floatCta');
  function onScroll(){
    var y=window.pageYOffset||document.documentElement.scrollTop;
    if(hdr) hdr.classList.toggle('scrolled', y>40);
    if(fc) fc.classList.toggle('show', y>620);
  }
  window.addEventListener('scroll',onScroll,{passive:true}); onScroll();

  // ---- mobile menu ----
  var burger=document.getElementById('burger'), mm=document.getElementById('mobileMenu');
  if(burger&&mm){
    burger.addEventListener('click',function(){
      var open=mm.classList.toggle('open'); burger.classList.toggle('open',open);
      burger.setAttribute('aria-expanded',open?'true':'false');
      document.body.style.overflow=open?'hidden':'';
    });
    mm.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){mm.classList.remove('open');burger.classList.remove('open');document.body.style.overflow='';});});
  }

  // ---- parallax on cinematic bands, hero + wing media ----
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(!reduce){
    var plx = [].slice.call(document.querySelectorAll('.cine-bg, .wingband .wb-bg, .ph-media'));
    var ticking = false;
    function runParallax(){
      ticking = false;
      var vh = window.innerHeight;
      for(var i=0;i<plx.length;i++){
        var el = plx[i];
        var host = el.closest('section') || el.parentElement;
        var r = host.getBoundingClientRect();
        if(r.bottom < -40 || r.top > vh + 40) continue;
        // progress: -1 (below) .. +1 (above), 0 when host centered
        var prog = ((r.top + r.height/2) - vh/2) / vh;
        var range = el.classList.contains('ph-media') ? 26 : 46;
        el.style.transform = 'translate3d(0,' + (prog * -range).toFixed(1) + 'px,0)';
      }
    }
    window.addEventListener('scroll', function(){ if(!ticking){ ticking = true; requestAnimationFrame(runParallax); } }, {passive:true});
    window.addEventListener('resize', runParallax, {passive:true});
    runParallax();
  }

  // ---- reveal on scroll ----
  var io=new IntersectionObserver(function(es){
    es.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } });
  },{threshold:.14,rootMargin:'0px 0px -8% 0px'});
  document.querySelectorAll('.reveal').forEach(function(n){io.observe(n);});

  // ---- starfield in cosmos + any .starscape ----
  function seed(el,count){
    if(!el) return;
    for(var i=0;i<count;i++){
      var s=document.createElement('span'); s.className='cs';
      var sz=(Math.random()*1.7+0.5).toFixed(2);
      s.style.width=sz+'px'; s.style.height=sz+'px';
      s.style.left=(Math.random()*100).toFixed(2)+'%';
      s.style.top=(Math.random()*100).toFixed(2)+'%';
      s.style.animationDelay=(Math.random()*8).toFixed(2)+'s';
      s.style.animationDuration=(Math.random()*6+6).toFixed(2)+'s';
      el.appendChild(s);
    }
  }
  document.querySelectorAll('.starscape').forEach(function(el){ seed(el, el.classList.contains('cosmos-stars')?90:40); });
})();
