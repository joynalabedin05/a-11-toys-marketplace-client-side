import { useEffect } from "react"

const useTitle = title=>{
    useEffect(()=>{
        document.title = `NOREV | ${title}`;
    },[title])
}
export default useTitle;