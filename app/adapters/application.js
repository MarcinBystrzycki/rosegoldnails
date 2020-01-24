import RESTAdapter from '@ember-data/adapter/rest';
import { pluralize, singularize } from 'ember-inflector';

export default class ApplicationAdapter extends RESTAdapter {
    defaultSerializer = 'RESTSerializer';
    host = 'http://localhost:3000';
    namespace = 'api';
    pathForType(modelName) {
        if (modelName === 'configuration') {
            return pluralize(modelName);
        }
        return singularize(modelName);
    }
}
