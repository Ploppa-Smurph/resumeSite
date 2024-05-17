// takes relative path and constructs absolute path 
// makes easier to share images between modules

export const getImageURL = (path) => {
    return new URL(`/assets/${path}`, import.meta.url).href;
}