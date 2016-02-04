$.fn.slider = function(){
  var self = this
  // Defaults
  var SliderWidth   = this.attr("slider-width") ? this.attr("slider-width") : 600
  var SliderHeight  = this.attr("slider-height") ? this.attr("slider-height") : 400

  // Set position absolute for slide motion
  this.css({position:"absolute",left:0,top:0})
  // Set inner width according to number of slider elements
  this.width(SliderWidth*this.find("img").length + "px")
  // Wrap with the window
  this.wrap("<div class='slider-container'></div>")
  // Make flexible images and replace them with img elements
  this.find("img").each(function(){
    var path = $(this).attr("src")
    $(this).replaceWith('<div class="slider-item" style="background-image:url('+path+')"></div>')
  })
  // Add bullets for navigation
  $(".slider-container").append("<div class='bullet-container'></div>")
  this.find(".slider-item").each(function(){
      $(".slider-container .bullet-container").append("<div class='bullet'></div>")
  })
  // Add bullets for navigation ENDS

  // Show slider item on click
  $(".bullet-container .bullet").click(function(){
    var index = $(this).index()

    if(self.attr("slide")){
      var left = (index) * SliderWidth
      self.animate({left:-left+"px"})
    }else{
      $(".slider-item").hide()
      $(".slider-item:nth-child("+(index+1)+")").fadeIn()
    }

  })

  //Css rules
  $(".slider-container").css({
    "overflow":"hidden",
    "width":SliderWidth + "px",
    "height":SliderHeight + "px",
    "position":"relative"
  })
  $(".slider-container .bullet-container").css({
    "position":"absolute",
    "bottom":"10px",
    "left":"10px"
  })
  $(".slider-container .bullet").css({
    "margin-left":"10px",
    "float":"left",
    "cursor":"pointer",
    "width":"30px",
    "height":"30px",
    "border-radius":"50%",
    "box-shadow":"0px 0px 10px #000",
    "background-color":"#FFF"
  })
  $(".slider-item").css({
    "background-size":"cover",
    "background-position":"center center",
    "background-repeat":"no-repeat",
    "float":"left",
    "width":SliderWidth + "px",
    "height":SliderHeight + "px"
  })

  //Css Rules END
}
