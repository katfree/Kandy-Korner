import Settings from "./Settings";


export default {

    getAll() {
        return fetch(`${Settings.remoteURl}/candyTypes`).then(e => e.json())
    },

    get(id) {
        return fetch(`${Settings.remoteURl}/candyTypes/${id}`).then(e => e.json())
      }

}