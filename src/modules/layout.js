import React from 'react';
import st_peterburg from '../assets/img/sankt-peterburg-piter-st-3495.png';
import round from '../assets/img/round.png';
import watches from '../assets/img/Group.png';
import check_mark from '../assets/img/Vector.png';
import rubles from '../assets/img/rubles.png';
import bridge from '../assets/img/AdobeStock_168443825 1.png';
import bus from '../assets/img/ekskursii-po-spb-na-avtobuse 1.png';
import music from '../assets/img/music 1.png'

const Layout = () => {
    const cards =
        [{
            img_main: st_peterburg,
            img_round: round,
            img_watches: watches,
            img: check_mark,
            background_color: '#FED74B',
            width: '99px',
            height: '35px',
            margin: '40px',
            whatIsIt: 'НОВИНКА',
            h2: 'АКЦИЯ - Обзорная экскурсия по рекам и каналам с остановками Hop on Hop Off 2019',
            bonus1: 'Билет на целый день',
            bonus2: 'Неограниченное число катаний',
            bonus3: '6 остановок у главных достопримечательностей',
            time: 'Ближайший рейс сегодня',
            check_in: ['12.00', '12.00', "12.00", '12.00', "12.00", "12.00", "12.00", "12.00", "12.00"],
            price: '900',
            onPier: 'На причале 1200 р'
        }, {
            img_main: st_peterburg,
            img_watches: watches,
            img: check_mark,
            background_color: '#7553FF',
            width: '129px',
            height: '43px',
            border: '15px 0px 12px',
            color: 'white',
            whatIsIt: 'НОВИНКА',
            h2: 'АКЦИЯ - Обзорная экскурсия по рекам и каналам с остановками Hop on Hop Off 2019',
            bonus1: 'Билет на целый день',
            bonus2: 'Неограниченное число катаний',
            bonus3: '6 остановок у главных достопримечательностей',
            time: 'Ближайший рейс сегодня',
            check_in: ['12.00', '12.00', "12.00", '12.00', '12.00'],
            price: '2900',
            onPier: 'На причале 1200 р'
        }, {
            img_main: bridge,
            img_watches: watches,
            img: check_mark,
            background_color: '#099CE8',
            width: '129px',
            height: '43px',
            margin: '40px',
            color: 'white',
            whatIsIt: 'НОВИНКА',
            h2: 'Обзорная экскурсия по рекам и каналам с остановками Hop on Hop Off 2019',
            bonus1: 'Билет на целый день',
            bonus2: 'Неограниченное число катаний',
            bonus3: '6 остановок у главных достопримечательностей',
            time: 'Ближайший рейс сегодня',
            check_in: ['12.00', '12.00', "12.00"],
            price: '900',
            onPier: 'На причале 1200 р'
        }, {
            img_main: bus,
            img_watches: watches,
            img: check_mark,
            background_color: '#FFD83B',
            width: '129px',
            height: '43px',
            margin: '40px',
            color: 'black',
            whatIsIt: 'КРУГЛЫЙ ГОД',
            h2: 'Обзорная экскурсия по рекам и каналам с остановками Hop on Hop Off 2019',
            bonus1: 'Билет на целый день',
            bonus2: 'Неограниченное число катаний',
            bonus3: '6 остановок у главных достопримечательностей',
            time: 'Ближайший рейс сегодня',
            check_in: ['12.00', '12.00', "12.00", '12.00'],
            price: '900',
            onPier: 'На причале 1200 р'
        }, {
            img_main: music,
            img_watches: watches,
            img: check_mark,
            width: '129px',
            height: '43px',
            color: 'white',
            h2: 'Обзорная экскурсия по рекам и каналам с остановками Hop on Hop Off 2019',
            bonus1: 'Билет на целый день',
            bonus2: 'Неограниченное число катаний',
            bonus3: '6 остановок у главных достопримечательностей',
            time: 'Ближайший рейс сегодня',
            check_in: ['12.00', '12.00', "12.00", '12.00', '12.00'],
            price: '900',
            onPier: 'На причале 1200 р'
        }]
    return (
        cards.map((i, index) => {
            function clickFunction(evt) {
                evt.currentTarget.style.display = 'none';
                evt.currentTarget.className = 'more_hidden';
            }

            const styles = {
                position: 'absolute',
                backgroundColor: `${i.background_color}`,
                borderRadius: `${i.border}`,
                margin: '0',
                width: `${i.width}`,
                height: `${i.height}`,
                marginTop: `${i.margin}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: `${i.color}`,
                fontFamily: 'Open Sans',
                fontSStyle: 'normal',
                fontWeight: '600',
                fontSize: '14px',
                lineHeight: '20px'
            }
            return <div className={'layout'} key={index}>
                <img src={i.img_main} alt={'st.peterburg'} width={341} height={220} className={'main_image'}/>
                <p className={'new'} style={styles}>{i.whatIsIt}</p>
                <div className={'container'}>
                    {i.img_round ? <img src={i.img_round} alt={'round'} width={6} height={6} className={'round'}/> : ''}
                    <h2>{i.h2}</h2>
                    <div className={'time'}><img src={i.img_watches} alt={'watches'} width={16} height={16}/>
                        <span> 2 часа</span>
                    </div>
                    <div className={'check'}><img src={i.img} alt={'chek'} width={16} height={12}/> <p
                        className={'bonus'}>{i.bonus1}</p></div>
                    <div className={'check'}><img src={i.img} alt={'chek'} width={16} height={12}/> <p
                        className={'bonus'}>{i.bonus2}</p></div>
                    <div className={'check'}><img src={i.img} alt={'chek'} width={16} height={12}/> <p
                        className={'bonus'}>{i.bonus3}</p></div>
                    <div className={'check_container'}>
                        <div className={'check'}><img src={i.img} alt={'chek'} width={16} height={12}/> <p
                            className={'bonus'}>{i.time}</p></div>
                        <div className={'check_in'}>
                            {
                                i.check_in.length > 4 ? <>
                                        <p>{i.check_in[0]}</p>
                                        <p>{i.check_in[1]}</p>
                                        <p>{i.check_in[2]}</p>
                                        <p className={'more'} onClick={clickFunction}>Еще...</p>
                                        {i.check_in.map((b, index) => {
                                            if (index > 2) {
                                                return <p key={index}>{b}</p>
                                            }
                                        })}
                                    </>

                                    : i.check_in.map((a, index) => {
                                        return <p key={index}>{a}</p>
                                    })
                            }
                        </div>
                    </div>
                    <div>
                        <div className={i.onPier ? 'price' : 'price-pier'}>
                            <div className={'price_coop'}>
                                {i.price} <img src={rubles} alt={'rubles'} width={17.23} height={23}/>
                                {i.onPier ? <p>{i.onPier}</p> : ''}
                            </div>
                            <button>Подробнее</button>
                        </div>
                    </div>
                </div>
            </div>
        })
    );
};

export default Layout;
