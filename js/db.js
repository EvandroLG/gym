var DB = function() {
  this.request = window.indexedDB;

  this.request.deleteDatabase('gym');
  this.open = this.request.open('gym', 1);
};

DB.prototype = {
  createScheme: function() {
    this.open.onupgradeneeded = function(e) {
      var db = e.target.result;
      var store = db.createObjectStore('Training', { keyPath: 'id', autoIncrement:true });

      store.createIndex('IndexTitle', 'title', { unique : true });
      store.createIndex('IndexExercises', 'exercises');
    }.bind(this);

    this._onSuccess();
  },

  _onSuccess: function() {
    this.open.onsuccess = function(e) {
      this.db = e.target.result;
    }.bind(this);
  },

  _wait: function(callback) {
    var attempt = window.setInterval(function() {
      if (this.db) {
        callback.call(this);
        window.clearInterval(attempt);
      }
    }.bind(this), 100);
  },

  getObjectStore: function() {
    return this.db.transaction(['Training'], 'readwrite')
                  .objectStore('Training');
  },

  insert: function(params) {
    this._wait(function() {
      this.getObjectStore().put(params);
    });
  },

  find: function(id, callback) {
    var fn = callback || function() {};

    this._wait(function() {
      var store = this.getObjectStore().get(1);

      store.onsuccess = function(e) {
        callback(store.result);
      };
    });
  }
};
