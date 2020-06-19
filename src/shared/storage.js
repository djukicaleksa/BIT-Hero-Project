class Storage {
    set(key, value) {
        localStorage.setItem(key, JSON.stringify(value))
    }

    get(key) {
        const data = localStorage.getItem(key)
        return JSON.parse(data)
    }
}

export const storage = new Storage()