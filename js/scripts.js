document.addEventListener('DOMContentLoaded', function() {
    var sidenav = document.querySelectorAll('.sidenav');
    var sidenav1 = document.querySelectorAll('#sidenav-1');
    //var sidenav2 = document.querySelectorAll('#sidenav-2');
    var optSidenav = {};
    var instSidenav = M.Sidenav.init(sidenav, optSidenav);
    var instSidenav1 = M.Sidenav.init(sidenav1,{ edge: 'left' });
    //var instSidenav2 = M.Sidenav.init(sidenav2,{ edge: 'right' });
    var optBtn = {};
    var btnEdit = document.querySelectorAll('.fixed-action-btn');
    var instBtnEdit = M.FloatingActionButton.init(btnEdit, optBtn);

  });
