import Component from '@ember/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class Gallery extends Component {
    @tracked modal = false;
    @tracked clickedImageSrc = '';
    @action
    toggleModal(imgSrc, value) {
        this.clickedImageSrc = imgSrc;
        this.modal = value;
    }
}
