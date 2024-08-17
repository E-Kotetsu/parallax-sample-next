declare module 'luxy.js' {
    interface LuxyOptions {
        wrapperSpeed?: number;
        wrapper?: string;
        targets?: string;
        targetSpeed?: number;
        targetPercentage?: number;
        verticalScroll?: boolean;
    }

    function init(options?: LuxyOptions): void;
    function cancel(): void;
}
