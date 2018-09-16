$(document).ready(function(){
  // To add the images
  let container = $('#images');
  for(var i=0;i<7;i++){
    $('#images').append("<div class='row'><div class='col-md-4'><a href='/images/gallery/" + (3*i+1) + ".jpg' data-toggle='lightbox' data-gallery='gallery'><img src='/images/gallery/" + (3*i+1) + ".jpg' class='img-thumbnail' /></a></div><div class='col-md-4'><a href='/images/gallery/" + (3*i+2) + ".jpg' data-toggle='lightbox' data-gallery='gallery'><img src='/images/gallery/" + (3*i+2) + ".jpg' class='img-thumbnail' /></a></div><div class='col-md-4'><a href='/images/gallery/" + (3*i+3) + ".jpg' data-toggle='lightbox' data-gallery='gallery'><img src='/images/gallery/" + (3*i+3) + ".jpg' class='img-thumbnail' /></a></div>");
  }
  $('#images').append("<div class='row'><div class='col-md-4'><a href='/images/gallery/22.jpg' data-toggle='lightbox' data-gallery='gallery'><img src='/images/gallery/22.jpg' class='img-thumbnail' /></a></div>");
});

$(document).on('click', '[data-toggle="lightbox"]', function(event) {
                event.preventDefault();
                $(this).ekkoLightbox();
            });
