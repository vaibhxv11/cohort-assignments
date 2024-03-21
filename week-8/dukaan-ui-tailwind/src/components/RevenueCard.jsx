import React from "react";

export const RevenueCard=({
    title ,
    orderCount ,
    amount
})=>{

    return <div className="bg-white rounded shadow-md p-8">
        <div className="text-gray-700">
            {title}
              ?
        </div>

        <div className="flex justify-between pt-2 ">
            <div className="font-semibold text-2xl ">
                ₹{amount}
            </div>
            {orderCount ? <div className="flex text-blue-700 cursor-pointer underline font-medium">  
                {orderCount} orders {">"} </div>
           : null        }

        </div>
         
    </div>

}
