import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import { red } from '@material-ui/core/colors';
import { FriendsTypes } from '../../type';
import * as S from '../App.styled';

type Props = {
    friends: FriendsTypes[];
    deleteFriendList: (id: string) => void;
};

const Lists: React.FC<Props> = ({ friends, deleteFriendList }) => {
    return (
        <>
            {friends.map((friend) => {
                return (
                    <S.List key={friend.id}>
                        <S.ListHeader>
                            <S.ListImg src={friend.img} />
                            <S.Name>{friend.name}</S.Name>
                        </S.ListHeader>
                        <S.Age>{friend.age} years old</S.Age>
                        <S.Note>{friend.note}</S.Note>
                        <S.IconWrapper onClick={() => deleteFriendList(friend.id)}>
                            <DeleteIcon style={{ color: red[500] }} />
                        </S.IconWrapper>
                    </S.List>
                );
            })}
        </>
    );
};

export default Lists;
