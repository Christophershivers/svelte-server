import { pb } from "$lib/pocketbase";


export const actions={
    default: async({request}) =>{
        const form = await request.formData()

        const job = form.get('job')?? ''
        const salary = form.get('salary')?? ''
        //console.log(salary)
        const data = {
            Job: job,
            Salary: salary
        }

        console.log(data)

        const record = await pb.collection('Jobs').create(data)

        return {job: job}
    }
}