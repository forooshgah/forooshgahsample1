import React, { useRef } from "react";
import { useHistory } from "react-router-dom";
//import clsx from "clsx";
//import SearchResult from "./SearchResult";


const SearchInput = () => {

  const input = useRef();
  const history = useHistory();
  const submitHandler = (event) => {
    event.preventDefault();
    let text = input.current.value;
    // if(text.length > 0){
    //   history.push("/explore/"+text)
    // }
    history.push("/explore/"+text)

  }

  return (
    <div
      id="kt_quick_search_inline"
      className="kt-quick-search kt-quick-search--inline kt-quick-search--result-compact"
    >
      <form className="kt-quick-search__form" onSubmit={submitHandler}>
        <div
          className="input-group"
        >


          <input
            ref={input}
            type="text"
            autoFocus={true}
            placeholder="Search..."
            // value={searchValue}
            // onChange={this.handleSearchChange}
            className="form-control kt-quick-search__input"
          />

          <div className="input-group-append">
            <button className="input-group-btn">
              <i className="fa fa-search fa-lg" />
            </button>
          </div>
        </div>
      </form>

    </div>
  );

}


export default SearchInput
