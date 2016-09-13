import { test } from 'qunit';
import moduleForAcceptance from 'woznex/tests/helpers/module-for-acceptance';
import page from 'woznex/tests/pages/members';

moduleForAcceptance('Acceptance | members');

test('list members', function(assert) {
  server.create('member');

  page.visit();

  andThen(function() {
    assert.equal(page.membersCount(), 1);
  });
});

test('create new member', function(assert) {
  page
    .visit()
    .add()
    .name('Guirec Corbel')
    .email('guirec@optik360.com')
    .submit();

  andThen(function() {
    assert.equal(page.membersCount(), 1);
  });
});

test('edit a member', function(assert) {
  server.create('member');

  page
    .visit()
    .edit()
    .name('Guirec Corbel 2')
    .email('guirec2@optik360.com')
    .submit();

  andThen(function() {
    assert.equal(page.membersCount(), 1);
    assert.equal(page.nameText, 'Guirec Corbel 2');
    assert.equal(page.emailText, 'guirec2@optik360.com');
  });
});

test('delete a member', function(assert) {
  server.create('member');

  page
    .visit()
    .delete();

  andThen(function() {
    assert.equal(page.membersCount(), 0);
  });
});
