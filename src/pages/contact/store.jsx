import { create } from "zustand";

let api = "http://localhost:3000/ahliddin"

export let useTodoStore = create((set)=>({
    data:[],
    get:async()=>{
        try {
            let response = await fetch(api)
            let Data = await response.json()
            console.log(Data)
            set(()=>({data:Data}))
        } catch (error) {
            console.error(error)
        }
    },
    deleteUser: async(id)=>{
        try {
            await fetch(`${api}/${id}`, {method:"DELETE"})
            set((state)=>({data:state.data.filter((e) => e.id != id)}))
        } catch (error) {
            console.error(error)
        }
    },
    addUser: async(newUser)=>{
        try {
            await fetch(api, {method:"POST", headers:{"Content-type":"application/json"}, body:JSON.stringify(newUser)})
            set((state)=>({data:[...state.data, newUser]}))
        } catch (error) {
            console.error(error)
        }
    },
    editUser: async(updateUser, idx)=>{
        try {
            await fetch(`${api}/${idx}`, {method:"PUT", headers:{"Content-type":"application/json"}, body:JSON.stringify(updateUser)})
            set((state)=>({data:state.data.map((e) => {
                if (idx == e.id) {
                    return updateUser
                }
                return e
            })}))
        } catch (error) {
            console.error(error)
        }
    }
}))