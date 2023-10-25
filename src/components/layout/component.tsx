import React, { useState } from "react";
import AddWi from "../AddWi";

export enum TypeW {
  calender,
  Weather,
  news,
  soprts,
  add,
}

const Layout = () => {
  const [listW, setListW] = useState([
    {
      id: 1,
      type: TypeW.add,
    },
    {
      id: 2,
      type: TypeW.add,
    },
    {
      id: 3,
      type: TypeW.add,
    },
    {
      id: 4,
      type: TypeW.add,
    },
    {
      id: 5,
      type: TypeW.add,
    },
    {
      id: 6,
      type: TypeW.add,
    },
  ]);
  const [open, setOpen] = useState<number>();

  const handleAddW = (id: number) => {
    setOpen(id);
  };
  const openCahngeWrapper = () => {
    setOpen(0);
  };

  const SubmitW = (id: number, type: TypeW) => {
    setOpen(0);
    setListW((prev) => {
      const newList = prev.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            type,
          };
        }
        return { ...item };
      });
      return newList;
    });
  };

  console.log(listW);
  
  return (
    <main className="w-screen h-full overflow-y-scroll pb-2 no-scrollbar  ">
      <div className="container mx-auto">
        <div className="container mx-auto">
          <div className="grid grid-cols-5 grid-rows-4 gap-10">
            <AddWi
              submit={SubmitW}
              openCahngeWrapper={openCahngeWrapper}
              open={open}
            />
            {listW.map((item) => {
              switch (item.type) {
                case TypeW.add:
                  return (
                    <div
                      onClick={() => handleAddW(item.id)}
                      key={item.id}
                      className="bg-white flex justify-center items-center border rounded-xl p-10 hover:cursor-pointer hover:border-yellow-300 "
                    >
                      <svg
                        className="hover:fill-yellow-500"
                        width="30"
                        height="30"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8 2.75C8 2.47386 7.77614 2.25 7.5 2.25C7.22386 2.25 7 2.47386 7 2.75V7H2.75C2.47386 7 2.25 7.22386 2.25 7.5C2.25 7.77614 2.47386 8 2.75 8H7V12.25C7 12.5261 7.22386 12.75 7.5 12.75C7.77614 12.75 8 12.5261 8 12.25V8H12.25C12.5261 8 12.75 7.77614 12.75 7.5C12.75 7.22386 12.5261 7 12.25 7H8V2.75Z"
                          fill="currentColor"
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  );
                case TypeW.Weather:
                  return (
                    <div className="bg-white flex justify-center items-center border rounded-xl p-10 hover:cursor-pointer hover:border-yellow-300 ">
                      Wather
                    </div>
                  );
                case TypeW.calender:
                  return (
                    <div className="bg-white flex justify-center items-center border rounded-xl p-10 hover:cursor-pointer hover:border-yellow-300 ">
                      calender
                    </div>
                  );
                case TypeW.news:
                  return (
                    <div className="bg-white flex justify-center items-center border rounded-xl p-10 hover:cursor-pointer hover:border-yellow-300 ">
                      news
                    </div>
                  );
                case TypeW.soprts:
                  return (
                    <div className="bg-white flex justify-center items-center border rounded-xl p-10 hover:cursor-pointer hover:border-yellow-300 ">
                      soprts
                    </div>
                  );
              }
            })}
          </div>
        </div>
      </div>
    </main>
  );
};

export { Layout };
