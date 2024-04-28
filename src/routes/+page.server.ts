import type { PageServerLoad, Actions } from "./$types"
export const actions = {
    register: async ({request}) =>{
        const form = await request.formData()
        
        const em = form.get('email')?? ''
        const pass = form.get('password')??''

        console.log(em)
    }
} satisfies Actions