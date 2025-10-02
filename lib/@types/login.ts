type DataType = {
    username: string;
    password: string;
} & ExtraDataType;

type ExtraDataType = {
    firstName: string;
    lastName: string;
    email: string;
};

export type { DataType,ExtraDataType };