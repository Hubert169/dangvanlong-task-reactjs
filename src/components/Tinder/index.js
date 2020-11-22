import React, { useState } from 'react';
import * as S from './style';
import data from './data.json';
import { FaUser, FaList, FaMapMarked, FaBan } from 'react-icons/fa';
import { IoIosCall } from 'react-icons/io';

export default function Tinder() {
    const [inforUser, setInforUser] = useState(data[0]);
    const [keyInforUser, setKeyInforUser] = useState('address');
    const [touchStar, setTouchStar] = useState(0);
    const [positionImage, setPositionImage] = useState(0);
    const widthDefaultAvatar = 150;

    // render value follow key
    const renderInforUser = (param) => {
        switch (param) {
            case 'iconUser':
                return inforUser.iconUser;
            case 'iconList':
                return inforUser.iconList;
            case 'address':
                return inforUser.address;
            case 'iconPhone':
                return inforUser.iconPhone;
            case 'iconBlock':
                return inforUser.iconBlock;
            default:
                return inforUser.address;
        }
    }
    
    // render value follow key
    const renderTextDefault = (param) => {
        switch (param) {
            case 'iconUser':
                return 'My User is';
            case 'iconList':
                return 'My List is';
            case 'address':
                return 'My address is';
            case 'iconPhone':
                return 'My Phone is';
            case 'iconBlock':
                return 'My Block is';
            default:
                return 'My address is';
        }
    }

    // function animation when Touch Move 
    const handleTouchMove = (moveClientX) => {
        setPositionImage(touchStar - moveClientX);
        if (positionImage > (widthDefaultAvatar / 2)) setPositionImage(widthDefaultAvatar);
    }

    // function when Touch End
    const handleTouchEnd = () => {
        setPositionImage(0)
        let valueRandom = Math.floor(Math.random() * Math.floor(data.length));
        let userRandom = data[valueRandom];
        if (positionImage > widthDefaultAvatar / 2) {
            {/**swipe left case */ }
            {/** call api */}
            setInforUser(userRandom)
        } else if (positionImage < (-widthDefaultAvatar / 2)) {
            {/** case update favourite */ }
            const favouriteList = localStorage.getItem('favourite_list');
            const arrayFavourite = JSON.parse(favouriteList);
            if (favouriteList !== null) {
                const checkIndexFavourite = arrayFavourite.filter(item => item.id === inforUser.id);
                console.log('checkIndexFavourite', checkIndexFavourite);
                if (checkIndexFavourite[0] === undefined) {
                    {/** User case have not been added */ }
                    arrayFavourite.push(inforUser)
                    localStorage.setItem('favourite_list', `${JSON.stringify(arrayFavourite)}`);
                    alert('has been added');
                } else {
                    {/** User case have been added before */ }
                    alert('has been previously saved');
                }
            } else {
                {/** create list favourite */ }
                const stringifyUser = JSON.stringify(inforUser);
                localStorage.setItem('favourite_list', `[${stringifyUser}]`);
                alert('has been added');
            }
        }
    }
    return (
        <S.Wrapper>
            <S.CorverImage
                src={inforUser.corverPhoto}
            />
            <S.BoxInforUser>
                <S.BoxAvatar>
                    <S.AvataBackground
                        onTouchMove={(e) => handleTouchMove(e.touches[0].clientX)}
                        onTouchStart={(e) => setTouchStar(e.touches[0].clientX)}
                        onTouchEnd={() => handleTouchEnd()}
                        style={{
                            backgroundImage: `url(${inforUser.avartar})`,
                            backgroundPositionX: -positionImage,
                            opacity: positionImage > 0
                                ? (10 / (positionImage + 0.000001))
                                : (10 / (-positionImage + 0.000001))
                        }}
                    />
                </S.BoxAvatar>
                <S.TextDefault>{renderTextDefault(keyInforUser)}</S.TextDefault>
                <S.Strong>{renderInforUser(keyInforUser)}</S.Strong>
                <S.TabInforUser>
                    <S.Span
                        className={`${keyInforUser === 'iconUser' ? 'active' : ''}`}
                        onClick={() => setKeyInforUser('iconUser')}>
                        <FaUser />
                    </S.Span>
                    <S.Span
                        className={`${keyInforUser === 'iconList' ? 'active' : ''}`}
                        onClick={() => setKeyInforUser('iconList')}>
                        <FaList />
                    </S.Span>
                    <S.Span
                        className={`${keyInforUser === 'address' ? 'active' : ''}`}
                        onClick={() => setKeyInforUser('address')}>
                        <FaMapMarked />
                    </S.Span>
                    <S.Span
                        className={`${keyInforUser === 'iconPhone' ? 'active' : ''}`}
                        onClick={() => setKeyInforUser('iconPhone')}>
                        <IoIosCall />
                    </S.Span>
                    <S.Span
                        className={`${keyInforUser === 'iconBlock' ? 'active' : ''}`}
                        onClick={() => setKeyInforUser('iconBlock')}>
                        <FaBan />
                    </S.Span>
                </S.TabInforUser>
            </S.BoxInforUser>
        </S.Wrapper>
    )
}