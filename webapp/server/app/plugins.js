'use strict';

function PluginManager() {
    this.types = [
        'auth',
        'files'
    ];
}

PluginManager.prototype.getPlugin = function(key, type) {
    let name = 'lets-chat-' + key;
    const plugin = require(name);

    if (!type) {
        return plugin;
    }

    let Provider = plugin && plugin[type];
    if (Provider) {
        return Provider;
    }

    throw 'Module "' + name + '" is not a ' + type + ' provider';
};

module.exports = new PluginManager();
