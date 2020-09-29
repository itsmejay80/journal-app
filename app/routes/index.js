import Route from "@ember/routing/route";

export default Route.extend({
  model() {
    return this.store.findAll("blogs").then((blogs) => blogs.sortBy("date"));
  },
});
