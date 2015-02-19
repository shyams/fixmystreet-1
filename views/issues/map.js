function (doc) {
  if (doc.type && doc.type === 'issue') {
    emit(doc._id, null);
  }
}