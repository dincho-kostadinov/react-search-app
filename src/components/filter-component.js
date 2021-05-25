/** @jsxRuntime classic /
/* @jsx jsx */
import { useState, useEffect } from 'react';
import { jsx, css } from '@emotion/react'

const styleItem = css`
display: flex;
font-size: 18px;
margin-top: 5px;
justify-content: center;
padding-inline-start: 0px;
`

const styleSearch = css`
align-items: center;
margin-top: 20px;
justify-items: center;
padding: 6px;
border-radius: 5px;
border-color: lightgray;
font-size: 18px;
`
function FilterComponent(props) {
  const [allData, setAllData] = useState([]);
  const [filteredData, setFilteredData] = useState(allData);

  useEffect(() => {
    setAllData(props.data);
    setFilteredData(props.data);
  }, []);

  const handleSearch = (event) => {
    let value = event.target.value.toLowerCase();
    let result = [];
    result = allData.filter((data) => {
      return data.toLowerCase().includes(value);
    });
    setFilteredData(result);
  }
  return (
    <div className="FilterComponent">
      <input css={styleSearch} type="text" placeholder="Search" onChange={(event) => handleSearch(event)}></input>
      <ul >
        {filteredData.map(e => {
          return <li key={e} css={styleItem}>{e}</li>
        })}
      </ul>
    </div>
  );
}

export default FilterComponent;
