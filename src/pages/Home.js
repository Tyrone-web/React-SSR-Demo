import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHomeData } from '../store/actions/home';

const Home = () => {
    const dispatch = useDispatch();
    const homeData = useSelector(state => state.home);

    useEffect(() => {
        dispatch(fetchHomeData);
    }, []);

    const onClick = () => {
        console.log('test');
    }
    return <div>
        <h1>我是主页</h1>
        <ul>
            {
                homeData.articles.map(item => <li key={item.id}>
                    <p>文章标题：{item.title}</p>
                    <p>文章内容：{item.content}</p>
                </li>)
            }
        </ul>
        <button onClick={onClick}>点击</button>
    </div>
}

Home.getInitialData = async (store) => {
    return store.dispatch(fetchHomeData);
}

export default Home;