<template>
    <div :class="columnClass" v-editable="blok">
        <div v-if="image" :class="imageClass">
            <div class="inner" :style="{paddingTop: imageRatio}">
                <img :src="image | resize('1000x0')" :alt="imageAlt"/>
            </div>
        </div>

        <div v-else-if="title || text || link" class="content">
            <h2 v-if="title">{{ title }}</h2>
            <div v-if="text" v-html="$md.render(text)"></div>
            <ButtonLink
                v-if="is_link(link)"
                :link="link"
                css-class="ml-0 default"
            >
                <slot v-if="linkText">{{ linkText }}</slot>
            </ButtonLink>
        </div>
    </div>
</template>

<script>
	import ButtonLink from '@/components/util/ButtonLink';

  export default {
  	name: 'ColumnsItem',
    props: ['blok', 'side'],
    components: { ButtonLink },
    computed: {
      columnClass() {
        return `column column-${this.side}`;
      },
      imageClass() {
        return `image ${this.imageStyle}`;
      },
      image() {
        return this.blok[this.getKey('image')];
      },
      imageAlt() {
        return this.blok[this.getKey('imageAlt')];
      },
      imageStyle() {
        return this.blok[this.getKey('imageStyle')];
      },
      imageRatio() {
        const src = this.image;
        const values = !src ? [] : src.split('/');

        if (values.length) {
          const size = values[5].split('x');
          return (size[1] / size[0]) * 100 + '%';
        }

        return null;
      },
      title() {
        return this.blok[this.getKey('title')];
      },
      text() {
        return this.blok[this.getKey('text')];
      },
      link() {
        return this.blok[this.getKey('link')];
      },
      linkText() {
        return this.blok[this.getKey('linkText')];
      }
    },
    methods: {
      getKey(k) {
        return k + (this.side).charAt(0).toUpperCase() + (this.side).slice(1);
      }
    }
  }
</script>
