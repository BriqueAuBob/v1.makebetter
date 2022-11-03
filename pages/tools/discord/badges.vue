<template>
  <div>
    <ToolsHeader>
      <h1 class="mx-auto max-w-lg text-4xl font-extrabold">Badges Discord</h1>
      <h2 class="mx-auto mt-4 max-w-lg text-2xl leading-relaxed">
        Créé un badge Discord
      </h2>
      <div class="mx-auto mt-12 flex gap-4">
        <NuxtLink to="/tools/discord" class="w-full">
          <Button
            class="mx-auto"
            color="white"
            text="Voir d'autres outils Discord"
            :small="true"
          >
            <template v-slot:icon_left>
              <CubeIcon class="mr-3 h-8 w-8" />
            </template>
          </Button>
        </NuxtLink>
      </div>
    </ToolsHeader>
    <section class="container mx-auto gap-8 py-24 px-4">
      <h3 class="text-2xl font-semibold">
        Tu souhaites créer un badge de rôle?
      </h3>
      <div class="mt-2 text-lg">
        Suis les différentes étapes afin de le créer!
      </div>
      <div class="mt-8 grid gap-8 lg:grid-cols-2">
        <div>
          <ToolsStep :step-id="1" name="Forme du badge">
            <Card
              class="grid grid-cols-3 items-center gap-12 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6"
            >
              <div
                class="cursor-pointer p-2"
                :class="
                  shape === 0 &&
                  'rounded-md border-2 border-dashed border-dark-700 bg-dark-800 bg-opacity-25'
                "
                @click="selectShape(0)"
              >
                <svg
                  class="w-full"
                  viewBox="0 0 250 250"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="125" cy="125" r="125" fill="#99AAB5" />
                </svg>
              </div>
              <div
                class="cursor-pointer p-2"
                :class="
                  shape === 1 &&
                  'rounded-md border-2 border-dashed border-dark-700 bg-dark-800 bg-opacity-25'
                "
                @click="selectShape(1)"
              >
                <svg
                  class="w-full"
                  viewBox="0 0 226 236"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M101.305 5.52712C107.63 -1.24786 118.37 -1.24786 124.695 5.52712L137.085 18.798C140.846 22.826 146.414 24.6354 151.824 23.5871L169.648 20.1332C178.748 18.3699 187.437 24.683 188.572 33.8819L190.795 51.9008C191.469 57.3699 194.911 62.1069 199.904 64.4386L216.354 72.1211C224.752 76.043 228.071 86.2577 223.582 94.3669L214.789 110.251C212.121 115.072 212.121 120.928 214.789 125.749L223.582 141.633C228.071 149.742 224.752 159.957 216.354 163.879L199.904 171.561C194.911 173.893 191.469 178.63 190.795 184.099L188.572 202.118C187.437 211.317 178.748 217.63 169.648 215.867L151.824 212.413C146.414 211.365 140.846 213.174 137.085 217.202L124.695 230.473C118.37 237.248 107.63 237.248 101.305 230.473L88.9149 217.202C85.1544 213.174 79.5857 211.365 74.1758 212.413L56.3518 215.867C47.2524 217.63 38.5633 211.317 37.4284 202.118L35.2053 184.099C34.5306 178.63 31.0889 173.893 26.096 171.561L9.64599 163.879C1.24803 159.957 -2.07094 149.742 2.41788 141.633L11.2106 125.749C13.8794 120.928 13.8794 115.072 11.2106 110.251L2.41788 94.3669C-2.07094 86.2577 1.24802 76.043 9.64598 72.1211L26.096 64.4387C31.0889 62.1069 34.5306 57.3699 35.2053 51.9008L37.4284 33.8819C38.5633 24.683 47.2524 18.3699 56.3518 20.1332L74.1758 23.5871C79.5857 24.6354 85.1544 22.826 88.9149 18.798L101.305 5.52712Z"
                    fill="#99AAB5"
                  />
                </svg>
              </div>
              <div
                class="cursor-pointer p-2"
                :class="
                  shape === 2 &&
                  'rounded-md border-2 border-dashed border-dark-700 bg-dark-800 bg-opacity-25'
                "
                @click="selectShape(2)"
              >
                <svg
                  class="w-full"
                  viewBox="0 0 218 244"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M97 3.9282C104.426 -0.358985 113.574 -0.358984 121 3.9282L205.253 52.5718C212.679 56.859 217.253 64.782 217.253 73.3564V170.644C217.253 179.218 212.679 187.141 205.253 191.428L121 240.072C113.574 244.359 104.426 244.359 97 240.072L12.7468 191.428C5.3212 187.141 0.746826 179.218 0.746826 170.644V73.3564C0.746826 64.782 5.3212 56.859 12.7468 52.5718L97 3.9282Z"
                    fill="#99AAB5"
                  />
                </svg>
              </div>
              <div
                class="cursor-pointer p-2"
                :class="
                  shape === 3 &&
                  'rounded-md border-2 border-dashed border-dark-700 bg-dark-800 bg-opacity-25'
                "
                @click="selectShape(3)"
              >
                <svg
                  class="w-full"
                  viewBox="0 0 236 236"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M104.565 6.43501C111.985 -0.984949 124.015 -0.984932 131.435 6.43503L229.565 104.565C236.985 111.985 236.985 124.015 229.565 131.435L131.435 229.565C124.015 236.985 111.985 236.985 104.565 229.565L6.43501 131.435C-0.984949 124.015 -0.984932 111.985 6.43503 104.565L104.565 6.43501Z"
                    fill="#99AAB5"
                  />
                </svg>
              </div>
              <div
                class="cursor-pointer p-2"
                :class="
                  shape === 4 &&
                  'rounded-md border-2 border-dashed border-dark-700 bg-dark-800 bg-opacity-25'
                "
                @click="selectShape(4)"
              >
                <svg
                  class="w-full"
                  viewBox="0 0 236 236"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M184.246 0H51.7544C49.6842 25.5665 26.9123 45.233 0 45.233V57.0329C0 115.049 28.9824 169.132 79.7018 207.482L118 235.998L156.298 207.482C207.018 170.115 236 115.049 236 57.0329V45.233C209.088 45.233 187.351 25.5665 184.246 0Z"
                    fill="#B2BFC7"
                  />
                </svg>
              </div>
              <div
                class="cursor-pointer p-2"
                :class="
                  shape === 5 &&
                  'rounded-md border-2 border-dashed border-dark-700 bg-dark-800 bg-opacity-25'
                "
                @click="selectShape(5)"
              >
                <svg
                  class="w-full"
                  viewBox="0 0 236 236"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M184.246 0H51.7544C49.6842 25.5665 26.9123 45.233 0 45.233V57.0329C0 115.049 28.9824 169.132 79.7018 207.482L118 235.998L156.298 207.482C207.018 170.115 236 115.049 236 57.0329V45.233C209.088 45.233 187.351 25.5665 184.246 0Z"
                    fill="#B2BFC7"
                  />
                  <path
                    d="M184.246 0H51.7544C49.6842 25.5667 26.9123 45.2333 0 45.2333V57.0333C0 115.05 28.9824 169.133 79.7018 207.483L118 236L156.298 207.483C207.018 170.117 236 115.05 236 57.0333V45.2333C209.088 45.2333 187.351 25.5667 184.246 0ZM94.193 170.117C63.1403 146.517 44.5088 113.083 44.5088 76.7V69.8167C61.0702 69.8167 75.5614 58.0167 76.5965 42.2833H118V188.8L94.193 170.117Z"
                    fill="#99AAB5"
                  />
                </svg>
              </div>
              <div
                class="cursor-pointer p-2"
                :class="
                  shape === 6 &&
                  'rounded-md border-2 border-dashed border-dark-700 bg-dark-800 bg-opacity-25'
                "
                @click="selectShape(6)"
              >
                <svg
                  class="w-full"
                  viewBox="0 0 236 236"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M117.81 0L222.719 52.3703C230.858 56.433 236 64.7474 236 73.8435V162.157C236 171.253 230.858 179.567 222.719 183.63L117.81 236L13.253 183.637C5.12984 179.569 0 171.263 0 162.178V73.8221C0 64.7372 5.12983 56.431 13.253 52.3628L117.81 0Z"
                    fill="#B2BFC7"
                  />
                  <path
                    d="M0 162.178C0 171.263 5.12984 179.569 13.253 183.637L117.81 236V0L13.253 52.3628C5.12983 56.431 0 64.7372 0 73.8221V162.178Z"
                    fill="#99AAB5"
                  />
                </svg>
              </div>
              <div
                class="cursor-pointer p-2"
                :class="
                  shape === 7 &&
                  'rounded-md border-2 border-dashed border-dark-700 bg-dark-800 bg-opacity-25'
                "
                @click="selectShape(7)"
              >
                <svg
                  class="w-full"
                  viewBox="0 0 218 225"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M109 225L22.3975 150L0.746843 37.5L109 -1.09278e-05L217.253 37.5L195.603 150L109 225Z"
                    fill="#99AAB5"
                  />
                </svg>
              </div>
              <div
                class="cursor-pointer p-2"
                :class="
                  shape === 8 &&
                  'rounded-md border-2 border-dashed border-dark-700 bg-dark-800 bg-opacity-25'
                "
                @click="selectShape(8)"
              >
                <svg
                  class="w-full"
                  viewBox="0 0 216 223"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M112.583 221.031C109.952 223.309 106.048 223.309 103.417 221.031L23.2305 151.587C22.0431 150.559 21.236 149.161 20.9392 147.619L0.892451 43.4529C0.23485 40.0359 2.18702 36.6547 5.47503 35.5157L105.709 0.793703C107.193 0.279541 108.807 0.27954 110.291 0.793703L210.525 35.5157C213.813 36.6547 215.765 40.0359 215.108 43.4529L195.061 147.619C194.764 149.161 193.957 150.559 192.769 151.587L112.583 221.031Z"
                    fill="#99AAB5"
                  />
                  <path
                    d="M26.9283 147.453L104.698 214.167C105.995 215.28 108 214.358 108 212.649L108 9.80074C108 8.42821 106.649 7.46355 105.351 7.90901L7.64604 41.4352C6.70229 41.759 6.14158 42.7289 6.33187 43.7083L26.2672 146.317C26.3532 146.759 26.5861 147.16 26.9283 147.453Z"
                    fill="#B2BFC7"
                  />
                </svg>
              </div>
              <div
                class="cursor-pointer p-2"
                :class="
                  shape === 9 &&
                  'rounded-md border-2 border-dashed border-dark-700 bg-dark-800 bg-opacity-25'
                "
                @click="selectShape(9)"
              >
                <svg
                  class="w-full"
                  viewBox="0 0 218 250"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M109 250L0.746826 187.5L0.746837 62.5L109 0L217.253 62.5L217.253 187.5L109 250Z"
                    fill="#99AAB5"
                  />
                  <path
                    d="M7.9999 182.25L109 240L109 9.49995L7.99991 66.7499L7.9999 182.25Z"
                    fill="#B2BFC7"
                  />
                </svg>
              </div>
              <div
                class="cursor-pointer p-2"
                :class="
                  shape === 10 &&
                  'rounded-md border-2 border-dashed border-dark-700 bg-dark-800 bg-opacity-25'
                "
                @click="selectShape(10)"
              >
                <svg
                  class="w-full"
                  viewBox="0 0 250 250"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M244.233 240.145C156.061 227.235 102.57 226.462 6.03987 245.777C2.93659 246.397 0 244.036 0 240.871V8.71942C0 4.31564 5.28104 2.06252 8.46006 5.10999L68.3829 62.5533C70.5639 64.6441 74.0867 64.3377 75.8741 61.9019L119.688 2.19421C121.62 -0.438054 125.515 -0.542948 127.586 1.98155L177.001 62.2331C178.875 64.5185 182.312 64.6879 184.402 62.5979L241.464 5.53553C244.614 2.38571 250 4.61654 250 9.07107V235.195C250 238.252 247.257 240.588 244.233 240.145Z"
                    fill="#99AAB5"
                  />
                </svg>
              </div>
              <div
                class="cursor-pointer p-2"
                :class="
                  shape === 11 &&
                  'rounded-md border-2 border-dashed border-dark-700 bg-dark-800 bg-opacity-25'
                "
                @click="selectShape(11)"
              >
                <svg
                  class="w-full"
                  viewBox="0 0 170 250"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 241.867V5C0 2.23858 2.23858 0 5 0H165C167.761 0 170 2.23857 170 5V241.867C170 245.594 166.069 248.011 162.743 246.329L87.257 208.142C85.838 207.424 84.162 207.424 82.743 208.142L7.25704 246.329C3.93122 248.011 0 245.594 0 241.867Z"
                    fill="#99AAB5"
                  />
                </svg>
              </div>
              <div
                class="cursor-pointer p-2"
                :class="
                  shape === 12 &&
                  'rounded-md border-2 border-dashed border-dark-700 bg-dark-800 bg-opacity-25'
                "
                @click="selectShape(12)"
              >
                <svg
                  class="w-full"
                  viewBox="0 0 158 247"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M155.657 173.343L84.6569 244.343C81.5327 247.467 76.4673 247.467 73.3431 244.343L2.34314 173.343C0.842853 171.843 0 169.808 0 167.686V8C0 3.58172 3.58172 0 8 0H150C154.418 0 158 3.58172 158 8V167.686C158 169.808 157.157 171.843 155.657 173.343Z"
                    fill="#99AAB5"
                  />
                </svg>
              </div>
              <div
                class="cursor-pointer p-2"
                :class="
                  shape === 13 &&
                  'rounded-md border-2 border-dashed border-dark-700 bg-dark-800 bg-opacity-25'
                "
                @click="selectShape(13)"
              >
                <svg
                  class="w-full"
                  viewBox="0 0 207 205"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M122.571 3.36025C144.954 -5.00857 169.414 9.11367 173.358 32.6822L177.004 54.4685C178.067 60.826 180.731 66.8083 184.744 71.8528L198.495 89.14C213.371 107.841 207.498 135.468 186.302 146.502L166.708 156.702C160.991 159.678 156.124 164.06 152.567 169.435L140.375 187.855C127.186 207.782 99.0963 210.734 82.0524 193.985L66.2974 178.502C61.6999 173.984 56.0288 170.71 49.8174 168.988L28.5314 163.085C5.50426 156.699 -5.9838 130.896 4.67882 109.511L14.5352 89.7425C17.4113 83.9739 18.7728 77.5685 18.4916 71.1288L17.5279 49.0606C16.4854 25.1871 37.4751 6.2879 61.1088 9.82018L82.9554 13.0854C89.3304 14.0382 95.843 13.3537 101.881 11.0962L122.571 3.36025Z"
                    fill="#99AAB5"
                  />
                  <path
                    d="M142.886 121.817C129.908 144.297 101.163 151.999 78.683 139.02C56.2033 126.041 48.5011 97.2967 61.4798 74.817C74.4585 52.3372 103.203 44.6351 125.683 57.6138C148.163 70.5925 155.865 99.3372 142.886 121.817Z"
                    fill="#B2BFC7"
                  />
                </svg>
              </div>
              <div
                class="cursor-pointer p-2"
                :class="
                  shape === 14 &&
                  'rounded-md border-2 border-dashed border-dark-700 bg-dark-800 bg-opacity-25'
                "
                @click="selectShape(14)"
              >
                <svg
                  class="w-full"
                  viewBox="0 0 271 271"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M127.772 0.232924C87.7574 2.60417 51.1089 22.2728 27.0577 54.3059C4.04383 84.9416 -4.8907 124.448 2.64649 162.071C11.2211 204.711 39.6761 240.64 79.1828 258.72C118.817 276.843 164.95 274.747 202.763 253.089C236.765 233.611 260.647 200.477 268.354 162.071C274.769 130.08 269.327 96.565 253.089 68.237C232.531 32.3295 196.666 7.72777 155.931 1.58792C146.531 0.169408 136.707 -0.296373 127.772 0.232924ZM145.027 28.9208C161.647 30.5299 177.251 35.6746 191.267 44.1646C193.998 45.816 198.211 48.6742 199.841 49.9657L200.519 50.495L125.486 125.507L50.4526 200.54L49.0764 198.656C38.9139 184.746 32.1389 168.02 29.5559 150.426C28.5185 143.418 28.1798 133.15 28.7726 126.925C30.1064 112.74 33.5786 100.334 39.6973 87.9692C50.1562 66.8185 66.8184 50.1562 87.9691 39.6973C101.689 32.9223 115.895 29.2596 131.371 28.4974C134.124 28.3703 141.725 28.6032 145.027 28.9208ZM223.3 74.2921C232.573 87.461 238.988 103.848 241.444 120.574C242.481 127.582 242.82 137.85 242.227 144.075C240.894 158.26 237.421 170.667 231.303 183.031C217.689 210.618 193.342 230.562 163.235 238.84C149.283 242.672 134.336 243.519 119.833 241.338C102.641 238.734 86.0425 231.959 72.3443 221.924L70.46 220.547L145.493 145.514L220.505 70.4812L221.034 71.1587C221.331 71.5186 222.347 72.916 223.3 74.2921Z"
                    fill="#99AAB5"
                  />
                </svg>
              </div>
            </Card>
          </ToolsStep>
          <ToolsStep :step-id="2" name="Icone">
            <Card>
              <div class="mb-8 flex flex-wrap gap-2">
                <button
                  @click="category = cat"
                  :class="[category === cat && 'bg-gray-400 dark:bg-dark-800']"
                  class="rounded-sm px-4 py-2 transition duration-100 ease-in hover:bg-gray-400 dark:hover:bg-dark-800"
                  v-for="(_, cat) of categories"
                  :key="cat"
                >
                  {{ cat }}
                </button>
                <NuxtLink
                  href="#custom_icon"
                  class="rounded-sm px-4 py-2 transition duration-100 ease-in hover:bg-gray-400 dark:hover:bg-dark-800"
                >
                  Icone personnalisée
                </NuxtLink>
              </div>
              <div class="font-regular mb-4 text-lg text-gray-500">
                {{ category }}
              </div>
              <div
                class="mb-8 grid grid-cols-4 items-center gap-4 md:grid-cols-6 xl:grid-cols-6"
              >
                <div
                  class="flex h-16 cursor-pointer items-center justify-center p-2"
                  :class="
                    icon === ico().index &&
                    !uploadedIcon &&
                    'rounded-md border-2 border-dashed border-dark-700 bg-dark-800 bg-opacity-25'
                  "
                  v-for="(ico, key) of categories[category]"
                  :key="key"
                  @click="
                    icon = ico().index;
                    uploadedIcon = null;
                  "
                >
                  <svg
                    ref="__svg_icon"
                    :width="ico('#99AAB5').width"
                    :height="ico('#99AAB5').height"
                    :style="`transform: scale(${
                      ico().category === 'Icones Fluent 3D'
                        ? 1.5
                        : ico().width <= 24
                        ? 1
                        : 0.5
                    });`"
                    v-html="ico('#99AAB5').svg"
                  ></svg>
                </div>
              </div>
              <div id="custom_icon" class="my-8 w-full">
                <div class="relative flex items-center">
                  <div class="flex-grow border-t border-dark-800"></div>
                  <span class="mx-4 flex-shrink text-dark-800">OU</span>
                  <div class="flex-grow border-t border-dark-800"></div>
                </div>
              </div>
              <div
                class="relative col-span-2 mt-4 flex cursor-pointer items-center justify-center rounded-md bg-gray-400 bg-opacity-25 p-4 transition duration-200 ease-in hover:bg-gray-300 dark:bg-dark-800 dark:hover:bg-dark-700"
              >
                Upload icon
                <input
                  class="absolute top-0 left-0 h-full w-full cursor-pointer opacity-0"
                  type="file"
                  accept="image/*"
                  @change="(e) => uploadFile(e)"
                />
              </div>
            </Card>
          </ToolsStep>
          <ToolsStep :step-id="3" name="Paramètres">
            <Card class="items-center">
              <ToolsDiscordEmbedCreatorCollapseCard
                class="mb-2 rounded-lg bg-gray-200 dark:bg-dark-800"
                name="Paramètre du fond"
              >
                <div class="mb-2 text-sm font-medium">Couleur du fond</div>
                <ClientOnly>
                  <div class="flex">
                    <ColorPicker v-model="primaryColor"></ColorPicker>
                    <div class="grid grid-cols-10 gap-2">
                      <div
                        class="flex h-7 w-7 cursor-pointer items-center justify-center rounded-md"
                        v-for="(color, index) in defaultColors"
                        :key="index"
                        :style="`background: ${color};`"
                        @click="primaryColor = color"
                      >
                        <CheckIcon
                          v-if="primaryColor == color"
                          class="h-6 w-6"
                        />
                      </div>
                    </div>
                  </div>
                </ClientOnly>

                <div class="mt-3 flex items-center justify-between gap-4">
                  <div class="text-sm font-medium">Dégradé</div>
                  <Toggle v-model="shapeGradient" />
                </div>
                <ClientOnly>
                  <div class="relative mt-2">
                    <div class="mb-2 flex">
                      <ColorPicker v-model="shapeGradientColor"></ColorPicker>
                      <div class="grid grid-cols-10 gap-2">
                        <div
                          class="flex h-7 w-7 cursor-pointer items-center justify-center rounded-md"
                          v-for="(color, index) in defaultColors"
                          :key="index"
                          :style="`background: ${color};`"
                          @click="shapeGradientColor = color"
                        >
                          <CheckIcon
                            v-if="shapeGradientColor == color"
                            class="h-6 w-6"
                          />
                        </div>
                      </div>
                    </div>
                    <label for="gradient_angle">Angle du dégradé</label>
                    <input
                      id="gradient_angle"
                      v-model="shapeGradientAngle"
                      type="range"
                      class="mt-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-300 dark:bg-dark-700"
                      min="0"
                      max="180"
                      step="0.1"
                    />
                    <div
                      :class="shapeGradient && 'pointer-events-none opacity-0'"
                      class="absolute left-0 top-0 h-full w-full bg-gray-200 bg-opacity-75 backdrop-blur-sm duration-200 ease-in dark:bg-dark-800 dark:bg-opacity-75"
                    ></div>
                  </div>
                </ClientOnly>
              </ToolsDiscordEmbedCreatorCollapseCard>
              <ToolsDiscordEmbedCreatorCollapseCard
                class="mb-2 rounded-lg bg-gray-200 dark:bg-dark-800"
                name="Paramètres de l'icone"
              >
                <div class="mb-2 text-sm font-medium">Taille de l'icone</div>
                <input
                  v-model="multiply"
                  type="range"
                  class="w-full cursor-pointer appearance-none rounded-lg bg-gray-300 dark:bg-dark-700"
                  min="1"
                  max="6"
                  step="0.1"
                />

                <div class="mt-3 text-sm font-medium">Position de l'icone</div>
                <div class="flex w-full flex-col p-2">
                  <div class="mb-8 flex items-center justify-center gap-2">
                    <label for="offset_x">X</label>
                    <input
                      id="offset_x"
                      v-model="offset_x"
                      type="range"
                      class="w-full cursor-pointer appearance-none rounded-lg bg-gray-300 dark:bg-dark-700"
                      min="-100"
                      max="100"
                      step="0.1"
                    />
                    <label for="offset_y">Y</label>
                    <input
                      id="offset_y"
                      v-model="offset_y"
                      type="range"
                      class="w-full cursor-pointer appearance-none rounded-lg bg-gray-300 dark:bg-dark-700"
                      min="-100"
                      max="100"
                      step="0.1"
                    />
                  </div>
                  <Button
                    text="Centrer l'icone"
                    @click="
                      offset_x = 0;
                      offset_y = 0;
                    "
                    color="primary"
                    :centerText="true"
                  />
                </div>

                <div class="mt-3 flex items-center justify-between gap-4">
                  <div class="text-sm font-medium">Couleur de l'icone</div>
                  <Toggle v-model="duo_tone" />
                </div>
                <ClientOnly>
                  <div class="relative mt-2">
                    <div class="flex">
                      <ColorPicker v-model="secondaryColor"></ColorPicker>
                      <div class="grid grid-cols-10 gap-2">
                        <div
                          class="flex h-7 w-7 cursor-pointer items-center justify-center rounded-md"
                          v-for="(color, index) in defaultColors"
                          :key="index"
                          :style="`background: ${color};`"
                          @click="secondaryColor = color"
                        >
                          <CheckIcon
                            v-if="secondaryColor == color"
                            class="h-6 w-6"
                          />
                        </div>
                      </div>
                    </div>

                    <div class="mt-3 flex items-center justify-between gap-4">
                      <div class="text-sm font-medium">Dégradé</div>
                      <Toggle v-model="iconGradient" />
                    </div>

                    <div class="relative">
                      <div class="mb-2 flex">
                        <ColorPicker v-model="iconGradientColor"></ColorPicker>
                        <div class="grid grid-cols-10 gap-2">
                          <div
                            class="flex h-7 w-7 cursor-pointer items-center justify-center rounded-md"
                            v-for="(color, index) in defaultColors"
                            :key="index"
                            :style="`background: ${color};`"
                            @click="iconGradientColor = color"
                          >
                            <CheckIcon
                              v-if="iconGradientColor == color"
                              class="h-6 w-6"
                            />
                          </div>
                        </div>
                      </div>
                      <label for="gradient_angle">Angle du dégradé</label>
                      <input
                        id="gradient_angle"
                        v-model="iconGradientAngle"
                        type="range"
                        class="mt-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-300 dark:bg-dark-700"
                        min="0"
                        max="180"
                        step="0.1"
                      />
                      <div
                        :class="iconGradient && 'pointer-events-none opacity-0'"
                        class="absolute left-0 top-0 h-full w-full bg-gray-200 bg-opacity-75 backdrop-blur-sm duration-200 ease-in dark:bg-dark-800 dark:bg-opacity-75"
                      ></div>
                    </div>
                    <div
                      :class="
                        duo_tone &&
                        !uploadedIcon &&
                        'pointer-events-none opacity-0'
                      "
                      class="absolute left-0 top-0 h-full w-full bg-gray-200 bg-opacity-75 backdrop-blur-sm duration-200 ease-in dark:bg-dark-800 dark:bg-opacity-75"
                    ></div>
                  </div>
                </ClientOnly>
              </ToolsDiscordEmbedCreatorCollapseCard>
            </Card>
          </ToolsStep>
        </div>
        <div>
          <div
            class="relative hidden w-full flex-col gap-4 overflow-y-auto bg-white p-8 shadow-xl dark:bg-dark-900 lg:sticky lg:top-12 lg:flex lg:max-h-screen-padding lg:rounded-2xl"
          >
            <div
              class="flex gap-3 bg-[#FAFAFA] p-8 dark:bg-[#36393F] lg:rounded-2xl"
            >
              <img
                class="h-10 w-10 rounded-full"
                :src="`https://cdn.discordapp.com/avatars/983094528791683182/1830fd86f024e70811c706de31961a15.webp?size=128`"
              />
              <div class="flex items-center justify-between">
                <div class="whitney w-full">
                  <div class="flex items-center gap-1 text-base">
                    <span
                      class="text-md font-medium leading-5"
                      :style="`color: ${primaryColor};`"
                      >Multid</span
                    >

                    <svg
                      class="ml-1 h-6 w-6"
                      :width="shapeWidth"
                      :height="shapeHeight"
                      :viewBox="`0 0 ${shapeWidth} ${shapeHeight}`"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <defs>
                        <linearGradient
                          id="gradient"
                          :gradientTransform="`rotate(${shapeGradientAngle})`"
                        >
                          <stop
                            offset="0%"
                            :style="`stop-color: ${primaryColor}`"
                          ></stop>
                          <stop
                            offset="100%"
                            :style="`stop-color: ${shapeGradientColor}`"
                          ></stop>
                        </linearGradient>
                        <linearGradient
                          id="gradientIcon"
                          :gradientTransform="`rotate(${iconGradientAngle})`"
                        >
                          <stop
                            offset="0%"
                            :style="`stop-color: ${secondaryColor}`"
                          ></stop>
                          <stop
                            offset="100%"
                            :style="`stop-color: ${iconGradientColor}`"
                          ></stop>
                        </linearGradient>
                        <mask id="mask" v-if="!duo_tone">
                          <rect
                            x="0"
                            y="0"
                            width="250"
                            height="250"
                            fill="white"
                          />
                          <g
                            v-if="!uploadedIcon"
                            :style="`filter: brightness(0); transform: translate(${
                              shapeWidth / 2 -
                              (icons[icon]().width * multiply) / 2 +
                              Number(offset_x)
                            }px, ${
                              shapeHeight / 2 -
                              (icons[icon]().height * multiply) / 2 +
                              Number(offset_y)
                            }px) scale(${multiply});`"
                            v-html="icons[icon]('#000').svg"
                          ></g>
                          <image
                            v-else
                            width="64"
                            height="64"
                            :href="uploadedIcon"
                            :style="`filter: brightness(0); transform: translate(${
                              shapeWidth / 2 -
                              (64 * multiply) / 2 +
                              Number(offset_x)
                            }px, ${
                              shapeHeight / 2 -
                              (64 * multiply) / 2 +
                              Number(offset_y)
                            }px) scale(${multiply});`"
                          />
                        </mask>
                      </defs>
                      <g
                        v-html="
                          shapes[shape](
                            shapeGradient ? 'url(#gradient)' : primaryColor,
                            primaryColor
                          )[0]
                        "
                        ref="shapeDraw"
                      ></g>
                      <g
                        v-if="duo_tone && !uploadedIcon"
                        :style="`transform: translate(${
                          shapeWidth / 2 -
                          (icons[icon]().width * multiply) / 2 +
                          Number(offset_x)
                        }px, ${
                          shapeHeight / 2 -
                          (icons[icon]().height * multiply) / 2 +
                          Number(offset_y)
                        }px) scale(${multiply});`"
                        v-html="
                          icons[icon](
                            iconGradient ? 'url(#gradientIcon)' : secondaryColor
                          ).svg
                        "
                      ></g>
                      <image
                        v-else-if="duo_tone && uploadedIcon"
                        width="64"
                        height="64"
                        :href="uploadedIcon"
                        :style="`transform: translate(${
                          shapeWidth / 2 -
                          (64 * multiply) / 2 +
                          Number(offset_x)
                        }px, ${
                          shapeHeight / 2 -
                          (64 * multiply) / 2 +
                          Number(offset_y)
                        }px) scale(${multiply});`"
                      />
                    </svg>

                    <span
                      class="ml-1 self-end rounded-md text-xs text-gray-600 dark:text-gray-200"
                      >Aujourd'hui à
                      {{
                        new Date().toLocaleTimeString("fr-FR", {
                          hour: "2-digit",
                          minute: "2-digit",
                        })
                      }}</span
                    >
                  </div>
                  <div class="mt-1 flex w-full flex-col gap-1">
                    <Markdown
                      class="whitespace-pre-line break-words text-base font-normal leading-snug text-gray-300"
                      content="Bienvenue sur umaestro.fr !"
                    ></Markdown>
                  </div>
                </div>
              </div>
            </div>
            <div
              style="background-image: url(/transparent.svg)"
              class="flex items-center justify-center rounded-lg bg-center bg-repeat p-12"
            >
              <svg
                id="svg_icon"
                :width="shapeWidth"
                :height="shapeHeight"
                :viewBox="`0 0 ${shapeWidth} ${shapeHeight}`"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient
                    id="gradient"
                    :gradientTransform="`rotate(${shapeGradientAngle})`"
                  >
                    <stop
                      offset="0%"
                      :style="`stop-color: ${primaryColor}`"
                    ></stop>
                    <stop
                      offset="100%"
                      :style="`stop-color: ${shapeGradientColor}`"
                    ></stop>
                  </linearGradient>
                  <linearGradient
                    id="gradientIcon"
                    :gradientTransform="`rotate(${iconGradientAngle})`"
                  >
                    <stop
                      offset="0%"
                      :style="`stop-color: ${secondaryColor}`"
                    ></stop>
                    <stop
                      offset="100%"
                      :style="`stop-color: ${iconGradientColor}`"
                    ></stop>
                  </linearGradient>
                  <mask id="mask" v-if="!duo_tone">
                    <rect x="0" y="0" width="250" height="250" fill="white" />
                    <g
                      v-if="!uploadedIcon"
                      :style="`filter: brightness(0); transform: translate(${
                        shapeWidth / 2 -
                        (icons[icon]().width * multiply) / 2 +
                        Number(offset_x)
                      }px, ${
                        shapeHeight / 2 -
                        (icons[icon]().height * multiply) / 2 +
                        Number(offset_y)
                      }px) scale(${multiply});`"
                      v-html="icons[icon]('#000').svg"
                    ></g>
                    <image
                      v-else
                      width="64"
                      height="64"
                      :href="uploadedIcon"
                      :style="`filter: brightness(0); transform: translate(${
                        shapeWidth / 2 - (64 * multiply) / 2 + Number(offset_x)
                      }px, ${
                        shapeHeight / 2 - (64 * multiply) / 2 + Number(offset_y)
                      }px) scale(${multiply});`"
                    />
                  </mask>
                </defs>
                <g
                  v-html="
                    shapes[shape](
                      shapeGradient ? 'url(#gradient)' : primaryColor,
                      primaryColor
                    )[0]
                  "
                  ref="shapeDraw"
                ></g>
                <g
                  v-if="duo_tone && !uploadedIcon"
                  :style="`transform: translate(${
                    shapeWidth / 2 -
                    (icons[icon]().width * multiply) / 2 +
                    Number(offset_x)
                  }px, ${
                    shapeHeight / 2 -
                    (icons[icon]().height * multiply) / 2 +
                    Number(offset_y)
                  }px) scale(${multiply});`"
                  v-html="
                    icons[icon](
                      iconGradient ? 'url(#gradientIcon)' : secondaryColor
                    ).svg
                  "
                ></g>
                <image
                  v-else-if="duo_tone && uploadedIcon"
                  width="64"
                  height="64"
                  :href="uploadedIcon"
                  :style="`transform: translate(${
                    shapeWidth / 2 - (64 * multiply) / 2 + Number(offset_x)
                  }px, ${
                    shapeHeight / 2 - (64 * multiply) / 2 + Number(offset_y)
                  }px) scale(${multiply});`"
                />
              </svg>
            </div>
            <Button
              text="Sauvegarder l'icone (PNG)"
              :center-text="true"
              @click="save"
            />
            <div class="w-full">
              <div class="relative flex items-center">
                <div class="flex-grow border-t border-dark-700"></div>
                <span class="mx-4 flex-shrink text-dark-700">OU</span>
                <div class="flex-grow border-t border-dark-700"></div>
              </div>
            </div>
            <div class="text-center text-lg font-medium">
              Mettre l'icone sur un rôle via Multid
            </div>
            <div v-if="!guild && guilds">
              <div class="text-md mt-3 mb-2 font-medium">
                Mes serveurs avec Multid
              </div>
              <div
                v-for="(guild, key) of guilds"
                :key="key"
                class="mb-2 flex items-center justify-between gap-2 rounded-lg bg-gray-200 py-2 pl-4 pr-2 dark:bg-dark-800"
              >
                <div class="flex items-center gap-4">
                  <img
                    class="h-10 w-10 rounded-full"
                    v-if="guild.icon"
                    :src="`https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png`"
                  />
                  <div class="text-md font-medium">{{ guild.name }}</div>
                </div>
                <Button
                  text="Sélectionner ce serveur"
                  color="primary"
                  :small="true"
                  class="font-regular text-sm"
                  @click="selectGuild(key)"
                />
              </div>
              <div class="text-md mt-6 mb-1 font-semibold">
                Ajouter Multid sur un
                {{ (guilds.length > 0 && "autre") || "" }} serveur
              </div>
              <div class="font-regular text-italic mb-4 text-sm text-gray-400">
                Vous devrez vous reconnecter à UMaestro pour actualiser la
                liste.
              </div>
              <div
                class="flex items-center justify-between gap-2 rounded-lg bg-gray-200 p-4 dark:bg-dark-800"
              >
                <div class="flex items-center gap-4">
                  <img
                    class="h-10 w-10 rounded-full"
                    src="https://cdn.discordapp.com/avatars/983094528791683182/1830fd86f024e70811c706de31961a15.webp?size=128"
                  />
                  <div class="text-md font-medium">Multid</div>
                </div>
                <NuxtLink
                  to="https://discord.com/api/oauth2/authorize?client_id=983094528791683182&permissions=805432368&scope=bot%20applications.commands"
                  target="_blank"
                >
                  <Button text="Ajouter à mon serveur" color="blurple" />
                </NuxtLink>
              </div>
            </div>
            <div v-else-if="guild">
              <div class="text-md mt-3 mb-2 font-medium">
                Rôles sur {{ guild.name }}
              </div>
              <div
                v-for="(role, id) of roles"
                :key="id"
                class="mb-2 flex items-center justify-between rounded-md bg-gray-200 p-4 dark:bg-dark-800"
              >
                <div class="flex items-center gap-2">
                  <img
                    v-if="role.icon"
                    class="h-12 w-12"
                    :src="`https://cdn.discordapp.com/role-icons/${role.id}/${role.icon}.png`"
                  />
                  {{ role.unicode_emoji }} {{ role.name }}
                </div>
                <Button
                  text="Appliquer l'icone à ce rôle"
                  color="blurple"
                  :small="true"
                  class="font-regular text-sm"
                  @click="setToRole(role.id, id)"
                />
              </div>
            </div>
          </div>
          <TransitionRoot appear :show="mobile_preview_open" as="template">
            <TransitionChild
              as="template"
              enter="duration-300 ease-out"
              enter-from="opacity-0"
              enter-to="opacity-100"
              leave="duration-200 ease-in"
              leave-from="opacity-100"
              leave-to="opacity-0"
            >
              <div
                class="fixed top-0 left-0 z-10 h-screen w-full lg:relative lg:block"
              >
                <div
                  class="relative flex h-screen w-full flex-col gap-4 overflow-y-auto bg-[#FAFAFA] p-8 shadow-xl dark:bg-[#36393F] lg:sticky lg:top-12 lg:max-h-screen-padding lg:rounded-2xl"
                >
                  <div class="right-8 flex justify-end lg:hidden">
                    <button
                      class="group flex items-center justify-center rounded-full border-2 border-dark-700 p-4 opacity-50 focus:bg-white focus:text-white dark:border-white"
                      @click="toggleMobilePreview"
                    >
                      <svg
                        class="h-5 w-5 fill-black group-focus:fill-black dark:fill-white"
                        viewBox="0 0 10 10"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M9.00001 1.00001C8.60001 0.600012 8.00001 0.600012 7.60001 1.00001L5.00001 3.60001L2.40001 1.00001C2.00001 0.600012 1.40001 0.600012 1.00001 1.00001C0.600012 1.40001 0.600012 2.00001 1.00001 2.40001L3.60001 5.00001L1.00001 7.60001C0.600012 8.00001 0.600012 8.60001 1.00001 9.00001C1.20001 9.20001 1.50001 9.30001 1.70001 9.30001C1.90001 9.30001 2.20001 9.20001 2.40001 9.00001L5.00001 6.40001L7.60001 9.00001C7.80001 9.20001 8.10001 9.30001 8.30001 9.30001C8.50001 9.30001 8.80001 9.20001 9.00001 9.00001C9.40001 8.60001 9.40001 8.00001 9.00001 7.60001L6.40001 5.00001L9.00001 2.40001C9.40001 2.00001 9.40001 1.40001 9.00001 1.00001Z"
                        />
                      </svg>
                    </button>
                  </div>

                  <!-- TODO BETTER IMPLEMENTATION OF THIS -->
                  <div
                    class="flex gap-3 bg-[#FAFAFA] p-2 dark:bg-[#36393F] lg:rounded-2xl"
                  >
                    <img
                      class="h-10 w-10 rounded-full"
                      :src="`https://cdn.discordapp.com/avatars/983094528791683182/1830fd86f024e70811c706de31961a15.webp?size=128`"
                    />
                    <div class="flex items-center justify-between">
                      <div class="whitney w-full">
                        <div class="flex items-center gap-1 text-base">
                          <span
                            class="text-md font-medium leading-5"
                            :style="`color: ${primaryColor};`"
                            >Multid</span
                          >

                          <svg
                            class="ml-1 h-6 w-6"
                            :width="shapeWidth"
                            :height="shapeHeight"
                            :viewBox="`0 0 ${shapeWidth} ${shapeHeight}`"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <mask id="mask" v-if="!duo_tone">
                              <rect
                                x="0"
                                y="0"
                                width="250"
                                height="250"
                                fill="white"
                              />
                              <g
                                v-if="!uploadedIcon"
                                :style="`filter: brightness(0); transform: translate(${
                                  shapeWidth / 2 -
                                  (icons[icon]().width * multiply) / 2 +
                                  Number(offset_x)
                                }px, ${
                                  shapeHeight / 2 -
                                  (icons[icon]().height * multiply) / 2 +
                                  Number(offset_y)
                                }px) scale(${multiply});`"
                                v-html="icons[icon]('#000').svg"
                              ></g>
                              <image
                                v-else
                                width="64"
                                height="64"
                                :href="uploadedIcon"
                                :style="`filter: brightness(0); transform: translate(${
                                  shapeWidth / 2 -
                                  (64 * multiply) / 2 +
                                  Number(offset_x)
                                }px, ${
                                  shapeHeight / 2 -
                                  (64 * multiply) / 2 +
                                  Number(offset_y)
                                }px) scale(${multiply});`"
                              />
                            </mask>
                            <g
                              v-html="shapes[shape](primaryColor)[0]"
                              ref="shapeDraw"
                            ></g>
                            <g
                              v-if="duo_tone && !uploadedIcon"
                              :style="`transform: translate(${
                                shapeWidth / 2 -
                                (icons[icon]().width * multiply) / 2 +
                                Number(offset_x)
                              }px, ${
                                shapeHeight / 2 -
                                (icons[icon]().height * multiply) / 2 +
                                Number(offset_y)
                              }px) scale(${multiply});`"
                              v-html="icons[icon](secondaryColor).svg"
                            ></g>
                            <image
                              v-else-if="duo_tone && uploadedIcon"
                              width="64"
                              height="64"
                              :href="uploadedIcon"
                              :style="`transform: translate(${
                                shapeWidth / 2 -
                                (64 * multiply) / 2 +
                                Number(offset_x)
                              }px, ${
                                shapeHeight / 2 -
                                (64 * multiply) / 2 +
                                Number(offset_y)
                              }px) scale(${multiply});`"
                            />
                          </svg>

                          <span
                            class="ml-1 self-end rounded-md text-xs text-gray-600 dark:text-gray-200"
                            >Aujourd'hui à
                            {{
                              new Date().toLocaleTimeString("fr-FR", {
                                hour: "2-digit",
                                minute: "2-digit",
                              })
                            }}</span
                          >
                        </div>
                        <div class="mt-1 flex w-full flex-col gap-1">
                          <Markdown
                            class="whitespace-pre-line break-words text-base font-normal leading-snug text-gray-300"
                            content="Bienvenue sur umaestro.fr !"
                          ></Markdown>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    style="background-image: url(/transparent.svg)"
                    class="flex items-center justify-center rounded-lg bg-center bg-repeat p-12"
                  >
                    <svg
                      id="mobile_svg_icon"
                      :width="shapeWidth"
                      :height="shapeHeight"
                      :viewBox="`0 0 ${shapeWidth} ${shapeHeight}`"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <mask id="mask" v-if="!duo_tone">
                        <rect
                          x="0"
                          y="0"
                          width="250"
                          height="250"
                          fill="white"
                        />
                        <g
                          v-if="!uploadedIcon"
                          :style="`filter: brightness(0); transform: translate(${
                            shapeWidth / 2 -
                            (icons[icon]().width * multiply) / 2 +
                            Number(offset_x)
                          }px, ${
                            shapeHeight / 2 -
                            (icons[icon]().height * multiply) / 2 +
                            Number(offset_y)
                          }px) scale(${multiply});`"
                          v-html="icons[icon]('#000').svg"
                        ></g>
                        <image
                          v-else
                          width="64"
                          height="64"
                          :href="uploadedIcon"
                          :style="`filter: brightness(0); transform: translate(${
                            shapeWidth / 2 -
                            (64 * multiply) / 2 +
                            Number(offset_x)
                          }px, ${
                            shapeHeight / 2 -
                            (64 * multiply) / 2 +
                            Number(offset_y)
                          }px) scale(${multiply});`"
                        />
                      </mask>
                      <g
                        v-html="shapes[shape](primaryColor)[0]"
                        ref="shapeDraw"
                      ></g>
                      <g
                        v-if="duo_tone && !uploadedIcon"
                        :style="`transform: translate(${
                          shapeWidth / 2 -
                          (icons[icon]().width * multiply) / 2 +
                          Number(offset_x)
                        }px, ${
                          shapeHeight / 2 -
                          (icons[icon]().height * multiply) / 2 +
                          Number(offset_y)
                        }px) scale(${multiply});`"
                        v-html="icons[icon](secondaryColor).svg"
                      ></g>
                      <image
                        v-else-if="duo_tone && uploadedIcon"
                        width="64"
                        height="64"
                        :href="uploadedIcon"
                        :style="`transform: translate(${
                          shapeWidth / 2 -
                          (64 * multiply) / 2 +
                          Number(offset_x)
                        }px, ${
                          shapeHeight / 2 -
                          (64 * multiply) / 2 +
                          Number(offset_y)
                        }px) scale(${multiply});`"
                      />
                    </svg>
                  </div>
                  <Button
                    text="Sauvegarder l'icone (PNG)"
                    :center-text="true"
                    @click="save"
                  />
                  <div class="w-full">
                    <div class="relative flex items-center">
                      <div class="flex-grow border-t border-dark-700"></div>
                      <span class="mx-4 flex-shrink text-dark-700">OU</span>
                      <div class="flex-grow border-t border-dark-700"></div>
                    </div>
                  </div>
                  <div class="text-center text-lg font-medium">
                    Mettre l'icone sur un rôle via Multid
                  </div>
                  <div v-if="!guild && guilds">
                    <div class="text-md mt-3 mb-2 font-medium">
                      Mes serveurs avec Multid
                    </div>
                    <div
                      v-for="(guild, key) of guilds"
                      :key="key"
                      class="mb-2 flex items-center justify-between gap-2 rounded-lg bg-gray-200 py-2 pl-4 pr-2 dark:bg-dark-700"
                    >
                      <div class="flex items-center gap-4">
                        <img
                          class="h-10 w-10 rounded-full"
                          v-if="guild.icon"
                          :src="`https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png`"
                        />
                        <div class="text-md font-medium">{{ guild.name }}</div>
                      </div>
                      <Button
                        text="Sélectionner ce serveur"
                        color="primary"
                        :small="true"
                        class="font-regular text-sm"
                        @click="selectGuild(key)"
                      />
                    </div>
                    <div class="text-md mt-6 mb-1 font-semibold">
                      Ajouter Multid sur un
                      {{ (guilds.length > 0 && "autre") || "" }} serveur
                    </div>
                    <div
                      class="font-regular text-italic mb-4 text-sm text-gray-400"
                    >
                      Vous devrez vous reconnecter à UMaestro pour actualiser la
                      liste.
                    </div>
                    <div
                      class="flex items-center justify-between gap-2 rounded-lg bg-gray-200 p-4 dark:bg-dark-700"
                    >
                      <div class="flex items-center gap-4">
                        <img
                          class="h-10 w-10 rounded-full"
                          src="https://cdn.discordapp.com/avatars/983094528791683182/1830fd86f024e70811c706de31961a15.webp?size=128"
                        />
                        <div class="text-md font-medium">Multid</div>
                      </div>
                      <NuxtLink
                        to="https://discord.com/api/oauth2/authorize?client_id=983094528791683182&permissions=805432368&scope=bot%20applications.commands"
                        target="_blank"
                      >
                        <Button text="Ajouter à mon serveur" color="blurple" />
                      </NuxtLink>
                    </div>
                  </div>
                  <div v-else-if="guild">
                    <div class="text-md mt-3 mb-2 font-medium">
                      Rôles sur {{ guild.name }}
                    </div>
                    <div
                      v-for="(role, id) of roles"
                      :key="id"
                      class="mb-2 flex items-center justify-between rounded-md bg-gray-200 p-4 dark:bg-dark-700"
                    >
                      <div class="flex items-center gap-2">
                        <img
                          v-if="role.icon"
                          class="h-12 w-12"
                          :src="`https://cdn.discordapp.com/role-icons/${role.id}/${role.icon}.png`"
                        />
                        {{ role.unicode_emoji }} {{ role.name }}
                      </div>
                      <Button
                        text="Appliquer l'icone à ce rôle"
                        color="blurple"
                        :small="true"
                        class="font-regular text-sm"
                        @click="setToRole(role.id, id)"
                      />
                    </div>
                  </div>
                  <!--  END OF NEEDING BETTER IMPLEMENTATION -->
                </div>
              </div>
            </TransitionChild>
          </TransitionRoot>
          <div
            class="fixed bottom-8 right-12 flex h-24 w-24 items-center justify-center rounded-full bg-dark-800 duration-200 ease-in hover:scale-125 hover:bg-dark-700 lg:hidden"
            @click="toggleMobilePreview"
          >
            <EyeIcon class="h-12 w-12" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { TransitionRoot, TransitionChild } from "@headlessui/vue";
import {
  CubeIcon,
  CheckIcon,
  EyeIcon,
} from "@heroicons/vue/24/outline/esm/index.js";
import pkg from "save-svg-as-png";
import icons, { shapes } from "~~/composables/DiscordIcons";
const { saveSvgAsPng, svgAsPngUri } = pkg;
import { transformFileIntoBase64 } from "~~/composables/Blob";
import { useTool } from "~~/composables/Module";

export default {
  components: {
    TransitionRoot,
    TransitionChild,
    CubeIcon,
    CheckIcon,
    EyeIcon,
  },
  head: {
    title: "Créateur de badges",
  },
  data: () => ({
    shape: 0,
    icon: 0,
    uploadedIcon: null,
    duo_tone: true,
    icons,
    shapes,
    multiply: 1,
    primaryColor: "#f20f20",
    secondaryColor: "#000",
    defaultColors: [
      "#1ABC9C",
      "#2ECC71",
      "#3498DB",
      "#9B59B6",
      "#E91E63",
      "#F1C40F",
      "#E67E22",
      "#E74C3C",
      "#95A5A6",
      "#607D8B",
      "#11806A",
      "#1F8B4C",
      "#206694",
      "#71368A",
      "#AD1457",
      "#C27C0E",
      "#A84300",
      "#992D22",
      "#979C9F",
      "#546E7A",
    ],
    guilds: [],
    guild: null,
    roles: [],
    shapeWidth: 200,
    shapeHeight: 200,
    offset_x: 0,
    offset_y: 0,
    category: "",
    mobile_preview_open: false,

    shapeGradient: false,
    shapeGradientColor: "#FFFFFF",
    shapeGradientAngle: 0,
    iconGradient: false,
    iconGradientColor: "#FFFFFF",
    iconGradientAngle: 0,

    angle: 180,
  }),
  async mounted() {
    this.guilds = localStorage.getItem("user_guilds")
      ? JSON.parse(localStorage.getItem("user_guilds"))
      : []; // .filter(guild => guild.features.find(feature => feature == 'ROLE_ICONS'))
    this.selectShape(0);
  },
  computed: {
    categories() {
      const icons = {};
      for (const icon of this.icons) {
        icons[icon().category] = icons[icon().category] || [];
        icons[icon().category].push(icon);
      }
      this.category = Object.keys(icons)[0];
      return icons;
    },
  },
  methods: {
    toggleMobilePreview() {
      this.mobile_preview_open = !this.mobile_preview_open;
      document.body.classList.toggle("overflow-y-hidden");
      this.selectShape(this.shape);
    },
    async uploadFile(e) {
      this.icon = 0;
      this.uploadedIcon = await transformFileIntoBase64(e.target.files[0]);
    },
    save() {
      saveSvgAsPng(
        document.getElementById(
          this.mobile_preview_open ? "mobile_svg_icon" : "svg_icon"
        ),
        "discord_icon.png"
      );
      useTool("badge");
    },
    selectShape(shape) {
      this.shape = shape;
      setTimeout(() => {
        const bounds = this.$refs.shapeDraw.getBoundingClientRect();
        this.shapeWidth = Math.round(bounds.width) + 1;
        this.shapeHeight = Math.round(bounds.height) + 1;
        if (this.shapeWidth <= 4) {
          this.shapeWidth = 250;
          this.shapeHeight = 250;
        }
      }, 100);
    },
    async selectGuild(key) {
      this.guild = this.guilds[key];
      try {
        this.roles = await $fetch(`/api/guilds/${this.guild.id}/roles`);
      } catch (e) {
        console.log(e);
      }
    },
    async setToRole(id, key) {
      const uri = await svgAsPngUri(
        document.getElementById(
          this.mobile_preview_open ? "mobile_svg_icon" : "svg_icon"
        )
      );
      const role = await $fetch(`/api/guilds/${this.guild.id}/${id}`, {
        method: "PATCH",
        body: {
          icon: uri,
          token: "Bearer " + localStorage.getItem("access_token"),
        },
      });
      this.roles[key].icon = role.icon;
      useTool("badge");
    },
  },
};
</script>

<style>
@font-face {
  font-family: "Whitney";
  src: url("/fonts/whitney-300.woff2") format("woff2");
  font-weight: 300;
  font-display: swap;
}

@font-face {
  font-family: "Whitney";
  src: url("/fonts/whitney-400.woff2") format("woff2");
  font-weight: 400;
  font-display: swap;
}

@font-face {
  font-family: "Whitney";
  src: url("/fonts/whitney-500.woff2") format("woff2");
  font-weight: 500;
  font-display: swap;
}

@font-face {
  font-family: "Whitney";
  src: url("/fonts/whitney-600.woff2") format("woff2");
  font-weight: 600;
  font-display: swap;
}

@font-face {
  font-family: "Whitney";
  src: url("/fonts/whitney-700.woff2") format("woff2");
  font-weight: 700;
  font-display: swap;
}

.whitney {
  font-family: "Whitney", sans-serif;
}
</style>
