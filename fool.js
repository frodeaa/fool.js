//  Uncomment the next line if you want the prank to happen only when the url hashtag is #april
//  if (document.location.hash.indexOf('april') > -1)
    document.body.style.webkitTransform = document.body.style.MozTransform =
    'rotate(' + [45, 90, 135, 180, 225, 270, 315][Math.floor(Math.random() * 7)] + 'deg)';
