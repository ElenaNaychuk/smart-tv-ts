export const arrowDownHandler = (keys: string[] ,activeKey: string, setActiveKey:(value:string)=>void) =>{
    let nextIndex;
    const currentIndex = keys.indexOf(activeKey);
    if([0, 1, 2, 3, 4, 5].includes(Number(currentIndex))) nextIndex = currentIndex + 3;
    if(currentIndex === 6 || currentIndex === 7) nextIndex = keys.indexOf('Стереть');
    if(currentIndex === 8) nextIndex = keys.length - 1;
    if(nextIndex) {
        setActiveKey(keys[nextIndex])
    }
}

export const arrowUpHandler = (keys: string[] ,activeKey: string, setActiveKey:(value:string)=>void) =>{
    let nextIndex;
    const currentIndex = keys.indexOf(activeKey);
    if([3, 4, 5, 6, 7, 8, 9].includes(Number(currentIndex))) nextIndex = currentIndex - 3;
    if(currentIndex === keys.indexOf('Стереть') || currentIndex === keys.length - 1) nextIndex = currentIndex - 2;
    if(nextIndex || nextIndex === 0) {
        setActiveKey(keys[nextIndex])
    }
}

export const arrowRightHandler = (keys: string[] ,activeKey: string, setActiveKey:(value:string)=>void) =>{
    let nextIndex;
    const currentIndex = keys.indexOf(activeKey);
    if(currentIndex === keys.length -1) {
        nextIndex = 0;
    } else {
        nextIndex = currentIndex + 1;
    }
    if(nextIndex || nextIndex === 0) {
        setActiveKey(keys[nextIndex])
    }
}

export const arrowLeftHandler = (keys: string[] ,activeKey: string, setActiveKey:(value:string)=>void) =>{
    let nextIndex;
    const currentIndex = keys.indexOf(activeKey);
    if(currentIndex !== 0) nextIndex = currentIndex - 1;
    if(nextIndex || nextIndex === 0) {
        setActiveKey(keys[nextIndex])
    }
}