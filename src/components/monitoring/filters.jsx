import './filters.css'

const Filters = () => {
  return (
    <section className="filters">
      <div className="container">
        <div className="inner">
          <h1>Выберите фильтры ниже</h1>

          <div className="filters-box">

            <div className="filter">
              <label>Период</label>
              <input
                type="date"
                max={new Date().toISOString().split('T')[0]}
              />
            </div>

            <div className="filter">
              <label>Область</label>
              <select>
                <option value="" disabled selected>Выберите область</option>
                <option>Чуй</option>
                <option>Ош</option>
                <option>Талас</option>
                <option>Нарын</option>
                <option>Баткен</option>
                <option>Иссык-Куль</option>
                <option>Бишкек</option>
              </select>
            </div>

            <div className="filter">
              <label>Город / район</label>
              <select>
                <option value="" disabled selected>Выберите город</option>
                <option>Октябрьский</option>
                <option>Свердловский</option>
                <option>Ленинский</option>
                <option>Первомайский</option>
              </select>
            </div>

            <div className="filter">
              <label>Село</label>
              <select>
                <option value="" disabled selected>Выберите село</option>
                <option>Орто-Сай</option>
                <option>Кёк-Джар</option>
                <option>Ак-Башат</option>
                <option>Кара-Жыгач</option>
              </select>
            </div>

            <div className="filter">
              <label>Водоём</label>
              <select>
                <option value="" disabled selected>Выберите водоём</option>
                <option>Токтогул</option>
                <option>Ала-Буке</option>
              </select>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Filters
