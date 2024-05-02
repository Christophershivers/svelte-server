<script>
    export let form
</script>

<form method="post">
    <p>{form?.job || ""}</p>
    <input type="text" placeholder="Job Title" name="job"/>
    <input type="text" placeholder="Salary" name="salary"/>
    <button type="submit">Submit</button>
</form>