var App = function () {

    var handleSidebar = function () {
        var $sidebar = $('#sidebar'),
        $sidebarBtn = $('#btn-sidebar');

        $sidebarBtn.click(function () {
            $sidebar.toggleClass('on');
        });

        $('html').on('click.menuopen.data-api', clearMenus)
        $(document).on('click.menuopen.data-api', '[data-toggle=menuopen]', function () {
            var isActive = $sidebar.hasClass('open');

            clearMenus();

            if (!isActive) {
                $sidebar.toggleClass('open');
                $(this).parent().toggleClass('open');
            }
        })

        function clearMenus() {
            $sidebar.removeClass('open');
            $('[data-toggle=menuopen]').each(function () {
                var $toggle = $(this).parent();
                $toggle.removeClass('open');
            })
        }
    }

    var handleTooltip = function () {
        $('[data-toggle=tooltip]').each(function () {

            if ($(this).data('trigger') == 'manual')
                $(this).tooltip('show');
            else
                $(this).tooltip();
        });
    };

    var handlePopover = function () {
        $('[data-toggle=popover]').each(function () {

            if ($(this).data('trigger') == 'manual')
                $(this).popover('show');
            else
                $(this).popover();
        });
    }

    var handleComment = function () {
        var input = $('input', $('.comment-form'));

        var handleClick = function (cont) {
            
            var list = $('.comments', cont);
            var form = $('.comment-form', cont);
            var inputCurrent = $('input', form);

            var text = inputCurrent.val();
            if (text.length == 0) {
                return;
            }

            var time = new Date();
            var time_str = time.toString('MMM dd, yyyy HH:MM');
            var tpl = '';
            tpl += '<li>';

            tpl += '<div class="user">';
            tpl += '<img class="avatar" alt="" src="assets/img/avatar/avatar_00.jpg" />';
            tpl += '<div class="info">';
            tpl += '<h4 class="name">يوسف العزام</h4>';
            tpl += '<p class="description"><a href="#">اعجاب</a>/<a href="#">اعجاب</a></p>';
            tpl += '</div>';
            tpl += '</div>';
            tpl += '<div class="message">';
            tpl += '<span class="body">';
            tpl += text;
            tpl += '</span>';
            tpl += '<span class="datetime">40 دقيقة مضت . 25 إعجاب</span>'
            tpl += '</div>'

            tpl += '</li>';

            var msg = list.append(tpl);
            inputCurrent.val("");
            $('.scroller', cont).slimScroll({
                scrollTo: list.height()
            });
        }

        input.keypress(function (e) {
            if (e.which == 13) {
                handleClick($(e.target).parents('.control-comment'));
                return false; //<---- Add this line
            }
        });
    }

    var handleScrollers = function () {
        if (!jQuery().slimScroll) {
            return;
        }

        $('.scroller').each(function () {
            $(this).slimScroll({
                position: 'left',
                size: '6px',
                start: $(this).data('start') || 'top',
                color: '#a1b2bd',
                height: $(this).data('height'),
                disableFadeOut: true
            });
        });
    }

    //var handleTooltip = function () {
    //    if (!jQuery().tooltipster) {
    //        return;
    //    }

    //    $('.tooltipster').each(function () {
    //        var data = '';
    //        data += '';

    //        data += '<div class="tooltip-item user">';
    //        data += '<a href="#" class="avatar">';
    //        data += '<img src="assets/img/avatar2_small.jpg" />';
    //        data += '</a>';
    //        data += '<div class="info">';
    //        data += '<h5 class="in-city"><i class="box icon-hospital"></i>مدينة العشق الممنوع </h5>';
    //        data += '<h4 class="name"><i class="box icon-user"></i>محمد علي أوغلوا</h4>';
    //        data += '</div>';
    //        data += '<div class="stats">';
    //        data += '<div class="content">';
    //        data += '<p class="number">1500</p>';
    //        data += '<p>محتوى</p>';
    //        data += '</div>';
    //        data += '<div class="resident">';
    //        data += '<p class="number">1000</p>';
    //        data += '<p>مقيم</p>';
    //        data += '</div>';
    //        data += '</div>';
    //        data += '</div>';

    //        $(this).tooltipster({
    //            content: data,
    //            interactive: true,
    //            position: $(this).data('position') || 'top',
    //            offsetY:10,
    //            offsetX:-452,
    //        });
    //    });
    //}

    var handleRightbar = function () {
        var rightBar = $('.right-sidebar'),
        rightbarBtn = $('.btn-phone', rightBar);

        rightbarBtn.click(function () {
            rightBar.toggleClass('on');
        });
    }

    var carousel = function () {
        $('.carousel').carousel({
            interval: 0
        });
    }

    var loadding = function () {
        $(window).load(function () {
            $('.addthis').css('display', 'block')
            handleTooltip()
        });
    }

    return {
        init: function () {
            loadding();

            carousel();
            handleComment();
            handleScrollers();
            handlePopover();
            handleSidebar();
        }
    };
}();