import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useState } from "react";

enum TypeW {
    calender,
    Weather,
    news,
    soprts,
    add,
  }

const list = [
  {
    id: 2,
    type: TypeW.Weather,
  },
  {
    id: 3,
    type: TypeW.calender,
  },
  {
    id: 4,
    type: TypeW.news,
  },
  {
    id: 5,
    type: TypeW.soprts,
  },
];

const AddWi = ({ open, openCahngeWrapper, submit }) => {
  return (
    <Sheet open={open} onOpenChange={openCahngeWrapper}>
      {/* <SheetTrigger>Open</SheetTrigger> */}
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Are you sure absolutely sure?</SheetTitle>
          <SheetDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </SheetDescription>
        </SheetHeader>
        {list.map((item) => (
          <div
            onClick={() => {
              submit(open,item.type);
            }}
            key={item.id}
            className="bg-white flex justify-center items-center border rounded-xl p-10 hover:cursor-pointer hover:border-yellow-300 "
          >
            {item.type}
          </div>
        ))}
      </SheetContent>
    </Sheet>
  );
};

export default AddWi;
