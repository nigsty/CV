function myFunction() {
  const data = window.location.href.split('/');

  document.getElementById('english').classList.remove('active');

  document.getElementById('deutsch').classList.remove('active');
  if (data[3]) {
    document.getElementById(data[3]).classList.add('active');
  }
}
