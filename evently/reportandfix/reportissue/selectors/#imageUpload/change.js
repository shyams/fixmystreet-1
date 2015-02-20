function () {
  var form = $(this).parents("#issueForm");
  var issueImg = form.find("#issueImg-preview");
  var issueImgSmall = form.find("#issueImg");
  var input = form.find('#imageUpload')[0];
  var file = input.files[0];
  var fr = new FileReader();

  fr.onload = createImage;
  fr.readAsDataURL(file);

  function createImage() {
    var img = new Image();
    img.onload = imageLoaded;
    img.src = fr.result;
  }

  function imageLoaded() {
    var img = this;

    issueImgSmall.val(resizeImage(img, 600, 450));
    issueImg.attr("src", resizeImage(img, 420, 200));
    issueImg.removeClass('hidden');
  }

  function resizeImage(img, width, height) {
    var canvas = document.createElement("canvas");

    canvas.width = width;
    canvas.height = height;

    var ctx = canvas.getContext("2d");
    var ratio = fitRatio(img, canvas.width, canvas.height);

    ctx.drawImage(img, ratio.x, ratio.y, ratio.width, ratio.height);
    return canvas.toDataURL("image/jpeg");
  }

  function fitRatio(img, width, height) {
    var result = {
      x: 0,
      y: 0,
      width: 0,
      height: 0
    };

    if (img.height > img.width) {
      result.width = width;
      result.height = img.height * (width / img.width);
      result.x = 0;
      result.y = -(result.height - height) / 2;
    } else {
      result.height = height;
      result.width = img.width * (height / img.height);
      result.x = -(result.width - width) / 2;
      result.y = 0;
    }
    return result;
  }
}