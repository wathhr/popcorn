<script lang="ts" context="module">
  import { Writable, writable } from 'svelte/store';
  const rerenderStore: Writable<string> = writable();

  export function rerenderItem(id: string) {
    rerenderStore.set(id);
  }

  const config = await PopcornNative.config;
</script>

<script lang="ts">
  import { onMount } from 'svelte';
  import dialogPolyfill from 'dialog-polyfill'; // TODO: fix this not working for external modules
  import { createContext } from '../utils/hotkeys';
  const themes = Popcorn.themes;

  let dialog: HTMLDialogElement;
  onMount(() => dialogPolyfill.registerDialog(dialog));

  // UI toggling
  let isOpened = false;
  function toggleUI() {
    if (isOpened) dialog.close();
    else dialog.showModal();

    isOpened = !isOpened;
    document.documentElement.dataset.popcornUiOpen = isOpened.toString();
  }
  const context = createContext();
  context.register(config.hotkey, (event: KeyboardEvent) => {
    event.stopImmediatePropagation();
    toggleUI();
  });
  context.register('escape', (event: KeyboardEvent) => {
    if (isOpened) {
      event.stopImmediatePropagation();
      toggleUI();
    }
  });

  // Rerenders the UI when something changes
  let shouldRerender: { [id: string]: boolean } = {};
  rerenderStore.subscribe((id) => {
    shouldRerender[id] = !shouldRerender?.[id] ?? true;
    rerenderStore.set(null);
  });
</script>

<dialog bind:this={dialog} class="PopcornUI-dialog">
  <div class="PopcornUI-themes-wrapper">
    {#each Object.keys(themes) as id}
      {@const theme = themes[id]}
      {#key shouldRerender?.[id]}
        <div class="PopcornUI-theme" {id} data-enabled={theme.enabled}>
          <h1 class="PopcornUI-theme-id">{id}</h1>
          <button
            class="PopcornUI-theme-toggle"
            on:click={() => window.Popcorn.toggle(id)}
            >{theme.enabled ? 'Disable' : 'Enable'}</button
          >
        </div>
      {/key}
    {/each}
  </div>
</dialog>

<style global>
  [class^='PopcornUI-'] {
    box-sizing: border-box;
  }
  .PopcornUI-dialog + .backdrop,
  .PopcornUI-dialog {
    z-index: 2147483647;
  }
  .PopcornUI-dialog {
    --pop-text-color: #e6e6e6;
    --pop-gray: #a6a6a6;
    --pop-red: #e23636;
    --pop-green: #00b318;
    background-color: #383838;
    min-height: clamp(12rem + 10vh, 40vh, 60vh);
    width: clamp(12rem + 10vw, 40vw, 60vw);
  }
  .PopcornUI-dialog + .backdrop,
  .PopcornUI-dialog::backdrop {
    background-color: rgba(0, 0, 0, 0.45);
  }
  .PopcornUI-themes-wrapper {
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
  }
  .PopcornUI-theme {
    background-color: rgba(0, 0, 0, 0.15);
    color: var(--pop-text-color);
    display: grid;
    grid-template-rows: auto 1fr auto;
    padding: 0.5rem;
    row-gap: 0.5rem;
  }
  .PopcornUI-theme-id {
    font-size: 1.25rem;
    line-height: 1.5rem;
    overflow: scroll;
  }
  .PopcornUI-theme-id::-webkit-scrollbar {
    display: none;
  }
  /* .PopcornUI-meta {
    border-top: 0.125rem solid var(--pop-text-color);
    font-size: 1.25rem;
    padding-block-start: 0.5rem;
  }
  .PopcornUI-valid[data-value='true'] {
    color: var(--pop-green);
  }
  .PopcornUI-valid[data-value='true']:before {
    content: '\\2714  ';
  }
  .PopcornUI-valid[data-value='false'] {
    color: var(--pop-red);
  }
  .PopcornUI-valid[data-value='false']:before {
    content: '\\2718  ';
  }
  .PopcornUI-valid[data-value='unknown'] {
    color: var(--pop-gray);
  }
  .PopcornUI-valid[data-value='unknown']:before {
    content: '\\2049  ';
  } */
  .PopcornUI-theme-toggle {
    all: unset;
    cursor: pointer;
    padding: 0.5rem;
    text-align: center;
  }
  [data-enabled='true'] > .PopcornUI-theme-toggle {
    background-color: var(--pop-red);
  }
  [data-enabled='false'] > .PopcornUI-theme-toggle {
    background-color: var(--pop-green);
  }
</style>
