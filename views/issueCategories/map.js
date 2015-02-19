function(doc) {
  if (doc.type && doc.type === "category") {
    emit(doc.name, doc);
  }
}