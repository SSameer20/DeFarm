import { createContext, useContext, useState, useCallback } from "react";
import { CiSquareInfo } from "react-icons/ci";
import { BiBadgeCheck, BiSolidError } from "react-icons/bi";

const NotificationIcons = {
  info: <CiSquareInfo />,
  success: <BiBadgeCheck />,
  error: <BiSolidError />,
};
const AlertContext = createContext();

export function useAlert() {
  return useContext(AlertContext);
}

export function AlertProvider({ children }) {
  const [alerts, setAlerts] = useState([]);

  const showAlert = useCallback((message, type = "info", duration = 3000) => {
    const id = Date.now();
    setAlerts((prev) => [...prev, { id, message, type }]);

    setTimeout(() => {
      setAlerts((prev) => prev.filter((alert) => alert.id !== id));
    }, duration);
  }, []);

  return (
    <AlertContext.Provider value={{ showAlert }}>
      {children}
      <div className="fixed bottom-4 right-4 z-100 flex flex-col gap-2">
        {alerts.map((alert) => (
          <div
            key={alert.id}
            style={{
              padding: "10px 20px",
            }}
            className={`rounded shadow-md text-white text-sm transition-all duration-300 flex justify-center items-center gap-2
              ${alert.type === "success" ? "bg-green-300" : ""}
              ${alert.type === "error" ? "bg-red-400" : ""}
              ${alert.type === "info" ? "bg-blue-400" : ""}
            `}
          >
            {NotificationIcons[alert.type]}
            {alert.message}
          </div>
        ))}
      </div>
    </AlertContext.Provider>
  );
}
