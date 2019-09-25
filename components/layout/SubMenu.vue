<template>
    <ul>
        <li
            v-for="(item, index) in items"
            :key="index"
            @mouseover="mouseover(index, $event)"
            @mouseleave="mouseleave"
            :class="{hover: currentHover === index, active: currentActive === index || currentActive === false && subIsActive(item.link)}"
        >
            <app-link
                :to="item.link | url"
                :css-class="{'call-to-action': item.callToAction}"
                v-if="item.link"
            >
                <span>{{ item.name }}</span>
                <span v-if="item.children.length" class="icon">
                    <v-icon v-if="currentActive === index || currentActive === false && subIsActive(item.link)" @click.stop.prevent="currentActive = -1">remove</v-icon>
                    <v-icon v-else @click.stop.prevent="currentActive = index">add</v-icon>
                </span>
            </app-link>
            <SubMenu v-if="item.children.length" :items="item.children"/>
        </li>
    </ul>
</template>

<script>
	import AppLink from '~/components/AppLink';

    export default {
      name: 'SubMenu',
      props: {
      	items: {
          type: Array,
          default: undefined
        },
        topLevel: {
          type: Boolean,
          default: false
        }
      },
      components: { AppLink },
      data() {
      	return {
          currentHover: false,
          currentActive: false,
          mouseleaveTimer: false
        }
      },
      methods: {
        subIsActive(input) {
          input = this.$options.filters.url(input)
          return this.$route.path.indexOf(input) === 0
        },
        mouseover(index, $event) {
          this.currentHover = index
          clearTimeout(this.mouseleaveTimer)

          if (this.topLevel) {
          	const $li = $event.path.find(function (element) {
              return element.tagName === 'LI';
            })

            if ($li) {
              const box = $li.getBoundingClientRect();

              if (box.x + (box.width * 3) > window.innerWidth) {
                $li.querySelectorAll('ul').forEach(($ul) => {
                  $ul.classList.add('alt-direction')
                })
              }
            }
          }
        },
        mouseleave() {
          this.mouseleaveTimer = setTimeout(() => { this.currentHover = false }, 1000)
        }
      }
    }
</script>
