<script lang="ts">
  export let value: string;
  export let name: string;
</script>

<div class="flex flex-row">
  <input
    class="grow w-0 p-2 sm:px-3 outline-none rounded-l-md bg-zinc-600 "
    type="text"
    id="search-field"
    {name}
    autocomplete="off"
    placeholder="Αναζήτηση..."
    bind:value
    on:input
  />
  <select
    class="px-1 sm:px-4 text-center outline-none rounded-r-md bg-zinc-500"
    name="search"
    id="search-category"
  >
    <option value="title">Τίτλος</option>
    <option value="author">Συγγραφέας</option>
    <option value="publisher">Εκδότης</option>
    <option value="library">Βιβλιοθήκη</option>
  </select>
</div>
