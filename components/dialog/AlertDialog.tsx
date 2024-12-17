'use client'
import React from 'react'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"

interface AlertErrorProps {
  isShow: boolean;
  type: string;
  message: string;
  onClose?: () => void;
}

const AlertError: React.FC<AlertErrorProps> = ({ isShow, type, message, onClose }) => {
  return (
    <AlertDialog open={true} onOpenChange={(isOpen) => !isOpen && onClose?.()}>
      <AlertDialogContent className="z-50 bg-white">
        <AlertDialogHeader>
          <AlertDialogTitle>{type}</AlertDialogTitle>
          <AlertDialogDescription>
            {message}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction onClick={onClose}>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default AlertError;
