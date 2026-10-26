(function(){
  var d=document,root=d.documentElement;
  var drawer=d.getElementById('drawer'),tog=d.getElementById('menu-toggle');
  function setOpen(o){
    if(!drawer)return;
    drawer.classList.toggle('open',o);
    if(tog)tog.setAttribute('aria-expanded',o?'true':'false');
    root.style.overflow=o?'hidden':'';
  }
  if(tog)tog.addEventListener('click',function(){setOpen(!drawer.classList.contains('open'))});
  d.querySelectorAll('[data-close]').forEach(function(b){b.addEventListener('click',function(){setOpen(false)})});
  if(drawer)drawer.addEventListener('click',function(e){if(e.target===drawer)setOpen(false)});
  d.addEventListener('keydown',function(e){if(e.key==='Escape'){setOpen(false);d.querySelectorAll('.has-dd.open').forEach(function(x){x.classList.remove('open');var b=x.querySelector('.nav-btn');if(b)b.setAttribute('aria-expanded','false')})}});
  d.querySelectorAll('.has-dd > .nav-btn').forEach(function(b){
    b.addEventListener('click',function(){
      var li=b.parentNode,o=!li.classList.contains('open');
      d.querySelectorAll('.has-dd.open').forEach(function(x){x.classList.remove('open')});
      li.classList.toggle('open',o);b.setAttribute('aria-expanded',o?'true':'false');
    });
  });
  d.addEventListener('click',function(e){if(!e.target.closest('.has-dd'))d.querySelectorAll('.has-dd.open').forEach(function(x){x.classList.remove('open')})});
  var mq=window.matchMedia('(min-width:769px)');
  var reset=function(){if(mq.matches)setOpen(false)};
  if(mq.addEventListener)mq.addEventListener('change',reset);else if(mq.addListener)mq.addListener(reset);
})();
