import Modal from "components/Modal";
import { createContext, useCallback, useMemo, useState } from "react";

interface ModalContextType {
  showModal: (content: React.ReactNode) => void;
  hideModal: () => void;
  isModalOpen: boolean
}

export const ModalContext = createContext<ModalContextType>({
  showModal: () => {},
  hideModal: () => {},
  isModalOpen: false
});

interface ModalProviderProps {
  children: React.ReactNode;
}

export const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<React.ReactNode>(null);

  const showModal = useCallback((content: React.ReactNode) => {
    setModalContent(content);
    setIsModalOpen(true);
  }, []);

  const hideModal = useCallback(() => {
    setModalContent(null);
    setIsModalOpen(false);
  }, []);

  const contextValue: ModalContextType = useMemo(() => {
    return { showModal, hideModal, isModalOpen };
  }, [showModal, hideModal, isModalOpen]);

  return (
    <ModalContext.Provider value={contextValue}>
      {children}
      {isModalOpen && (
        <Modal onClose={hideModal} isOpen={isModalOpen}>
          {modalContent}
        </Modal>
      )}
    </ModalContext.Provider>
  );
};
