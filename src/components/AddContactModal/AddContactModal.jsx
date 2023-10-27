import Box from '@mui/material/Box';

import Modal from '@mui/material/Modal';
import { ContactForm } from 'components/ContactForm/ContactForm';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function AddContactModal({ open, onClose }) {
  return (
    <div>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <ContactForm onClose={onClose} />
        </Box>
      </Modal>
    </div>
  );
}
