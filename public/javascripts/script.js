document.addEventListener('DOMContentLoaded', () => {

  console.log('IronGenerator JS imported successfully!');
  const elems = document.querySelectorAll('select');
  const instances = M.FormSelect.init(elems, options);
  const elems = document.querySelectorAll('.fixed-action-btn');
  const instances = M.FloatingActionButton.init(elems, options);

}, false);