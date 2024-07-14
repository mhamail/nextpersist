"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ls = exports.persistance = void 0;
const persistance = (parentKey = "nextpersist") => {
    const ls = {
        set: function (key, value, pkey = parentKey) {
            if (typeof window !== "undefined") {
                // Retrieve existing data from local storage
                const storedData = localStorage.getItem(pkey);
                let data = storedData ? JSON.parse(storedData) : {};
                // Update or add the child key with JSON stringified value
                data[key] = JSON.stringify(value);
                // Save updated data back to local storage
                localStorage.setItem(pkey, JSON.stringify(data));
            }
        },
        get: function (key, pkey = parentKey) {
            if (typeof window !== "undefined") {
                // Retrieve existing data from local storage
                const storedData = localStorage.getItem(pkey);
                if (!storedData)
                    return null;
                const data = JSON.parse(storedData);
                // Parse and return the child key value
                return data[key] ? JSON.parse(data[key]) : null;
            }
            return null;
        },
        getAll: function (pkey = parentKey) {
            if (typeof window !== "undefined") {
                const storedData = localStorage.getItem(pkey);
                if (!storedData)
                    return null;
                const data = JSON.parse(storedData);
                // Parse each child key value
                Object.keys(data).forEach((key) => {
                    data[key] = JSON.parse(data[key]);
                });
                return data;
            }
            return null;
        },
        remove: function (key, pkey = parentKey) {
            if (typeof window !== "undefined") {
                const storedData = localStorage.getItem(pkey);
                if (!storedData)
                    return;
                const data = JSON.parse(storedData);
                delete data[key];
                // Save updated data back to local storage
                localStorage.setItem(pkey, JSON.stringify(data));
            }
        },
        removeAll: function (pkey = parentKey) {
            if (typeof window !== "undefined") {
                // delete all keys in parent key
                localStorage.removeItem(pkey);
            }
        },
        clearAll: function () {
            if (typeof window !== "undefined") {
                // delete all in local storage
                localStorage.clear();
            }
        },
    };
    return ls;
};
exports.persistance = persistance;
exports.ls = (0, exports.persistance)("nextpersist");
