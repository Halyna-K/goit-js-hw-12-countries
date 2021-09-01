import getRefs from './refs.js';
const refs = getRefs();

export default function clearInfo() {
    refs.listInfo.innerHTML= '';
}
