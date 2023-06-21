<!-- TODO: Improve everything here -->
<script context="module" lang="ts">
  import { writable, Readable } from 'svelte/store';
  const rerenderStore = writable<boolean>();
  export function rerenderSidebar() {
    rerenderStore.update((obj) => !obj);
  }

  const selectedNode = writable<QuickCssFile | QuickCssFolder>();
  export const selectedFile = writable<QuickCssFile>();
  export const selectedFolder = writable<QuickCssFolder>();
  export const latestSelection: Readable<QuickCssFile | QuickCssFolder> = {
    subscribe: selectedNode.subscribe,
  };

  export const status = writable<QuickCssUIStatus>({});
</script>

<script lang="ts">
  import { debounce } from 'ts-debounce';
  // TODO: Get rid of the type imports somehow
  import MonacoEditor, { type actions, type commands } from '@components/QuickCss/MonacoEditor.svelte';
  import Sidebar, { fileStatus } from '@components/QuickCss/Sidebar.svelte';

  let editorContent: string;

  selectedFile.subscribe((file) => {
    if (!file) return;

    editorContent = file.content;
    selectedNode.set(file);
  });
  selectedFolder.subscribe((folder) => {
    if (!folder) return;

    selectedNode.set(folder);
  });

  let actions: actions = [
    {
      id: 'save',
      label: 'Save the currently selected file',
      handler: save,
    },
  ];
  let commands: commands = [
    {
      keybinding: (KeyCode, KeyMod) => KeyMod.CtrlCmd | KeyCode.KeyS,
      handler: save,
    },
  ];

  function handleChange() {
    $fileStatus[$selectedFile.location] ??= {};
    $fileStatus[$selectedFile.location].unsaved = true;
  }

  function save() {
    $fileStatus[$selectedFile.location].unsaved = false;
    PopcornNative.updateQuickCssFile($selectedFile.location, editorContent);
  }

  let recalculateSize: MonacoEditor['recalculateSize'];
</script>

<div class="quickCss-wrapper">
  {#key $rerenderStore}
    <Sidebar on:resize={debounce(recalculateSize, 50)} />
  {/key}
  {#if $selectedFile}
    <div class="status-bar">
      <span class="selected-file">{$selectedFile.location}</span>
      {#if $status.type}
        <div class="status" data-type={$status.type}>
          <div class="status-message">{$status.message}</div>
        </div>
      {/if}
    </div>
    <MonacoEditor
      on:change={handleChange}
      bind:content={editorContent}
      bind:recalculateSize
      {actions}
      {commands}
    />
  {:else}
    <span class="no-file-selected">Select a file to edit</span>
  {/if}
</div>

<style>
  .quickCss-wrapper {
    display: grid;
    grid-template-areas:
      'sidebar status'
      'sidebar editor';
    grid-template-columns: auto 1fr;
    grid-template-rows: auto 1fr;
    gap: 1rem;
    block-size: 100%;
    overflow: hidden;
  }

  .quickCss-wrapper > :global(.sidebar) {
    grid-area: sidebar;
  }

  .quickCss-wrapper > :global(.monaco-wrapper) {
    grid-area: editor;
    overflow: hidden;
  }

  .quickCss-wrapper > .status-bar {
    grid-area: status;
    display: flex;
    justify-content: space-between;
    min-block-size: 1.5em;
    padding: 0.25em;
    background-color: var(--pop-bg-normal);
  }
</style>
