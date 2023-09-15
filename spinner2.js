let delay = 100;
const spinnerLines = ["|", "/", "-", "\\", "|", "/", "-", "\\", "|"];

for (const line of spinnerLines) {
  setTimeout(() => {
    process.stdout.write("\r" + line + "   ");
  }, delay)
  delay += 200;
} 