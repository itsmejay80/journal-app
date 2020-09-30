import DS from "ember-data";

export default DS.Model.extend({
  title: DS.attr("string"),
  content: DS.attr("string"),
  date: DS.attr("string"),
  likes: DS.attr("number"),
  author: DS.attr("string"),
  timestamp: DS.attr("string"),
});
