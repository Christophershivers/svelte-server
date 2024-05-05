<script lang="ts">
    import {currentUser, pb} from './pocketbase'

    let username: string;
    let name: string;
    let password: string;

    let recordid = ''

    async function login(){
       const user = await pb.collection('users').authWithPassword(username, password)

       const record = await pb.collection('OnlineUsers').getFirstListItem(`userid="${user.record.id}"`, {expand: 'userid'});

       console.log(record)

       const data = {
            "isonline": true
        };

        await pb.collection('OnlineUsers').update(record.id, data);

        localStorage.setItem('recordid', record.id);

        recordid = record.id
       
    }

    async function signUp(){
        try{
            const data = {
                username,
                password,
                passwordConfirm: password,
                name
            }
            const createdUser = await pb.collection('users').create(data)
            await login()
        }catch (err){
            console.log(err)
        }

        
    }

    async function signOut(){
        const data = {
            "isonline": false
        };

        const recordid = localStorage.getItem('recordid')
        await pb.collection('OnlineUsers').update(recordid, data);

        pb.authStore.clear()
    }
</script>

{#if $currentUser}
    <p>
        Signed in as {$currentUser.username}
        <button on:click={signOut}>signout</button>
    </p>
{:else}
    <form on:submit|preventDefault>
        <input placeholder="username" type="text" bind:value={username}/>
        <input placeholder="password" type="password" bind:value={password}/>
        <input placeholder="name" type="text" bind:value={name}/>
        <button on:click={signUp}>Sign Up</button>
        <button on:click={login}>Login</button>
    </form>
{/if}