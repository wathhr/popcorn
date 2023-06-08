<script lang="ts">
  import { selectedFolder } from '@ui/tabs/QuickCss.svelte';
  import Icon from 'svelte-icons-pack/Icon.svelte';
  import AiFillFolderOpen from 'svelte-icons-pack/ai/AiFillFolderOpen';
  import AiFillFolder from 'svelte-icons-pack/ai/AiFillFolder';
  import File from './File.svelte';

  export let folder: QuickCssFolder;
  export let rename = false;
  export let opened = true;
  export let depth = 0;

  function handleSubmit() {
    opened = !opened;
    selectedFolder.set(folder);
  }

  let input: HTMLInputElement;
  $: if (input) {
    input.focus();
    input.setSelectionRange(0, input.value.length);
  }

  function toggleRename() {
    if (rename && input?.value !== folder.name)
      PopcornNative.renameQuickCssNode(folder.location, input.value);

    rename = !rename;
  }
  function handleKeyPress(event: KeyboardEvent) {
    switch (event.key) {
      case 'F2':
        toggleRename();
        break;

      case 'Enter':
        if (rename) toggleRename();
        break;
    }
  }
</script>

<button
  class="item folder"
  style="--depth: {depth}"
  data-opened={opened}
  on:click={handleSubmit}
  on:submit|stopPropagation={handleSubmit}
  on:dblclick={toggleRename}
  on:keydown|self|stopPropagation={handleKeyPress}
>
  {#if opened}
    <Icon color="currentColor" src={AiFillFolderOpen} />
  {:else}
    <Icon color="currentColor" src={AiFillFolder} />
  {/if}
  {#if rename}
    <input
      class="rename-input"
      autocorrect="off"
      autocapitalize="off"
      spellcheck="false"
      type="text"
      value={folder.name}
      bind:this={input}
      on:keydown={handleKeyPress}
      on:focusout={rename && toggleRename}
    />
  {:else}
    <span class="item-name">{folder.name}</span>
  {/if}
</button>
{#if opened}
  {#each folder.files as item}
    {#if 'files' in item}
      <svelte:self folder={item} depth={depth + 1} />
    {:else}
      <File file={item} depth={depth + 1} />
    {/if}
  {/each}
{/if}

<style>
  :global(.item) {
    all: unset;
    display: grid;
    grid-template-columns: auto 1fr auto;
    gap: 0.25em;
    block-size: 1em;
    inline-size: calc(100% - 1rem * var(--depth, 0));
    padding-inline-start: calc(1rem * var(--depth, 0));
    padding-block: 0.25rem;
    cursor: pointer;
  }

  :global(.item > svg) {
    display: inline-block;
    vertical-align: middle;
  }

  :global(.item > .rename-input) {
    all: unset;
    inline-size: 100%;
    box-sizing: border-box;
  }
</style>
