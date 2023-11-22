import React from "react";
import Logo from "../assets/images/logo.svg";
import HistoryList from "../components/history-list";
import { useSelector } from "react-redux";
import { getHistory } from "../redux/historySlice";

const Header: React.FC = () => {
  return (
    <div className="header bg-customheaderbg h-16 flex items-center justify-between p-4">
      <div className="flex items-center"></div>

      <div className="flex items-center">
        <img src={Logo} alt="Logo" className="w-8 h-8 rounded-full" />
      </div>

      <div>
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        ></svg>
      </div>
    </div>
  );
};

const HistoryPage: React.FC = () => {
  const values = useSelector(getHistory);

  return (
    <>
      <Header />
      <div className="bg-custombg min-h-screen">
        <div className="grid gap-4 p-4">
          <div>
            <div className="mb-4">
              <span className="text-white font-bold">History</span>
            </div>
            <HistoryList history={values.history} />
          </div>
        </div>
      </div>
    </>
  );
};

export default HistoryPage;
