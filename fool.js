//  Uncomment the next line if you want the prank to happen only when the url hash is #april
//  if (document.location.hash.indexOf('april') > -1)
    document.body.style.transform =
    document.body.style.webkitTransform =
    document.body.style.MozTransform =
    document.body.style.OTransform =
    document.body.style.msTransform =
        'rotate(' + 45 * Math.ceil(Math.random() * 7) + 'deg)';
