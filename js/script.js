$('#btnConfirm').on('click', function () {
  $.alert('Successfully booked the course', {
    title: false,
    closeTime: 1000,
    autoClose: true,
    position: 'top-right',
    close: ''
  });
});
