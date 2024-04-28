import PocketBase from 'pocketbase'

import { writable } from 'svelte/store'

export const pb = new PocketBase('http://5.161.246.106:80')

export const currentUser = writable(pb.authStore.model)

pb.authStore.onChange((auth) =>{
    console.log('authStore changed', auth)
    currentUser.set(pb.authStore.model)
})