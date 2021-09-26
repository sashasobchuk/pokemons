
import { call, put, takeEvery} from "redux-saga/effects";

import {
    DOWNLOAD_POKEMON,
    DOWNLOAD_POKEMONS, downloadPokemon,
    setStoragePokemon,
    setStoreOtherData,
    setStorePokemons
} from "../pokemonReducer";
import {downloadPokemonApi, downloadPokemonsApi} from "../../api/pokemonApi";
export function* watchDownloadPokemons() {
    yield takeEvery(DOWNLOAD_POKEMONS,downloadPokemonsWorker);
}
function* downloadPokemonsWorker(  payload ) {
    const data = yield call(downloadPokemonsApi,payload.limit)
    yield put(setStorePokemons(data.data.results))
    yield put(setStoreOtherData({next:data.data.next,count:data.data.count,previous:data.data.previous}))

    let gen = 0;
    while (gen  !== data.data.results.length){
        yield  put(downloadPokemon(data.data.results[gen].url))
        gen++
    }
}

export function* watchDownloadPokemon() {
    yield takeEvery(DOWNLOAD_POKEMON,downloadPokemonWorker);
}
function* downloadPokemonWorker(url) {
    const data = yield call(downloadPokemonApi,url.url)
    yield put(setStoragePokemon( data.data))
}








//
// export function* watchUploadBooks() {
//     yield takeEvery(UPLOAD_BOOK,uploadBooks);
// }
// function* uploadBooks({payload}) {
//     let newBook = yield call(uploadBookApi,payload)
//     if(payload.sendBookId.length >1){
//         payload.newBookID = newBook.data._id
//         let newCollection = yield call(changeBookCollectionApi, payload)
//         yield put (editLocalData(newCollection.data ))
//     }else {
//         yield put(addStorageBook(newBook.data))
//     }
// }
//
//
// export function* watchDeleteBook() {
//     yield takeEvery(DELETE_BOOK,deleteBookWorker);
// }
// function* deleteBookWorker(payload) {
//     yield call(deleteBookApi,payload.payload)
//     debugger
//     yield put(removeLocalBook(payload.payload))
// }
//









