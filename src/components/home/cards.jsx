import './cards.css';

const cards = () => {
    return (
        <div className='cards'>
            <div className="container">
                <div className="cards-box">
                    <div className="card">
                        <h5>Количество выходов из русла</h5> <p>(за последний месяц) </p>
                        <div className="base-info">
                            <div className="columns">
                                <h3 className="title">10</h3>
                                <hr />
                                <p className="month">Декабрь</p>
                            </div>
                            <div className="columns">
                                <h3 className="title">10</h3>
                                <hr />
                                <p className="month">Декабрь</p>
                            </div>
                            <div className="columns last">
                                <h3 className="title">10</h3>
                                <hr />
                                <p className="month">Декабрь</p>
                            </div>
                        </div>
                    </div>
                    <div className="card max">
                            <h5>Максимум на сегодня :</h5>
                            <h1>85</h1><h5>Куб.м</h5>
                    </div>
                    <div className="card weather">
                            <h5>Ближайшие осадки :</h5>
                            <h1>25</h1><h5>февраля</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default cards