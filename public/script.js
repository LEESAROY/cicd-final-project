document.getElementById('fetchDataBtn').addEventListener('click', async () => {
    const response = await fetch('/api/data');
    const data = await response.json();
    document.getElementById('apiMessage').textContent = data.message;
  });
  