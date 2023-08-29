<template>
    <div class="max-w-full max-h-full container mx-auto bg-slate-950 pb-10">
        <div>
            <div class="flex grid grid-cols-3 text-center round-lg text-white bg-black h-24">
                <div class="justify-item-center self-center">
                    <img class="pl-6 h-16" src="Fuzik-Logo.png">
                </div>
                <div class="self-center justify-item-center">
                    Session Name
                    <input class="text-black p-2 lg-rounded border-2">
                </div>
                <div class="self-center justify-item-center">
                    <button
                        class="justify-center self-center hover:bg-red-400 p-2 h-auto w-auto bg-red-500 rounded-lg pl-4 pr-4 m-2">
                        Discard
                    </button>
                    <button
                        class="justify-center self-center hover:bg-yellow-100 p-2 h-auto w-auto bg-yellow-200 rounded-lg pl-4 pr-4  text-black m-2">
                        Generate Video
                    </button>
                    <button
                        class="text-white justify-right self-center hover:bg-slate-600 p-2 h-auto w-auto bg-slate-700 rounded-lg pl-4 pr-4 m-2">
                        Queue
                    </button>
                </div>

            </div>
            <div class="grid grid-cols-4 grid-rows-1
                        sm:grid-cols-1 sm:grid-rows-3
                        md:grid-cols-1 md:grid-rows-3 
                        lg:grid-cols-4 lg:grid-rows-2     
                        xl:grid-cols-4 xl:grid-rows-1">
                <span class="p-2 col-span-1 row-span-3 h-full w-full flex flex-col overflow-x-auto text-white border-r-4 border-black
                                lg:col-span-4 lg:row-span-1
                                xl:col-span-1 lg:row-span-1
                                bg-slate-800">
                    <div class="p-2 border-b-2">
                        Layout Section
                    </div>
                    <div class="p-2 grid grid-cols-1 grid-rows-2 flex overflow-auto ">
                        <div class="grid grid-cols-4 grid-rows-1
                            sm:grid-cols-4 sm:grid-rows-1
                            md:grid-cols-4 md:grid-rows-1 
                            lg:grid-cols-4 lg:grid-rows-1
                            xl:grid-cols-4 xl:grid-rows-1">
                            <div class="flex grid col-span-1 w-full h-full items-center justify-items-center">
                                <div>
                                    current layout
                                </div>
                            </div>
                            <div class="flex grid items-center justify-items-center col-span-2">
                                <img class="w-64 h-32 p-2 self-center"
                                    src="https://media04.tetraserver.com/uploads/layout/4_01_NUM.png">
                            </div>
                            <span class="flex items-stretch p-5 col-span-1 flex grid items-center justify-items-center">
                                <button class="self-center bg-slate-900 hover:bg-slate-950 p-2">
                                    Change
                                </button>
                            </span>
                        </div>
                        <div class="grid grid-rows-auto p-2 col-span-1 row-span-1 border-y-2 w-full h-full">
                            <div>
                                layout changer
                            </div>
                            <!-- add image slider here-->
                            <div class="grid grid-cols-8 place-items-center w-full h-full">
                                <div class="image-slider">
                                <button @click="moveSlider(-1)" class="slider-button prev-button col-span-1">←</button>
                                <div class="slider-container flex grid col-span-6 grid-cols-4">
                                    <div class="slider-content" :style="{ transform: `translateX(-${currentIndex * 99}%)` }">
                                        <div class="slider-item overflow-auto w-auto h-36 place-item-center" v-for="(image, index) in images" :key="index">
                                            <img :src="image" alt="Slide" class="grid flex h-36 w-max place-item-center p-2"/>
                                        </div>
                                    </div>
                                </div>
                                <button @click="moveSlider(1)" class="slider-button next-button col-span-1 ">→</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </span>
                <div class="p-2 col-span-2 row-span-2 h-full w-full bg-slate-900 text-white
                                lg:col-span-4 lg:row-span-1
                                xl:col-span-2 lg:row-span-1">
                    <div class="grid grid-cols-3 border-b-2 pb-2 text-center">
                        <button class="text-left">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                            </svg>
                        </button>
                        <div>Video Preview</div>
                    </div>
                    <flex class="flex items-stretch justify-center h-full">
                        <div class="aspect-auto self-center">
                            <iframe class="aspect-auto" src="https://media04.tetraserver.com/uploads/jam/Omie03_19042023035603.mp4">
                            </iframe>
                        </div>
                    </flex>

                </div>
                <span class="col-span-1 row-span-2 h-full w-full flex text-white border-l-4 border-black scrollbar-hide
                                lg:col-span-4 lg:row-span-1
                                xl:col-span-1 lg:row-span-1
                                bg-slate-800">
                    <div class="col-span-1 w-full pr-2 pl-2 pt-3">
                        <div class="p-2 pl-4 border-b-2">
                            Video list
                        </div>
                        <div class="pl-8 pr-4 overflow-auto h-96 hide-scrollbar ">

                            <div class="grid grid-cols-1 grid-row-4 gap-y-5 mt-10 mb-10">
                                <div
                                    class="grid-cols-5 overflow-visible relative w-full mx-auto bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg ring-1 ring-black/5 rounded-full flex items-center gap-6 dark:bg-slate-800 dark:highlight-white/5 ">
                                    <img class="col-span-1 absolute -left-6 w-24 h-24 rounded-full shadow-lg"
                                        src="https://static.wixstatic.com/media/bb1bd6_5798c09022ba43249a38bfea9be1db34~mv2.png">
                                    <div class="col-span-3 flex flex-col py-5 pl-20 h-20 justify-item-center">
                                        <p class="text-white text-xs font-medium text-clip overflow-hidden">โป่ง หินเหล็กร้อน - By โป่งปัง กะลามัง
                                            ถังข้าวเหนียว</p>
                                    </div>
                                    <button class="col-span-1 self-center pr-5">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor" class="w-12 h-12">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            <div class="grid grid-cols-1 grid-row-4 gap-y-5 mt-10 mb-10">
                                <div
                                    class="grid-cols-5 overflow-visible relative w-full mx-auto bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg ring-1 ring-black/5 rounded-full flex items-center gap-6 dark:bg-slate-800 dark:highlight-white/5 ">
                                    <img class="col-span-1 absolute -left-6 w-24 h-24 rounded-full shadow-lg"
                                        src="https://static.wixstatic.com/media/bb1bd6_5798c09022ba43249a38bfea9be1db34~mv2.png">
                                    <div class="col-span-3 flex flex-col py-5 pl-20 h-20 justify-item-center">
                                        <p class="text-white text-xs font-medium text-ellipsis overflow-hidden">โป่ง หินเหล็กร้อน - By โป่งปัง กะลามัง
                                            ถังข้าวเหนียว</p>
                                    </div>
                                    <button class="col-span-1 self-center pr-5">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor" class="w-12 h-12">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            <div class="grid grid-cols-1 grid-row-4 gap-y-5 mt-10 mb-10">
                                <div
                                    class="grid-cols-5 overflow-visible relative w-full mx-auto bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg ring-1 ring-black/5 rounded-full flex items-center gap-6 dark:bg-slate-800 dark:highlight-white/5 ">
                                    <img class="col-span-1 absolute -left-6 w-24 h-24 rounded-full shadow-lg"
                                        src="https://static.wixstatic.com/media/bb1bd6_5798c09022ba43249a38bfea9be1db34~mv2.png">
                                    <div class="col-span-3 flex flex-col py-5 pl-20 h-20 justify-item-center">
                                        <p class="text-white text-xs font-medium text-ellipsis overflow-hidden">โป่ง หินเหล็กร้อน - By โป่งปัง กะลามัง
                                            ถังข้าวเหนียว</p>
                                    </div>
                                    <button class="flex justify-left col-span-1 pr-5">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor" class="w-12 h-12">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            <div class="grid grid-cols-1 grid-row-4 gap-y-5 mt-10 mb-10">
                                <div
                                    class="grid-cols-5 overflow-visible relative w-full mx-auto bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg ring-1 ring-black/5 rounded-full flex items-center gap-6 dark:bg-slate-800 dark:highlight-white/5 ">
                                    <img class="col-span-1 absolute -left-6 w-24 h-24 rounded-full shadow-lg"
                                        src="https://static.wixstatic.com/media/bb1bd6_5798c09022ba43249a38bfea9be1db34~mv2.png">
                                    <div class="col-span-3 flex flex-col py-5 pl-20 h-20 justify-item-center">
                                        <p class="text-white text-xs font-medium text-ellipsis overflow-hidden">โป่ง หินเหล็กร้อน - By โป่งปัง กะลามัง
                                            ถังข้าวเหนียว</p>
                                    </div>
                                    <button class="col-span-1 self-center pr-5">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor" class="w-12 h-12">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </span>

            </div>
        </div>
        <div class="grid grid-cols-7 grid-rows-auto max-w-full mx-auto">

            <div class="col-span-7 row-span-1 w-full h-24 grid grid-cols-4 grid-rows-1 border-2 border-black">
                <div class="flex grid items-center justify-items-end col-span-1 me-4">
                    <button class="hover:bg-yellow-200 p-2 h-auto w-auto bg-yellow-300 rounded-lg pl-10 pr-10 mr-5">

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
                        </svg>
                    </button>
                </div>
                <div class="p-3 flex grid items-center justify-items-center  col-span-2">
                    <label id="time-label" for="small-range"
                        class="block mb-2 text-xs font-medium text-white dark:text-white">Time: 00:00</label>
                    <input id="small-range" :type="'range'" v-model="time"
                        class="w-full h-1 mb-6 bg-gray-200 rounded-lg appearance-none cursor-pointer range-sm dark:bg-gray-200"
                        @input="updateTimeLabel">
                </div>
                <div class="flex grid grid-cols-2 items-center justify-items-start col-span-1 ml-4">
                    <button
                        class="hover:bg-yellow-200 p-2 h-auto w-auto bg-yellow-300 rounded-lg pl-10 pr-10 ml-5">Regen</button>
                </div>
            </div>

            <div class="p-10 col-span-7 grid grid-cols-7 h-auto
                        flex grid items-center justify-items-center max-w-full
                        bg-slate-900">
                <div class="flex grid-cols-2 col-span-7 p-2 mt-2 h-auto w-full">
                    <div class="ml-8 mr-2 w-8 h-8">
                        <svg viewBox="0 0 17 17" version="1.1" xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink" class="si-glyph si-glyph-mountain" fill="#ffffff"
                            stroke="#ffffff">
                            <g id="SVGRepo_bgCarrier" stroke-width="2"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <title>845</title>
                                <defs> </defs>
                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                    <path
                                        d="M8.012,1.062 L4.035,8.87 L2.709,7.569 C2.709,7.569 -0.305,14 0.063,14 L15.965,14 L15.965,13.998 L12.627,6.898 L11.644,7.51 L8.012,1.062 L8.012,1.062 Z M5.611,7.521 L8.062,2.77 L10.347,6.851 L9.361,7.521 L8.021,6.233 L5.611,7.521 L5.611,7.521 Z"
                                        fill="#ffffff" class="si-glyph-fill"> </path>
                                </g>
                            </g>
                        </svg></div>
                    <input type="range" v-model="zoomLevel" min="50" max="1000" @input="updateZoom" />
                </div>
                <div class="w-48 h-28 cols-span-1 flex grid items-center justify-items-center bg-slate-800">
                    <img class="w-5/6 h-5/6"
                        src="https://static.wixstatic.com/media/bb1bd6_5798c09022ba43249a38bfea9be1db34~mv2.png">
                </div>

                <div class="col-span-6 border-2 w-full h-auto  m-2 overflow-y-auto snap-x bg-slate-800 border-cyan-500
                            flex grid items-center justify-items-center">
                    <div id="waveform01" class="flex grid items-center justify-items-center w-full">

                    </div>
                </div>

                <div class="w-48 h-28 cols-span-1 flex grid items-center justify-items-center bg-slate-800">
                    <img class="w-5/6 h-5/6"
                        src="https://static.wixstatic.com/media/bb1bd6_5798c09022ba43249a38bfea9be1db34~mv2.png">
                </div>

                <div class="col-span-6 border-2 w-full h-auto  m-2 overflow-y-auto snap-x bg-slate-800 border-cyan-500
                            flex grid items-center justify-items-center">
                    <div id="waveform02" class="flex grid items-center justify-items-center w-full">

                    </div>
                </div>

                <div class="w-48 h-28 cols-span-1 flex grid items-center justify-items-center bg-slate-800">
                    <img class="w-5/6 h-5/6"
                        src="https://static.wixstatic.com/media/bb1bd6_5798c09022ba43249a38bfea9be1db34~mv2.png">
                </div>

                <div class="col-span-6 border-2 w-full h-auto  m-2 overflow-y-auto snap-x bg-slate-800 border-cyan-500
                            flex grid items-center justify-items-center">
                    <div id="waveform03" class="flex grid items-center justify-items-center w-full">

                    </div>
                </div>

                <div class="w-48 h-28 cols-span-1 flex grid items-center justify-items-center bg-slate-800">
                    <img class="w-5/6 h-5/6"
                        src="https://static.wixstatic.com/media/bb1bd6_5798c09022ba43249a38bfea9be1db34~mv2.png">
                </div>

                <div class="col-span-6 border-2 w-full h-auto  m-2 overflow-y-auto snap-x bg-slate-800 border-cyan-500
                            flex grid items-center justify-items-center">
                    <div id="waveform04"
                        class="flex grid items-center justify-items-center w-full scroll-smooth focus:scroll-auto cursor-grab">
                    </div>
                </div>
        </div>

  </div>
        <div class="flex justify-around justify-center content-center w-full h-auto p-3 bottom-0">
            <button class="hover:bg-red-400 p-2 h-auto w-auto bg-red-500 rounded-lg pl-4 pr-4">
                Discard
            </button>
            <button
                class="hover:bg-yellow-100 p-2 h-auto w-auto bg-yellow-200 rounded-lg pl-4 pr-4">
                Generate Video
            </button>
            <button
                class="text-white hover:bg-slate-400 p-2 h-auto w-auto bg-slate-800 rounded-lg pl-4 pr-4">
                Queue
            </button>
        </div>
    </div>


</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import WaveSurfer from 'wavesurfer.js';
import TimelinePlugin from 'wavesurfer.js/dist/plugins/timeline.js';

const time = ref(0);
const zoomLevel = ref(50); // Initial zoom level

// Helper function to update the time label
const updateTimeLabel = () => {
    const minutes = Math.floor(time.value / 60);
    const seconds = time.value % 60;
    const formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    document.getElementById('time-label').textContent = `Time: ${formattedTime}`;
};

// Helper function to update the zoom level of a WaveSurfer instance
const updateZoom = (waveSurfer: WaveSurfer) => {
    waveSurfer.zoom(zoomLevel.value);
};

// Initialize event listeners and components
onMounted(() => {
    const slider = document.getElementById('small-range');
    slider.addEventListener('input', updateTimeLabel);

    updateTimeLabel();

    // Function to play a specific waveform
    const playWaveform = (index) => {
        if (waveSurfers[index]) {
            waveSurfers[index].playPause();
        }
    };

    // Initialize WaveSurfer instances with TimelinePlugin and zooming
    const waveSurfers = [];

    for (let i = 1; i <= 4; i++) {
        const containerId = `#waveform0${i}`;
        const waveSurfer = WaveSurfer.create({
            container: containerId,
            waveColor: '#7dadff',
            height: 96,
            progressColor: '#00ffea',
            barWidth: 3,
            barGap: 3,
            barRadius: 3,
            minPxPerSec: 100,
            plugins: [TimelinePlugin.create({
                height: 20,
                insertPosition: 'beforebegin',
                timeInterval: 0.2,
                primaryLabelInterval: 5,
                secondaryLabelInterval: 1,
                style: {
                    fontSize: '16px',
                    color: '#2D5B88',
                },
            })],
            url: `/Jazz-0${i}-Track_120.mp4`,
        });

        waveSurfers.push(waveSurfer);

        // Attach zooming functionality to each WaveSurfer instance
        waveSurfer.on('ready', () => {
            updateZoom(waveSurfer);
        });
    }

    // Watch for changes in zoom level and update all WaveSurfer instances
    watch(zoomLevel, () => {
        waveSurfers.forEach((waveSurfer) => {
            updateZoom(waveSurfer);
        });
    });


});


const images = ref([
    "https://media04.tetraserver.com/uploads/layout/4_01_NUM.png",
    "https://media04.tetraserver.com/uploads/layout/4_01_NUM.png",
    "https://media04.tetraserver.com/uploads/layout/4_01_NUM.png",
    "https://media04.tetraserver.com/uploads/layout/4_01_NUM.png",
    "https://media04.tetraserver.com/uploads/layout/4_01_NUM.png",
    // Add more image URLs as needed
]);

const currentIndex = ref(0); // Current index of the displayed image

const moveSlider = (direction) => {
    const newIndex = currentIndex.value + direction;
    if (newIndex >= 0 && newIndex < images.value.length) {
        currentIndex.value = newIndex;
    }
};


</script>

<style>/* styles.css */
.hide-scrollbar {
    scrollbar-width: none;
    /* Hide standard scrollbar (Firefox) */
    -ms-overflow-style: none;
    /* Hide standard scrollbar (IE/Edge) */
    overflow: -moz-scrollbars-none;
    /* Hide scrollbar (Firefox) */
}

.hide-scrollbar::-webkit-scrollbar {
    display: none;
    /* Hide scrollbar (Chrome/Safari) */

}

.image-slider {
  display: flex;
  place-items: center;
  grid-column: span 8;
  gap: 1rem;
}

.slider-button {
    place-items: center;
    border-radius: 15px;
  background-color: #474e74;
  border: none;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
}

.slider-container {
  display: flex;
  overflow: hidden;
  place-items: center;
}

.slider-content {
  display: flex;
  transition: transform 0.3s ease-in-out;
  place-items: center;
}

.slider-item {
    place-self: center;
    scroll-snap-type: mandatory;
    width: 48px;
  flex: 0 0 100%;
}

img {
  max-width: 100%;
}

</style>