import React, { useState, Dispatch, SetStateAction } from 'react';

type AutoCompleteProps<T> = {
  suggestions: { display: string; value: T }[];
  setValue: Dispatch<SetStateAction<T>>;
  value: { display: string; value: T };
};

export const AutoComplete = <T,>({
  suggestions,
  setValue,
  value
}: AutoCompleteProps<T>) => {
  const [active, setActive] = useState(0);
  const [filtered, setFiltered] = useState([]);
  const [isShow, setIsShow] = useState(false);

  const onChange = (e) => {
    const input = e.currentTarget.value;
    const newFilteredSuggestions = suggestions.filter(
      (suggestion) =>
        suggestion.display.toLowerCase().indexOf(input.toLowerCase()) > -1
    );
    setActive(0);
    setFiltered(newFilteredSuggestions);
    setIsShow(true);
  };
  const onClick = (suggestion) => {
    setActive(0);
    setFiltered([]);
    setIsShow(false);
    setValue(suggestion.value);
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
                  {suggestion.display}
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
        className='block w-full border border-solid border-gray-400 p-2'
        type='text'
        onChange={onChange}
        onKeyDown={onKeyDown}
        value={value?.display}
      />
      {renderAutocomplete()}
    </>
  );
};
