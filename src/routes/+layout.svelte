<script lang="ts">
  import "../app.postcss";
</script>

<header class="bg-zinc-800 text-fuchsia-300">
  <div
    class="mx-auto max-w-4xl py-6 sm:px-6 lg:px-8 flex items-center justify-between"
  >
    <div>
      <a href="/">
        <div class="text-4xl font-bold mb-2">gizmolib</div>
        <div class="italic">Ψηφιακός Κατάλογος Κινηματικών Βιβλιoθηκών</div>
      </a>
    </div>
    <div>
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
