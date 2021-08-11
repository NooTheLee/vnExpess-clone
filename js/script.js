$(document).ready(function () {


    // toggle menu Nav
    $('li.view-more a').click(function (e) { 
        e.preventDefault();
        $(this).parent().parent().children('.hidden').addClass('active');
        $(this).parent().addClass('hidden');
    });

    $('.all-menu').click(function(){
        $(this).toggleClass('active');
        $('.wrap-all-menu').toggleClass('active');
        $('ul.parent').toggleClass('hidden');
        $('.main-nav').addClass('scroll');
        $('body').toggleClass('hideScroll');
    })

    $('a.close-menu').click(function(){
        $('.all-menu').toggleClass('active');
        $('.wrap-all-menu').toggleClass('active');
        $('ul.parent').toggleClass('hidden');
        $('.main-nav').addClass('scroll');
        $('body').toggleClass('hideScroll');
    })
    // End toggle menu nav

    let isChange = false;
    window.addEventListener('scroll', function() {
        if(this.pageYOffset >= 100){
            if(isChange == false){
                isChange = true;
                $('.main-nav').addClass('scroll');
            }
        }
        else{
            if(isChange == true){
                isChange = false;
                $('.main-nav').removeClass('scroll');
            }
            
        }
    })



    // Slide - anh
    const img_length = $('.slide .one').length;
    let prev_img = img_length;
    let active_img = 1;
    let next_img = 2;
    
    // txt 
    let prev_2_txt = img_length;
    let prev_txt = 1;
    let active_txt = 2;

    $('.btn .next').click(function () { 
        active_img++;
        prev_img++;
        if(active_img >= img_length + 1){
            active_img = 1;
        }
        if(prev_img >= img_length + 1){
            prev_img = 1;
        }
        $('.slide .one').removeClass('active');
        $('.slide .one').removeClass('prev');
        $('.slide .one').removeClass('up-active');
        $('.slide .one').removeClass('up-prev');
        $(".slide .one:nth-child(" + active_img + ")").addClass('active');
        $(".slide .one:nth-child(" + prev_img + ")").addClass('prev');

        prev_2_txt++;
        prev_txt++;
        active_txt++;
        if(active_txt >= img_length + 1){
            active_txt = 1;
        }
        if(prev_txt >= img_length + 1){
            prev_txt = 1;
        }
        if(prev_2_txt >= img_length + 1){
            prev_2_txt = 1;
        }


        $('div.text .txt').removeClass('active');
        $('div.text .txt').removeClass('prev');
        $('div.text .txt').removeClass('prev-2');
        $('div.text .txt').removeClass('up-active');
        $('div.text .txt').removeClass('up-prev');
        $('div.text .txt').removeClass('up-prev-2');
        $('div.text .txt:nth-child(' + active_txt + ')').addClass('active');
        $('div.text .txt:nth-child(' + prev_txt + ')').addClass('prev');
        $('div.text .txt:nth-child(' + prev_2_txt + ')').addClass('prev-2');
        
    });
    $('.text .den').click(function () { 
        active_img++;
        prev_img++;
        if(active_img >= img_length + 1){
            active_img = 1;
        }
        if(prev_img >= img_length + 1){
            prev_img = 1;
        }
        $('.slide .one').removeClass('active');
        $('.slide .one').removeClass('prev');
        $('.slide .one').removeClass('up-active');
        $('.slide .one').removeClass('up-prev');
        $(".slide .one:nth-child(" + active_img + ")").addClass('active');
        $(".slide .one:nth-child(" + prev_img + ")").addClass('prev');

        prev_2_txt++;
        prev_txt++;
        active_txt++;
        if(active_txt >= img_length + 1){
            active_txt = 1;
        }
        if(prev_txt >= img_length + 1){
            prev_txt = 1;
        }
        if(prev_2_txt >= img_length + 1){
            prev_2_txt = 1;
        }


        $('div.text .txt').removeClass('active');
        $('div.text .txt').removeClass('prev');
        $('div.text .txt').removeClass('prev-2');
        $('div.text .txt').removeClass('up-active');
        $('div.text .txt').removeClass('up-prev');
        $('div.text .txt').removeClass('up-prev-2');
        $('div.text .txt:nth-child(' + active_txt + ')').addClass('active');
        $('div.text .txt:nth-child(' + prev_txt + ')').addClass('prev');
        $('div.text .txt:nth-child(' + prev_2_txt + ')').addClass('prev-2');
    });

    $('.btn .prev').click(function () { 

        if(active_txt <= 0){
            active_txt = img_length;
        }
        if(prev_txt <= 0){
            prev_txt = img_length;
        }
        if(prev_2_txt <= 0){
            prev_2_txt = img_length;
        }

        $('div.text .txt').removeClass('active');
        $('div.text .txt').removeClass('prev');
        $('div.text .txt').removeClass('prev-2');
        $('div.text .txt').removeClass('up-active');
        $('div.text .txt').removeClass('up-prev');
        $('div.text .txt').removeClass('up-prev-2');
        $('div.text .txt:nth-child(' + prev_txt + ')').addClass('up-active');
        $('div.text .txt:nth-child(' + active_txt + ')').addClass('up-prev');
        $('div.text .txt:nth-child(' + prev_2_txt + ')').addClass('up-prev-2');
        prev_2_txt--;
        prev_txt--;
        active_txt--;



        if(active_img <= 0){
            active_img = img_length;
        }
        if(prev_img <= 0){
            prev_img = img_length;
        }
        $('.slide .one').removeClass('active');
        $('.slide .one').removeClass('prev');
        $('.slide .one').removeClass('up-active');
        $('.slide .one').removeClass('up-prev');
        $(".slide .one:nth-child(" + prev_img + ")").addClass('up-active');
        $(".slide .one:nth-child(" + active_img + ")").addClass('up-prev');
        active_img--;
        prev_img--;

        
        
    });

    //.infographics.base
    // set width for .slide .one-item
    let one_item_length = $('.infographics.base .slide .one-item').length;
    one_item_length = (one_item_length % 2) === 0 ? one_item_length : (one_item_length + 1);
    let slide_width = one_item_length / 2 * 50;
    $('.infographics.base .ss-content .slide').css("width", slide_width + "%");

    const slide_length = one_item_length / 2;
    let next_sl = 2;
    let prev_sl = 1;

    console.log();

    $('.infographics.base .btn-sukien .next').click(function () { 
        if(prev_sl < slide_length - 1){
            $('.ss-content .slide').css("transform", "translateX(-" + prev_sl * 100/slide_length +"%)");
        }
        // btn effect
        next_sl++;
        if(next_sl >= slide_length){
            next_sl = slide_length;
        }
        $(this).removeClass('active');
        if(next_sl >= 2 && next_sl <= slide_length - 1){
            $(this).addClass('active');
        }
        prev_sl++;
        if(prev_sl > slide_length - 1){
            prev_sl = slide_length - 1;
        }
        $('.btn-sukien .prev').removeClass('active');
        if(prev_sl >= 2 && prev_sl <= slide_length){
            $('.btn-sukien .prev').addClass('active');
            
        }
    });
    $('.infographics.base .btn-sukien .prev').click(function () { 
        if(prev_sl > 1){
            $('.ss-content .slide').css("transform", "translateX(-" + (prev_sl-2) * 100/slide_length +"%)");
        }
        // btn effect
        prev_sl--;
        if(prev_sl < 1){
            prev_sl = 1;
        }
        $(this).removeClass('active');
        if(prev_sl >= 2 && prev_sl <= slide_length - 1){
            $(this).addClass('active');
        }

        next_sl--;
        if(next_sl < 2){
            next_sl = 2;
        }
        $('.btn-sukien .next').removeClass('active');
        if(next_sl >= 2 && next_sl <= slide_length - 1){
            $('.btn-sukien .next').addClass('active');
        }


    });


        //.infographics.thong-tin-doanh-nghiep
    // set width for .slide .one-item
    let one_item_length_2 = $('.infographics.thong-tin-doanh-nghiep .slide .one-item').length;
    let slide_width_2 = one_item_length_2 * 280;
    $('.infographics.thong-tin-doanh-nghiep .ss-content .slide').css("width", slide_width_2 + "px");


    const slide_length_2 = one_item_length_2;
    let next_sl_2 = 2; // [4-19]
    let prev_sl_2 = 1; // []


    $('.infographics.thong-tin-doanh-nghiep .btn-sukien .next').click(function () { 
        if(prev_sl_2 < slide_length_2 - 3){
            $('.ss-content .slide').css("transform", "translateX(-" + prev_sl_2 * 100/slide_length_2 +"%)");
        }
        // btn effect
        next_sl_2++;
        if(next_sl_2 >= slide_length_2 - 2){
            next_sl_2 = slide_length_2 - 2;
        }
        $(this).removeClass('active');
        if(next_sl_2 >= 2 && next_sl_2 < slide_length_2 - 2){
            $(this).addClass('active');
        }

        prev_sl_2++;
        if(prev_sl_2 >= slide_length_2 - 3){
            prev_sl_2 = slide_length_2 - 3;
        }
        $('.btn-sukien .prev').removeClass('active');
        if(prev_sl_2 >= 2 && prev_sl_2 <= slide_length_2 - 3){
            $('.btn-sukien .prev').addClass('active');
            
        }
        

    });
    $('.infographics.thong-tin-doanh-nghiep .btn-sukien .prev').click(function () { 
        if(next_sl_2 >= 3){
            $('.ss-content .slide').css("transform", "translateX(-" + (next_sl_2 - 3) * 100/slide_length_2 +"%)");
        }
        // btn effect
        prev_sl_2--;
        if(prev_sl_2 < 1){
            prev_sl_2 = 1;
        }
        $(this).removeClass('active');
        if(prev_sl_2 >= 2 && prev_sl_2 <= slide_length_2 - 1){
            $(this).addClass('active');
        }

        next_sl_2--;
        if(next_sl_2 < 2){
            next_sl_2 = 2;
        }
        $('.btn-sukien .next').removeClass('active');
        if(next_sl_2 >= 2 && next_sl_2 <= slide_length_2 - 1){
            $('.btn-sukien .next').addClass('active');
        }
        

    });

    let item_length = $('.news .one-item').length;
    const item_row = parseInt(item_length/2);
    console.log(item_length);
    for(let i = 0; i < item_row; i++){
        $('.news .one-item:nth-child('+ (2 * i + 1) +') .number-top-view').text((i+1).toString());
        $('.news .one-item:nth-child('+ (2 * i + 1) +') .number-top-view').css("border-left","");

        $('.news .one-item:nth-child('+ (2 * i + 2) +') .number-top-view').text((i+1+item_row).toString());
        // $('.news .one-item:nth-child('+ (2 * i + 2) +') .number-top-view').text((i+1+item_row).toString());
    }
    
    
});