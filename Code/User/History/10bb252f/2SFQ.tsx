import React, { useState } from 'react';

type AutoCompleteProps = {
  suggestions: { display: string; value: any };
  setValue: ;
};

const Autocomplete = ({ suggestions, setValue, value }) => {
  const [active, setActive] = useState(0);
  const [filtered, setFiltered] = useState([]);
  const [isShow, setIsShow] = useState(false);

  const onChange = (e) => {
    const input = e.currentTarget.value;
    const newFilteredSuggestions = suggestions.filter(
      (suggestion) =>
        suggestion.name.toLowerCase().indexOf(input.toLowerCase()) > -1
    );
    setActive(0);
    setFiltered(newFilteredSuggestions);
    setIsShow(true);
  };
  const onClick = (suggestion) => {
    setActive(0);
    setFiltered([]);
    setIsShow(false);
    setValue(suggestion);
  };
  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      // enter key
      setActive(0);
      setIsShow(false);
    } else if (e.keyCode === 38) {
      // up arrow
      return active === 0 ? null : setActive(active - 1);
    } else if (e.keyCode === 40) {
      // down arrow
      return active - 1 === filtered.length ? null : setActive(active + 1);
    }
  };
  const renderAutocomplete = () => {
    if (isShow) {
      if (filtered.length) {
        return (
          <ul className='autocomplete  my-0 max-h-36 w-80 list-none overflow-y-auto border border-t-0 border-solid border-gray-400 pl-0'>
            {filtered.map((suggestion, index) => {
              let className;
              if (index === active) {
                className = 'active';
              }
              return (
                <li
                  className='${className} p-2 hover:cursor-pointer hover:bg-gray-600 hover:font-bold'
                  key={`${suggestion}-${index}`}
                  onClick={() => {
                    onClick(suggestion);
                  }}
                >
                  {suggestion.name}
                </li>
              );
            })}
          </ul>
        );
      } else {
        return (
          <div className='no-autocomplete p-2'>
            <em>Not found</em>
          </div>
        );
      }
    }
    return <></>;
  };
  return (
    <>
      <input
        className='border border-solid border-gray-400 p-2'
        type='text'
        onChange={onChange}
        onKeyDown={onKeyDown}
        value={value?.name}
      />
      {renderAutocomplete()}
    </>
  );
};
export default Autocomplete;
