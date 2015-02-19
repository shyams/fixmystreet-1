function(e, params) {
  var issueUUID = $.couch.newUUID();
  createAndSaveNewIssue(issueUUID);
}

function isInputMissing() {
  var category = $('#category').val();
  var desc = $('#desc').val();
  var issueImg = $('#issueImg').val();
  var missingInput = false;

  if (!category || category === '') {
    missingInput = true;
    $('#category-error').html('Please select a category for this issue.');
  }

  if (!desc || desc === '') {
    missingInput = true;
    $('#desc-error').html('Please give a description for this issue.');
  }

  if (!issueImg || issueImg === '') {
    missingInput = true;
    $('#issueImg-error').html('Please give a picture for this issue.');
  }
  if (missingInput !== true) {
    return missingInput;
  } else {
    $.pathbinder.go('errorSaveNewIssue');
  }

}

function createAndSaveNewIssue(id) {
  var newIssueDoc = {};

  var missingIput = isInputMissing();

  if (!missingIput) {
    //$(event.target).find('.fa-check').removeClass('fa-check').addClass('fa-spin fa-spinner')
    var lat = $('#lat').val();
    var lng = $('#lng').val();
    var place = $('#place').html();
    var desc = $('#desc').val();
    var category = $('#category').val();
    var catId = $('#category').attr('data-id');
    var issueNumber = Math.floor(Math.random() * 900000) + 100000;
    var imageInput = $('#imageUpload').val();
    var file = $('#imageUpload')[0].files[0];
    var issueImg = $('#issueImg').val();
    var title = category;

    newIssueDoc._attachments = {};
    newIssueDoc._attachments["issue-" + issueNumber + ".jpeg"] = {
      "content_type": "image/jpeg",
      "data": issueImg.split(",")[1]
    };

    newIssueDoc._id = id;
    newIssueDoc.number = issueNumber + "";
    newIssueDoc.lat = lat + "";
    newIssueDoc.lng = lng + "";
    newIssueDoc.place = place;
    newIssueDoc.cat_id = catId;
    newIssueDoc.cat_name = category;
    newIssueDoc.title = title;
    newIssueDoc.desc = desc;
    newIssueDoc.channel = "publicpointer";

    saveNewIssue(newIssueDoc, id);
  }
}

function saveNewIssue(newIssueDoc, id) {
  var state = $$('#reportandfix');
  var db = state.app.db

  db.saveDoc(newIssueDoc, {
    success: function(savedDoc) {
      $.pathbinder.go('/issuedetail/' + id);
    },
    error: function(error) {
      $("#saveIssue-error").removeClass("hidden");
    }
  });
}