export {};

declare global {
    interface Window {
        mouseAPI: {
            mouseMove: (data: { ignore: boolean }) => void;
        };
    }
}
