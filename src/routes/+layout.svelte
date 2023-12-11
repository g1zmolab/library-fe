<script lang="ts">
  import "../app.postcss";
</script>

<header class="bg-zinc-800 text-fuchsia-300">
  <div
    class="py-3 mx-auto max-w-4xl sm:px-6 lg:px-8 flex items-center justify-between"
  >
    <div class="mx-4 sm:mx-0">
      <a href="/">
        <div class="text-4xl font-bold mb-2">gizmolib</div>
        <div class="italic text-sm">Ψηφιακός Κατάλογος Κινηματικών Βιβλιoθηκών</div>
      </a>
    </div>
    <div class="hidden sm:block">
      <a href="/about" class="text-xl px-2">Σχετικά</a>
    </div>
  </div>
</header>

<main class="text-fuchsia-50">
  <div class="mx-auto max-w-4xl py-6 sm:px-6 lg:px-8">
    <div class="px-4 py-6 sm:px-0">
      <slot />
    </div>
  </div>
</main>
