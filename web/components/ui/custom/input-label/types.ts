export type DisplayInputType = React.ComponentProps<'div'>;
export type DisplayInputLabelType = React.ComponentProps<'div'> & {
    label: string | null
};
export type DisplayInputContentType = React.ComponentProps<'h1'> & React.ComponentProps<'a'> & {
    mode: string,
    type: string,
    options?: {
        url?: string,
    },
};