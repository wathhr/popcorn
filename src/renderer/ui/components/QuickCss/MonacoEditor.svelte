<script context="module" lang="ts">
  export type actions = {
    id: string;
    label: string;
    handler: () => void;
  }[];

  export type commands = {
    keybinding: (
      KeyCode: typeof monaco.KeyCode,
      KeyMod: typeof monaco.KeyMod
    ) => number;
    handler: () => void;
    context?: string;
  }[];
</script>

<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import { createEventDispatcher } from 'svelte';
  import { debounce } from 'ts-debounce';
  import loader from '@monaco-editor/loader';
  import type monaco from 'monaco-types'; // TODO: Use the script instead of using this

  let editorElement: HTMLDivElement;
  export let editor: monaco.editor.IStandaloneCodeEditor = null;
  export let content: string;
  export let actions: actions = [];
  export let commands: commands = [];
  export let options: monaco.editor.IEditorConstructionOptions = {};

  const dispatch = createEventDispatcher();

  let loaded = false;
  onMount(async () => {
    const monaco = await loader.init();

    monaco.editor.onDidCreateEditor(() => {
      loaded = true;
      recalculateSize();
      dispatch('ready');
    });

    editor = monaco.editor.create(editorElement, {
      language: 'css',
      theme: 'vs-dark',
      ...options,

      // Overrides the options no matter what
      value: content,
    });

    const actualCommands = commands.map((command) => {
      return {
        ...command,
        keybinding: command.keybinding(monaco.KeyCode, monaco.KeyMod),
      };
    });
    for (const command of actualCommands) {
      editor.addCommand(
        command.keybinding,
        command.handler,
        command.context ?? undefined
      );
    }
    for (const action of actions) {
      const { id, label, handler } = action;
      editor.addAction({
        id: 'custom.' + id,
        label,
        keybindings: [],
        run: handler,
      });
    }

    editor.onDidChangeModelContent(() => {
      const newContent = editor.getValue();
      if (newContent === content) return;

      ignoreNext = true;
      content = newContent;
      dispatch('change', content);
    });
  });

  // TODO: Fix this monster
  // Whenever the content variable changes, update Monaco
  let ignoreNext = false;
  $: if (typeof content === 'string' && loaded) {
    if (!ignoreNext) editor.getModel().setValue(content);
    ignoreNext = false;
  }

  export function recalculateSize() {
    if (!loaded) return;

    window.requestAnimationFrame(() => {
      editor.layout({ width: 0, height: 0 });
      const parentRect = editorElement.parentElement.getBoundingClientRect();
      editor.layout({
        width: parentRect.width,
        height: parentRect.height,
      });
    });
  }

  onDestroy(() => {
    editor.dispose();
    loaded = false;
  });
</script>

<svelte:window on:resize={debounce(recalculateSize, 50)} />

<div class="monaco-wrapper">
  {#if !loaded}
    <p class="loading-overlay">Loading monaco editor...</p>
  {/if}
  <div bind:this={editorElement} class="monaco-editor" />
</div>

<style>
  .monaco-editor {
    overflow: hidden;
  }
</style>
