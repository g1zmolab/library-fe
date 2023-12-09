<script lang="ts">
	export let label: string;
	export let id: string;
  export let placeholder: string;
</script>

<div>
	<label class="w-1/4 float-left" for={id}>{label}</label>
	<input
    class="w-3/4 float-right bg-gray-700 focus:bg-gray-600 outline-none"
    type="text"
    autocomplete="off"
    {id}
    {placeholder}
    name={id}
  />
</div>
