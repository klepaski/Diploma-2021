import packageJSON from "../package";
import emptyAvatar from '../static/img/empty-avatar.png'
// import defaultOffer from '../static/img/default-offer.png'
import defaultOffer from '../static/img/no-photo.png'
import defaultCoverProfile from '../static/img/bg-user-default.png'

export const modifySrc = (src, type) => {
    let empty = emptyAvatar;

    switch (type) {
        case 'offer':
            empty = defaultOffer;
            break;
        case 'person':
            empty = emptyAvatar;
            break;
        case 'coverProfile':
            empty = defaultCoverProfile;
            break;
    }

    if(!src) return empty;

    if(/^((http|https|www|ftp):\/\/)/.test(src)) {
        return src;
    }

    return `${packageJSON.pathToUpload}/${src}`
}