import React, { useState } from 'react';
import { FriendsTypes } from '../../type';
import * as S from '../App.styled';

type Props = {
    friends: FriendsTypes[];
    setFriends: React.Dispatch<React.SetStateAction<FriendsTypes[]>>;
};

const AddtoList: React.FC<Props> = ({ friends, setFriends }) => {
    const [input, setInput] = useState({
        name: '',
        age: '',
        note: '',
        img: '',
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        setInput({
            ...input,
            [event.target.name]: event.target.value,
        });
    };

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        if (!input.name || !input.age || !input.note || !input.img) return;

        setFriends([
            ...friends,
            {
                id: new Date().getTime().toString(),
                name: input.name,
                age: parseInt(input.age),
                img: input.img,
                note: input.note,
            },
        ]);

        setInput({
            name: '',
            age: '',
            img: '',
            note: '',
        });
    };

    return (
        <form onSubmit={submitHandler}>
            <S.Input
                name="name"
                type="text"
                id="text"
                placeholder="name"
                value={input.name}
                onChange={handleChange}
                required
            />
            <S.Input
                name="age"
                type="number"
                id="text"
                placeholder="age"
                value={input.age}
                onChange={handleChange}
                required
            />
            <S.Input
                name="img"
                type="text"
                id="text"
                placeholder="image"
                value={input.img}
                onChange={handleChange}
                required
            />
            <S.TextArea name="note" id="text" placeholder="note" value={input.note} onChange={handleChange} required />
            <S.Button type="submit">Add To List</S.Button>
        </form>
    );
};

export default AddtoList;
