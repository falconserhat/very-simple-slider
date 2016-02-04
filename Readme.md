# Very simple slider for my dad

## Requirements

You only need jquery to use this plugin :

```
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.0.0-beta1/jquery.js"></script>
```

## Usage

You need to arrange your dom like :

```
<div id="mySlider" slider-width=600 slider-height=200 slide="true">
  <img src="http://lorempixel.com/400/200/cats" alt="">
  <img src="http://lorempixel.com/400/200" alt="">
  <img src="http://lorempixel.com/400/200" alt="">
  <img src="http://lorempixel.com/400/200" alt="">
  <img src="http://lorempixel.com/400/200" alt="">
</div>
```

`slide` attribute is for slide motion. If you do not set slide attribute and go like :

```
<div id="mySlider" slider-width=600 slider-height=200></div>
```

your slider will navigate through images by fading them in/out. Both can be used.

Simply add all your images into `#mySlider` div and call the jQuery plugin like below :

```
$("#mySlider").slider()
```
