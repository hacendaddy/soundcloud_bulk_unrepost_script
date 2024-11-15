const buttons = document.querySelectorAll(".sc-button-repost");
let index = 0;
const total = buttons.length;

function clickButton() {
  // Deja el último repost sin eliminar
  buttons[index].click();
  console.log(`Deleting repost ${index + 1} of ${total - 1}`);
  index++;
  setTimeout(() => {
    const interval = setInterval(() => {
      // Pop up delete button
      const deleteButton = document.querySelector(
        ".sc-button.sc-button-nostyle.sc-button-medium.repostOverlay__formButton.repostOverlay__formButtonDelete"
      );
      if (deleteButton) {
        deleteButton.click();
        clearInterval(interval);
        clickButton();
      }
    }, 100); // Verify every 100 milisecs
  }, 3000); // 3000 milisecs = 3 secs
}

clickButton();
