<template>
    <section v-editable="blok" :class="{columns: true, 'colored-background': blok.coloredBackground}">
        <v-container fluid py-0 px-0>
            <v-layout row wrap>
                <v-flex :class="columnClassLeft">
                    <ColumnsItem :blok="blok" :side="'left'" :style="{minHeight: minHeightColumnLeft}"/>
                </v-flex>
                <v-flex :class="columnClassRight">
                    <ColumnsItem :blok="blok" :side="'right'" :style="{minHeight: minHeightColumnRight}"/>
                </v-flex>
            </v-layout>
        </v-container>
    </section>
</template>

<script>
  import ColumnsItem from '~/components/ColumnsItem'

  export default {
  	name: 'Columns',
    props: [
      'blok'
    ],
    components: {
      ColumnsItem: ColumnsItem
    },
    computed: {
      columnClassLeft() {
        const size = Number(this.getLayoutSize(0));

        if (this.blok.imageLeft && this.blok.imageStyleLeft === 'fullwidth') {
          return `xs12 md${size}`;
        } else {
          return `xs12 md${size - 1} offset-md1`;
        }
      },
      columnClassRight() {
        const size = Number(this.getLayoutSize(1));

        if (this.blok.imageRight && this.blok.imageStyleRight === 'fullwidth') {
          return `xs12 md${size}`;
        } else {
          return `xs12 md${size - 1}`;
        }
      },
      minHeightColumnLeft() {
        const ratio = this.getImageRatio(this.blok.imageLeft);
        if (!ratio) {
          return false;
        }

        if (this.blok.imageStyleLeft === 'inline') {
          return false;
        }

        const size = 12 / Number(this.getLayoutSize(0));

        return `calc(((100vw - 100%) / ${size}) * ${ratio})`;
      },
      minHeightColumnRight() {
        const ratio = this.getImageRatio(this.blok.imageRight);
        if (!ratio) {
          return false;
        }

        if (this.blok.imageStyleRight === 'inline') {
          return false;
        }

        const size = 12 / Number(this.getLayoutSize(1));

        return `calc(((100vw - 100%) / ${size}) * ${ratio})`;
      }
    },
    methods: {
      getLayoutSize(item) {
        return this.blok.layout.split(';')[item] || '6';
      },
      getImageRatio(src) {
        const values = !src ? [] : src.split('/');

        if (values.length)
        {
          const size = values[5].split('x');
          return size[1] / size[0];
        }

        return false;
      }
    }
  }
</script>

<style lang="scss">
    @import '~assets/scss/variables';

    .columns
    {
        height: 100%;
        width: 100%;

        &.colored-background
        {
            > .container
            {
                background: get-color('grey', 'lighten-4');
            }
        }

        .column
        {
            height: 100%;

            position: relative;

            display: flex;
            flex-direction: column;
            justify-content: center;

            .image
            {
                height: 100%;
                position: relative;

                > .inner
                {
                    > img
                    {
                        height: 100%;
                        position: absolute;
                        top: 0;
                    }
                }

                &.inline
                {
                    height: auto;

                    margin: 0;
                    padding: 24px;

                    > .inner
                    {
                        position: relative;
                    }
                }
            }

            .content
            {
                margin: 0;
                padding: 24px;
            }

            &.column-left
            {
                .image > .inner > img
                {
                    right: 0;
                }
            }

            &.column-right
            {
                .image> .inner > img
                {
                    left: 0;
                }
            }
        }
    }
</style>
