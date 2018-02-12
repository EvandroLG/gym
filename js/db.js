var DB = function() {
  this.request = window.indexedDB || window.mozIndexedDB ||
                 window.webkitIndexedDB || window.msIndexedDB ||
                 window.shimIndexedDB;

  this.request.deleteDatabase('gym');
  this.open = this.request.open('gym', 1);
};

DB.prototype = {
  initialize: function() {
    this.open.onupgradeneeded = function(e) {
      var db = e.target.result;
      var store = db.createObjectStore('Training', { keyPath: 'id', autoIncrement:true });

      store.createIndex('IndexTitle', 'title', { unique : true });
      store.createIndex('IndexExercises', 'exercises');
    }.bind(this);
  },

  _onSuccess: function(callback) {
    this.open.onsuccess = function(e) {
      var db = e.target.result;
      var tx = db.transaction(['Training'], 'readwrite');
      var store = tx.objectStore('Training');

      callback(store);

      //tx.oncomplete = function() {
        //console.log('complete?');
        //db.close();
      //};

    }.bind(this);
  },

  create: function(params) {
    this._onSuccess(function(store) {
      store.put(params);

      var getStore = store.get(1);
      //getStore.onsuccess = function(e) {
        //console.log(getStore.result);
      //};
    });
  },

  find: function(id) {
    this._onSuccess(function(store) {
      var getStore = store.get(1);
      getStore.onsuccess = function(e) {
        debugger;
        console.log(getStore.result);
      };
    });
  }
};
