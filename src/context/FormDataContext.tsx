import type { FormDataProps } from "@/types/orderType";
import React, { createContext, useState, type Dispatch, type SetStateAction } from "react";

type childrenProps = {
    children: React.ReactNode;
}

type FormDataContextProps = {
    form: FormDataProps;
    setForm: Dispatch<SetStateAction<FormDataProps>>;
}
export const FormDataContext = createContext<FormDataContextProps | null>(null);


export const FormDataProvider = ({ children }: childrenProps) => {
    const [form, setForm] = useState<FormDataProps>({
        id: "",
        name: "",
        phone: "",
        email: "",
        address: "",
        city: "",
        state: "",
        pincode: "",
        paymentMethod: "",
        date: Date.now()
    });
    return (
        <FormDataContext.Provider value={{ form, setForm }}>
            {children}
        </FormDataContext.Provider>
    )
}