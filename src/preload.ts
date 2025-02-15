import {contextBridge, ipcRenderer} from 'electron';

contextBridge.exposeInMainWorld('mouseAPI', {
    // mouseMove sends a message to main. The renderer can call window.mouseAPI.mouseMove({ ignore: true/false })
    mouseMove: (data: any) => ipcRenderer.send("mouse-move", data)
});
