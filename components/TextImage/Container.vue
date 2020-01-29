<template>
  <section class="text" v-editable="blok">
    <v-container grid-list-xl>
      <v-layout row wrap>
        <v-flex sm6 text-sm-right
                :class="blok.imagePosition === 'left' && blok.imageAlignment ? `align-self-${blok.imageAlignment}` : false"
        >
          <ImageBlock
            :blok="blok"
            v-if="blok.imagePosition === 'left'"
          />
          <TextBlock
            :blok="blok"
            v-else
          />
        </v-flex>
        <v-flex sm6
                :class="blok.imagePosition !== 'left' && blok.imageAlignment ? `align-self-${blok.imageAlignment}` : false"
        >
          <TextBlock
            :blok="blok"
            v-if="blok.imagePosition === 'left'"
          />
          <ImageBlock
            :blok="blok"
            v-else
          />
        </v-flex>
      </v-layout>
    </v-container>
  </section>
</template>

<script>
  import TextBlock from '~/components/TextImage/Text';
  import ImageBlock from '~/components/TextImage/Image';

  export default {
    name: 'TextImage',
    props: ['blok'],
    components: { TextBlock, ImageBlock },
  }
</script>
