import Controller from "@ember/controller";
import { sort } from "@ember/object/computed";

import { tracked } from "@glimmer/tracking";

export default class IndexController extends Controller {
  @tracked blogs = this.model;
  todosSortingDesc = ["date:desc"];
  @sort("blogs", "todosSortingDesc") sortedBlogs;
}
