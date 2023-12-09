<script lang="ts">
  export let value: string;
  export let name: string;
</script>

<input
  class="bg-zinc-600 outline-none py-1 px-2 rounded-sm"
  type="text"
  id="search-field"
  name={name}
  autocomplete="off"
  placeholder="Enter a book title"
  bind:value
  on:input
/>
