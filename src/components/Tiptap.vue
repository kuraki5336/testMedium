<template>
  <div class="ddd">123</div>
  <MenuBar></MenuBar>
  <editor-content :editor="editor" />
</template>

<script>
import { Editor, EditorContent } from "@tiptap/vue-3";
import MenuBar from "@/components/MenuBar.vue";
import StarterKit from "@tiptap/starter-kit";
export default {
  components: {
    EditorContent,
    MenuBar,
  },
  data() {
    return {
      editor: null,
    };
  },
  mounted() {
    this.editor = new Editor({
      content: "<p>I’m running tiptap with Vue.js. 🎉</p>",
      extensions: [StarterKit],
    });
  },
  beforeUnmount() {
    this.editor.destroy();
  },
};
</script>

<style></style>
