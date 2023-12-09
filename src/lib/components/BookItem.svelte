<script lang="ts">
  export let book: Api.Book;
</script>

<div class="border-t border-t-zinc-500 py-3">
  <div class="pb-1">
    <span class="text-xl font-bold">{book.attributes.title}</span>
    <span class="text-gray-200">{book.attributes.yearPublished}</span>
    {#if book.attributes.publisher.data}
      <span class="float-right">
        {book.attributes.publisher.data.attributes.name}
      </span>
    {/if}
  </div>
  <div>
    {#each book.attributes.authors.data as author, i}
      <span>{author.attributes.name}</span>
      {#if i < book.attributes.authors.data.length - 1}
        <span>, </span>
      {/if}
    {/each}
  </div>
  {#if book.attributes.quantities}
    <div class="text-gray-300 italic">
      {#each book.attributes.quantities.data as quantity, i}
        <span>{quantity.attributes.library.data.attributes.name}</span>
        {#if i < book.attributes.quantities.data.length - 1}
          <span>, </span>
        {/if}
      {/each}
    </div>
  {/if}
</div>
