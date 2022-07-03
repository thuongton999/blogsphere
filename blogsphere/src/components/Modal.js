import { useEffect } from "react"
/**
 * Modal component with dropdown animation
 * @param  {[Boolean]} active You can active (make it visible) the modal by changing the state of this parameter.
 * @param  {[Function]} onActivate Callback function when the modal is activated.
 * @param  {[Function]} onDeactivate Callback function when the modal is deactivated.
 */
export default function Modal({ children, active, onActivate, onDeactivate }) {
    useEffect(() => {
        if (active && onActivate === "function") {
            onActivate();
            return;
        }
        if (typeof onDeactivate !== "function") return;
        onDeactivate();
    }, [active, onActivate, onDeactivate]);
    return active && (
        <div className="fixed inset-0 flex justify-center items-center backdrop-blur p-8 select-none">
            <div className="bg-night-200 h-fit p-8 rounded-lg animate-[dropdown_0.8s_ease_forwards]">
                {children}
            </div>
        </div>
    )
}