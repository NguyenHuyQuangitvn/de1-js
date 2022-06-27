$(document).ready(function(){
  // ô search
  $("button.btn-search").click(function showSearch() {
    $(".main-menu").addClass('show-search');
    //$(".list-menu li:not(:last-child)").hide();
  });
  /**
   * ábdhasbd
   */
  $('body').on('click','.btn-search',(e)=>{
    console.log('ahihi');
  });
  $(document).click(function (e)
  {
    console.log('ahhihi');
    var container = $('li.item-menu.search');
    if (!container.is(e.target) && container.has(e.target).length === 0)
    {
      $('.main-menu').removeClass('show-search');
    }
  });
  // slider 

  // setInterval(function(){
  //   $(".list-post").addClass('slide-transitions');
  //   // $(".list-post").removeClass('slide-transitions');
  // }, 2000);
  // var counter = 1;
  // const slider = document.querySelectorAll(".list-post")
  // changeSlider = function(){
  //   slider.style = `transform: translateX(-1140px)`;
  //   console.log('ahihi');
  // }
  // setInterval(changeSlider, 1000);

  var counter = 1;
  setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > 3){
      counter = 1;
    }
  }, 2000);
});
