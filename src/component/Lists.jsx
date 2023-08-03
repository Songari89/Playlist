import React, { useEffect, useState } from "react";

export default function Lists() {
  const [lists, setList] = useState([]);
  const [checked, setChecked] = useState(false);
  const handleCheck = () => setChecked((prev) => !prev);
  useEffect(() => {
    fetch(`data/${checked ? "custom" : "data"}.json`)
      .then((res) => res.json())
      .then((data) => {
        setList(data);
      });
  }, [checked]);
  return (
    <div>
      <div className="listcontainer">
        <ul className="list">
          {lists.map((list) => (
            <li key={list.id}>
              <div className="listwrap">
                <h3>{list.name}</h3>
                <p>{list.size}</p>
                <p>{list.price}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="checkbox">
        <input
          id="checkbox"
          type="checkbox"
          value={checked}
          onChange={handleCheck}
        ></input>
        {checked ? (
          <label id="check">메뉴로 돌아가기</label>
        ) : (
          <label name="checkbox">추가할 수 있는 커스텀을 확인하세요!</label>
        )}
      </div>
    </div>
  );
}
