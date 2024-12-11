document.getElementById('fetchDataBtn').addEventListener('click', async () => {
  try {
      const response = await fetch('https://k59n78vxd4.execute-api.us-east-1.amazonaws.com/prod/api');
      if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      document.getElementById('apiMessage').textContent = data.message;
  } catch (error) {
      console.error('Error:', error);
      document.getElementById('apiMessage').textContent = 'Failed to fetch data';
  }
});
