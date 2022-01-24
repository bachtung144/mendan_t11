$(document).ready(function(){

    //smooth scroll
    $(".fixed-side-navbar a, .primary-button a").on('click', function(event) {

        if (this.hash !== "") {
            event.preventDefault();
            let hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, () => window.location.hash = hash);
            //$(selector).animate({params},speed,callback);
        }
    });

    //menubar
    $('body').scrollspy({
        target: '.fixed-side-navbar',
        offset: 200
    });

    //tab-group
    $('.tabgroup > div').hide();
    $('.tabgroup > div:first-of-type').show();
    $('.tabs a').click(function(e){
        e.preventDefault();
        let $this = $(this),
            tabgroup = '#'+$this.parents('.tabs').data('tabgroup'),
            others = $this.closest('li').siblings().children('a'),
            target = $this.attr('href');

        //handle li tag
        others.removeClass('active');
        $this.addClass('active');

        //handle div tag
        $(tabgroup).children('div').hide();
        $(target).show();
    })
});

