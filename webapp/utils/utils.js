export const hasError = (errors) => {
    let hasError = false;
    for(let key in errors) {
        if(errors[key]) hasError = true
    }
    return hasError
}

export const modifyForReactSealect = (options = []) => {
    let arr = [];
    options.map((item) => {
        arr.push({label: item, value: item})
    })
    return arr;
}

export const addOrRemove = (array, value) => {
    if(!Array.isArray(array)) return array;
    let index = array.findIndex(item => item.id === value.id)
    if (index === -1) {
        array.push(value);
    } else {
        array.splice(index, 1);
    }
    return array;
}

export const isIncludesThisId = (array, id) => {
    if(!Array.isArray(array)) return array;
    let found = false;
    array.map(item => {
        if(item.id === id) found = true
    })
    return found;
}

export const urlSearchParams = () => {
    if(process.browser) {
        let urlParams = new URLSearchParams(window.location.search);
        let obj = {
            search: urlParams.get('search'),
            from: urlParams.get('from'),
            to: urlParams.get('to'),
            country: urlParams.get('country'),
            ioid: urlParams.get('ioid'),
            s: urlParams.get('s'),
            category: urlParams.get('category'),
            group: urlParams.get('group'),
            last: urlParams.get('last'),
            type: urlParams.get('type')
        }
        return obj;
    } else {
        return {}
    }
}

export const modifyToBr = (value) => {
    try {
        let modified = value.replace(/(\r\n|\n)/g, "<br/>")
        return {__html: modified};
    } catch(e) {
        return {__html: value || ''};
    }
}