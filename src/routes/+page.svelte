<script lang="ts">
  import SearchInput from "$lib/components/inputs/SearchInput.svelte";
  import BookItem from "$lib/components/BookItem.svelte";

  export let data;

  let searchParams = "";

  if (data.searchParams.searchQuery) {
    searchParams += `q=${data.searchParams.searchQuery}&`;
  }
  if (data.searchParams.searchField) {
    searchParams += `search=${data.searchParams.searchField}&`;
  }
</script>

<svelte:head>
  <title>Αρχική σελίδα - gizmolib</title>
  <meta
    name="description"
    content="Ψηφιακός Κατάλογος Κινηματικών Βιβλιoθηκών"
  />
</svelte:head>

<SearchInput
  searchQuery={data.searchParams.searchQuery}
  searchField={data.searchParams.searchField}
/>

{#if data.searchParams.searchQuery}
  <div class="mt-4 font-bold">
    Αναζήτηση για "{data.searchParams.searchQuery}"
  </div>
{/if}

<div class="my-6">
  <div class="my-2 text-zinc-300 italic">
    {#if data.api.meta.pagination.total === 1}
      Βρέθηκε 1 αποτέλεσμα
    {:else}
      Βρέθηκαν {data.api.meta.pagination.total} αποτελέσματα
    {/if}
  </div>
  {#each data.api.data as item}
    <BookItem book={item} />
  {/each}
</div>

{#if data.api.meta.pagination.pageCount > 1}
  <div class="float-right">
    {#each Array(data.api.meta.pagination.pageCount) as _, key}
      <a href="?{searchParams}page={key + 1}">
        {#if data.api.meta.pagination.page === key + 1}
          <span class="bg-zinc-500 px-4 py-2 rounded-sm">{key + 1}</span>
        {:else}
          <span class="bg-zinc-600 px-4 py-2 rounded-sm">{key + 1}</span>
        {/if}
      </a>
    {/each}
  </div>
{/if}
