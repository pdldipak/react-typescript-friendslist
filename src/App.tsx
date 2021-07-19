import React, { useState, useEffect } from 'react';
import { GlobalStyled } from './global';
import { AppWrapper } from './App.styled';
import { FriendsTypes } from '../type';
import Lists from './components/Lists';
import AddtoList from './components/AddtoList';

const App: React.FC = () => {
    const [friends, setFriends] = useState<FriendsTypes[]>([
        {
            id: '12345rfg865',
            name: 'Aashish Poudel',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMPvvj_TD5kC4-4p6H_hBdxyulV2Y63mqofg&usqp=CAU',
            age: 32,
            note: `He is a vegetarian. He doesn't eat meat.`,
        },
        {
            id: '1234509rf65',
            name: 'Abhaya Malla',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMPvvj_TD5kC4-4p6H_hBdxyulV2Y63mqofg&usqp=CAU',
            age: 34,
            note: `He loves meat and eat everything`,
        },
    ]);

    const deleteFriendList = (id: string) => {
        const remainFriends = friends.filter((friend) => friend.id !== id);
        setFriends(remainFriends);
    };

    useEffect(() => {
        const localData = localStorage.getItem('friendsList');
        if (localData) {
            setFriends(JSON.parse(localData));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('friendsList', JSON.stringify(friends));
    }, [friends]);

    return (
        <>
            <GlobalStyled />
            <AppWrapper>
                <h1>My friends list</h1>
                <Lists friends={friends} deleteFriendList={deleteFriendList} />
                <AddtoList friends={friends} setFriends={setFriends} />
            </AppWrapper>
        </>
    );
};

export default App;
