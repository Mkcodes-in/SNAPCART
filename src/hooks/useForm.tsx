import { FormDataContext } from "@/context/FormDataContext";
import { useContext } from "react";

export const useFrom = () => {
    const context = useContext(FormDataContext);
    if (!context) {
        throw new Error("Error: Form context not available");
    };
    return context;
}

