import Component from '@ember/component';
import { action } from "@ember/object";

export default class Carousel extends Component {
    showScrollButton = false;
    @action
    scrollDown(e) {
        e.preventDefault();
        const scrollAnchor = document.querySelector('[data-scroll-anchor]');
        scrollAnchor.scrollIntoView({ behavior: 'smooth' });
    }
}
