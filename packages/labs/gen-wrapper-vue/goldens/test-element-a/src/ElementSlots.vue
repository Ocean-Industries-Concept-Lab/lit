<script lang="ts">
export type {CellSlotsChangeEvent} from '@lit-internal/test-element-a/element-slots.js';
</script>
<script setup lang="ts">
import {h, useSlots, reactive} from 'vue';
import {assignSlotNodes, Slots} from '@lit-labs/vue-utils/wrapper-utils.js';
import '@lit-internal/test-element-a/element-slots.js';
import {CellSlotsChangeEvent} from '@lit-internal/test-element-a/element-slots.js';

export interface Props {
  mainDefault?: string;
  tabs?: {id: string; title: string}[];
}

const vueProps = defineProps<Props>();

const defaults = reactive({} as Props);
const vDefaults = {
  created(el: any) {
    for (const p in vueProps) {
      defaults[p as keyof Props] = el[p];
    }
  },
};

let hasRendered = false;

const emit = defineEmits<{
  (e: 'cell-slots-change', payload: CellSlotsChangeEvent): void;
}>();

const slots = useSlots() as Slots;

const render = () => {
  const eventProps = {
    onCellSlotsChange: (event: CellSlotsChangeEvent) =>
      emit('cell-slots-change', event as CellSlotsChangeEvent),
  };
  const props = eventProps as typeof eventProps & Props;

  for (const p in vueProps) {
    const v = vueProps[p as keyof Props];
    if (v !== undefined || hasRendered) {
      (props[p as keyof Props] as unknown) = v ?? defaults[p as keyof Props];
    }
  }

  hasRendered = true;

  return h('element-slots', props, assignSlotNodes(slots));
};
</script>
<template><render v-defaults /></template>
