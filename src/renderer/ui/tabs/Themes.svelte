<script lang="ts" context="module">
  import { writable } from 'svelte/store';
  const rerenderStore = writable<{ [id: string]: boolean }>({});
  export function rerenderTheme(id: string) {
    rerenderStore.update((obj) => {
      obj[id] = !obj[id];
      return obj;
    });
  }
</script>

<script lang="ts">
  import { tooltip } from '@walter-org/svelte-float';
  import Icon from 'svelte-icons-pack/Icon.svelte';
  import RiEditorQuestionMark from 'svelte-icons-pack/ri/RiEditorQuestionMark';
  import VscCheck from 'svelte-icons-pack/vsc/VscCheck';
  import VscChromeClose from 'svelte-icons-pack/vsc/VscChromeClose';
  import { shouldValidate } from 'src/renderer';

  function createTooltipContent(errors: cssValidatorErrors) {
    return errors.map((error) => `Line ${error.line}: ${error.message}`).join('\n ');
  }

  function getValidityData(validity: Theme['valid']): {
    icon: typeof RiEditorQuestionMark;
    text: string;
  } {
    switch (validity) {
      case true:
        return {
          icon: VscCheck,
          text: 'Valid',
        };
      case false:
        return {
          icon: VscChromeClose,
          text: 'Invalid',
        };
      default:
        return {
          icon: RiEditorQuestionMark,
          text: 'Validity Unknown',
        };
    }
  }
</script>

<div class="themes-wrapper">
  {#each Object.keys(window.Popcorn.themes) as id}
    {@const theme = window.Popcorn.themes[id]}
    {@const { icon, text } = getValidityData(theme.valid)}
    {#key $rerenderStore[id]}
      <div class="theme-container" {id} data-enabled={theme.enabled}>
        <h1 class="theme-id">
          {id}
          {#if shouldValidate}
            <div
              class="theme-validity"
              data-value={theme.valid}
              use:tooltip={{
                content: theme.valid ? text : createTooltipContent(theme.errors),
                target: '#PopcornUI-layers',
              }}
            >
              <Icon color="currentColor" src={icon} />
            </div>
          {/if}
        </h1>
        <div class="theme-description">{theme.description ?? ''}</div>
        <button
          class="theme-toggle"
          on:click={() => window.Popcorn.themes[id].toggle()}
          on:submit={() => window.Popcorn.themes[id].toggle()}
        >
          {theme.enabled ? 'Disable' : 'Enable'}
        </button>
      </div>
    {/key}
  {/each}
</div>

<style>
  .themes-wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(18rem, 0.5fr));
    grid-auto-rows: max-content;
    gap: 1em;
  }

  .theme-container {
    display: grid;
    grid-template-rows: auto 1fr auto;
    row-gap: 0.5em;
    padding: 0.5em;
    background-color: var(--pop-bg-normal);
  }

  .theme-id {
    display: flex;
    flex-direction: row;
    gap: 0.25em;
    font-size: 1.25em;
    line-height: 1.5em;
    user-select: text;
    overflow-x: hidden;
  }
  .theme-validity {
    position: relative;
    width: fit-content;
  }
  .theme-validity[data-value='true'] {
    color: var(--pop-green);
  }
  .theme-validity[data-value='false'] {
    color: var(--pop-red);
  }
  .theme-validity[data-value='unknown'] {
    color: var(--pop-gray);
  }

  .theme-description {
    display: -webkit-box;
    -webkit-box-orient: inline-axis;
    padding-block-start: 0.5em;
    border-block-start: 0.125rem solid var(--pop-fg-normal);
    font-size: 1.25em;
    -webkit-line-clamp: 3;
    overflow: hidden;
  }

  .theme-validity > :global(svg) {
    display: inline-block;
    vertical-align: middle;
    margin-inline-end: 0.125em;
  }

  .theme-toggle {
    all: unset;
    padding: 0.5rem;
    text-align: center;
    cursor: pointer;
  }
  .theme-container[data-enabled='true'] > .theme-toggle {
    background-color: var(--pop-red);
  }
  .theme-container[data-enabled='false'] > .theme-toggle {
    background-color: var(--pop-green);
  }
</style>
