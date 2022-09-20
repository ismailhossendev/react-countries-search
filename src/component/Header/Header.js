/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import Search from '../Search/Search';

const Header = () => {
  const [test,setTest] = useState('bangladesh')
const getData = (valus) =>{
  const output = valus.target.value 
    setTest(output)
}
    return (
        <div>
            <div className="navbar bg-base-100">
            <div className="flex-1">
              <a className="btn btn-ghost normal-case text-xl">Country App </a>
            </div>
            <div className="flex-none gap-2">
              <div className="form-control">
                <input onChange={getData} type="text" placeholder="Search" className="input input-bordered" />
              </div>
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src="https://placeimg.com/80/80/people" />
                  </div>
                </label>
              </div>
            </div>
          </div>
          <div className="my-3">
            <Search name={test}></Search>
          </div>
</div>
    );
};

export default Header;