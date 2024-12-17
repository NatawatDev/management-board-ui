'use client'

import React, { createContext, useState, useContext } from 'react';

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"


type AlertType = 'Success' | 'Error' | 'Warning';

interface IAlertContext {
  showAlert: (type: AlertType, message: string) => void;
}

export const AlertContext = createContext<IAlertContext>({
  showAlert: () => {},
});

const AlertProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [alert, setAlert] = useState<{ type: AlertType; message: string } | null>(null);

  const showAlert = (type: AlertType, message: string) => {
    setAlert({ type, message });
  };

  const contextValue = {
    showAlert,
  };

  return (
    <AlertContext.Provider value={contextValue}>
      {children}

      {alert && (       
       <AlertDialog open={true}>
       <AlertDialogContent className="z-50 bg-white">
         <AlertDialogHeader>
           <AlertDialogTitle>{alert.type}</AlertDialogTitle>
           <AlertDialogDescription>
             {alert.message}
           </AlertDialogDescription>
         </AlertDialogHeader>
         <AlertDialogFooter>
           <AlertDialogAction>Continue</AlertDialogAction>
         </AlertDialogFooter>
       </AlertDialogContent>
     </AlertDialog>
      )}
    </AlertContext.Provider>
  );
};

export const useAlert = () => useContext(AlertContext)

export default AlertProvider;
