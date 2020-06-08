<template>
  <pre><code ref="el" :class="lang">{{ text.trim() }}</code></pre>
</template>

<script>
import hljs from 'highlight.js/lib/core';
import js from 'highlight.js/lib/languages/javascript';
import xml from 'highlight.js/lib/languages/xml';
import css from 'highlight.js/lib/languages/css';
import 'highlight.js/styles/github.css';

export default {
  name: 'CodeHighlighter',
  props: {
    lang: { type: String, default: '' },
    text: { type: String, default: '' },
  },
  mounted() {
    if (this.lang === 'js') {
      hljs.registerLanguage('javascript', js);
    } else if (this.lang === 'css') {
      hljs.registerLanguage('css', css);
    } else if (this.lang === 'html') {
      hljs.registerLanguage('xml', xml);
    }
    hljs.highlightBlock(this.$refs.el);
  },
};
</script>
