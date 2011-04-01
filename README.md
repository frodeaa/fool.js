April 1st JavaScript snippet.
============================

Just paste this before closing body
    <script>
    //  Uncomment the next line if you want the prank to happen only when the url hashtag is #april
    //  if (document.location.hash.indexOf('april') > -1)
        document.body.style.transform =
        document.body.style.webkitTransform =
        document.body.style.MozTransform =
        document.body.style.msTransform =
        'rotate(' + [45, 90, 135, 180, 225, 270, 315][Math.floor(Math.random() * 7)] + 'deg)';
    </script>