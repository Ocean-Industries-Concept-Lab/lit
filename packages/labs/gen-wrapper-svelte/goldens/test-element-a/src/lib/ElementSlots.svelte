<script lang="ts">
  import "@lit-internal/test-element-a/element-slots.js";
  import { setProperties } from "$lib/util.js";
  import NamedSlot from "$lib/NamedSlot.svelte";

  import type { Snippet } from "svelte";

  export interface Props {
    class?: string;
    style?: string;
    mainDefault?: string;
    tabs?: { id: string; title: string }[];
  }
  export interface Events {}
  export interface Slots {
    tabIcon?: Snippet<[any]>;
  }
  const {
    class: className,
    style,
    tabIcon,
    ...props
  } = $props<Props & Events & Slots>();
</script>

<element-slots use:setProperties={props} class={className} {style}>
  {#if props.tabs && tabIcon}
    {#each props.tabs as item}
      <NamedSlot name="tab-{item.id}-icon" content={tabIcon} arg={item} />
    {/each}
  {/if}
</element-slots>
