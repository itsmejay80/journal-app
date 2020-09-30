import Controller from "@ember/controller";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";
import MarkdownIt from "markdown-it";
import { htmlSafe } from "@ember/string";
import { computed } from "@ember/object";

const md = new MarkdownIt();

export default class BlogController extends Controller {
  @tracked isLiked = false;
  // @tracked source = this.model.content;

  // html = computed("source", () => {
  //   return htmlSafe(md.render(this.source));
  // });

  @action
  toggleLike() {
    this.isLiked = !this.isLiked;
    if (this.isLiked) {
      this.model.likes += 1;
    } else {
      this.model.likes -= 1;
    }
    this.model.save();
  }
}
