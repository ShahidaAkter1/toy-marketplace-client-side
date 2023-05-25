import { useEffect } from "react"

const useTitle=title=>{

    useEffect( ()=>{
        document.title= `${title} - EdutoYS`;
    } ,[title])


}

export default useTitle;