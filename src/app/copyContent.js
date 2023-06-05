export const copyContent = async () => {
  try {
      const text = output.value;
      await navigator.clipboard.writeText(text);
      alert('Content copied to clipboard');
  } catch(err) {
      alert(`Failed to copy: ${err.message}`);
  }
}