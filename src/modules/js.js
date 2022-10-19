import React, {useState} from 'react';
import {DateTime} from "luxon";

const Js = () => {

    const dt = DateTime.now();
    let [minTravelBack, setMinTravelBack] = useState(0)
    const [timeToGo, setTimeToGo] = useState(0)
    const [firstSelect, setFirstSelect] = useState(false);
    const [secondSelect, setSecondSelect] = useState(false);
    const [fromAtoBAndBack, setFromAtoBAndBack] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [route, setRoute] = useState('');
    const [isClicked, setIsClicked] = useState(false)

    function handleChange(evt) {
        setInputValue(evt.target.value)
    }

    function whatAboutEnding() {
        if (inputValue.slice(-1) === '1' && inputValue !== '11') {
            return ''
        }
        if (+inputValue.slice(-1) < 5 && +inputValue.slice(-1) !== 0 && +inputValue !== 11) {
            return 'а'
        }
        if (+inputValue.slice(-1) >= 5 || +inputValue.slice(-1) <= 9 || inputValue.slice(-1) === '0' || inputValue === '11') {
            return 'ов'
        }
    }

    function calc() {
        if (route === 'из A в B' || route === 'из B в A') {
            return 700
        } else if (route === 'из A в B и обратно в А') {
            return 1200
        }
    }

    function whatIsRoute() {
        if (route === 'из A в B') {
            return <>
                <label htmlFor="time">Выберите время</label>
                <select defaultValue={'default'} name="time" id="time" onChange={(evt) => {
                    setSecondSelect(true);
                    setTimeToGo(Number(evt.target.value))
                }}>
                    <option value={'default'} style={{display: 'none'}}>
                    </option>
                    <option value={DateTime.fromObject({
                        hour: 18,
                        minute: 0o0
                    }, {zone: dt.zoneName})}>{DateTime.fromObject({
                        hour: 18,
                        minute: 0o0
                    }, {zone: dt.zoneName}).toFormat('T')}(из A в B)
                    </option>
                    <option value={DateTime.fromObject({
                        hour: 18,
                        minute: 30
                    }, {zone: dt.zoneName})}>{DateTime.fromObject({
                        hour: 18,
                        minute: 30
                    }, {zone: dt.zoneName}).toFormat('T')}(из A в B)
                    </option>
                    <option value={DateTime.fromObject({
                        hour: 18,
                        minute: 45
                    }, {zone: dt.zoneName})}>{DateTime.fromObject({
                        hour: 18,
                        minute: 45
                    }, {zone: dt.zoneName}).toFormat('T')}(из A в B)
                    </option>
                    <option value={DateTime.fromObject({
                        hour: 19,
                        minute: 0o0
                    }, {zone: dt.zoneName})}>{DateTime.fromObject({
                        hour: 19,
                        minute: 0o0
                    }, {zone: dt.zoneName}).toFormat('T')}(из A в B)
                    </option>
                    <option value={DateTime.fromObject({
                        hour: 19,
                        minute: 15
                    }, {zone: dt.zoneName})}>{DateTime.fromObject({
                        hour: 19,
                        minute: 15
                    }, {zone: dt.zoneName}).toFormat('T')}(из A в B)
                    </option>
                    <option value={DateTime.fromObject({
                        hour: 21,
                        minute: 0o0
                    }, {zone: dt.zoneName})}>{DateTime.fromObject({
                        hour: 21,
                        minute: 0o0
                    }, {zone: dt.zoneName}).toFormat('T')}(из A в B)
                    </option>
                </select>
            </>
        } else if (route === 'из B в A') {
            return <>
                <label htmlFor="time">Выберите время</label>
                <select name="time" id="time" defaultValue={'default'} onChange={(evt) => {
                    setSecondSelect(true);
                    setTimeToGo(Number(evt.target.value))
                }}>
                    <option value={'default'} style={{display: 'none'}}>
                    </option>
                    <option
                        value={DateTime.fromObject({hour: 18, minute: 30}, {zone: dt.zoneName})}>{DateTime.fromObject({
                        hour: 18,
                        minute: 30
                    }, {zone: dt.zoneName}).toFormat('T')}(из В в А)
                    </option>
                    <option
                        value={DateTime.fromObject({hour: 18, minute: 45}, {zone: dt.zoneName})}>{DateTime.fromObject({
                        hour: 18,
                        minute: 45
                    }, {zone: dt.zoneName}).toFormat('T')}(из В в А)
                    </option>
                    <option
                        value={DateTime.fromObject({hour: 19, minute: 0o0}, {zone: dt.zoneName})}>{DateTime.fromObject({
                        hour: 19,
                        minute: 0o0
                    }, {zone: dt.zoneName}).toFormat('T')}(из В в А)
                    </option>
                    <option
                        value={DateTime.fromObject({hour: 19, minute: 15}, {zone: dt.zoneName})}>{DateTime.fromObject({
                        hour: 19,
                        minute: 15
                    }, {zone: dt.zoneName}).toFormat('T')}(из В в А)
                    </option>
                    <option
                        value={DateTime.fromObject({hour: 19, minute: 35}, {zone: dt.zoneName})}>{DateTime.fromObject({
                        hour: 19,
                        minute: 35
                    }, {zone: dt.zoneName}).toFormat('T')}(из В в А)
                    </option>
                    : ''}
                    <option
                        value={DateTime.fromObject({hour: 21, minute: 50}, {zone: dt.zoneName})}>{DateTime.fromObject({
                        hour: 21,
                        minute: 50
                    }, {zone: dt.zoneName}).toFormat('T')}(из В в А)
                    </option>
                    <option
                        value={DateTime.fromObject({hour: 21, minute: 55}, {zone: dt.zoneName})}>{DateTime.fromObject({
                        hour: 21,
                        minute: 55
                    }, {zone: dt.zoneName}).toFormat('T')}(из В в А)
                    </option>
                </select>
            </>
        } else if (route === 'из A в B и обратно в А') {
            return <>
                <label htmlFor="time">Выберите время</label>
                <select defaultValue={'default'} name="time" id="time" onChange={(evt) => {
                    setFromAtoBAndBack(true);
                    setMinTravelBack(Number(evt.target.value) + 3000000)
                    setTimeToGo(Number(evt.target.value))
                }}>
                    <option value={'default'} style={{display: 'none'}}>
                    </option>
                    <option value={DateTime.fromObject({
                        hour: 18,
                        minute: 0o0
                    }, {zone: dt.zoneName})}>{DateTime.fromObject({
                        hour: 18,
                        minute: 0o0
                    }, {zone: dt.zoneName}).toFormat('T')}(из A в B)
                    </option>
                    <option value={DateTime.fromObject({
                        hour: 18,
                        minute: 30
                    }, {zone: dt.zoneName})}>{DateTime.fromObject({
                        hour: 18,
                        minute: 30
                    }, {zone: dt.zoneName}).toFormat('T')}(из A в B)
                    </option>
                    <option value={DateTime.fromObject({
                        hour: 18,
                        minute: 45
                    }, {zone: dt.zoneName})}>{DateTime.fromObject({
                        hour: 18,
                        minute: 45
                    }, {zone: dt.zoneName}).toFormat('T')}(из A в B)
                    </option>
                    <option value={DateTime.fromObject({
                        hour: 19,
                        minute: 0o0
                    }, {zone: dt.zoneName})}>{DateTime.fromObject({
                        hour: 19,
                        minute: 0o0
                    }, {zone: dt.zoneName}).toFormat('T')}(из A в B)
                    </option>
                    <option value={DateTime.fromObject({
                        hour: 19,
                        minute: 15
                    }, {zone: dt.zoneName})}>{DateTime.fromObject({
                        hour: 19,
                        minute: 15
                    }, {zone: dt.zoneName}).toFormat('T')}(из A в B)
                    </option>
                    <option value={DateTime.fromObject({
                        hour: 21,
                        minute: 0o0
                    }, {zone: dt.zoneName})}>{DateTime.fromObject({
                        hour: 21,
                        minute: 0o0
                    }, {zone: dt.zoneName}).toFormat('T')}(из A в B)
                    </option>
                </select>
            </>
        }
    }

    return (
        <div className={'select'}>
            <div className={'select first_select'}>
                <label htmlFor={'route'}>Выберите направление</label>
                <select name="route" id="route" onChange={(evt) => {
                    let secondSelect = document.getElementById('time');
                    if (secondSelect !== null) {
                        secondSelect.value = 'default';
                        setInputValue('')
                    }
                    setIsClicked(false)
                    setFirstSelect(false)
                    setFirstSelect(true);
                    setFromAtoBAndBack(false);
                    setSecondSelect(false);
                    setRoute(evt.target.value);
                }} defaultValue={'default'}>
                    <option value={'default'} style={{display: 'none'}}></option>
                    <option value="из A в B">из A в B</option>
                    <option value="из B в A">из B в A</option>
                    <option value="из A в B и обратно в А">из A в B и обратно в А</option>
                </select>
            </div>

            <div className={'select second_select'}>
                {
                    firstSelect ? whatIsRoute() : ''
                }
            </div>
            <div className={'select third_select'}>
                {
                    fromAtoBAndBack ? <>
                        <label>
                            Выберите время обратного пути
                        </label>
                        <select id={'secondSelect'} defaultValue={'default'} onChange={() => setSecondSelect(true)}>
                            <option value={'default'} style={{display: 'none'}}></option>
                            {minTravelBack <= Number(DateTime.fromObject({hour: 18, minute: 30}).ts) ?
                                <option value={DateTime.fromObject({
                                    hour: 18,
                                    minute: 30
                                }, {zone: dt.zoneName})}>{DateTime.fromObject({
                                    hour: 18,
                                    minute: 30
                                }, {zone: dt.zoneName}).toFormat('T')}(из В в А)</option> : ''}
                            {minTravelBack <= Number(DateTime.fromObject({hour: 18, minute: 45}).ts) ?
                                <option value={DateTime.fromObject({
                                    hour: 18,
                                    minute: 45
                                }, {zone: dt.zoneName})}>{DateTime.fromObject({
                                    hour: 18,
                                    minute: 45
                                }, {zone: dt.zoneName}).toFormat('T')}(из В в А)</option> : ''}
                            {minTravelBack <= Number(DateTime.fromObject({hour: 19, minute: 0o0}).ts) ?
                                <option value={DateTime.fromObject({
                                    hour: 19,
                                    minute: 0o0
                                }, {zone: dt.zoneName})}>{DateTime.fromObject({
                                    hour: 19,
                                    minute: 0o0
                                }, {zone: dt.zoneName}).toFormat('T')}(из В в А)</option> : ''}
                            {minTravelBack <= Number(DateTime.fromObject({hour: 19, minute: 15}).ts) ?
                                <option value={DateTime.fromObject({
                                    hour: 19,
                                    minute: 15
                                }, {zone: dt.zoneName})}>{DateTime.fromObject({
                                    hour: 19,
                                    minute: 15
                                }, {zone: dt.zoneName}).toFormat('T')}(из В в А)</option> : ''}
                            {minTravelBack <= Number(DateTime.fromObject({hour: 19, minute: 35}).ts) ?
                                <option value={DateTime.fromObject({
                                    hour: 19,
                                    minute: 35
                                }, {zone: dt.zoneName})}>{DateTime.fromObject({
                                    hour: 19,
                                    minute: 35
                                }, {zone: dt.zoneName}).toFormat('T')}(из В в А)</option> : ''}
                            {minTravelBack <= Number(DateTime.fromObject({hour: 21, minute: 50}).ts) ?
                                <option value={DateTime.fromObject({
                                    hour: 21,
                                    minute: 50
                                }, {zone: dt.zoneName})}>{DateTime.fromObject({
                                    hour: 21,
                                    minute: 50
                                }, {zone: dt.zoneName}).toFormat('T')}(из В в А)</option> : ''}
                            {minTravelBack <= Number(DateTime.fromObject({hour: 21, minute: 55}).ts) ?
                                <option value={DateTime.fromObject({
                                    hour: 21,
                                    minute: 55
                                }, {zone: dt.zoneName})}>{DateTime.fromObject({
                                    hour: 21,
                                    minute: 55
                                }, {zone: dt.zoneName}).toFormat('T')}(из В в А)</option> : ''}
                        </select>
                    </> : ''
                }
            </div>
            <div className={'select fourth_select'}>
                {
                    secondSelect ? <>
                        <label htmlFor="num">Количество билетов</label>
                        <input id="num" type={'number'} value={inputValue} onChange={handleChange}/>
                    </> : ''
                }
            </div>
            <div className={'select fifth_select'}>
                {inputValue !== '' ? <button onClick={() => {
                    setIsClicked(true);
                }}>Посчитать</button> : ''}
            </div>
            {
                isClicked ? <div className={'theEnd'}>
                    {
                        <p>{`Вы выбрали ${inputValue} билет${whatAboutEnding()} по маршруту из ${route} стоимостью ${calc() * +inputValue}р.
                      Это путешествие займет у вас 50 минут. 
                      Теплоход отправляется в ${DateTime.fromMillis(timeToGo).toFormat('T')}, а прибудет в ${DateTime.fromMillis(timeToGo + 3000000).toFormat('T')}.`}</p>}
                </div> : ''
            }
        </div>
    );
};

export default Js;
