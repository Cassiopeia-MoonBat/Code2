declare namespace Script {
    import ƒ = FudgeCore;
    class CustomComponentScript extends ƒ.ComponentScript {
        static readonly iSubclass: number;
        message: string;
        raymond: number;
        mouse: MouseEvent;
        constructor();
        hndEvent: (_event: Event) => void;
        update: () => void;
        rotater: (_mouseX: number) => void;
        move: (_direction: string) => void;
    }
}
declare namespace Script {
}
