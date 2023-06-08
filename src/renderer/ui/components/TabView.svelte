<!-- TODO: Add UUIDs to each tab -->
<script lang="ts">
  import { SvelteComponent } from 'svelte';
  export let tabs: { name: string; component: typeof SvelteComponent }[];

  let selectedTab = tabs?.[0]?.name;
  const loadedTabs: string[] = [selectedTab];

  function switchTabs(tabName: string) {
    selectedTab = tabName;
    if (!loadedTabs.includes(tabName)) loadedTabs.push(tabName);
  }
</script>

<div class="tab-list">
  {#each tabs as { name }}
    <button
      class="tab"
      data-selected={selectedTab === name}
      on:click={() => switchTabs(name)}
      on:keypress={() => switchTabs(name)}
    >
      {name}
    </button>
  {/each}
</div>
{#each loadedTabs as tabName}
  {@const tab = tabs.find((tab) => tab.name === tabName)}
  <div
    class="tab-wrapper"
    data-selected={tab.name === selectedTab}
    data-name={tab.name}
  >
    <svelte:component this={tab.component} />
  </div>
{/each}

<style>
  /* TODO: Make this scrollable */
  .tab-list {
    display: flex;
    gap: 1rem;
    margin-block-end: 1rem;
    border-block-end: 0.25rem solid var(--pop-gray);
    font-size: 1.25rem;
  }

  .tab {
    all: unset;
    padding: 0.25rem;
    margin-block-end: -0.25rem;
    border-block-end: 0.25rem solid transparent;
    color: var(--pop-inactive);
    cursor: pointer;
  }
  .tab:hover {
    border-color: hsl(var(--pop-blue-hsl), 0.5);
    color: var(--pop-hover);
  }
  .tab[data-selected='true'] {
    border-color: var(--pop-blue);
    color: var(--pop-active);
  }

  .tab-wrapper[data-selected='false'] {
    display: none;
  }
</style>
