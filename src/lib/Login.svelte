<script lang="ts">
    import {currentUser, pb} from './pocketbase'

    let username: string;
    let name: string;
    let password: string;

    async function login(){
        await pb.collection('users').authWithPassword(username, password)
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

    function signOut(){
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