import { createRoot } from 'react-dom/client';
import React, {useState} from 'react';

const root = createRoot(document.getElementById('root'));

// declare global {
//     interface Window {
//         electronAPI: {
//             sendDragWindow: (isDragging: boolean) => void;
//         };
//     }
// }

const App: React.FC = () => {

    const [val, setVal] = useState(0)

    return (
        <div>
            {val}
            <button onClick={() => setVal(val + 1)}>
                Sup
            </button>
        </div>
    )
};

// Function to check if an element has event listeners
// function hasMouseEventListener(element: HTMLElement) {
//     // You can use devtools `getEventListeners` function if available (only in devtools environment)
//     // const listeners = getEventListeners(element);
//
//     // As an alternative, use a custom solution if you track events yourself
//     // Assuming you track listeners in a `listenerRegistry` map
//     return element && typeof element.onmouseenter === "function";
// }
//
// // Listen to mouse movement
// window.addEventListener('mousemove', (event) => {
//     const elements = document.elementsFromPoint(event.clientX, event.clientY);
//
//     // Check if any of the elements under the mouse have event listeners
//     const hasListener = elements.some((el) => hasMouseEventListener(el));
//
//     // Send the result to the main process
//     window.electronAPI.sendDragWindow('update-ignore-mouse-events', !hasListener);
// });

root.render(<App />);
