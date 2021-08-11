"use strict";

//.infographics.thong-tin-doanh-nghiep
// set width for .slide .one-item
var one_item_length_2 = $('.infographics.thong-tin-doanh-nghiep .slide .one-item').length;
var slide_width_2 = one_item_length_2 * 280;
$('.infographics.thong-tin-doanh-nghiep .ss-content .slide').css("width", slide_width_2 + "px");
var slide_length_2 = one_item_length_2;
var next_sl_2 = 2; // [4-19]

var prev_sl_2 = 1; // []

$('.infographics.thong-tin-doanh-nghiep .btn-sukien .next').click(function () {
  if (prev_sl_2 < slide_length_2 - 3) {
    $('.ss-content .slide').css("transform", "translateX(-" + prev_sl_2 * 100 / slide_length_2 + "%)");
  } // btn effect


  next_sl_2++;

  if (next_sl_2 >= slide_length_2 - 2) {
    next_sl_2 = slide_length_2 - 2;
  }

  $(this).removeClass('active');

  if (next_sl_2 >= 2 && next_sl_2 < slide_length_2 - 2) {
    $(this).addClass('active');
  }

  prev_sl_2++;

  if (prev_sl_2 >= slide_length_2 - 3) {
    prev_sl_2 = slide_length_2 - 3;
  }

  $('.btn-sukien .prev').removeClass('active');

  if (prev_sl_2 >= 2 && prev_sl_2 <= slide_length_2 - 3) {
    $('.btn-sukien .prev').addClass('active');
  }
});
$('.infographics.thong-tin-doanh-nghiep .btn-sukien .prev').click(function () {
  if (next_sl_2 >= 3) {
    $('.ss-content .slide').css("transform", "translateX(-" + (next_sl_2 - 3) * 100 / slide_length_2 + "%)");
  } // btn effect


  prev_sl_2--;

  if (prev_sl_2 < 1) {
    prev_sl_2 = 1;
  }

  $(this).removeClass('active');

  if (prev_sl_2 >= 2 && prev_sl_2 <= slide_length_2 - 1) {
    $(this).addClass('active');
  }

  next_sl_2--;

  if (next_sl_2 < 2) {
    next_sl_2 = 2;
  }

  $('.btn-sukien .next').removeClass('active');

  if (next_sl_2 >= 2 && next_sl_2 <= slide_length_2 - 1) {
    $('.btn-sukien .next').addClass('active');
  }
});