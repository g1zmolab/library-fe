<script lang="ts">
  export let searchQuery: string;
  export let searchField: string;
</script>

<form action="/" method="get">
  <div class="flex flex-row">
    <input
      class="grow w-0 p-2 sm:px-3 outline-none rounded-l-md bg-zinc-600"
      type="text"
      id="search-field"
      name="q"
      value={searchQuery}
      autocomplete="off"
      enterkeyhint="search"
      placeholder="Αναζήτηση..."
      on:input
    />
    <select
      class="px-1 sm:px-4 text-center outline-none rounded-r-md bg-zinc-500"
      bind:value={searchField}
      name="search"
      id="search"
    >
      <option value="title">Τίτλος</option>
      <option value="author">Συγγραφέας</option>
      <option value="publisher">Εκδότης</option>
      <option value="library">Βιβλιοθήκη</option>
    </select>
  </div>
</form>
