<template>
  <div class="logo">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 395.196 135.945" v-if="loaded">
      <defs>
        <clipPath clipPathUnits="userSpaceOnUse" id="a">
          <path
            d="M74.459 3943.871c-6.82-3.7-10.893-10.43-10.893-18.003v-60.654c0-7.573 4.072-14.303 10.887-18 3.254-1.772 6.707-2.671 10.262-2.671 4.037 0 7.924 1.114 11.17 3.18l49.992 30.346c6.228 3.866 9.945 10.397 9.945 17.472 0 7.141-3.717 13.712-9.944 17.576l-.055.034c-3.16 1.89-7.468.907-9.404-2.149-1.944-3.077-.932-7.264 2.215-9.148 2.215-1.321 3.485-3.583 3.485-6.209 0-2.553-1.296-4.833-3.506-6.219l-49.921-30.2c-2.406-1.418-5.219-1.492-7.638-.25-2.473 1.345-3.892 3.657-3.892 6.344v60.653c0 2.675 1.461 5.09 3.892 6.342 2.484 1.35 5.172 1.276 7.6-.227l29.15-17.638c1.53-.915 3.348-1.199 5.126-.808 1.781.396 3.341 1.473 4.277 2.955a6.48 6.48 0 01.83 4.984 6.629 6.629 0 01-3.021 4.152l-29.139 17.632c-3.464 2.088-7.306 3.137-11.151 3.137-3.513 0-7.029-.874-10.267-2.631"
            clip-rule="evenodd"/>
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="b">
          <path d="M63 3843h341v104H63z"/>
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="c">
          <path d="M63 3844h93v103H63z"/>
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="d">
          <path
            d="M74.459 3943.871c-6.82-3.7-10.893-10.43-10.893-18.003v-60.654c0-7.573 4.072-14.303 10.887-18 3.254-1.772 6.707-2.671 10.262-2.671 4.037 0 7.924 1.114 11.17 3.18l49.992 30.346c6.228 3.866 9.945 10.397 9.945 17.472 0 7.141-3.717 13.712-9.944 17.576l-.055.034c-3.16 1.89-7.468.907-9.404-2.149-1.944-3.077-.932-7.264 2.215-9.148 2.215-1.321 3.485-3.583 3.485-6.209 0-2.553-1.296-4.833-3.506-6.219l-49.921-30.2c-2.406-1.418-5.219-1.492-7.638-.25-2.473 1.345-3.892 3.657-3.892 6.344v60.653c0 2.675 1.461 5.09 3.892 6.342 2.484 1.35 5.172 1.276 7.6-.227l29.15-17.638c1.53-.915 3.348-1.199 5.126-.808 1.781.396 3.341 1.473 4.277 2.955a6.48 6.48 0 01.83 4.984 6.629 6.629 0 01-3.021 4.152l-29.139 17.632c-3.464 2.088-7.306 3.137-11.151 3.137-3.513 0-7.029-.874-10.267-2.631l71.419-48.226"
            clip-rule="evenodd"/>
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="g">
          <path
            d="M221.371 3921.622c-2.598 1.068-5.584-.112-6.679-2.632l-14.85-34.099-14.85 34.099c-1.095 2.52-4.094 3.7-6.68 2.632-2.592-1.064-3.805-3.971-2.707-6.49l19.545-44.878c.796-1.833 2.645-3.023 4.693-3.023 2.048 0 3.897 1.19 4.694 3.023l19.542 44.878c1.098 2.519-.115 5.426-2.708 6.49"
            clip-rule="evenodd"/>
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="h">
          <path d="M63 3843h341v104H63z"/>
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="i">
          <path
            d="M233.395 3888.353l6.968 16.001 6.968-16.001zm26.324-3.034a.097.097 0 01-.007.019l-14.655 33.653c-.796 1.833-2.645 3.022-4.694 3.022-2.047 0-3.897-1.189-4.693-3.022l-14.659-33.66-4.885-11.217c-1.098-2.52.114-5.425 2.706-6.489 2.589-1.064 5.585.111 6.68 2.63l3.57 8.197h22.562l3.57-8.197c.82-1.89 2.709-3.022 4.695-3.022.662 0 1.335.126 1.983.392 2.593 1.064 3.805 3.969 2.707 6.489l-4.88 11.207z"
            clip-rule="evenodd"/>
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="j">
          <path d="M63 3843h341v104H63z"/>
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="k">
          <path d="M310.683 3867.231h49.28v54.785h-49.28z"/>
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="l">
          <path d="M310 3867h50v56h-50z"/>
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="m">
          <path
            d="M356.618 3921.714c-2.012.714-4.265.135-5.64-1.456l-15.654-17.969-15.655 17.974c-1.384 1.581-3.631 2.161-5.645 1.451-2.005-.716-3.341-2.573-3.341-4.652v-44.88c0-2.736 2.282-4.951 5.096-4.951 2.815 0 5.097 2.215 5.097 4.951v31.364l10.558-12.123c1.937-2.214 5.843-2.219 7.78.01l10.556 12.118v-31.364c0-2.736 2.282-4.951 5.096-4.951 2.815 0 5.098 2.215 5.098 4.951v44.88c0 2.079-1.337 3.936-3.346 4.652"
            clip-rule="evenodd"/>
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="n">
          <path d="M310 3867h50v56h-50z"/>
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="o">
          <path
            d="M300.203 3912.11c2.815 0 5.097 2.215 5.097 4.952 0 2.736-2.282 4.951-5.097 4.951h-25.345c-2.815 0-5.097-2.215-5.097-4.951v-44.879c0-2.737 2.282-4.952 5.097-4.952h25.345c2.815 0 5.097 2.215 5.097 4.952s-2.282 4.951-5.097 4.951h-20.249v12.539h10.051c2.815 0 5.097 2.214 5.097 4.951 0 2.737-2.282 4.952-5.097 4.952h-10.05v12.534z"
            clip-rule="evenodd"/>
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="p">
          <path d="M63 3843h341v104H63z"/>
        </clipPath>


        <linearGradient x1="0" y1="0" x2="0" y2="1024" gradientUnits="userSpaceOnUse"
                        gradientTransform="matrix(1 0 0 -1 63.566 3946.502)" v-for="(colors, i) of gradients" :key="`gradient1_${i+1}`" :id="`gradient${i+1}_1`">
          <stop offset="0" :stop-color="colors[0]"/>
          <stop offset="1" :stop-color="colors[1]"/>
        </linearGradient>
        <linearGradient x1="92.256" y1="0" x2="0" y2="101.96" gradientUnits="userSpaceOnUse"
                        gradientTransform="matrix(1 0 0 -1 63.566 3946.502)" v-for="(colors, i) of gradients" :key="`gradient2_${i+1}`" :id="`gradient${i+1}_2`">
          <stop offset="0" :stop-color="colors[0]"/>
          <stop offset="1" :stop-color="colors[1]"/>
        </linearGradient>
      </defs>
      <g clip-path="url(#a)" transform="matrix(1.33333 0 0 -1.33333 -84.755 5262.002)">
        <g clip-path="url(#b)">
          <g clip-path="url(#c)">
            <g clip-path="url(#d)">
              <path d="M63 3844h93v103H63z" :fill="`url(#gradient${colorScheme+1}_1)`"/>
              <path d="M63 3844h93v103H63z" :fill="`url(#gradient${colorScheme+1}_2)`"/>
            </g>
          </g>
        </g>
      </g>
      <g clip-path="url(#g)" transform="matrix(1.33333 0 0 -1.33333 -84.755 5262.002)">
        <g clip-path="url(#h)">
          <path d="M170.2 3862.231h59.284v64.785H170.2z" :fill="textColor"/>
        </g>
      </g>
      <g clip-path="url(#i)" transform="matrix(1.33333 0 0 -1.33333 -84.755 5262.002)">
        <g clip-path="url(#j)">
          <path d="M210.721 3862.231h59.283v64.782h-59.283z" :fill="textColor"/>
        </g>
      </g>
      <g clip-path="url(#k)" transform="matrix(1.33333 0 0 -1.33333 -84.755 5262.002)">
        <g clip-path="url(#l)">
          <g clip-path="url(#m)">
            <g clip-path="url(#n)">
              <path d="M305.683 3862.231h59.28v64.785h-59.28z" :fill="textColor"/>
            </g>
          </g>
        </g>
      </g>
      <g clip-path="url(#o)" transform="matrix(1.33333 0 0 -1.33333 -84.755 5262.002)">
        <g clip-path="url(#p)">
          <path d="M264.761 3862.231H310.3v64.782H264.76z" :fill="textColor"/>
        </g>
      </g>
    </svg>
  </div>
</template>

<script>
  export default {
    name: 'VLogo',
    props: {
      textColor: {
        type: String,
        default: '#FFF'
      },
      colorScheme: {
        type: Number,
        default: 0
      },
    },
    data: () => ({
      loaded: false,
      gradients: [
        ['#ff5acd', '#fbda61'],
        ['#2af598', '#08aeea']
      ]
    }),
    mounted() {
      this.loaded = true;
    }
  }
</script>

<style scoped lang="scss">
  .logo {
    position: relative;
    padding-top: 135.945 / 395.196 * 100%;

    svg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
</style>
