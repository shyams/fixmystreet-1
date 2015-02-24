function (doc) {
  if (doc.type && doc.type === 'issue') {
    emit(doc.opened_at,null);
  };
}