import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
  Avatar,
  Badge,
} from "@heroui/react";
import ChatIcon from "../ChatIcon/ChatIcon";

const PopOverNew = () => {
  return (
    <Popover placement="top">
      <PopoverTrigger>
        <Button className="fixed bottom-0 rounded-tl-lg rounded-tr-3xl rounded-b-none -right-[100px] transform -translate-x-1/2 z-50 bg-[#002039] text-white flex gap-4 px-10">
          <p className="relative">
            {" "}
            Chat with us, we`&apos;re online!
            <div className="w-16 h-16 rounded-full bg-green-500 absolute -top-[42px] -right-[125px]" />
          </p>
          <ChatIcon />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0 rounded-b-none">
        <div className="flex gap-5 bg-[#002039] text-white py-3 pe-24 px-4 rounded-tl-lg rounded-tr-3xl rounded-b-none">
          <div className="">
            <Badge
              color="success"
              className="w-2 h-2 border-none top-1 right-1"
            >
              <Avatar
                showFallback
                src="https://images.unsplash.com/broken"
                className="bg-[#1F3B51] text-[#475E70]"
              />
            </Badge>
          </div>
          <div className="flex flex-col">
            <div className=" w-full text-small font-bold ">
              Sleeping Pills UK
            </div>
            <p className="text-gray-400">Customer Support</p>
          </div>
        </div>
        <div>mahim</div>
      </PopoverContent>
    </Popover>
  );
};

export default PopOverNew;
