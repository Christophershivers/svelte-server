<script>
    export let form
</script>

<form method="post" action="?/job">
    <p>{form?.job || ""}</p>
    <input type="text" placeholder="Job Title" name="job"/>
    <input type="text" placeholder="Salary" name="salary"/>
    <button type="submit">Submit</button>
</form>
<form method="post" action="?/change">
    <input type="text" placeholder="Salary" name="salary"/>
    <button type="submit" class="bulma-button bulma-is-danger">Submit</button>
    <button type="submit" class="bulma-button">Submit bulma</button>
</form>

<article class="bulma-media">
    <figure class="bulma-media-left">
      <p class="bulma-image bulma-is-64x64">
        <img src="https://bulma.io/assets/images/placeholders/128x128.png" />
      </p>
    </figure>
    <div class="bulma-media-content">
      <div class="bulma-content">
        <p>
          <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare
          magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa
          sem. Etiam finibus odio quis feugiat facilisis.
        </p>
      </div>
      <nav class="bulma-level bulma-is-mobile">
        <div class="bulma-level-left">
          <a class="bulma-level-item">
            <span class="bulma-icon bulma-is-small"><i class="fas fa-reply"></i></span>
          </a>
          <a class="bulma-level-item">
            <span class="icon is-small"><i class="fas fa-retweet"></i></span>
          </a>
          <a class="bulma-level-item">
            <span class="icon is-small"><i class="fas fa-heart"></i></span>
          </a>
        </div>
      </nav>
    </div>
    <div class="bulma-media-right">
      <button class="delete"></button>
    </div>
  </article>