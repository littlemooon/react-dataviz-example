
var Immutable = require('immutable');

var MapStoreMixin = {

  state: Immutable.OrderedMap(),

  _setState: function(key, state) {
    this.state = state;
    this.emit(key);
  },

  get: function(key) {
    return this.state.get(key);
  },

  set: function(key, value) {
    this._setState(key, this.state.set(key, value));
  },

  emit: function(key) {
    this.trigger(this.get(key));
  },
};

module.exports = MapStoreMixin;
