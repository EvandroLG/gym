class DB {
  constructor() {
    this.request = window.indexedDB;
    this.open = this.request.open('gym', 1);

    this._onSuccess();
  }

  deleteDatabase() {
    this.request.deleteDatabase('gym');
  }

  createSchema() {
    this.open.onupgradeneeded = (e) => {
      let db = e.target.result;
      let store = db.createObjectStore('Training', { keyPath: 'id', autoIncrement:true });

      store.createIndex('IndexTitle', 'title', { unique : true });
      store.createIndex('IndexExercises', 'exercises');
    };
  }

  _onSuccess() {
    this.open.onsuccess = (e) => {
      this.db = e.target.result;
    };
  }

  _wait(callback) {
    let attempt = window.setInterval(() => {
      if (this.db) {
        callback.call(this);
        window.clearInterval(attempt);
      }
    }, 100);
  }

  getObjectStore() {
    return this.db.transaction(['Training'], 'readwrite')
                  .objectStore('Training');
  }

  insert(params) {
    this._wait(() => {
      this.getObjectStore().put(params);
    });
  }

  find(id, callback = function() {}) {
    this._wait(() => {
      this.getObjectStore().get(id).onsuccess = function(e) {
        callback(e.target.result);
      };
    });
  }

  findAll(callback = function() {}) {
    this._wait(function() {
      this.getObjectStore().getAll().onsuccess = function(e) {
        callback(e.target.result);
      };
    });
  }

  update(id, attributes, callback = function() {}) {
    this._wait(() => {
      this.getObjectStore().get(id).onsuccess = (e) => {
        const data = e.target.result;

        Object.keys(attributes).forEach((key) => {
          data[key] = attributes[key];
        });

        this.getObjectStore().put(data).onsuccess = (e) => {
          callback(e.target.result);
        }
      };
    });
  }

  remove(id, callback = function() {}) {
    this._wait(() => {
      this.getObjectStore().delete(id).onsuccess = (e) => {
        callback(e.target.result);
      };
    });
  }
};

export default DB;
