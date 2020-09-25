import Controller from "@ember/controller";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";

export default class BlogController extends Controller {
  @tracked isLiked = false;

  @action
  toggleLike() {
    this.isLiked = !this.isLiked;
    // if(this.isLiked){
  }
}
