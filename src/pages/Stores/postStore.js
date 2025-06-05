import {create} from "zustand"
const usePostStore = create
posts:[]
post:null
actionFetchPostsByUserId:async(userId)=>{
const res = await axios.get(``)
}
