import RESTAdapter from '@ember-data/adapter/rest';
import { singularize } from 'ember-inflector'

export default class ApplicationAdapter extends RESTAdapter {
    host = 'http://localhost:3000';
    namespace = 'api';
    pathForType(type) {
        return singularize(type);
    }
}
