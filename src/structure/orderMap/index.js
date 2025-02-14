export class OrderedMap {
    content;
    constructor(content) {
        this.content = content;
    }
    static from(value) {
        if (value instanceof OrderedMap)
            return value;
        const content = [];
        if (value)
            for (const prop in value)
                content.push(prop, value[prop]);
        return new OrderedMap(content);
    }
    get size() {
        return this.content.length >> 1;
    }
    #find(key) {
        for (let i = 0; i < this.content.length; i += 2)
            if (this.content[i] === key)
                return i;
        return -1;
    }
    get(key) {
        const found = this.#find(key);
        return found === -1 ? undefined : this.content[found + 1];
    }
    update(key, value, newKey) {
        const self = newKey && newKey !== key ? this.remove(newKey) : this;
        const found = self.#find(key);
        const content = self.content.slice();
        if (found === -1) {
            content.push(newKey || key, value);
        }
        else {
            content[found + 1] = value;
            if (newKey)
                content[found] = newKey;
        }
        return new OrderedMap(content);
    }
    remove(key) {
        const found = this.#find(key);
        if (found === -1)
            return this;
        const content = this.content.slice();
        content.splice(found, 2);
        return new OrderedMap(content);
    }
    addToStart(key, value) {
        return new OrderedMap([key, value].concat(this.remove(key).content));
    }
    addToEnd(key, value) {
        const content = this.remove(key).content.slice();
        content.push(key, value);
        return new OrderedMap(content);
    }
    addBefore(place, key, value) {
        const without = this.remove(key);
        const content = without.content.slice();
        const found = without.#find(place);
        content.splice(found === -1 ? content.length : found, 0, key, value);
        return new OrderedMap(content);
    }
    forEach(fn) {
        for (let i = 0; i < this.content.length; i += 2) {
            fn(this.content[i], this.content[i + 1]);
        }
    }
    prepend(map) {
        map = OrderedMap.from(map);
        if (!map.size)
            return this;
        return new OrderedMap(map.content.concat(this.subtract(map).content));
    }
    append(map) {
        map = OrderedMap.from(map);
        if (!map.size)
            return this;
        return new OrderedMap(this.subtract(map).content.concat(map.content));
    }
    subtract(map) {
        let instance = this;
        map = OrderedMap.from(map);
        for (let i = 0; i < map.content.length; i += 2) {
            instance = instance.remove(map.content[i]);
        }
        return instance;
    }
    toObject() {
        const result = {};
        this.forEach((key, value) => {
            result[key] = value;
        });
        return result;
    }
}
