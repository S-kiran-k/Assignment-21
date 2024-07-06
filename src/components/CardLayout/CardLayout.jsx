import { useState } from "react";
import { mockData } from "../../../public/API/Api.jsx";
import ProductCard from "../ProductCard/ProductCard";

function CardLayout() {
  const [filteredData, setFilteredData] = useState(mockData);
  const [searchValue, setSearchValue] = useState();
  return (
    <>
      {/**using input search filter */}
      <div className="flex gap-5 py-5 items-center">
        <div>
          <div>
            <input
              className="bg-blue-400 rounded mx-2"
              type="text"
              onChange={(e) => {
                if (e.target.value) {
                  const filterdata = filteredData.filter((e2) => {
                    return e2.name.toLowerCase().includes(e.target.value);
                  });
                  setFilteredData(filterdata);
                } else {
                  setFilteredData(mockData);
                }
              }}
            />
          </div>
        </div>

        {/**using search button filter */}
        <div>
          <div>
            <input
              className="bg-green-400 rounded"
              type="text"
              onChange={(e) => {
                setSearchValue(e.target.value);
              }}
            />
            <button
              className="bg-gray-400 rounded-lg px-4 py-1"
              onClick={() => {
                if (searchValue) {
                  const filterdata = filteredData.filter((e1) => {
                    return e1.name
                      .toLowerCase()
                      .includes(searchValue.toLowerCase());
                  });
                  setFilteredData(filterdata);
                } else {
                  setFilteredData(mockData);
                }
              }}
            >
              search
            </button>
          </div>
        </div>
      </div>

      <div className="2xl:container">
        <div className="mx-auto w-[80%] grid grid-cols-1 md:grid-cols-4">
          {filteredData.map((data, i) => {
            return <ProductCard key={i} data={data} />;
          })}
        </div>
      </div>
    </>
  );
}

export default CardLayout;
