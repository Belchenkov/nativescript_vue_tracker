<template>
    <Page>
        <ActionBar title="Welcome to NativeScript-Vue!"/>
        <GridLayout columns="*" rows="*">
            <Button
                @onTap="hi"
                class="message"
                :text="msg"
            />
        </GridLayout>
    </Page>
</template>

<script lang="ts">
  import { performTestFetch } from "@/components/helpers";

  export default {
    data() {
      return {
        msg: 'App Running!'
      }
    },
    methods: {
      hi() {
        performTestFetch();
      }
    }
  }
</script>

<style scoped>
    ActionBar {
        background-color: #53ba82;
        color: #ffffff;
    }

    .message {
        vertical-align: center;
        text-align: center;
        font-size: 20;
        color: #333333;
    }
</style>
