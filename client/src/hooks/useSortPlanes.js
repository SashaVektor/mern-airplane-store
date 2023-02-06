import { useState, useMemo } from "react";

export const useSortPlanes = (planes = []) => {
    const [isDescSort, setDescSort] = useState(false);

    const sortedPlanes = useMemo(() => {
        const sortablePlanes = [...planes];

        sortablePlanes.sort((a,b) => {
            if(Number(a.price) <  Number(b.price)) return isDescSort ? 1 : -1;
            if(Number(a.price) > Number(b.price)) return isDescSort ? -1 : 1;

            return 0
        });

        return sortablePlanes
    },[isDescSort, planes])

    return {
        isDescSort,
        setDescSort,
        sortedPlanes
    }
}