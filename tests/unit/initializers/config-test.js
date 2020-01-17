import Application from '@ember/application';

import { initialize } from 'rosegoldnails/initializers/config';
import { module, test } from 'qunit';
import { run } from '@ember/runloop';

module('Unit | Initializer | config', function(hooks) {
  hooks.beforeEach(function() {
    this.TestApplication = Application.extend();
    this.TestApplication.initializer({
      name: 'initializer under test',
      initialize
    });

    this.application = this.TestApplication.create({ autoboot: false });
  });

  hooks.afterEach(function() {
    run(this.configuration, 'destroy');
  });

  // Replace this with your real tests.
  test('it works', async function(assert) {
    await this.configuration.boot();

    assert.ok(true);
  });
});
