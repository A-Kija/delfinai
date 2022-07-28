function getId(key) {
    let id = localStorage.getItem(key + '_id');
    if (null === id) {
        localStorage.setItem(key + '_id', 1);
        return 1;
    }
    id = parseInt(id);
    id++;
    localStorage.setItem(key + '_id', id);
    return id;
}

function getFrom(key) {
    const data = localStorage.getItem(key);
    if (null === data) {
        localStorage.setItem(key, JSON.stringify([]));
        return [];
    }
    return JSON.parse(data);
}

export function create(key, data) {
    const oldData = getFrom(key);
    const newData = {...data, id: getId(key) }
    oldData.push(newData);
    localStorage.setItem(key, JSON.stringify(oldData));
}

export function read(key) {
    const oldData = getFrom(key);
    return oldData;
}

export function update(key, data, id) {
    let oldData = getFrom(key);
    oldData = oldData.filter(d => d.id !== id);
    const newData = {...data, id: id }
    oldData.push(newData);
    localStorage.setItem(key, JSON.stringify(oldData));
}

export function destroy(key, id) {
    let oldData = getFrom(key);
    oldData = oldData.filter(d => d.id !== id);
    localStorage.setItem(key, JSON.stringify(oldData));
}