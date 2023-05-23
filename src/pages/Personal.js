import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPersonalData } from '../store/actions/personal';
import { useSubmit } from 'react-router-dom';

const Personal = () => {
    const dispatch = useDispatch();
    const personalData = useSelector(state => state.personal);

    useEffect(() => {
        dispatch(fetchPersonalData);
    }, []);

    const { userInfo: { username, job } } = personalData || {};

    return <div>
        <h1>个人中心</h1>
        <p>姓名：{username}</p>
        <p>姓名：{job}</p>
    </div>
}

Personal.getInitialData = async (store) => {
    return store.dispatch(fetchPersonalData);
}

export default Personal;