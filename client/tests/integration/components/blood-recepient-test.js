import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('blood-recepient', 'Integration | Component | blood recepient', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{blood-recepient}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#blood-recepient}}
      template block text
    {{/blood-recepient}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
