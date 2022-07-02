import { useEffect } from "react"

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
        <div className="fixed inset-0 flex justify-center items-center backdrop-blur p-8">
            <div className="nord2-bg h-fit p-8 rounded-lg">
                {children}
            </div>
        </div>
    )
}