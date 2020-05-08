$(".link").click((event) => {
  const tag = event.currentTarget.dataset.filter;
  if (tag === "all") {
    $(".filter").show("2000");
  } else {
    $(".filter").not(`.${tag}`).hide("2000");
    // $(".filter").filter('.' + tag).show("2000");
    $(".filter").filter(`.${tag}`).show("2000");
  }
});


// $(".filter-button").click(() => {
//   const value = $(this).attr('data-filter');
//   if (value === "all") {
//     // $('.filter').removeClass('hidden');
//     $('.filter').show('1000');
//   } else {
//     //            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
//     //            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
//     $(".filter").not('.' + value).hide('3000');
//     $('.filter').filter('.' + value).show('3000');
//   }
// });

//   if ($(".filter-button").removeClass("active")) {
// $(this).removeClass("active");
// }
// $(this).addClass("active");

// const buttons = document.querySelector('#buttons').children;
// const items = document.querySelector('.cards').children;

// for (const button of buttons) {
//   button.addEventListener("click", () => {
//     // const value = button.getAttribute("data-target");
//     for (const button of buttons){
//       button.classList.remove("active");
//     }
//     button.classList.add('active');
//     // const target = this.getAttribute("data-target");

//   });
// }
