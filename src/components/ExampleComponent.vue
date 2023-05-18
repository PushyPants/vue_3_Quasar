<template>
  <div>
    <q-card flat bordered>
      <q-card-section title>
        {{ title }}
      </q-card-section>
      <q-separator />
      <q-card-section class="q-py-xs">
        <q-list>
          <template v-for="(todo, idx) in todos" :key="todo.id">
            <q-item style="min-width: 250px">
              <q-item-section avatar>
                <q-avatar color="blue">
                  {{ todo.id }}
                </q-avatar>
              </q-item-section>
              <q-item-section>
                {{ todo.content }}
              </q-item-section>
            </q-item>
            <q-separator v-if="idx !== todos.length - 1" />
          </template>
        </q-list>
      </q-card-section>
    </q-card>
    <div class="text-center">
      <q-btn
        color="primary"
        label="increment click count"
        class="q-ma-sm"
        @click="increment"
      />
      <p>Count: {{ todoCount }} / {{ meta.totalCount }}</p>
      <p>Active: {{ active ? 'yes' : 'no' }}</p>
      <p>Clicks on todos: {{ clickCount }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { Todo, Meta } from './models';

interface Props {
  title: string;
  todos?: Todo[];
  meta: Meta;
  active: boolean;
}
const props = withDefaults(defineProps<Props>(), {
  todos: () => [],
});

const clickCount = ref(0);
function increment() {
  clickCount.value += 1;
  return clickCount.value;
}

const todoCount = computed(() => props.todos.length);
</script>
