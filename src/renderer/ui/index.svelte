<script lang="ts">
  import { onDestroy, onMount } from 'svelte/internal';
  import TabView from './components/TabView.svelte';
  import ThemesTab from './tabs/Themes.svelte';
  import QuickCssTab from './tabs/QuickCss.svelte';
  import { createContext } from '@utils/hotkeys';

  import '@walter-org/svelte-float/styles';

  let dialog: HTMLDialogElement;

  let isOpened = false;
  function toggleUI() {
    if (isOpened) dialog.close();
    else dialog.showModal();

    isOpened = !isOpened;
    document.documentElement.dataset.popcornUiOpen = isOpened.toString();
  }

  // TODO: Find a better way to do this
  const context = createContext({ autoEnable: true });
  const hotkeyCallback = (event: KeyboardEvent) => {
    event.stopImmediatePropagation();
    event.stopPropagation();
    event.preventDefault();
    toggleUI();
  };
  const escapeCallback = (event: KeyboardEvent) => {
    if (isOpened) {
      event.stopImmediatePropagation();
      event.stopPropagation();
      event.preventDefault();
      toggleUI();
    }
  };
  onMount(() => {
    context.register(PopcornNative.config.hotkey, hotkeyCallback);
    context.register('escape', escapeCallback);
  });

  const tabs = [
    {
      name: 'Themes',
      component: ThemesTab,
    },
    {
      name: 'QuickCSS',
      component: QuickCssTab,
    },
  ];

  onDestroy(() => {
    context.unregister(PopcornNative.config.hotkey, hotkeyCallback);
    context.unregister('escape', escapeCallback);
  });
</script>

<dialog bind:this={dialog} class="PopcornUI-dialog">
  <TabView {tabs} />
  <div id="PopcornUI-layers" />
</dialog>

<style>
  :global(:where(.PopcornUI-dialog :not(svg, svg *))) {
    all: revert;
    box-sizing: border-box;
    user-select: none;
  }
  :global(:where(.PopcornUI-dialog :focus-visible)) {
    outline: auto 0.25rem -webkit-focus-ring-color !important;
    outline-offset: 0.25em !important;
  }

  .PopcornUI-dialog {
    --pop-inactive: hsl(0, 0%, 65%);
    --pop-hover: hsl(0, 0%, 90%);
    --pop-active: hsl(0, 0%, 100%);

    --pop-gray: var(--pop-inactive);
    --pop-red-hsl: 0, 75%, 55%;
    --pop-red: hsl(var(--pop-red-hsl));
    --pop-green-hsl: 128, 100%, 35%;
    --pop-green: hsl(var(--pop-green-hsl));
    --pop-blue-hsl: 215, 95%, 60%;
    --pop-blue: hsl(var(--pop-blue-hsl));

    --pop-fg-normal: hsl(0, 0%, 80%);
    --pop-bg-normal: hsla(0, 0%, 0%, 0.15);
    --pop-bg-hover: hsla(0, 0%, 80%, 0.2);
    --pop-bg-active: hsla(0, 0%, 80%, 0.4);

    --pop-tooltip-fg: var(--pop-fg-normal);
    --pop-tooltip-bg: hsl(0, 0%, 5%);

    overflow: hidden;
    inline-size: clamp(12rem + 10vw, 40vw, 60vw);
    block-size: clamp(12rem + 10vh, 40vh, 60vh);
    padding: 1rem;
    color: var(--pop-fg-normal);
    background-color: #383838;
  }
  .PopcornUI-dialog[open] {
    display: grid;
    grid-template-rows: auto 1fr;
  }
  .PopcornUI-dialog + :global(.backdrop),
  .PopcornUI-dialog {
    z-index: 2147483647;
  }
  .PopcornUI-dialog + :global(.backdrop),
  .PopcornUI-dialog::backdrop {
    background-color: rgba(0, 0, 0, 0.45);
  }
</style>
