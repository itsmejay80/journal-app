import Route from "@ember/routing/route";

export default Route.extend({
  model(params) {
    return this.store.findRecord("blogs", params.blog_id);
  },
  setupController(controller, model) {
    this._super(controller, model);
    controller.set("blogs", model);
  },
});
