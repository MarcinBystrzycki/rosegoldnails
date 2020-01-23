import Component from '@ember/component';
import fetch from 'fetch';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class Maps extends Component {
    map = false;
    address = false;
    contact = false;
    @tracked tooltipHidden = true;
    @tracked mapStyles = null;
    fetchMapStyles() {
        return fetch(this.map.styleJson).then((res) => {
            return res.json();
        });
    }
    @action
    toggleTooltip(val) {
        this.tooltipHidden = val;
    }
    didReceiveAttrs() {
        if (this.map.styleJson) {
            this.fetchMapStyles().then((json) => {
                this.mapStyles = json;
            })
        }
    }
}
