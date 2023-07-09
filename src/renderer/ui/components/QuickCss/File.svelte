<!-- TODO: When you click the file, the parent is selected -->

<script lang="ts">
  import { fileStatus } from '@components/QuickCss/Sidebar.svelte';
  import { selectedFile } from '@ui/tabs/QuickCss.svelte';
  import CssFile from 'phosphor-svelte/lib/FileCss';
  import Circle from 'phosphor-svelte/lib/Circle';

  export let file: QuickCssFile;
  export let rename = false;
  export let depth = 0;

  function handleSubmit() {
    selectedFile.set(file);
  }

  let input: HTMLInputElement;
  $: if (input) {
    input.focus();
    input.setSelectionRange(0, input.value.length - 4);
  }

  function toggleRename() {
    if (rename && input?.value !== file.name)
      PopcornNative.renameQuickCssNode(file.location, input.value);

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
  class="item file"
  style="--depth: {depth}"
  on:click={handleSubmit}
  on:submit|stopPropagation={handleSubmit}
  on:dblclick={toggleRename}
  on:keydown|self|stopPropagation={handleKeyPress}
>
  <CssFile weight="bold" />
  {#if rename}
    <input
      class="rename-input"
      autocorrect="off"
      autocapitalize="off"
      spellcheck="false"
      type="text"
      value={file.name}
      bind:this={input}
      on:keydown={handleKeyPress}
      on:focusout={rename && toggleRename}
    />
  {:else}
    <span class="item-name">{file.name}</span>
  {/if}
  {#if $fileStatus?.[file.location]?.unsaved}
    <Circle weight="fill" />
  {/if}
</button>
