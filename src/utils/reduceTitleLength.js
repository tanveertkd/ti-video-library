const reduceTitleLength = (title, charLength) => {
    if(title.length > charLength)
        return title.substring(0, (charLength - 3))+"...";
    return title; 
}

export { reduceTitleLength };