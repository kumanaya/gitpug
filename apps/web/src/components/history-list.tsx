import React from "react";
import { TiPinOutline } from "react-icons/ti";
import { CiClock2 } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { FaRegTrashCan } from "react-icons/fa6";

import { deleteFromHistoryByIndex } from "../redux/historySlice";

interface HistoryItem {
  username: string;
  status: string;
  public_repos: number;
  last_search: string;
}

interface HistoryItemProps {
  item: HistoryItem;
  index: number;
}

const DeleteButton: React.FC<{ onClick: () => void }> = ({ onClick }) => (
  <FaRegTrashCan
    className="self-center cursor-pointer"
    color="red"
    onClick={onClick}
  />
);

const HistoryItemComponent: React.FC<HistoryItemProps> = ({ item, index }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteFromHistoryByIndex(index));
  };

  return (
    <div className="rounded bg-customcardbg h-16 flex items-center justify-between p-4 text-sm text-white mb-4">
      <div className="flex items-center">
        <div className="flex flex-col">
          <span>{item.username}</span>
        </div>
      </div>
      <div>
        <span className={item.status === "Success" ? "text-green-300" : "text-red-300"}>
          {item.status}
        </span>
      </div>
      <div className="flex gap-1">
        <TiPinOutline className="self-center" />
        <span className="text-bold">{item.public_repos}</span>
      </div>
      <div className="flex gap-1">
        <CiClock2 className="self-center" />
        <span>{item.last_search}</span>
      </div>
      <div>
        <DeleteButton onClick={handleDelete} />
      </div>
    </div>
  );
};

interface HistoryListProps {
  history: HistoryItem[];
}

const HistoryList: React.FC<HistoryListProps> = ({ history }) => (
  <>
    {history.map((item, index) => (
      <HistoryItemComponent key={index} item={item} index={index} />
    ))}
  </>
);

export default HistoryList;
