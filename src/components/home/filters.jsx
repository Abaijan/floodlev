import './filters.css'
import arrow from '../../assets/icons/arrowbuttom.svg'
const filters = () => {
    return (
        <div className='filters' >
            <div className="container">
                <div className="inner">
                    <h1>Выберите фильтры ниже :</h1>
                    <div className="filters-box">
                        <div className="filter">
                           <button>Выберите период<input max={new Date().toISOString().split('T')[0]} type='date'  placeholder='Выберите период' /> </button> 
                        </div>
                        <div className="filter">
                            <select name="region" id="">
                                <option value="" disabled selected hidden>Выберите область    <img src={arrow} alt="arrow" /> </option>
                                <option value="">Чуй</option>
                                <option value="">Ош</option>
                                <option value="">Талас</option>
                                <option value="">Нарын</option>
                                <option value="">Баткен</option>
                                <option value="">Иссык-Куль</option>
                                <option value="">Манас</option>
                                <option value="">Бишкек</option>
                            </select>
                        </div>
                        <div className="filter">
                            <select name="city/district" id="">
                                <option value="" disabled selected hidden>Выберите город/район    <img src={arrow} alt="arrow" /> </option>
                                <option value="">Октябрьский</option>
                                <option value="">Свердловский</option>
                                <option value="">Ленинский</option>
                                <option value="">Первомайский</option>
                            </select>
                        </div>
                        <div className="filter">
                            <select name="village" id="">
                                <option value="" disabled selected hidden>Выберите село   <img src={arrow} alt="arrow" /> </option>
                                <option value="">Орто-Сай </option>
                                <option value="">Кёк-Джар</option>
                                <option value="">Ак-Башат</option>
                                <option value="">Кара-Жыгач</option>
                            </select>
                        </div>
                        <div className="filter">
                            <select name="water" id="">
                                <option value="" disabled selected hidden>Выберите водоем    <img src={arrow} alt="arrow" /> </option>
                                <option value="">Токтогул</option>
                                <option value="">Ала-Буке</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default filters