import { useState } from "react";
import { mockData } from "../../../public/API/Api.jsx";
import ProductCard from "../ProductCard/ProductCard";

function CardLayout() {
  const [filteredData, setFilteredData] = useState(mockData);
  return (
    <>
      {/* <div>
        <div>
          <input
            className="bg-blue-400"
            type="text"
            onChange={(e) => {
              if (e.target.value) {
                const filterdata = filteredData.filter((e2) => {
                  return e2.name.toLowerCase().includes(e.target.value);
                });
                setFilteredData(filterdata);
              } 
              else {
                setFilteredData(mockData);
              }
            }}
          />
        </div>
      </div> */}

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
