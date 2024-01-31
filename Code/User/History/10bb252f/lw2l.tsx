import React, { useState } from "react";


const Autocomplete = ({suggestions, setValue, value}) => {
  const [active, setActive] = useState(0);
  const [filtered, setFiltered] = useState([]);
  const [isShow, setIsShow] = useState(false);

  const onChange = e => {
    const input = e.currentTarget.value;
    const newFilteredSuggestions = suggestions.filter(
      suggestion =>
        suggestion.name.toLowerCase().indexOf(input.toLowerCase()) > -1
    );
    setActive(0);
    setFiltered(newFilteredSuggestions);
    setIsShow(true);
  };
const onClick = e => {
    setActive(0);
    setFiltered([]);
    setIsShow(false);
    setValue(e.target.value)
  };
const onKeyDown = e => {
    if (e.keyCode === 13) { // enter key
      setActive(0);
      setIsShow(false);
    }
    else if (e.keyCode === 38) { // up arrow
      return (active === 0) ? null : setActive(active - 1);
    }
    else if (e.keyCode === 40) { // down arrow
      return (active - 1 === filtered.length) ? null : setActive(active + 1);
    }
  };
const renderAutocomplete = () => {
    if (isShow) {
      if (filtered.length) {
        return (
          <ul className="autocomplete  border border-solid border-gray-400 border-t-0 list-none my-0 pl-0 max-h-36 overflow-y-auto w-80">
            {filtered.map((suggestion, index) => {
              let className;
              if (index === active) {
                className = "active";
              }
              return (
                <li className="${className} p-2 hover:bg-gray-600 hover:cursor-pointer hover:font-bold" key={`${suggestion}-${index}`} >
                  {suggestion.name}
                </li>
              );
            })}
          </ul>
        );
      } else {
        return (
          <div className="no-autocomplete p-2">
            <em>Not found</em>
          </div>
        );
      }
    }
    return <></>;
  }
return (
    <>
      <input className="border border-solid border-gray-400 p-2"
        type="text"
        onChange={onChange}
        onKeyDown={onKeyDown}
        value={value}
      />
      {renderAutocomplete()}
    </>
  );
}
export default Autocomplete;