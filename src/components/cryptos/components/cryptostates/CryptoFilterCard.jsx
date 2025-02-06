import React, { useState, useEffect } from "react";
import useCryptoHistory from "../../hooks/useCryptoHistory";
import useCryptomarkets from "../../hooks/useCryptomarket";
import LineBarChart from "../graphs/LineBarChart";

const CryptoFilterCard = () => {
  const timePeriods = ["3h", "34h", "7d", "30d", "3m", "1y", "3y", "5y"];
  const [selectTimePeriod, setSelectTimePeriod] = useState("1y");
  const [activeTabKey, setActiveTabKey] = useState("");

  // Fetching the coin data from API
  const { coins, isError, isLoading } = useCryptomarkets();

  // Filtering the coins
  const filteredCoins = coins.filter((coin) =>
    ["BTC", "XRP", "USDT", "USDE", "LTC", "AAVE"].includes(coin.symbol)
  );

  // Fetching history data for selected coin
  const { history } = useCryptoHistory(activeTabKey, selectTimePeriod);

  // Select the first available coin on mount
  useEffect(() => {
    if (coins.length > 0) {
      setActiveTabKey(coins[0].uuid);
    }
  }, [coins]);

  // Handlers
  const handleTabChange = (key) => setActiveTabKey(key);
  const handleTimePeriodChange = (e) => setSelectTimePeriod(e.target.value);

  const selectedCoin = filteredCoins.find((coin) => coin.uuid === activeTabKey);

  return (
    <div className="container mt-3 mb-5">
      <div className="card">
        {/* Loading Spinner */}
        {isLoading ? (
          <div className="card text-center p-4">
            <div className="spinner-border" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        ) : (
          <>
            {/* Header */}
            <div className="card-header d-flex justify-content-between align-items-center">
              {selectedCoin ? (
                <div>
                  <img
                    src={selectedCoin.iconUrl}
                    alt={selectedCoin.symbol}
                    className="mx-2"
                    style={{ width: "30px", height: "30px", borderRadius: "50%" }}
                  />
                  <span>{selectedCoin.symbol}</span>
                </div>
              ) : (
                <h3>Select a coin</h3>
              )}

              {/* Time Period Dropdown */}
              <select
                className="form-select w-auto"
                value={selectTimePeriod}
                onChange={handleTimePeriodChange}
              >
                {timePeriods.map((period) => (
                  <option value={period} key={period}>
                    {period}
                  </option>
                ))}
              </select>
            </div>

            {/* Tabs for Coins */}
            <ul className="nav nav-tabs">
              {filteredCoins.map((coin) => (
                <li className="nav-item" key={coin.uuid}>
                  <button
                    className={`nav-link ${activeTabKey === coin.uuid ? "active" : ""}`}
                    onClick={() => handleTabChange(coin.uuid)}
                  >
                    {coin.symbol}
                  </button>
                </li>
              ))}
            </ul>

            {/* Graph Section */}
            <div className="card-body">
              <LineBarChart data={history} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CryptoFilterCard;
