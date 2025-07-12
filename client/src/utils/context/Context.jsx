import { AlertProvider } from "./AlertContext";

export default function Context({ children }) {
  return (
    <>
      <AlertProvider>{children}</AlertProvider>
    </>
  );
}
