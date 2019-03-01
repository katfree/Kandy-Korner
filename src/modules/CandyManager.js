import Settings from "./Settings";


export default {

    getAll() {
        return fetch(`${Settings.remoteURl}/individualCandies`).then(e => e.json())
    },

    get(id) {
        return fetch(`${Settings.remoteURl}/individualCandies/${id}`).then(e => e.json())
      },
      removeAndList(id){
        return fetch(`http://localhost:5002/individualCandies/${id}`, {
            method: "DELETE"
        })
            
      }

}
