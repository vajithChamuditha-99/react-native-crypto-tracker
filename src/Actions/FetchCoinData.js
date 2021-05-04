import axios from 'axios';
import {FETCHING_COIN_DATA, FETCHING_COIN_DATA_SUCCESS, FETCHING_COIN_DATA_FAIL} from './../Utills/ActionTypes';
import {apiBaseURl} from './../Utills/Constants';

export default function FetchCoinData() {
    return dispatch => {
        dispatch({
            type: FETCHING_COIN_DATA
        })

        return axios.get(`${apiBaseURl}/v1/ticker/?limit=10`)
        .then(res => {
            return dispatch({
                type: FETCHING_COIN_DATA_SUCCESS,
                payload: res.data
            })
        })
        .catch(err=>{
            return dispatch({
                type: FETCHING_COIN_DATA_FAIL,
                payload: err
            })
        })
    }
}