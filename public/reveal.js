(function(){
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(e){
        if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, {threshold:0.08, rootMargin:'0px 0px -24px 0px'});

    function revealInView(){
      var vh = window.innerHeight || document.documentElement.clientHeight;
      document.querySelectorAll('.reveal:not(.in), .stagger:not(.in)').forEach(function(el){
        var rect = el.getBoundingClientRect();
        if (rect.top < vh - 24 && rect.bottom > 0) {
          el.classList.add('in');
          io.unobserve(el);
        }
      });
    }

    document.querySelectorAll('.reveal, .stagger').forEach(function(el){ io.observe(el); });
    window.addEventListener('load', function(){
      document.querySelectorAll('.hero .reveal, .hero .stagger').forEach(function(el){ el.classList.add('in'); });
      revealInView();
    });
    window.addEventListener('scroll', revealInView, {passive:true});
  })();
