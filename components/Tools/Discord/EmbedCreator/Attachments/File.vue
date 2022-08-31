<template>
  <div
    class="flex items-center justify-between gap-4 rounded-[4px] border border-[#292B2F] bg-[#2F3136] px-4 py-3 dark:fill-white"
  >
    <div class="flex">
      <svg
        width="28"
        height="40"
        viewBox="0 0 28 40"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <defs>
          <filter
            x="-50%"
            y="-50%"
            width="200%"
            height="200%"
            filterUnits="objectBoundingBox"
            id="filter"
          >
            <feOffset
              dx="0"
              dy="2"
              in="SourceAlpha"
              result="shadowOffsetOuter"
            ></feOffset>
            <feGaussianBlur
              stdDeviation="0"
              in="shadowOffsetOuter"
              result="shadowBlurOuter"
            ></feGaussianBlur>
            <feColorMatrix
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.07 0"
              in="shadowBlurOuter"
              type="matrix"
              result="shadowMatrixOuter"
            ></feColorMatrix>
            <feMerge>
              <feMergeNode in="shadowMatrixOuter"></feMergeNode>
              <feMergeNode in="SourceGraphic"></feMergeNode>
            </feMerge>
          </filter>
        </defs>
        <g
          stroke="none"
          stroke-width="2"
          fill="none"
          fill-rule="evenodd"
          transform="translate(2, 2)"
        >
          <path
            d="M0,3.00741988 C0,1.34646775 1.34252415,0 2.99998588,0 L15.1166483,0 C17.0807354,0 24,6.91885725 24,8.87457593 L24,33.0035574 C24,34.6584469 22.6582294,36 21.0089096,36 L2.99109042,36 C1.33915679,36 0,34.6544607 0,32.9925801 L0,3.00741988 Z"
            stroke="#7289da"
            fill="#f4f6fc"
          ></path>
          <path
            d="M17,1.09677336 C17,0.542040316 17.3147964,0.407097791 17.7133118,0.80556379 L23.1952031,6.28677654 C23.5891543,6.68067898 23.4552279,7 22.9039575,7 L18.0045574,7 C17.4497557,7 17,6.54676916 17,5.99556698 L17,1.09677336 Z"
            stroke="#7289da"
            fill="#f4f6fc"
            filter="url(#filter)"
          ></path>
          <path
            d="M13,3 L4.49710104,3 C3.67027497,3 3,3.66579723 3,4.5 L3,6"
            stroke="#c9d2f0"
            stroke-linecap="round"
            stroke-linejoin="round"
            opacity="0.6"
          ></path>
          <text
            opacity="0.8"
            font-family="Source Code Pro"
            font-size="12"
            font-weight="420"
            letter-spacing="-0.3"
            fill="#697ec4"
          >
            <tspan x="5.2690141" y="26.4705882">||</tspan>
          </text>
        </g>
      </svg>
      <div class="ml-2 flex flex-col justify-between">
        <div class="text-md link hover:underline">{{ file.name }}</div>
        <div class="text-xs text-gray-600">{{ fileSize }}</div>
      </div>
    </div>
    <svg
      class="downloadButton-2HLFWN"
      aria-hidden="false"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M16.293 9.293L17.707 10.707L12 16.414L6.29297 10.707L7.70697 9.293L11 12.586V2H13V12.586L16.293 9.293ZM18 20V18H20V20C20 21.102 19.104 22 18 22H6C4.896 22 4 21.102 4 20V18H6V20H18Z"
      ></path>
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    file: {
      required: true,
    },
  },
  computed: {
    fileSize() {
      const size = this.file.size;
      var i = Math.floor(Math.log(size) / Math.log(1024));
      return (
        (size / Math.pow(1024, i)).toFixed(2) * 1 +
        " " +
        ["B", "KB", "MB", "GB", "TB"][i]
      );
    },
  },
};
</script>

<style scoped>
.link {
  color: #0897d1;
}
</style>
