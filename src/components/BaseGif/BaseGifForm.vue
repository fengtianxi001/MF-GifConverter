<template>
  <div class="base-gif-form">
    <Form :model="form" auto-label-width>
      <template v-for="item in config">
        <FormItem :field="item.name" :label="item.label">
          <component
            :is="components[item.component]"
            v-model="form[item.name]"
            v-bind="{ ...item.props }"
          >
            <template #suffix>
              <span style="font-size: 12px">{{ item.unit }}</span>
            </template>
          </component>
          <template #extra>{{ item.desc }}</template>
        </FormItem>
      </template>
    </Form>
  </div>
</template>
<script setup lang="ts">
import { Input, InputNumber, Form, FormItem } from '@arco-design/web-vue'
import { computed } from 'vue'

interface PropsType {
  mode: 'image' | 'video'
  aspect: number
  modelValue: any
  config: any
}

const props = defineProps<PropsType>()

const components: any = {
  Input,
  InputNumber,
}
const emit = defineEmits(['update:modelValue'])

const form = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value),
})
</script>
