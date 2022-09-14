import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { storeActions } from '../actions';

export const useData = (id) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(storeActions.fetchAsync(id));

    }, [dispatch, id]);

    const {
        data,
        isFetching,
        error
    } = useSelector((state) => state.store);

    return {
        data,
        isFetching,
        error
    }

}