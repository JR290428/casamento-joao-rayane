function updateCountdown() {
  const eventDate = new Date(config.date).getTime();
  const now = new Date().getTime();
  const diff = eventDate - now;

  if (diff <= 0) {
    document.getElementById("timer").textContent = "Chegou o grande dia!";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  document.getElementById("timer").textContent =
    `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

setInterval(updateCountdown, 1000);
