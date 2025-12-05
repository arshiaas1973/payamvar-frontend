export type MenuList = {
    [x: number]: MenuItem;
};
export type MenuItem = {
    icon: string;
    value: string;
    disabled?: boolean;
    label?: string;
};