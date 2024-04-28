<script>
  import PocketBase from "pocketbase";
  import Login from "../lib/Login.svelte"

  const pb = new PocketBase("http://127.0.0.1:8090");
</script>

<h1>Welcome to SvelteKit</h1>
<p>
  Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
</p>
<form method="post" action="?/register">
    <input placeholder="enter email" name="email"/>
    <input placeholder="enter password" name="password"/>
    <button class="nin-btn nin-btn-twitter" type="submit">click</button>
</form>

<Login/>

