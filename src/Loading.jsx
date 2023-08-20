import ReactLoading from 'react-loading'
import { settingReactLoading } from "./Lib"

const Loading = () => {
  return (
    <div style={settingReactLoading.css} className="loading">
      <ReactLoading type={settingReactLoading.type[5]} color={settingReactLoading.color} height={settingReactLoading.height} width={settingReactLoading.width} />
    </div>
  )
}

export default Loading;