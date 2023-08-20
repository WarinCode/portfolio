import  { useRef } from 'react'
import { FiArrowUp } from "react-icons/fi"
import "/src/style/scss/_icon.scss"

export const BtnToTop = () => {
    const btn = useRef('button');

    window.onscroll = function(){
        scrollY >= 1800 ? 
        btn.current.style.visibility = 'visible' :
        btn.current.style.visibility = 'hidden';
    }

  return (
    <span className='btn-top' ref={btn} onClick={() => scrollTo(0,0)}>
        <FiArrowUp/>
    </span>
  )
}
