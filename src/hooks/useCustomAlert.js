import Swal from 'sweetalert2';
import gifImage from '../assets/giphy.gif';

const useCustomAlert = () => (message) => {
  Swal.fire({
    html: `
      <div class="message-container">
        <img id="gifanimado" src=${gifImage} alt="GIF animado">
        <div>
            <h2 class="custom-title">Casi pero no! </h2>
            <p>${message}</p>
        </div>
      </div>
    `,
    confirmButtonText: 'Entendido',
    timer: 8000,
    timerProgressBar: 'true',
  });
};

export default useCustomAlert;
