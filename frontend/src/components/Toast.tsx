import CloseIcon from '@mui/icons-material/Close';
import { IconButton, Alert, Snackbar } from '@mui/material';

import { useToast } from '../stores/toast';

export const ToastNotification = () => {
  const toast = useToast();
  return (
    <Snackbar
      open={toast.isVisible}
      autoHideDuration={5000}
      onClose={toast.close}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
      action={
        <>
          <IconButton size="small" aria-label="close" color="inherit" onClick={toast.close}>
            <CloseIcon fontSize="small" />
          </IconButton>
        </>
      }
    >
      <Alert
        onClose={toast.close}
        severity={toast.type}
        elevation={6}
        variant="filled"
        sx={{
          width: '100%',
          '& .MuiAlert-icon': {
            alignItems: 'center',
          },
        }}
      >
        {toast.message}
      </Alert>
    </Snackbar>
  );
};
