import { ref, onMounted, onUnmounted } from 'vue';
export default function() {
  var x = ref<Number>(-1)
    var y = ref<Number>(-1)

    const handleClick = (e: MouseEvent)=> {
      x.value = e.pageX
      y.value = e.pageY
    }
    onMounted(() => {
      window.addEventListener('click', handleClick)
    })
    onUnmounted(() => {
      window.removeEventListener('click', handleClick)
    })
    return {
      x,
      y,
    }
}