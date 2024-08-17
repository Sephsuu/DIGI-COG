window.addEventListener('scroll', reveal)
    function reveal(){
        var reveals = document.querySelectorAll('.reveal');
        for(var i = 0; i < reveals.length; i++){
            var wh = window.innerHeight;
            var rt = reveals[i].getBoundingClientRect().top;
            var rp = 150;

            if(rt < wh - rp){
                reveals[i].classList.add('active');
            }else{
                reveals[i].classList.remove('active');
            }
        }
    }

    window.addEventListener('scroll', revealLeft)
    function revealLeft(){
        var reveals = document.querySelectorAll('.reveal-left');
        for(var i = 0; i < reveals.length; i++){
            var wh = window.innerHeight;
            var rt = reveals[i].getBoundingClientRect().top;
            var rp = 150;

            if(rt < wh - rp){
                reveals[i].classList.add('active');
            }else{
                reveals[i].classList.remove('active');
            }
        }
    }

    window.addEventListener('scroll', revealRight)
    function revealRight(){
        var reveals = document.querySelectorAll('.reveal-right');
        for(var i = 0; i < reveals.length; i++){
            var wh = window.innerHeight;
            var rt = reveals[i].getBoundingClientRect().top;
            var rp = 150;

            if(rt < wh - rp){
                reveals[i].classList.add('active');
            }else{
                reveals[i].classList.remove('active');
            }
        }
    }