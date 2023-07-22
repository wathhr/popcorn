<script context="module" lang="ts">
  import { writable } from 'svelte/store';
  export const fileStatus = writable<{ [location: string]: QuickCssUIFileStatus }>(
    {}
  );
</script>

<script lang="ts">
  import { onMount } from 'svelte';
  import { createEventDispatcher } from 'svelte';
  import NewFile from 'phosphor-svelte/lib/FilePlus';
  import NewFolder from 'phosphor-svelte/lib/FolderPlus';
  import Trash from 'phosphor-svelte/lib/Trash';
  import { latestSelection, selectedFolder } from '@ui/tabs/QuickCss.svelte';
  import Folder from './Folder.svelte';

  let elementDiv: HTMLDivElement;

  const dispatch = createEventDispatcher();

  onMount(() => {
    const resizeObserver = new ResizeObserver((mutation) => {
      dispatch('resize', mutation[0]);
    });
    resizeObserver.observe(elementDiv);

    return () => {
      resizeObserver.disconnect();
    };
  });

  function handleDelete() {
    PopcornNative.deleteQuickCssNode($latestSelection.location);
  }
  function handleNewFile() {
    PopcornNative.createQuickCssNode($selectedFolder.location, 'file');
  }
  function handleNewFolder() {
    PopcornNative.createQuickCssNode($selectedFolder.location, 'folder');
  }
</script>

<div class="sidebar" style="width: 22ch;" bind:this={elementDiv}>
  <div class="action-bar">
    <button
      class="action"
      data-action="delete"
      on:click={handleDelete}
      on:submit={handleDelete}
    >
      <Trash weight="bold" />
    </button>
    <span class="selected-file">{$latestSelection.name}</span>

    <button
      class="action"
      data-action="new-file"
      on:click={handleNewFile}
      on:submit={handleNewFile}
    >
      <NewFile weight="bold" />
    </button>
    <button
      class="action"
      data-action="new-folder"
      on:click={handleNewFolder}
      on:submit={handleNewFolder}
    >
      <NewFolder weight="bold" />
    </button>
  </div>
  <Folder folder={window.Popcorn.quickCss} />
</div>

<style>
  .sidebar {
    min-inline-size: 20ch;
    max-inline-size: 75ch;
    resize: horizontal;
    overflow: auto;
    padding: 0.5rem;
    background-color: var(--pop-bg-normal);
  }

  .action-bar {
    display: grid;
    grid-template-columns: auto 1fr auto auto;
    gap: 0.25rem;
    padding: 0.25rem;
    margin-block-start: -0.5rem;
    margin-inline: -0.5rem;
    background-color: var(--pop-bg-normal);
  }
  .action-bar button {
    all: unset;
    display: inline;
    cursor: pointer;
  }
  .action-bar button > :global(svg) {
    vertical-align: middle;
  }
</style>
