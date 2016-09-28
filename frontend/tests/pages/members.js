import {
  create,
  visitable,
  clickable,
  fillable,
  text
} from 'ember-cli-page-object';

export default create({
  visit: visitable('/'),

  add: clickable('#add'),
  edit: clickable('#members tr:first .edit'),
  delete: clickable('#members tr:first .delete'),
  submit: clickable('#submit'),

  name: fillable('#name'),
  email: fillable('#email'),

  nameText: text('#members tr:first .name'),
  emailText: text('#members tr:first .email'),

  membersCount() {
    return $('#members tr').length;
  }
});
