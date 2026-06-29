(function(){
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(e){
        if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, {threshold:0.1, rootMargin:'0px 0px -6% 0px'});
    document.querySelectorAll('.reveal, .stagger').forEach(function(el){ io.observe(el); });
    window.addEventListener('load', function(){
      document.querySelectorAll('.hero .reveal, .hero .stagger').forEach(function(el){ el.classList.add('in'); });
    });
  })();
