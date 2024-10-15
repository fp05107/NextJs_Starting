import React from "react";

export default function ({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <div className="border-b text-center p-1" >
                20% off for next few days
            </div>
            {children}
        </div>
    )
}