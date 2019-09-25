<template>
    <BodyText :blok="blok" :colored="true"/>
</template>

<script>
  import BodyText from '@/components/bloks/Text'

  export default {
    name: 'BodyPrimaryText',
    props: ['blok'],
    components: {BodyText}
  }
</script>
