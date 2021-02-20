import { useState, useEffect } from 'react'

export default function useWindowWidth() {
    let windowInnerSize = [window.innerWidth, window.innerHeight];

    let [windowSize, setWidowSize] = useState(windowInnerSize);

    useEffect(() => {
        const changeWindowSize = () => {
            setWidowSize([window.innerWidth, window.innerHeight]);
        }

        window.addEventListener("resize", changeWindowSize);

        return () => window.removeEventListener('resize', changeWindowSize);
    }, [windowSize]);
    return windowSize;
}