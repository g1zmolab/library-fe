<script lang="ts">
  export let book: Api.Book;
</script>

<div class="border-t border-t-zinc-500 py-3">
  <div class="pb-1">
    <span class="sm:text-xl font-bold">{book.attributes.title}</span>
    <span class="text-gray-200 italic">({book.attributes.yearPublished})</span>
  </div>
  <div>
    {#each book.attributes.authors.data as author, i}
      <span>{author.attributes.name}</span>
      {#if i < book.attributes.authors.data.length - 1}
        <span>, </span>
      {/if}
    {/each}
  </div>
  <div >
    <span>
      {book.attributes.publisher.data.attributes.name}
    </span>
    <div class="sm:float-right italic text-gray-300">
      {#if book.attributes.quantities.data.length === 1}
        {book.attributes.quantities.data[0].attributes.library.data.attributes
          .name}
      {:else}
        σε {book.attributes.quantities.data.length} βιβλιοθήκες
      {/if}
    </div>
  </div>
</div>
