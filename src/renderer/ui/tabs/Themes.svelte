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
  import Icon from 'svelte-icons-pack/Icon.svelte'; // This import does not get bundled properly with externalModules
  import RiEditorQuestionMark from 'svelte-icons-pack/ri/RiEditorQuestionMark';
  import VscCheck from 'svelte-icons-pack/vsc/VscCheck';
  import VscChromeClose from 'svelte-icons-pack/vsc/VscChromeClose';
  const themes = Popcorn.themes;

  function createTooltipContent(errors: cssValidatorErrors) {
    return errors
      ?.map((error) => `Line ${error.line}: ${error.message}`)
      .join('\n ');
  }
</script>

<div class="themes-wrapper">
  {#each Object.keys(themes) as id}
    {@const theme = themes[id]}
    {@const isValid = theme.valid === true}
    {#key $rerenderStore[id]}
      <div class="theme-container" {id} data-enabled={theme.enabled}>
        <h1 class="theme-id">{id}</h1>
        <div class="theme-meta">
          <div
            class="theme-validity"
            data-value={theme.valid}
            data-error={isValid ? undefined : createTooltipContent(theme.errors)}
          >
            {#if isValid}
              <Icon color="currentColor" src={VscCheck} />
              <span class="theme-validity-text">Valid</span>
            {:else if theme.valid === false}
              <Icon color="currentColor" src={VscChromeClose} />
              <span class="theme-validity-text">Invalid</span>
            {:else}
              <Icon color="currentColor" src={RiEditorQuestionMark} />
              <span class="theme-validity-text">Validity Unknown</span>
            {/if}
          </div>
        </div>
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
    grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
    grid-auto-rows: max-content;
    gap: 1rem;
  }

  .theme-container {
    display: grid;
    grid-template-rows: auto 1fr auto;
    row-gap: 0.5rem;
    padding: 0.5rem;
    background-color: var(--pop-bg-normal);
  }

  .theme-id {
    overflow: scroll;
    font-size: 1.25rem;
    line-height: 1.5rem;
    user-select: text;
  }
  .theme-id::-webkit-scrollbar {
    display: none;
  }

  .theme-meta {
    padding-block-start: 0.5rem;
    border-block-start: 0.125rem solid var(--pop-fg-normal);
    font-size: 1.25rem;
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

  .theme-validity > :global(svg) {
    display: inline-block;
    vertical-align: middle;
    margin-inline-end: 0.125em;
  }

  /* TODO: Use a tooltip component instead of this */
  .theme-validity[data-error]::before,
  .theme-validity[data-error]::after {
    position: absolute;
    bottom: calc(100% + 0.5rem);
    left: 50%;
    transform: translateX(-50%);
  }
  .theme-validity[data-error]::after {
    width: max-content;
    padding: 0.25rem 0.5rem;
    border-radius: 0.125rem;
    color: var(--pop-tooltip-fg);
    background-color: var(--pop-tooltip-bg);
  }
  .theme-validity[data-error]:hover::after {
    content: attr(data-error);
  }
  .theme-validity[data-error]::before {
    left: calc(50% + 0.5rem);
    margin-bottom: -1rem;
    width: 0;
    height: 0;
    border: 0.5rem solid transparent;
    border-top-color: var(--pop-tooltip-bg);
  }
  .theme-validity[data-error]:hover::before {
    content: '';
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
