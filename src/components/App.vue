<template>
    <Page>
        <ActionBar title="Welcome to NativeScript-Vue!"/>
        <GridLayout columns="*" rows="*">
            <Button
                @onTap="hi"
                class="message" :text="msg" col="0" row="0"/>
        </GridLayout>
    </Page>
</template>

<script lang="ts">
  export default {
    data() {
      return {
        msg: 'Hello World!!!!!!'
      }
    },
    methods: {
      hi() {
        console.log('Say Hello')
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
