script type="text/javascript"
            var switcher = $('.image-slayder label:first-child');
            var delayTime = 5000; // задержка в миллисекундах
            $(document).ready(function(){
                    $(switcher).addClass("active");
                    setTimeout(autoAddClass, delayTime);
            });

            function autoAddClass(){
                var next = $(".active").removeClass("active").next();
                if(next.length)
                    $(next).addClass('active');
                else
                    $(switcher).addClass('active');
                    $(".image-slayder .active").click(); //автоклик
                setTimeout(autoAddClass, delayTime);
            }
        /script
