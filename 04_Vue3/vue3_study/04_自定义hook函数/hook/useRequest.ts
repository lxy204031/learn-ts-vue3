import axios from 'axios'
import { ref } from 'vue'

// 因为获取到的数据类型不确定，所以使用了泛型
export default function useUrlLoader<T>(url: string) {
  const result = ref<T | null>(null)
  const loading = ref(true)
  const errorMsg = ref('')

  axios.get(url).then(response => {
    loading.value = false
    result.value = response.data
  }).catch(e => {
    loading.value = false
    errorMsg.value = e.message || '未知错误'
  })
  return {
    result,
    loading,
    errorMsg
  }
}