import { useState } from 'react';
import BookList from './BookList';

const Home = () => {
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
      <BookList tasks={tasks} removebtn={removebtn} />
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

export default Home;
