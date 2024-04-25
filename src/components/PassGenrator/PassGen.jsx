import React, { useCallback, useEffect, useRef, useState } from "react";

const PassGen = () => {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  let passRef = useRef(null);
  let btnContent = useRef(0)
  
  const copyToClipboard = useCallback(() => {
    passRef.current?.select()
    window.navigator.clipboard.writeText(password);
    let flag = 0;
    if(flag=0){
      btnContent.current.innerHTML = "Copy";
      flag = 1 ;
    }else{
      btnContent.current.innerHTML = "Copied";
      flag = 0
    }
  },[password])
  const passwordGenrator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnpqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#%^&()?>";
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
      setPassword(pass);
    }
  }, [length, numberAllowed, charAllowed, setPassword]);

  const getpass = () => {
    passwordGenrator();
  }
  // useEffect(() => {
  //   passwordGenrator();
  // }, [length, numberAllowed, charAllowed]);
  return (
    <>
      <h1 className=" mt-5 text-4xl text-center text-orange-500 font-bold">
        Password Genrator
      </h1>
      <div className="mt-5 w-[500px] mx-auto py-4 px-4 bg-slate-900 border-1 border-slate-500">
        <div className="input flex">
          <input
            type="text"
            className="w-full px-2 text-orange-600 rounded-sm font-medium"
            placeholder="Password"
            value={password}
            ref={passRef}
            readOnly
          />
          <button 
          ref={btnContent}
          onClick={copyToClipboard}
          className="bg-purple-500 py-1 px-4 ml-1 rounded-sm text-white capitalize cursor-pointer hover:bg-purple-800">
            copy
          </button>
        </div>
        <div className="bottom mt-4 flex gap-x-3">
          <input
            type="range"
            min={8}
            max={20}
            className="cursor-pointer"
            value={length}
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
          <label className="text-orange-500 font-medium">length : {length}</label>
          <div className="checlbox flex gap-x-1">
            <input
              type="checkbox"
              name="char"
              id="charallow"
              className="cursor-pointer"
              value={charAllowed}
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="charallow" className="text-purple-100">
              charallowed
            </label>
            <input
              type="checkbox"
              name="num"
              id="numallow"
              className="cursor-pointer"
              value={numberAllowed}
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numallow" className="text-purple-100">
              Numberallowed
            </label>
          </div>
        </div>
      </div>
      <div className="text-center mt-4">
        <button 
        onClick={getpass}
        className="text-white bg-red-500 py-2 px-5 rounded-sm hover:bg-red-800">Genrate Password</button>
      </div>
    </>
  );
};

export default PassGen;
