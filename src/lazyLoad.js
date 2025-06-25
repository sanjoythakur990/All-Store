import { lazy } from "react";

export default function lazyLoad(path, namedComponent) {
    if(!namedComponent) {
        return lazy(() => import(path))
    } else {
        return lazy(() => import(path).then((module) => {
            return {
                default : module[namedComponent]
            }
    }))
    }
}