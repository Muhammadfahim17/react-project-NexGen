import {create} from 'zustand'
let api = "http://localhost:3001/data"

export let useTodoAsyncStore = create((set) => ({
    users : [],

    get : async () => {
        try {
            let response = await fetch(api)
            let data = await response.json()
            set(() => ({users : data}))
        } catch (error) {
            console.error(error);
        }
    },
    deleteuser : async (id) => {
        try {
            await fetch(`${api}/${id}`, {
                method : 'DELETE',
            })

            set((state) => ({users : state.users.filter((e) => e.id != id)}))

        } catch (error) {
            console.error(error);
        }
    },

    addNewUser : async (newUser) => {
        try {
            await fetch(api, {
                method : 'POST',
                headers : {'Content-type' : 'application/json'},
                body : JSON.stringify(newUser)
            })

            set((state) => ({users : [...state.users,newUser]}))

        } catch (error) {
            console.error(error);
        }
    },

    changeStatus : async (user) => {
        try {
            await fetch(`${api}/${user.id}`, {
                method : 'PUT',
                headers : {'Content-type' : 'application/json'},
                body : JSON.stringify({...user,status : !user.status})
            })

            set((state) => ({users : state.users.map((e) => {
                if(e.id == user.id) {
                    return {
                        ...e,
                        status : !e.status
                    }
                }
                return e
            })}))

        } catch (error) {
            console.error(error);
        }
    },


    editNewUser : async (idx,update) => {
        try {
            await fetch(`${api}/${idx}`, {
                method : 'PUT',
                headers : {'Content-type' : 'application/json'},
                body : JSON.stringify(update)
            })
        } catch (error) {
            console.error(error);
        }
    }

}))



