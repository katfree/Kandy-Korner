import Settings from "./Settings";


export default {

    getAll() {
        return fetch(`${Settings.remoteURl}/employees`).then(e => e.json())
    },

    get(id) {
        return fetch(`${Settings.remoteURl}/employees/${id}`).then(e => e.json())
      },

      removeAndList(id) {
        return fetch(`http://localhost:5002/employees/${id}`, {
            method: "DELETE"
        })
            .then(e => e.json())
            .then(() => fetch(`http://localhost:5002/employees`))
            .then(e => e.json())
      }

}