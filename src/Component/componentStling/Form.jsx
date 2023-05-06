import { useState } from 'react';

const Form = () => {
  const [Name, setName] = useState('');
  const [Author, setAuthor] = useState('');
  const [tasks, setTasks] = useState([]);
  const [select, setSelect] = useState('fiction');

  function Add(e) {
    e.preventDefault();
    if (Name && Author && select) {
      tasks.push({ name: Name, author: Author, Select: select });
      setName('');
      setAuthor('');
      setTasks([...tasks]);
    }
  }

  const removebtn = (index) => {
    const temp = [];
    for (let i = 0; i < tasks.length; i += 1) {
      if (i !== index) {
        temp.push(tasks[i]);
      }
    }
    setTasks([...temp]);
  };

  const selectvalue = (e) => {
    setSelect(e.target.value);
  };

  return (
    <div className="container">
      <div className="valuesContainer">
        {tasks.map((value, index) => (
          <div className="blocks" key="">
            <div className="input-div">
              <p className="categories-value">{value.Select}</p>
              <div className="book-title-div">
                <h3 className="book">{value.name}</h3>
                <p className="title">{value.author}</p>
              </div>
              <div className="btns-div">
                <button className="btn" type="button">Comments</button>
                <button onClick={() => removebtn(index)} className="remove-btn btn" type="button">Remove</button>
                <button className="btn" type="button">Edit</button>
              </div>
            </div>
            <div className="chapterItems">
              <div>
                <svg>
                  <circle cx="70" cy="70" r="60" strokeWidth="10" fill="transparent" stroke="#ccc" />
                  <circle cx="70" cy="70" r="60" strokeWidth="10" fill="transparent" stroke="#0290ff" strokeDasharray="440" strokeDashoffset="180" strokeLinecap="round" className="progress-circle">
                    <animate attributeName="stroke-dashoffset" from="440" to="180" dur="0.5s" />
                  </circle>
                  <text fontSize="24" x="170" y="60" textAnchor="middle" stroke="black" strokeWidth="1px" dy=".3em">70%</text>
                  <text className="a" x="195" y="60%" textAnchor="middle" fill="rgba(0, 0, 0, 0.338)" strokeWidth="1px" dy=".3em" style={{ fontSize: '16px' }}>Completed</text>
                </svg>

              </div>
              <div>
                <p>CURRENT CHAPTER</p>
                <h6>CHAPTER3:&ldquo;A Lesson Learned&rdquo;</h6>
                <button className="updated-prograss-btn" type="button">Updated progress</button>
              </div>
            </div>
          </div>

        ))}
      </div>

      <div className="bottom-container">
        <div className="form-div">
          <h1>Add Book</h1>
          <div className="divforflex">

            <form>
              <input type="text" value={Name} onChange={(e) => { setName(e.target.value); }} placeholder="books..." />
              <input type="text" value={Author} onChange={(e) => { setAuthor(e.target.value); }} placeholder="Title..." />
            </form>
            <label htmlFor="catagories">
              <select onInput={selectvalue} onChange={selectvalue} id="option-categories">
                <option value="" disabled>Category</option>
                <option value="fiction">Fiction</option>
                <option value="nonfiction">Nonficton</option>
              </select>
            </label>
            <button className="Add-btn" type="button" onClick={Add}>Add</button>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Form;
