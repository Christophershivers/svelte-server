<script lang="ts">
    import {onMount} from 'svelte'
    import {pb} from '../../lib/pocketbase'
    let users = []

    async function loadusers() {
        const records = await pb.collection('OnlineUsers').getFullList({ expand: "userid" });
        console.log(records)
        users = records.map(record => record)
    }
    onMount(async ()=>{
        loadusers()

        pb.collection('OnlineUsers').subscribe('*', async ({action, record}) =>{
            if(action === 'update'){

                const index = users.findIndex(e => e.id === record.id)

                users[index].isonline = record.isonline
            }
        })
    })
</script>

<div>
    {#each users as user (user.id)}
      <li class="user">
        {user.expand.userid.username} - 
        online: <span style="color: {user.isonline ? 'green' : 'grey'};">&#x278A;</span>
      </li>
    {/each}
</div>